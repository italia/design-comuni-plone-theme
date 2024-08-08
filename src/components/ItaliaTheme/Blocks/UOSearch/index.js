import loadable from '@loadable/component';

export UOSearchView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/UOSearch/View';

export const UOSearchEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/UOSearch/Edit'
    ),
);

export const Sidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/UOSearch/Sidebar'
    ),
);
