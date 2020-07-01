import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './SideBar';

import Body from './Body';

const Edit = ({
  data,
  id,
  block,
  onChangeBlock,
  openObjectBrowser,
  selected,
}) => {
  return (
    <>
      <div className="block">
        <Body block={data} />
      </div>
      <SidebarPortal selected={selected}>
        <Sidebar
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
          openObjectBrowser={openObjectBrowser}
        />
      </SidebarPortal>
    </>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Edit.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  block: PropTypes.string.isRequired,
};

export default Edit;
