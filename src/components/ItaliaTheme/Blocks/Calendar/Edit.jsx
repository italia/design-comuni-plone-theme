import React from 'react';
import PropTypes from 'prop-types';
import Body from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Calendar/Body';
import { SidebarPortal } from '@plone/volto/components';
import { getBaseUrl } from '@plone/volto/helpers';
import ListingSidebar from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Calendar/ListingSidebar';

const Edit = ({ data, block, onChangeBlock, selected, pathname }) => {
  return (
    <div className="calendar public-ui">
      <Body
        data={data}
        block={block}
        path={getBaseUrl(pathname)}
        inEditMode={true}
        onChangeBlock={onChangeBlock}
      />
      <SidebarPortal selected={selected}>
        <ListingSidebar
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </div>
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
  block: PropTypes.string.isRequired,
  selected: PropTypes.any,
  intl: PropTypes.any,
  onChangeBlock: PropTypes.func.isRequired,
};

export default Edit;
