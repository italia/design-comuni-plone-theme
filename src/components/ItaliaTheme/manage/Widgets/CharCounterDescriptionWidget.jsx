/**
 * CharCounterDescriptionWidget component.
 * @module components/ItaliaTheme/manage/Widgets/CharCounterDescriptionWidget
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Form, Grid, Icon, Label, TextArea } from 'semantic-ui-react';
import { map } from 'lodash';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  default: {
    id: 'Default',
    defaultMessage: 'Default',
  },
  idTitle: {
    id: 'Short Name',
    defaultMessage: 'Short Name',
  },
  idDescription: {
    id: 'Used for programmatic access to the fieldset.',
    defaultMessage: 'Used for programmatic access to the fieldset.',
  },
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  description: {
    id: 'Description',
    defaultMessage: 'Description',
  },
  required: {
    id: 'Required',
    defaultMessage: 'Required',
  },
  delete: {
    id: 'Delete',
    defaultMessage: 'Delete',
  },
  exceeded_chars: {
    id: 'exceeded_chars',
    defaultMessage: 'Il testo supera la lunghezza consigliata',
  },
});

/**
 * CharCounterDescriptionWidget component class.
 * @function CharCounterDescriptionWidget
 * @returns {string} Markup of the component.
 */
const CharCounterDescriptionWidget = ({
  id,
  title,
  required,
  description,
  error,
  value,
  onChange,
  onEdit,
  onDelete,
  fieldSet,
}) => {
  const intl = useIntl();

  const schema = {
    fieldsets: [
      {
        id: 'default',
        title: intl.formatMessage(messages.default),
        fields: ['title', 'id', 'description', 'required'],
      },
    ],
    properties: {
      id: {
        type: 'string',
        title: intl.formatMessage(messages.idTitle),
        description: intl.formatMessage(messages.idDescription),
      },
      title: {
        type: 'string',
        title: intl.formatMessage(messages.title),
      },
      description: {
        type: 'string',
        widget: 'textarea',
        title: intl.formatMessage(messages.description),
      },
      required: {
        type: 'boolean',
        title: intl.formatMessage(messages.required),
      },
    },
    required: ['id', 'title'],
  };

  return (
    <Form.Field
      inline
      required={required}
      error={error.length > 0}
      className={description ? 'help textarea' : 'textarea'}
      id={`${fieldSet || 'field'}-${id}`}
    >
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width="4">
            <div className="wrapper">
              <label htmlFor={`field-${id}`}>
                {onEdit && (
                  <i
                    aria-hidden="true"
                    className="grey bars icon drag handle"
                  />
                )}
                {title}
              </label>
            </div>
          </Grid.Column>
          <Grid.Column width="8">
            {onEdit && (
              <div className="toolbar">
                <button
                  className="item ui noborder button"
                  onClick={() => onEdit(id, schema)}
                >
                  <Icon name="write square" size="large" color="blue" />
                </button>
                <button
                  aria-label={intl.formatMessage(messages.delete)}
                  className="item ui noborder button"
                  onClick={() => onDelete(id)}
                >
                  <Icon name="close" size="large" color="red" />
                </button>
              </div>
            )}
            <TextArea
              id={`field-${id}`}
              name={id}
              value={value || ''}
              disabled={onEdit !== null}
              onChange={({ target }) =>
                onChange(id, target.value === '' ? undefined : target.value)
              }
            />
            <span
              style={{
                textAlign: 'right',
                color: value?.length > 160 ? '#E40166' : '#878f93',
                fontWeight: 300,
              }}
            >
              {value?.length ?? 0}/160
            </span>
            {value?.length > 160 && (
              <p style={{ fontSize: '14px', textAlign: 'right' }}>
                {intl.formatMessage(messages.exceeded_chars)}
              </p>
            )}
            {map(error, (message) => (
              <Label key={message} basic color="red" pointing>
                {message}
              </Label>
            ))}
          </Grid.Column>
        </Grid.Row>
        {description && (
          <Grid.Row stretched>
            <Grid.Column stretched width="12">
              <p className="help">{description}</p>
            </Grid.Column>
          </Grid.Row>
        )}
      </Grid>
    </Form.Field>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
CharCounterDescriptionWidget.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
CharCounterDescriptionWidget.defaultProps = {
  description: null,
  required: false,
  error: [],
  value: null,
  onChange: null,
  onEdit: null,
  onDelete: null,
};

export default CharCounterDescriptionWidget;
