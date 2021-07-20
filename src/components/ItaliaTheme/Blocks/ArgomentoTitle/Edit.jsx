/**
 * Edit ArgomentoTitle block.
 * @module components/ItaliaTheme/Blocks/ArgomentoTitle/Edit
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Map } from 'immutable';
import { Portal } from 'react-portal';
import PropTypes from 'prop-types';
import { stateFromHTML } from 'draft-js-import-html';
import { Editor, DefaultDraftBlockRenderMap, EditorState } from 'draft-js';
import { defineMessages, injectIntl } from 'react-intl';
import {
  Card,
  CardBody,
  CardText,
} from 'design-react-kit/dist/design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { BodyClass, flattenToAppURL } from '@plone/volto/helpers';
import Image from '@plone/volto/components/theme/Image/Image';

import { CardCategory, Breadcrumbs } from '@italia/components/ItaliaTheme';
import { ArgumentIcon, RichText } from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  title: {
    id: 'Type the title…',
    defaultMessage: 'Type the title…',
  },
  description: {
    id: 'Type description…',
    defaultMessage: 'Digita la descrizione…',
  },
  ulteriori_informazioni: {
    id: 'Ulteriori informazioni placeholder',
    defaultMessage: 'Digita ulteriori informazioni…',
  },
});

const blockRenderMap = Map({
  unstyled: {
    element: 'h2',
  },
});

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

/**
 * Edit ArgomentoTitle block class.
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

      // setup component state
      this.state = {
        editorState,
        editorStateDescription,
        focus: true,
        focus_description: false,
        focus_portata_di_click: false,
      };
    }

    //bind this in change handlers
    this.onChange = this.onChange.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
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
      <div className="public-ui">
        <div className="ArgomentoTitleWrapper rounded shadow mt-2 mt-lg-5 mb-5">
          <div className="title-description-wrapper col-lg-6">
            <Breadcrumbs pathname={this.props.location.pathname} />
            <ArgumentIcon icon={this.props.properties.icona} />
            <h1 className="mb-3">
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
                ref={(node) => {
                  this.node = node;
                }}
              />
            </h1>
            <p className="description">
              <Editor
                onChange={this.onChangeDescription}
                editorState={this.state.editorStateDescription}
                blockRenderMap={extendedBlockRenderMap}
                placeholder={this.props.intl.formatMessage(
                  messages.description,
                )}
                ref={(node_description) => {
                  this.node_description = node_description;
                }}
              />
            </p>
          </div>
          <div className="col-lg-4 offset-lg-2">
            <RichText
              serif={false}
              content={this.props.properties.ulteriori_informazioni}
            />
            {this.props.properties?.unita_amministrative_responsabili?.length >
              0 &&
              this.props.properties?.unita_amministrative_responsabili?.map(
                (u, index) => {
                  return (
                    <div className="row mb-3" key={index}>
                      <div className="w-100">
                        <Card
                          className={'listing-item card-bg border-left-card'}
                        >
                          <div className="d-flex">
                            <CardBody className="">
                              <CardCategory>
                                <span className="text font-weight-bold">
                                  <UniversalLink
                                    href={flattenToAppURL(u['@id'])}
                                  >
                                    {u.title || u.id}
                                  </UniversalLink>
                                </span>
                              </CardCategory>
                              <CardText>
                                {/* {searchResults[u['@id']]?.data?.street} */}
                              </CardText>
                            </CardBody>
                            {/* {searchResults[u['@id']]?.data?.image && (
                              <div className="image-container mr-3">
                                <Image
                                  image={searchResults[u['@id']].data?.image}
                                  alt={
                                    searchResults[u['@id'].data?.image_caption]
                                  }
                                  title={
                                    searchResults[u['@id'].data?.image_caption]
                                  }
                                />
                              </div>
                            )} */}
                          </div>
                        </Card>
                      </div>
                    </div>
                  );
                },
              )}
            {this.props.properties?.image ? (
              <>
                <Portal
                  node={
                    __CLIENT__ && document.getElementById('portal-header-image')
                  }
                >
                  <div>
                    <Image
                      image={this.props.properties.image}
                      alt={
                        this.props.properties.caption ??
                        this.props.properties.title
                      }
                      title={
                        this.props.properties.caption ??
                        this.props.properties.title
                      }
                    />
                  </div>
                </Portal>
                <BodyClass className="has-image" />
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(withRouter(Edit));
