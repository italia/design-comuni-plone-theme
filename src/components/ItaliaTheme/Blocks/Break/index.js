import loadable from '@loadable/component';

export ViewBreak from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Break/View';

export const EditBreak = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Break/Edit'
    ),
);
