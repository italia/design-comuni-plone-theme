import loadable from '@loadable/component';

export BandiSearchView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/BandiSearch/View';

export const BandiSearchEdit = loadable(() =>
  import(
    /* webpackChunkName: "DCPTMange" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/BandiSearch/Edit'
  ),
);
export const Sidebar = loadable(() =>
  import(
    /* webpackChunkName: "DCPTMange" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/BandiSearch/Sidebar'
  ),
);
