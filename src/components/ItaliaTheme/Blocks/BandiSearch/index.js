import loadable from '@loadable/component';

export BandiSearchView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/BandiSearch/View';

export const BandiSearchEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/BandiSearch/Edit'
    ),
);
export const Sidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/BandiSearch/Sidebar'
    ),
);
