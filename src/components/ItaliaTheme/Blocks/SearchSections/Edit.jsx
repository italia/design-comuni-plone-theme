import React from 'react';
import PropTypes from 'prop-types';
import { SidebarPortal } from '@plone/volto/components';
import {
  BlockSearchSectionsSidebar,
  BlockSearchSectionsBody,
} from '@italia/components/ItaliaTheme';

import { useSelector } from 'react-redux';

const Edit = ({
  data,
  id,
  block,
  onChangeBlock,
  openObjectBrowser,
  selected,
}) => {
  const sections = useSelector(
    (state) => state?.searchFilters?.result?.sections,
  );

  return (
    <>
      <div className="block">
        <BlockSearchSectionsBody block={data} sections={sections} />
      </div>
      <SidebarPortal selected={selected}>
        <BlockSearchSectionsSidebar
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
          openObjectBrowser={openObjectBrowser}
          sections={sections}
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
