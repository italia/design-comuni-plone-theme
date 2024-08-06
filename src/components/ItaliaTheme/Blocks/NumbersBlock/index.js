import loadable from '@loadable/component';

export NumbersBlockView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/NumbersBlock/View';

export const NumbersBlockEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/NumbersBlock/Edit'
    ),
);

export const Sidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/NumbersBlock'
    ),
);
