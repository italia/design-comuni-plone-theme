import loadable from '@loadable/component';

export const IncaricoView = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Incarico" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/IncaricoView/IncaricoView'
    ),
);
export const IncaricoPlaceholderAfterContent = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Incarico" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/IncaricoView/Placeholder/AfterContent'
    ),
);
export const IncaricoPlaceholderAfterRelatedItems = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Incarico" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/IncaricoView/Placeholder/AfterRelatedItems'
    ),
);
export const IncaricoPersone = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Incarico" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/IncaricoView/IncaricoPersone'
    ),
);
