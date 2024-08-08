import loadable from '@loadable/component';

export const FaqView = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Faq" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/FAQ/FaqView/FaqView'
    ),
);
export const FaqPlaceholderAfterContent = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Faq" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/FAQ/FaqView/Placeholder/AfterContent'
    ),
);
export const FaqPlaceholderAfterRelatedItems = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Faq" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/FAQ/FaqView/Placeholder/AfterRelatedItems'
    ),
);
