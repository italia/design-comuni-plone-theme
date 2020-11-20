/**
 * TinymceWidget container.
 * @module components/manage/Widgets/TinymceWidget
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Form, Label, TextArea } from 'semantic-ui-react';
import { map } from 'lodash';
import { defineMessages, injectIntl } from 'react-intl';
import { FormFieldWrapper } from '@plone/volto/components';
import { Editor } from '@tinymce/tinymce-react';

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
});

/**
 * TinymceWidget container class.
 * @class TinymceWidget
 * @extends Component
 */
class TinymceWidget extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    /**
     * Id of the field
     */
    id: PropTypes.string.isRequired,
    /**
     * Title of the field
     */
    title: PropTypes.string.isRequired,
    /**
     * Description of the field
     */
    description: PropTypes.string,
    /**
     * True if field is required
     */
    required: PropTypes.bool,
    /**
     * Value of the field
     */
    value: PropTypes.shape({
      /**
       * Content type of the value
       */
      'content-type': PropTypes.string,
      /**
       * Data of the value
       */
      data: PropTypes.string,
      /**
       * Encoding of the value
       */
      encoding: PropTypes.string,
    }),
    /**
     * List of error messages
     */
    error: PropTypes.arrayOf(PropTypes.string),
    /**
     * On change handler
     */
    onChange: PropTypes.func,
  };

  /**
   * Default properties
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    description: null,
    required: false,
    value: null,
    error: [],
    onChange: null,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs TinymceWidget
   */
  constructor(props) {
    super(props);

    this.state = { editorState: props.value?.data || '' };

    this.schema = {
      fieldsets: [
        {
          id: 'default',
          title: props.intl.formatMessage(messages.default),
          fields: ['title', 'id', 'description', 'required'],
        },
      ],
      properties: {
        id: {
          type: 'string',
          title: props.intl.formatMessage(messages.idTitle),
          description: props.intl.formatMessage(messages.idDescription),
        },
        title: {
          type: 'string',
          title: props.intl.formatMessage(messages.title),
        },
        description: {
          type: 'string',
          widget: 'textarea',
          title: props.intl.formatMessage(messages.description),
        },
        required: {
          type: 'boolean',
          title: props.intl.formatMessage(messages.required),
        },
      },
      required: ['id', 'title'],
    };

    this.onChange = this.onChange.bind(this);
  }

  /**
   * Change handler
   * @method onChange
   * @param {object} editorState Editor state.
   * @returns {undefined}
   */
  onChange(editorState) {
    this.setState({ editorState });
    this.props.onChange(this.props.id, {
      ...this.props.value,
      data: editorState,
    });
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    const {
      id,
      title,
      description,
      required,
      value,
      error,
      fieldSet,
    } = this.props;

    if (__SERVER__) {
      return (
        <Form.Field
          inline
          required={required}
          error={error.length > 0}
          className={description ? 'help' : ''}
          id={`${fieldSet || 'field'}-${id}`}
        >
          <div className="wrapper">
            <label htmlFor={`field-${id}`}>{title}</label>
            <TextArea id={id} name={id} value={value ? value.data : ''} />
            {description && <p className="help">{description}</p>}
            {map(error, (message) => (
              <Label key={message} basic color="red" pointing>
                {message}
              </Label>
            ))}
          </div>
        </Form.Field>
      );
    }

    return (
      <FormFieldWrapper {...this.props} className="wysiwyg">
        <div style={{ boxSizing: 'initial' }}>
          {this.props.onChange ? (
            <>
              <Editor
                initialValue={this.state.editorState}
                init={{
                  inline_styles: true,
                  height: 500,
                  menubar: 'view',
                  formats: {
                    callout: {
                      block: 'p',
                      classes: 'callout',
                    },
                  },
                  init_instance_callback: function (editor) {
                    var freeTiny = document.querySelector(
                      '.tox .tox-notification--in',
                    );
                    if (freeTiny) {
                      freeTiny.style.display = 'none';
                    }
                  },
                  block_formats: 'callout=callout',
                  forced_root_block: 'p',
                  table_header_type: 'cells',
                  body_class: 'public-ui',
                  table_default_attributes: {
                    border: '1',
                    class: 'ui celled fixed table',
                  },
                  content_style:
                    '.table th { background-color: #ebeced; padding: 18px!important; } .table td { padding: 18px!important } \
                                  .callout { padding: 1.25rem; margin-top: 1.25rem; margin-bottom: 1.25rem; border: 1px solid #d9dadb; border-left-width: 0.4rem; border-radius: 0.25rem; }',
                  language: this.props.intl.locale,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount',
                  ],
                  toolbar: [
                    'underline bold italic link h2 h3 bullist numlist blockquote formatselect removeformat table',
                    'callout',
                  ],
                }}
                onEditorChange={this.onChange}
              />
            </>
          ) : (
            <div className="DraftEditor-root" />
          )}
        </div>
      </FormFieldWrapper>
    );
  }
}

export default compose(
  injectIntl,
  connect(
    (state, props) => ({
      token: state.userSession.token,
    }),
    {},
  ),
)(TinymceWidget);
