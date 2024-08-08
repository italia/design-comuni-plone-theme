import loadable from '@loadable/component';

export AlertView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Alert/View';

export const AlertEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Alert/Edit'
    ),
);
export const Sidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Alert/Sidebar'
    ),
);
