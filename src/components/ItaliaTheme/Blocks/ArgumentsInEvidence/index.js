import loadable from '@loadable/component';

export ArgumentsInEvidenceView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/ArgumentsInEvidence/View';

export const ArgumentsInEvidenceEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/ArgumentsInEvidence/Edit'
    ),
);

export const Sidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/ArgumentsInEvidence/Sidebar'
    ),
);
