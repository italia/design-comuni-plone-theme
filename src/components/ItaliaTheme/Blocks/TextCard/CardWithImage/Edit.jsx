/**
 * Edit title block.
 * @module components/Blocks/TitleVM/Edit
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './Sidebar.jsx';
import BodyWrapper from './BodyWrapper.jsx';
import Block from './Block';

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
   * @constructs CardWithImage Edit block
   */
  constructor(props) {
    super(props);

    if (!__SERVER__) {
    }

    this.state = {
      currentBlockData: this.props.data,
    };
  }

  /**
   * Component did mount lifecycle method
   * @method componentDidMount
   * @returns {undefined}
   */
  componentDidMount() {
    this.setState({
      currentBlockData: this.props.data,
    });
  }

  /**
   * Change handler
   * @method onChange
   * @param {object} editorState Editor state.
   * @returns {undefined}
   */
  onChange(obj) {
    let newData = {
      ...this.props.data,
      ...obj,
    };

    this.props.onChangeBlock(this.props.block, newData);
    this.setState({ currentBlockData: newData }, () => this.forceUpdate());
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
      <div tabIndex="-1">
        <BodyWrapper data={this.state.currentBlockData} inEditMode={true}>
          <Block
            {...this.props}
            data={this.state.currentBlockData}
            onChange={(obj) => this.onChange(obj)}
            inEditMode={true}
          />
        </BodyWrapper>
        <SidebarPortal selected={this.props.selected || false}>
          <Sidebar
            {...this.props}
            data={this.state.currentBlockData}
            block={this.props.block}
            onChangeBlock={(obj) => this.onChange(obj)}
          />
        </SidebarPortal>
      </div>
    );
  }
}

export default injectIntl(Edit);
