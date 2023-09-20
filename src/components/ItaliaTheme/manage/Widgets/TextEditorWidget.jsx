/**
 * Edit text block.
 * @module components/Widgets/TextEditorWidget/TextEditorWidget
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { defineMessages, injectIntl } from 'react-intl';
import { includes, isEqual } from 'lodash';
import loadable from '@loadable/component';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import config from '@plone/volto/registry';

const messages = defineMessages({
  text: {
    id: 'Type text…',
    defaultMessage: 'Type text…',
  },
});

const Editor = loadable(() => import('draft-js-plugins-editor'));

/**
 * TextEditorWidget class.
 * @class Edit
 * @extends Component
 */
class TextEditorWidgetComponent extends Component {
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
    onFocusNextBlock: PropTypes.any,
    onFocusPreviousBlock: PropTypes.any,
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
    const { settings } = config;

    this.draftConfig = settings.richtextEditorSettings(props);

    const { EditorState, convertFromRaw } = props.draftJs;
    const createInlineToolbarPlugin = props.draftJsInlineToolbarPlugin.default;

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
        structure: this.draftConfig.richTextEditorInlineToolbarButtons,
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
    if (this.props.selected && this.node) {
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
      const { EditorState } = this.props.draftJs;

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
    const { convertToRaw } = this.props.draftJs;
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
    const isSoftNewlineEvent = this.props.draftJsLibIsSoftNewlineEvent.default;
    const { RichUtils } = this.props.draftJs;

    return (
      <>
        <div className={[this.props.fieldName]}>
          <Editor
            onChange={this.onChange}
            editorState={this.state.editorState}
            plugins={[
              this.state.inlineToolbarPlugin,
              ...this.draftConfig.richTextEditorPlugins,
            ]}
            blockRenderMap={this.draftConfig.extendedBlockRenderMap}
            blockStyleFn={this.draftConfig.blockStyleFn}
            customStyleMap={this.draftConfig.customStyleMap}
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
                if (!includes(this.draftConfig.listBlockTypes, blockType)) {
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
                } else {
                  if (this.props.onFocusPreviousBlock) {
                    const selectionState = this.state.editorState.getSelection();
                    const currentCursorPosition = selectionState.getStartOffset();

                    if (currentCursorPosition === 0) {
                      this.props.onFocusPreviousBlock(
                        this.props.block,
                        this.node,
                      );
                    }
                  }
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
                } else {
                  if (this.props.onFocusNextBlock) {
                    const selectionState = this.state.editorState.getSelection();
                    const { editorState } = this.state;
                    const currentCursorPosition = selectionState.getStartOffset();
                    const blockLength = editorState
                      .getCurrentContent()
                      .getFirstBlock()
                      .getLength();

                    if (currentCursorPosition === blockLength) {
                      this.props.onFocusNextBlock(this.props.block, this.node);
                    }
                  }
                }
              }
            }}
            ref={(node) => {
              this.node = node;
            }}
          />
          {this.props.showToolbar && this.node && <InlineToolbar />}
        </div>
      </>
    );
  }
}

export const TextEditorWidget = React.memo(
  compose(
    injectIntl,
    injectLazyLibs([
      'draftJs',
      'draftJsLibIsSoftNewlineEvent',
      'draftJsFilters',
      'draftJsInlineToolbarPlugin',
      'draftJsBlockBreakoutPlugin',
      'draftJsCreateInlineStyleButton',
      'draftJsCreateBlockStyleButton',
      'immutableLib',
      // TODO: add all plugin dependencies, also in Wysiwyg and Cell
    ]),
  )(TextEditorWidgetComponent),
);

const Preloader = (props) => {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    Editor.load().then(() => setLoaded(true));
  }, []);
  return loaded ? <TextEditorWidget {...props} /> : null;
};

export default Preloader;
