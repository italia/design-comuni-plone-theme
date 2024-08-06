import loadable from '@loadable/component';

export HighlightedContentView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HighlightedContent/View';
export getHiglitedContentAsyncData from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HighlightedContent/getAsyncData';

export const HighlightedContentEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HighlightedContent/Edit'
    ),
);
export const Sidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HighlightedContent/Sidebar'
    ),
);
