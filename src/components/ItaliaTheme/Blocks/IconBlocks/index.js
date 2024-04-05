import loadable from '@loadable/component';

export IconBlocksView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/IconBlocks/View';

export const IconBlocksEdit = loadable(() =>
  import(
    /* webpackChunkName: "DCPTMange" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/IconBlocks/Edit'
  ),
);

export const Sidebar = loadable(() =>
  import(
    /* webpackChunkName: "DCPTMange" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/IconBlocks/Sidebar'
  ),
);
