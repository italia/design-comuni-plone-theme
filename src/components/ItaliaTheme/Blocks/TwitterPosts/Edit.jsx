/**
 * Edit TwitterPosts block.
 * @module components/ItaliaTheme/Blocks/TwitterPosts/Edit
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Body from '@italia/components/ItaliaTheme/Blocks/TwitterPosts/Body';

import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './Sidebar.jsx';
/**
 * Edit TwitterPosts block class.
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
    openObjectBrowser: PropTypes.func.isRequired,
  };

  /**
   * Render method.
   * @method render
   * @returns {string} Markup for the component.
   */
  render() {
    return (
      <div className="public-ui">
        <Body data={this.props.data} isEditMode={true} />
        <SidebarPortal selected={this.props.selected || false}>
          <Sidebar
            {...this.props}
            data={this.props.data}
            block={this.props.block}
            onChangeBlock={this.props.onChangeBlock}
            openObjectBrowser={this.props.openObjectBrowser}
          />
        </SidebarPortal>
      </div>
    );
  }
}

export default Edit;
