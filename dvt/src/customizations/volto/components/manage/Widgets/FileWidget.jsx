/**
 * FileWidget component.
 * @module components/manage/Widgets/FileWidget
 */

import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { readAsDataURL } from 'promise-file-reader';

import deleteSVG from '@plone/volto/icons/delete.svg';
import { Icon, FormFieldWrapper } from '@plone/volto/components';
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  releaseDrag: {
    id: 'releaseDrag',
    defaultMessage: 'Rilascia il file qui ...',
  },
  elementSaved: {
    id: 'elementSaved',
    defaultMessage: 'Elemento caricato',
  },
  elementNew: {
    id: 'elementNew',
    defaultMessage: 'Nuovo elemento',
  },
  fileDrag: {
    id: 'fileDrag',
    defaultMessage: 'Trascina il nuovo elemento da caricare',
  },
  editDrag: {
    id: 'editDrag',
    defaultMessage: "Trascina per sostituire l'elemento caricato",
  },
  deleteFile: {
    id: 'deleteFile',
    defaultMessage: 'Cancella il file',
  },
});

/**
 * FileWidget component class.
 * @function FileWidget
 * @returns {string} Markup of the component.
 */
const FileWidget = ({
  id,
  title,
  required,
  description,
  error,
  value,
  onChange,
  fieldSet,
  wrapped,
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      readAsDataURL(file).then((data) => {
        const fields = data.match(/^data:(.*);(.*),(.*)$/);
        onChange(id, {
          data: fields[3],
          encoding: fields[2],
          'content-type': fields[1],
          filename: file.name,
        });
      });
    },
    [id, onChange],
  );
  const intl = useIntl();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <FormFieldWrapper
      id={id}
      title={title}
      description={description}
      required={required}
      error={error}
      wrapped={wrapped}
      fieldSet={fieldSet}
      className="fileWidget"
    >
      <div
        {...getRootProps({
          className: `dropzone lightgrey-bg-c2 ${
            isDragActive ? 'dragColor' : 'color'
          }`,
        })}
      >
        <input {...getInputProps({ name: id, id: `field-${id}` })} />
        {isDragActive ? (
          <p>{intl.formatMessage(messages.releaseDrag)}</p>
        ) : (
          <p>
            {currentValue || value
              ? intl.formatMessage(messages.editDrag)
              : intl.formatMessage(messages.fileDrag)}
          </p>
        )}
      </div>
      <div className="margin-10">
        <div>
          {value && value !== currentValue && (
            <div>
              {`${intl.formatMessage(messages.elementNew)}: ${value.filename}`}
              <Button
                icon
                basic
                className="delete-button"
                aria-label={intl.formatMessage(messages.deleteFile)}
                onClick={() => {
                  onChange(id, currentValue);
                }}
              >
                <Icon name={deleteSVG} size="20px" />
              </Button>
            </div>
          )}
        </div>
        <br />
        {currentValue && (
          <div>
            {currentValue.download ? (
              <div>
                {`${intl.formatMessage(messages.elementSaved)}: `}
                <Link
                  to={flattenToAppURL(currentValue.download)}
                  target={'_blank'}
                >
                  {currentValue.filename}
                </Link>
                {(!value || (value && value === currentValue)) && (
                  <Button
                    icon
                    basic
                    className="delete-button"
                    aria-label={intl.formatMessage(messages.deleteFile)}
                    onClick={() => {
                      onChange(id, null);
                      setCurrentValue(null);
                    }}
                  >
                    <Icon name={deleteSVG} size="20px" />
                  </Button>
                )}
              </div>
            ) : (
              <div>
                {`${intl.formatMessage(messages.elementNew)}: `}
                {value.filename}
                <Button
                  icon
                  basic
                  className="delete-button"
                  aria-label={intl.formatMessage(messages.deleteFile)}
                  onClick={() => {
                    onChange(id, null);
                    setCurrentValue(null);
                  }}
                >
                  <Icon name={deleteSVG} size="20px" />
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </FormFieldWrapper>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
FileWidget.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.shape({
    '@type': PropTypes.string,
    title: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  wrapped: PropTypes.bool,
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

export default FileWidget;
