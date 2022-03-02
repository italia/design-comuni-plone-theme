/**
 * Text editor widget
 * @module components/ItaliaTheme/Blocks/Accordion/TextEditorWidget
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { defineMessages, injectIntl } from 'react-intl';
import { isEqual } from 'lodash';
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
    const isSoftNewlineEvent = this.props.draftJsLibIsSoftNewlineEvent.default;
    const { RichUtils } = this.props.draftJs;

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
              ...this.draftConfig.richTextEditorPlugins,
            ]}
            blockRenderMap={this.draftConfig.extendedBlockRenderMap}
            blockStyleFn={this.draftConfig.blockStyleFn}
            customStyleMap={this.draftConfig.customStyleMap}
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

export const TextEditorWidget = compose(
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
  ]),
)(TextEditorWidgetComponent);

const Preloader = (props) => {
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    Editor.load().then(() => setLoaded(true));
  }, []);
  return loaded ? <TextEditorWidget {...props} /> : null;
};

export default Preloader;
