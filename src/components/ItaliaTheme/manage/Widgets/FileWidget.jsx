/**
 * FileWidget component.
 * @module components/manage/Widgets/FileWidget
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Button } from 'design-react-kit';
import { readAsDataURL } from 'promise-file-reader';
import { injectIntl, defineMessages, useIntl } from 'react-intl';
import loadable from '@loadable/component';
import { flattenToAppURL } from '@plone/volto/helpers';

import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

const Dropzone = loadable(() => import('react-dropzone'));
const imageMimetypes = [
  'image/png',
  'image/jpeg',
  'image/webp',
  'image/jpg',
  'image/gif',
  'image/svg+xml',
];

const messages = defineMessages({
  releaseDrag: {
    id: 'Trascina qui il file ...',
    defaultMessage: 'Trascina qui il file...',
  },
  editFile: {
    id: 'Trascina qui un file per sostituire quello esistente',
    defaultMessage: 'Trascina qui un file per sostituire quello esistente',
  },
  fileDrag: {
    id: 'Trascina qui un file per caricare un nuovo file',
    defaultMessage: 'Trascina qui un file per caricare un nuovo file',
  },
  replaceFile: {
    id: 'Clicca qui per sostituire il file',
    defaultMessage: 'Clicca qui per sostituire il file',
  },
  addNewFile: {
    id: 'Seleziona un file',
    defaultMessage: 'Seleziona un file',
  },
  deleteFile: {
    id: 'Rimuovi il file',
    defaultMessage: 'Rimuovi il file',
  },
});

/**
 * FileWidget component class.
 * @function FileWidget
 * @returns {string} Markup of the component.
 */
const FileWidget = (props) => {
  const { id, value, onChange, label, onEdit, infoText, required, invalid } =
    props;
  const [isImage, setIsImage] = React.useState(false);
  const intl = useIntl();

  React.useEffect(() => {
    if (value && imageMimetypes.includes(value['content-type'])) {
      setIsImage(true);
    }
  }, [value]);

  /**
   * Drop handler
   * @method onDrop
   * @param {array} files File objects
   * @returns {undefined}
   */
  const onDrop = (files) => {
    const file = files[0];
    readAsDataURL(file).then((data) => {
      const fields = data.match(/^data:(.*);(.*),(.*)$/);
      onChange(id, {
        data: fields[3],
        encoding: fields[2],
        'content-type': fields[1],
        filename: file.name,
      });
    });

    let reader = new FileReader();
    reader.onload = function () {
      const fields = reader.result.match(/^data:(.*);(.*),(.*)$/);
      if (imageMimetypes.includes(fields[1])) {
        setIsImage(true);
        let imagePreview = document.getElementById(`field-${id}-image`);
        imagePreview.src = reader.result;
      } else {
        setIsImage(false);
      }
    };
    reader.readAsDataURL(files[0]);
  };

  let attributes = {};
  if (required) {
    attributes.required = true;
    attributes['aria-required'] = true;
  }

  const isInvalid = invalid === true || invalid === 'true';
  if (isInvalid) {
    attributes['aria-invalid'] = true;
  }
  return (
    <div className="form-group">
      <label htmlFor={`field-${id}`} className="active">
        {label}
      </label>
      <div className="form-input-file">
        <Dropzone onDrop={onDrop} multiple={false}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div className="file-widget-dropzone" {...getRootProps()}>
              {isDragActive && <Dimmer></Dimmer>}
              {isImage ? (
                <img
                  className="image-preview"
                  id={`field-${id}-image`}
                  src={
                    value?.download
                      ? `${flattenToAppURL(value.download)}?id=${Date.now()}`
                      : null
                  }
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                />
              ) : (
                <div className="dropzone-placeholder">
                  {isDragActive ? (
                    <p className="dropzone-text">
                      {intl.formatMessage(messages.releaseDrag)}
                    </p>
                  ) : value ? (
                    <p className="dropzone-text">
                      {intl.formatMessage(messages.editFile)}
                    </p>
                  ) : (
                    <p className="dropzone-text">
                      {intl.formatMessage(messages.fileDrag)}
                    </p>
                  )}
                </div>
              )}

              <small className="form-text text-muted">
                {value
                  ? intl.formatMessage(messages.replaceFile)
                  : intl.formatMessage(messages.addNewFile)}
              </small>
              {!onEdit && (
                <input
                  {...getInputProps({
                    type: 'file',
                    style: { display: 'none' },
                  })}
                  id={`field-${id}`}
                  name={id}
                  type="file"
                  disabled={props.disabled || null}
                  {...attributes}
                />
              )}
            </div>
          )}
        </Dropzone>
        {infoText && <small className="form-text text-muted">{infoText}</small>}
        {value && (
          <div className="field-file-name">
            {value.filename}

            <Button
              className="delete-button"
              aria-label={intl.formatMessage(messages.deleteFile)}
              onClick={() => {
                onChange(id, null);
                setIsImage(false);
              }}
            >
              <Icon color="primary" icon={'trash'} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
FileWidget.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.shape({
    '@type': PropTypes.string,
    title: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  onEdit: PropTypes.bool,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
FileWidget.defaultProps = {
  description: null,
  required: false,
  error: [],
  value: null,
};

export default injectIntl(FileWidget);
