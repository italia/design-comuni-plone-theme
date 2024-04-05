import loadable from '@loadable/component';

export HighlightedContentView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HighlightedContent/View';

export const HighlightedContentEdit = loadable(() =>
  import(
    /* webpackChunkName: "DCPTMange" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HighlightedContent/Edit'
  ),
);
export const Sidebar = loadable(() =>
  import(
    /* webpackChunkName: "DCPTMange" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HighlightedContent/Sidebar'
  ),
);
