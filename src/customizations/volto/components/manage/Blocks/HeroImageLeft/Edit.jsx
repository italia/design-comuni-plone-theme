/*
CUSTOMIZATIONS:
- Added stores link
- Added slate
*/

/**
 * Edit Hero block.
 * @module components/manage/Blocks/Image/Edit
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { readAsDataURL } from 'promise-file-reader';
import { Button, Dimmer, Loader, Message } from 'semantic-ui-react';
import { isEqual } from 'lodash';
import { defineMessages, injectIntl } from 'react-intl';
import cx from 'classnames';
import { handleKeyDownOwnFocusManagement } from 'design-comuni-plone-theme/helpers/blocks';
import {
  flattenToAppURL,
  getBaseUrl,
  validateFileUploadSize,
} from '@plone/volto/helpers';
import { createContent } from '@plone/volto/actions';
import { Icon, SidebarPortal } from '@plone/volto/components';

import clearSVG from '@plone/volto/icons/clear.svg';

import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import StoresButtons from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HeroImageLeft/StoresButtons';
import HeroSidebar from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HeroImageLeft/HeroSidebar';

const messages = defineMessages({
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  description: {
    id: 'Description',
    defaultMessage: 'Description',
  },
  placeholder: {
    id: 'Upload a new image',
    defaultMessage: 'Upload a new image',
  },
  image: {
    id: 'Image',
    defaultMessage: 'Image',
  },
  browse: {
    id: 'Browse',
    defaultMessage: 'Browse',
  },
  uploading: {
    id: 'Uploading image',
    defaultMessage: 'Uploading image',
  },
});

/**
 * Edit image block class.
 * @class Edit
 * @extends Component
 */
class EditComponent extends Component {
  /**
   * Property types.
   * @property {Object} propTypes Property types.
   * @static
   */
  static propTypes = {
    selected: PropTypes.bool.isRequired,
    block: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    content: PropTypes.objectOf(PropTypes.any),
    request: PropTypes.shape({
      loading: PropTypes.bool,
      loaded: PropTypes.bool,
    }).isRequired,
    pathname: PropTypes.string.isRequired,
    onChangeBlock: PropTypes.func.isRequired,
    onSelectBlock: PropTypes.func.isRequired,
    onDeleteBlock: PropTypes.func.isRequired,
    onFocusPreviousBlock: PropTypes.func.isRequired,
    onFocusNextBlock: PropTypes.func.isRequired,
    handleKeyDown: PropTypes.func.isRequired,
    createContent: PropTypes.func.isRequired,
    editable: PropTypes.bool,
  };

  /**
   * Default properties
   * @property {Object} defaultProps Default properties.
   * @static
   */
  static defaultProps = {
    editable: true,
  };

  /**
   * Constructor
   * @method constructor
   * @param {Object} props Component properties
   * @constructs Hero Image left edit
   */
  constructor(props) {
    super(props);

    this.onUploadImage = this.onUploadImage.bind(this);
    this.state = {
      uploading: false,
    };

    if (!__SERVER__) {
      this.state = {
        uploading: false,
        currentFocused: 'title',
      };
    }
  }
  blockRef = React.createRef();

  handleEnter = (e) => {
    if (this.props.selected) {
      handleKeyDownOwnFocusManagement(e, this.props);
    }
  };

  /**
   * Component did mount
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    if (this.props.selected) {
      this.setState(() => ({ currentFocused: 'title' }));
    }

    const blockNode = this.props.blockNode;

    if (this.props.selected && this.node) {
      this.node.focus();
    }
    if (blockNode && blockNode.current) {
      blockNode.current.addEventListener('keydown', this.handleEnter, false);
    } else if (this.blockRef && this.blockRef.current) {
      this.blockRef.current.addEventListener(
        'keydown',
        this.handleEnter,
        false,
      );
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
      this.props.request.loading &&
      nextProps.request.loaded &&
      this.state.uploading
    ) {
      this.setState({
        uploading: false,
      });
      this.props.onChangeBlock(this.props.block, {
        ...this.props.data,
        url: nextProps.content['@id'],
      });
    }

    if (nextProps.selected) {
      if (!this.props.selected) {
        this.setState({ currentFocused: 'title' });
      }
    } else {
      this.setState({ currentFocused: null });
    }
  }
  /**
   * @param {*} nextProps
   * @param {*} nextState
   * @returns {boolean}
   * @memberof Edit
   */
  shouldComponentUpdate(nextProps) {
    return this.props.selected || !isEqual(this.props.data, nextProps.data);
  }

  /**
   * Upload image handler
   * @method onUploadImage
   * @returns {undefined}
   */
  onUploadImage({ target }) {
    const file = target.files[0];
    if (!validateFileUploadSize(file, this.props.intl.formatMessage)) return;
    this.setState({
      uploading: true,
    });
    readAsDataURL(file).then((data) => {
      const fields = data.match(/^data:(.*);(.*),(.*)$/);
      this.props.createContent(
        getBaseUrl(this.props.pathname),
        {
          '@type': 'Image',
          image: {
            data: fields[3],
            encoding: fields[2],
            'content-type': fields[1],
            filename: file.name,
          },
        },
        this.props.block,
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

    const placeholder =
      this.props.data.placeholder ||
      this.props.intl.formatMessage(messages.placeholder);

    return (
      <div
        className="public-ui"
        tabIndex="-1"
        ref={(node) => {
          if (node) {
            this.blockRef.current = node;
          }
        }}
      >
        <div
          className={cx('block hero', {
            selected: this.props.selected,
          })}
        >
          {this.props.selected &&
            this.props.editable &&
            !!this.props.data.url && (
              <div className="toolbar">
                <Button.Group>
                  <Button
                    icon
                    basic
                    onClick={() =>
                      this.props.onChangeBlock(this.props.block, {
                        ...this.props.data,
                        url: '',
                      })
                    }
                  >
                    <Icon name={clearSVG} size="24px" color="#e40166" />
                  </Button>
                </Button.Group>
              </div>
            )}
          <div className="block-inner-wrapper">
            {this.props.data.url ? (
              <div className="hero-image">
                <img
                  src={`${flattenToAppURL(this.props.data.url)}/@@images/image`}
                  alt=""
                />
              </div>
            ) : (
              <div className="image-add">
                <Message className="image-message">
                  {this.state.uploading && (
                    <Dimmer active>
                      <Loader indeterminate>
                        {this.props.intl.formatMessage(messages.uploading)}
                      </Loader>
                    </Dimmer>
                  )}
                  <center>
                    <h4>{this.props.intl.formatMessage(messages.image)}</h4>
                    {this.props.editable && (
                      <>
                        <p>{placeholder}</p>
                        <p>
                          <label className="ui button file">
                            {this.props.intl.formatMessage(messages.browse)}
                            <input
                              type="file"
                              onChange={this.onUploadImage}
                              style={{ display: 'none' }}
                            />
                          </label>
                        </p>
                      </>
                    )}
                  </center>
                </Message>
              </div>
            )}
            <div
              className={cx('hero-body', {
                'no-bg': !this.props.data.show_block_bg,
              })}
            >
              <div className="edit-title">
                <h1>
                  <TextEditorWidget
                    {...this.props}
                    showToolbar={false}
                    data={this.props.data}
                    fieldName="title"
                    selected={this.state.currentFocused === 'title'}
                    placeholder={this.props.intl.formatMessage(messages.title)}
                    setSelected={(f) => {
                      this.setState(() => ({ currentFocused: f }));
                    }}
                    focusNextField={() => {
                      this.setState(() => ({ currentFocused: 'description' }));
                    }}
                  />
                </h1>
              </div>

              <p>
                <TextEditorWidget
                  {...this.props}
                  showToolbar={false}
                  data={this.props.data}
                  fieldName="description"
                  selected={this.state.currentFocused === 'description'}
                  placeholder={this.props.intl.formatMessage(
                    messages.description,
                  )}
                  setSelected={(f) => {
                    this.setState(() => ({ currentFocused: f }));
                  }}
                  focusPrevField={() => {
                    this.setState(() => ({ currentFocused: 'title' }));
                  }}
                />
              </p>

              <StoresButtons data={this.props.data} />
            </div>
          </div>
        </div>
        <SidebarPortal selected={this.props.selected}>
          <HeroSidebar {...this.props} />
        </SidebarPortal>
      </div>
    );
  }
}

const Edit = EditComponent;

export default compose(
  injectIntl,
  connect(
    (state, ownProps) => ({
      request: state.content.subrequests[ownProps.block] || {},
      content: state.content.subrequests[ownProps.block]?.data,
    }),
    { createContent },
  ),
)(Edit);
