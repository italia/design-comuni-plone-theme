/**
 * Edit title block.
 * @module components/Blocks/TitleVM/Edit
 */

import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from '@italia/components/ItaliaTheme/Blocks/CTABlock/Sidebar.jsx';
import BodyWrapper from '@italia/components/ItaliaTheme/Blocks/CTABlock/BodyWrapper.jsx';
import Block from '@italia/components/ItaliaTheme/Blocks/CTABlock/Block';

class Edit extends React.Component {
  render() {
    return (
      <>
        <BodyWrapper inEditMode={true}>
          <Block {...this.props} inEditMode={true} />
        </BodyWrapper>

        <SidebarPortal selected={this.props.selected || false}>
          <Sidebar {...this.props} />
        </SidebarPortal>
      </>
    );
  }
}

export default Edit;
