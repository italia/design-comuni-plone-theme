import loadable from '@loadable/component';

export CTABlockView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CTABlock/View';

export const CTABlockEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CTABlock/Edit'
    ),
);

export const Sidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CTABlock/Sidebar'
    ),
);
