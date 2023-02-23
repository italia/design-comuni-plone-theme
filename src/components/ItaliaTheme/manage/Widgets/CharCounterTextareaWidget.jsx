/**
 * CharCounterTextareaWidget component.
 * @module components/ItaliaTheme/manage/Widgets/CharCounterTextareaWidget
 * This component is an alternative to the base TextareaWidget
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Label, TextArea } from 'semantic-ui-react';
import { defineMessages, injectIntl } from 'react-intl';
import { FormFieldWrapper } from '@plone/volto/components';

const messages = defineMessages({
  exceeded_chars: {
    id: 'exceeded_chars',
    defaultMessage: 'Il testo supera la lunghezza consigliata',
  },
});

/**
 * TextareaWidget, a widget for multiple lines text
 *
 * To use it, in schema properties, declare a field like:
 *
 * ```jsx
 * {
 *  title: "Text",
 *  widget: 'textarea',
 * }
 * ```
 */
const CharCounterTextareaWidget = (props) => {
  const { id, maxLength, value, onChange, placeholder, intl, forceMaxLength } =
    props;

  const lengthError = value?.length > 0 && value.length > maxLength;

  return (
    <FormFieldWrapper {...props} className="textarea">
      <TextArea
        id={`field-${id}`}
        name={id}
        value={value || ''}
        disabled={props.isDisabled}
        placeholder={placeholder}
        onChange={({ target }) =>
          onChange(id, target.value === '' ? undefined : target.value)
        }
        maxLength={(forceMaxLength && maxLength) || null}
      />
      <span
        style={{
          textAlign: 'right',
          color: lengthError ? '#E40166' : '#878f93',
          fontWeight: 300,
        }}
      >
        {value?.length ?? 0}/{maxLength}
      </span>
      {lengthError && (
        <Label basic color="red" pointing>
          {intl.formatMessage(messages.exceeded_chars)}
        </Label>
      )}
    </FormFieldWrapper>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
CharCounterTextareaWidget.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  error: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  onChange: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  wrapped: PropTypes.bool,
  placeholder: PropTypes.string,
  forceMaxLength: PropTypes.bool,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
CharCounterTextareaWidget.defaultProps = {
  description: null,
  maxLength: 255,
  required: false,
  error: [],
  value: null,
  onChange: null,
  onEdit: null,
  onDelete: null,
  forceMaxLength: true,
};

export default injectIntl(CharCounterTextareaWidget);
