/**
 * TextWidget component.
 * @module components/manage/Widgets/TextWidget
 * This component is an alternative to the base TextWidget
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'semantic-ui-react';

import { defineMessages, injectIntl } from 'react-intl';
import { Icon, FormFieldWrapper } from '@plone/volto/components';

/**
 * The simple text widget.
 *
 * It is the default fallback widget, so if no other widget is found based on
 * passed field properties, it will be used.
 */
class TextWidget extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    required: PropTypes.bool,
    error: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.string,
    focus: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    icon: PropTypes.shape({
      xmlns: PropTypes.string,
      viewBox: PropTypes.string,
      content: PropTypes.string,
    }),
    iconAction: PropTypes.func,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    wrapped: PropTypes.bool,
    placeholder: PropTypes.string,
    forceMaxLength: PropTypes.bool,
  };

  /**
   * Default properties.
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    description: null,
    required: false,
    error: [],
    value: null,
    onChange: () => {},
    onBlur: () => {},
    onClick: () => {},
    onEdit: null,
    onDelete: null,
    focus: false,
    icon: null,
    iconAction: null,
    minLength: null,
    maxLength: 255,
    forceMaxLength: true,
  };

  /**
   * Component did mount lifecycle method
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    if (this.props.focus) {
      this.node.focus();
    }
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const {
      id,
      value,
      onChange,
      onBlur,
      onClick,
      icon,
      iconAction,
      minLength,
      maxLength,
      placeholder,
      intl,
      forceMaxLength,
    } = this.props;

    const lengthError = value?.length > 0 && value.length > maxLength;

    return (
      <FormFieldWrapper {...this.props} className="text">
        <Input
          id={`field-${id}`}
          name={id}
          value={value || ''}
          disabled={this.props.isDisabled}
          icon={icon || null}
          placeholder={placeholder}
          onChange={({ target }) =>
            onChange(id, target.value === '' ? undefined : target.value)
          }
          ref={(node) => {
            this.node = node;
          }}
          onBlur={({ target }) =>
            onBlur(id, target.value === '' ? undefined : target.value)
          }
          onClick={() => onClick()}
          minLength={minLength || null}
          maxLength={(forceMaxLength && maxLength) || null}
        />
        {icon && iconAction && (
          <button className={`field-${id}-action-button`} onClick={iconAction}>
            <Icon name={icon} size="18px" />
          </button>
        )}
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
  }
}

export default injectIntl(TextWidget);

const messages = defineMessages({
  exceeded_chars: {
    id: 'exceeded_chars',
    defaultMessage: 'Il testo supera la lunghezza consigliata',
  },
});
