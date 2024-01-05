/**
 * Edit Alert block.
 * @module components/manage/Blocks/Image/Edit
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import cx from 'classnames';
import { Container, Row, Col } from 'design-react-kit';

import { createContent } from '@plone/volto/actions';
import { SidebarPortal } from '@plone/volto/components';
import { defineMessages, injectIntl } from 'react-intl';

import {
  AlertSidebar,
  TextEditorWidget,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  content_placeholder: {
    id: 'Type text…',
    defaultMessage: 'Digita il testo…',
  },
});
/**
 * Edit Alert block class.
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
    selected: PropTypes.bool.isRequired,
    block: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    data: PropTypes.objectOf(PropTypes.any).isRequired,
    content: PropTypes.objectOf(PropTypes.any).isRequired,
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
  };

  constructor(props) {
    super(props);
    if (!this.props.data.bg_color) {
      this.props.data.bg_color = this.props.data.color ?? 'warning'; // backwards compatibility with previous background-color variable name 'color'
    }
    this.blockNode = React.createRef();
  }

  render() {
    if (__SERVER__) {
      return <div />;
    }
    return (
      <div className="public-ui">
        <div
          className={cx('alertblock', {
            selected: this.props.selected,
          })}
        >
          <Row
            className={cx(
              'full-width p-5',
              'bg-alert-' + this.props.data.bg_color,
            )}
          >
            <Container className="ui">
              <Row className="align-items-start">
                {this.props.data.image?.data && (
                  <Col sm={2} className="pb-3 image-col">
                    <img
                      src={`data:${this.props.data.image['content-type']};${this.props.data.image.encoding},${this.props.data.image.data}`}
                      alt=""
                      className={cx('left-image', [
                        this.props.data.sizeImage
                          ? 'size-' + this.props.data.sizeImage
                          : 'size-l',
                      ])}
                    />
                  </Col>
                )}
                <Col>
                  <TextEditorWidget
                    data={this.props.data}
                    fieldName="text"
                    selected={this.props.selected}
                    block={this.props.block}
                    onChangeBlock={(data) =>
                      this.props.onChangeBlock(this.props.block, data)
                    }
                    placeholder={this.props.intl.formatMessage(
                      messages.content_placeholder,
                    )}
                    showToolbar={true}
                    onSelectBlock={this.props.onSelectBlock}
                    onAddBlock={this.props.onAddBlock}
                    index={this.props.index}
                    onFocusNextBlock={this.props.onFocusNextBlock}
                    onFocusPreviousBlock={this.props.onFocusPreviousBlock}
                  />
                </Col>
              </Row>
            </Container>
          </Row>
        </div>
        <SidebarPortal selected={this.props.selected}>
          <AlertSidebar {...this.props} />
        </SidebarPortal>
      </div>
    );
  }
}

export default compose(
  injectIntl,
  connect(
    (state) => ({
      request: state.content.create,
      content: state.content.data,
    }),
    { createContent },
  ),
)(Edit);
