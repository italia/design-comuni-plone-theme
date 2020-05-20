/**
 * Edit title block.
 * @module components/Blocks/TitleVM/Edit
 */

import React, { Component } from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import { stateFromHTML } from 'draft-js-import-html';
import { Editor, DefaultDraftBlockRenderMap, EditorState } from 'draft-js';
import { defineMessages, injectIntl } from 'react-intl';
import { settings } from '~/config';

const messages = defineMessages({
  title: {
    id: 'Type the title…',
    defaultMessage: 'Type the title…',
  },
  description: {
    id: 'Type description…',
    defaultMessage: 'Digita la descrizione…',
  },
  click: {
    id: 'Type text…',
    defaultMessage: 'Digita il testo…',
  },
});

const blockRenderMap = Map({
  unstyled: {
    element: 'h2',
  },
});

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

/**
 * Edit title block class.
 * @class Edit
 * @extends Component
 */
class Edit extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    properties: PropTypes.objectOf(PropTypes.any).isRequired,
    selected: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    onChangeField: PropTypes.func.isRequired,
    onSelectBlock: PropTypes.func.isRequired,
    onDeleteBlock: PropTypes.func.isRequired,
    onAddBlock: PropTypes.func.isRequired,
    onFocusPreviousBlock: PropTypes.func.isRequired,
    onFocusNextBlock: PropTypes.func.isRequired,
    block: PropTypes.string.isRequired,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs ArgomentoTitle Edit block
   */
  constructor(props) {
    super(props);

    if (!__SERVER__) {
      let editorState;
      let editorStateDescription;
      let editorStatePortataDiClick;

      // Setup state for title
      if (props.data && props.data.title) {
        editorState = EditorState.createWithContent(
          stateFromHTML(props.data.title),
        );
      } else if (props.properties && props.properties.title) {
        const contentState = stateFromHTML(props.properties.title);
        editorState = EditorState.createWithContent(contentState);
      } else {
        editorState = EditorState.createEmpty();
      }

      // Setup state for description
      if (props.data && props.data.description) {
        editorStateDescription = EditorState.createWithContent(
          stateFromHTML(props.data.description),
        );
      } else if (props.properties && props.properties.description) {
        const contentStateDescription = stateFromHTML(
          props.properties.description,
        );
        editorStateDescription = EditorState.createWithContent(
          contentStateDescription,
        );
      } else {
        editorStateDescription = EditorState.createEmpty();
      }

      // setup state for portata di click
      if (props.data && props.data.portata_di_click) {
        editorStatePortataDiClick = EditorState.createWithContent(
          stateFromHTML(props.data.portata_di_click),
        );
      } else if (props.properties && props.properties.portata_di_click) {
        const contentStatePortataDiClick = stateFromHTML(
          props.properties.portata_di_click,
        );
        editorStatePortataDiClick = EditorState.createWithContent(
          contentStatePortataDiClick,
        );
      } else {
        editorStatePortataDiClick = EditorState.createEmpty();
      }

      // setup component state
      this.state = {
        editorState,
        editorStateDescription,
        editorStatePortataDiClick,
        focus: true,
        focus_description: false,
        focus_portata_di_click: false,
      };
    }

    //bind this in change handlers
    this.onChange = this.onChange.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePortataDiClick = this.onChangePortataDiClick.bind(this);
  }

  /**
   * Component did mount lifecycle method
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    // on mount set focus on title, and bind events on blur and focus to change
    // state
    if (this.node) {
      this.node.focus();
      this.node._onBlur = () => this.setState({ focus: false });
      this.node._onFocus = () => this.setState({ focus: true });
    }
    if (this.node_description) {
      this.node_description._onBlur = () =>
        this.setState({ focus_description: false });
      this.node_description._onFocus = () =>
        this.setState({ focus_description: true });
    }
    if (this.node_portata_di_click) {
      this.node_portata_di_click._onBlur = () =>
        this.setState({ focus_portata_di_click: false });
      this.node_portata_di_click._onFocus = () =>
        this.setState({ focus_portata_di_click: true });
    }
  }

  /**
   * Component will receive props
   * @method componentWillReceiveProps
   * @param {Object} nextProps Next properties
   * @returns {undefined}
   */
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps.properties.title &&
      this.props.properties.title !== nextProps.properties.title &&
      !this.state.focus
    ) {
      const contentState = stateFromHTML(nextProps.properties.title);
      this.setState({
        editorState: nextProps.properties.title
          ? EditorState.createWithContent(contentState)
          : EditorState.createEmpty(),
      });
    }

    if (!this.props.selected && nextProps.selected) {
      this.node.focus();
      this.setState({ focus: true });
    }

    if (
      nextProps.properties.description &&
      this.props.properties.description !== nextProps.properties.description &&
      !this.state.focus_description
    ) {
      const contentStateDescription = stateFromHTML(
        nextProps.properties.description,
      );
      this.setState({
        editorStateDescription: nextProps.properties.description
          ? EditorState.createWithContent(contentStateDescription)
          : EditorState.createEmpty(),
      });
    }

    if (
      nextProps.properties.portata_di_click &&
      this.props.properties.portata_di_click !==
        nextProps.properties.portata_di_click &&
      !this.state.focus_portata_di_click
    ) {
      const contentStatePortataDiClick = stateFromHTML(
        nextProps.properties.portata_di_click,
      );
      this.setState({
        editorStateDescription: nextProps.properties.portata_di_click
          ? EditorState.createWithContent(contentStatePortataDiClick)
          : EditorState.createEmpty(),
      });
    }
  }

  /**
   * Change handler
   * @method onChange
   * @param {object} editorState Editor state.
   * @returns {undefined}
   */
  onChange(editorState) {
    this.setState({ editorState }, () => {
      this.props.onChangeField(
        'title',
        editorState.getCurrentContent().getPlainText(),
      );
    });
  }

  onChangeDescription(editorStateDescription) {
    this.setState({ editorStateDescription }, () => {
      this.props.onChangeField(
        'description',
        editorStateDescription.getCurrentContent().getPlainText(),
      );
    });
  }

  onChangePortataDiClick(editorStatePortataDiClick) {
    this.setState({ editorStatePortataDiClick });
  }

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    if (__SERVER__) {
      return <div />;
    }

    return (
      <div className="ArgomentoHeader">
        <div className="title-description-wrapper">
          <h4>Titolo</h4>
          <Editor
            onChange={this.onChange}
            editorState={this.state.editorState}
            blockRenderMap={extendedBlockRenderMap}
            handleReturn={() => {
              this.props.onSelectBlock(
                this.props.onAddBlock('text', this.props.index + 1),
              );
              return 'handled';
            }}
            placeholder={this.props.intl.formatMessage(messages.title)}
            ref={node => {
              this.node = node;
            }}
          />
          <h4>Descrizione</h4>
          <Editor
            onChange={this.onChangeDescription}
            editorState={this.state.editorStateDescription}
            blockRenderMap={extendedBlockRenderMap}
            placeholder={this.props.intl.formatMessage(messages.description)}
            ref={node_description => {
              this.node_description = node_description;
            }}
          />
        </div>
        <div className="a-portata-di-click">
          <h4>A PORTATA DI CLICK</h4>
          <>
            <Editor
              onChange={this.onChangePortataDiClick}
              editorState={this.state.editorStatePortataDiClick}
              blockRenderMap={settings.extendedBlockRenderMap}
              blockStyleFn={settings.blockStyleFn}
              customStyleMap={settings.customStyleMap}
              placeholder={this.props.intl.formatMessage(messages.click)}
              ref={node_portata_di_click => {
                this.node_portata_di_click = node_portata_di_click;
              }}
            />
          </>
        </div>
      </div>
    );
  }
}

export default injectIntl(Edit);
