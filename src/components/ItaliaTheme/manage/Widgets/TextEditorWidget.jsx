/**
 * Edit text block.
 * @module components/Widgets/TextEditorWidget/TextEditorWidget
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor from 'draft-js-plugins-editor';
import { convertFromRaw, convertToRaw, EditorState, RichUtils } from 'draft-js';
import isSoftNewlineEvent from 'draft-js/lib/isSoftNewlineEvent';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import { defineMessages } from 'react-intl';
import { includes, isEqual } from 'lodash';
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
    focusOn: PropTypes.func,
    nextFocus: PropTypes.any,
    prevFocus: PropTypes.any,
    showToolbar: PropTypes.bool,
    onSelectBlock: PropTypes.func,
    onAddBlock: PropTypes.func,
    disableMoveToNearest: PropTypes.bool,
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
      this.setState({
        editorState: EditorState.moveFocusToEnd(this.state.editorState),
      });
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
    let disableMoveToNearest = this.props.disableMoveToNearest;

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
            handleReturn={(e) => {
              // if (disableMoveToNearest) {
              //   e.stopPropagation();
              // }
              if (isSoftNewlineEvent(e)) {
                this.onChange(
                  RichUtils.insertSoftNewline(this.state.editorState),
                );
                return 'handled';
              }

              if (
                !disableMoveToNearest &&
                this.props.onSelectBlock &&
                this.props.onAddBlock
              ) {
                const selectionState = this.state.editorState.getSelection();
                const anchorKey = selectionState.getAnchorKey();
                const currentContent = this.state.editorState.getCurrentContent();
                const currentContentBlock = currentContent.getBlockForKey(
                  anchorKey,
                );
                const blockType = currentContentBlock.getType();
                if (!includes(config.settings.listBlockTypes, blockType)) {
                  this.props.onSelectBlock(
                    this.props.onAddBlock('text', this.props.index + 1),
                  );
                  return 'handled';
                }
                return 'un-handled';
              }

              return {};
            }}
            onUpArrow={(e) => {
              if (this.props.prevFocus) {
                this.props.setFocus(this.props.prevFocus);
                e.stopPropagation();
              } else {
                if (this.props.disableMoveToNearest) {
                  e.stopPropagation();
                }
              }
            }}
            onDownArrow={(e) => {
              if (this.props.nextFocus) {
                this.props.setFocus(this.props.nextFocus);
                e.stopPropagation();
              } else {
                if (this.props.disableMoveToNearest) {
                  e.stopPropagation();
                }
              }
            }}
            ref={(node) => {
              this.node = node;
            }}
          />
          {this.props.showToolbar && <InlineToolbar />}
        </div>
      </>
    );
  }
}

export default React.memo(TextEditorWidget);
