/**
 * Text editor widget
 * @module components/ItaliaTheme/Blocks/Accordion/TextEditorWidget
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor from 'draft-js-plugins-editor';
import { convertFromRaw, convertToRaw, EditorState, RichUtils } from 'draft-js';
import isSoftNewlineEvent from 'draft-js/lib/isSoftNewlineEvent';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import { defineMessages } from 'react-intl';
import { isEqual } from 'lodash';

import config from '@plone/volto/registry';

const messages = defineMessages({
  text: {
    id: 'Type text…',
    defaultMessage: 'Type text…',
  },
});

/**
 * TextEditorWidget class.
 * @class Edit
 * @extends Component
 */
class TextEditorWidget extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    fieldName: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    block: PropTypes.string.isRequired,
    onChangeBlock: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    setFocus: PropTypes.func,
    prevFocus: PropTypes.string,
    nextFocus: PropTypes.string,
    showToolbar: PropTypes.bool,
  };

  /**
   * Default properties
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    showToolbar: true,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs WysiwygEditor
   */
  constructor(props) {
    super(props);

    if (!__SERVER__) {
      let editorState;
      if (props.data && props.data[props.fieldName]) {
        editorState = EditorState.createWithContent(
          convertFromRaw(props.data[props.fieldName]),
        );
      } else {
        editorState = EditorState.createEmpty();
      }

      const inlineToolbarPlugin = createInlineToolbarPlugin({
        structure: config.settings.richTextEditorInlineToolbarButtons,
      });

      this.state = {
        editorState,
        inlineToolbarPlugin,
        addNewBlockOpened: false,
      };
    }
  }

  /**
   * Component will receive props
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    if (this.props.selected) {
      setTimeout(this.node.focus, 0);
    }
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!this.props.selected && nextProps.selected) {
      // See https://github.com/draft-js-plugins/draft-js-plugins/issues/800
      setTimeout(this.node.focus, 0);
    }
  }

  /**
   * Change handler
   * @method onChange
   * @param {object} editorState Editor state.
   * @returns {undefined}
   */
  onChange = (editorState) => {
    if (
      !isEqual(
        convertToRaw(editorState.getCurrentContent()),
        convertToRaw(this.state.editorState.getCurrentContent()),
      )
    ) {
      this.props.onChangeBlock({
        ...this.props.data,
        [this.props.fieldName]: convertToRaw(editorState.getCurrentContent()),
      });
    }
    this.setState({ editorState });
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    if (__SERVER__) {
      return <div />;
    }

    const { InlineToolbar } = this.state.inlineToolbarPlugin;
    let placeholder = this.props.placeholder
      ? this.props.placeholder
      : this.props.intl.formatMessage(messages.text);
    return (
      <>
        <div className={[this.props.fieldName]}>
          <Editor
            onChange={this.onChange}
            editorState={this.state.editorState}
            plugins={[
              this.state.inlineToolbarPlugin,
              ...config.settings.richTextEditorPlugins,
            ]}
            blockRenderMap={config.settings.extendedBlockRenderMap}
            blockStyleFn={config.settings.blockStyleFn}
            customStyleMap={config.settings.customStyleMap}
            placeholder={placeholder}
            ref={(node) => {
              this.node = node;
            }}
            handleReturn={(e) => {
              e.stopPropagation();
              if (isSoftNewlineEvent(e)) {
                this.onChange(
                  RichUtils.insertSoftNewline(this.state.editorState),
                );

                return 'handled';
              }
              return {};
            }}
            onUpArrow={(e) => {
              e.stopPropagation();
            }}
            onDownArrow={(e) => {
              e.stopPropagation();
            }}
          />
          {this.props.showToolbar && <InlineToolbar />}
        </div>
      </>
    );
  }
}

export default TextEditorWidget;
