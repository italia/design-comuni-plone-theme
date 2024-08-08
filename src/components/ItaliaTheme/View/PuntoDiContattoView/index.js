import loadable from '@loadable/component';

export const PuntoDiContattoView = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_PdC" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PuntoDiContattoView/PuntoDiContattoView'
    ),
);
export const PuntoDiContattoPlaceholderAfterContent = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_PdC" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PuntoDiContattoView/Placeholder/AfterContent'
    ),
);
export const PuntoDiContattoPlaceholderAfterRelatedItems = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_PdC" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PuntoDiContattoView/Placeholder/AfterRelatedItems'
    ),
);
export const RelatedItemsChipsPDC = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_PdC" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PuntoDiContattoView/RelatedItemsChipsPDC'
    ),
);
