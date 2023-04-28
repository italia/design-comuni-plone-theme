/**
 * Edit Alert block.
 * @module components/manage/Blocks/Image/Edit
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import cx from 'classnames';
import {
  Container,
  Row,
  Col,
  Icon,
} from 'design-react-kit/dist/design-react-kit';

import { createContent } from '@plone/volto/actions';
import { SidebarPortal } from '@plone/volto/components';
import { EditTextBlock } from '@plone/volto/components';

import { InfoSidebar } from 'design-comuni-plone-theme/components/ItaliaTheme';
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
    if (!this.props.data.color) {
      this.props.data.color = 'warning';
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
          className={cx('infoblock', {
            selected: this.props.selected,
          })}
        >
          <Row
            className={cx('py-3', {
              ['bg-alert-' + this.props.data.color]: this.props.data.color,
              ['bg-color-' + this.props.data.bg_color]:
                this.props.data.bg_color,
            })}
          >
            <Container className="ui">
              <Row className="align-items-start">
                <Col sm={1} className="pb-3 image-col">
                  <Icon
                    className="left-image"
                    icon="it-info-circle"
                    size="lg"
                    loading="lazy"
                  />
                </Col>

                <Col>
                  <EditTextBlock
                    data={this.props.data}
                    detached={true}
                    index={this.props.index}
                    selected={this.props.selected}
                    block={this.props.block}
                    onAddBlock={this.props.onAddBlock}
                    onChangeBlock={this.props.onChangeBlock}
                    onDeleteBlock={this.props.onDeleteBlock}
                    onMutateBlock={this.props.onMutateBlock}
                    onFocusPreviousBlock={this.props.onFocusPreviousBlock}
                    onFocusNextBlock={this.props.onFocusNextBlock}
                    onSelectBlock={this.props.onSelectBlock}
                    blockNode={this.blockNode}
                  />
                </Col>
              </Row>
            </Container>
          </Row>
        </div>
        <SidebarPortal selected={this.props.selected}>
          <InfoSidebar {...this.props} />
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
