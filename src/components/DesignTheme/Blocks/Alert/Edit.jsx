/**
 * Edit Hero block.
 * @module components/manage/Blocks/Image/Edit
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import cx from 'classnames';

import { createContent } from '@plone/volto/actions';
import { SidebarPortal } from '@plone/volto/components';
import { EditText } from '~/components/DesignTheme/Blocks/manage';

import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
/**
 * Edit image block class.
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

    this.state = {
      selectedField: null,
    };
  }

  selectField = field => {
    if (field !== this.state.selectedField) {
      this.setState({
        selectedField: field,
      });
    }
  };

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
            className={cx('row-full-width p-5', 'bg-' + this.props.data.color)}
          >
            <Container className="ui">
              <Col>
                <EditText
                  data={this.props.data}
                  fieldname="text"
                  placeholder="Inserisci il testo..."
                  detached={true}
                  block={this.props.block}
                  onClick={this.selectField('text')}
                  index={0}
                  selected={this.state.selectedField === 'text'}
                  onChangeBlock={this.props.onChangeBlock}
                  onFocusPreviousBlock={this.props.onFocusPreviousBlock}
                  onFocusNextBlock={this.props.onFocusNextBlock}
                />
                {/* <EditText
              data={this.props.data}
              fieldname="description"
              placeholder="Descrizione.."
              detached={true}
              block={this.props.block}
              index={1}
              selected={false}
              onChangeBlock={this.props.onChangeBlock}
              onFocusPreviousBlock={this.props.onFocusPreviousBlock}
              onFocusNextBlock={this.props.onFocusNextBlock}
            /> */}
              </Col>
            </Container>
          </Row>
        </div>
        <SidebarPortal selected={this.props.selected}>
          <Sidebar {...this.props} />
        </SidebarPortal>
      </div>
    );
  }
}

export default compose(
  injectIntl,
  connect(
    state => ({
      request: state.content.create,
      content: state.content.data,
    }),
    { createContent },
  ),
)(Edit);
