import loadable from '@loadable/component';

export CountDownBlockView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CountDown/View';

export const CountDownBlockEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CountDown/Edit'
    ),
);
export const Sidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CountDown/Sidebar'
    ),
);
