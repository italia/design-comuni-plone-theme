import loadable from '@loadable/component';

export EventSearchView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/EventSearch/View';

export const EventSearchEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/EventSearch/Edit'
    ),
);

export const Sidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/EventSearch/Sidebar'
    ),
);
