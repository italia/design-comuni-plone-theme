import loadable from '@loadable/component';

export const PageView = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Page" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PageView/PageView'
    ),
);
export const PagePlaceholderAfterContent = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Page" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PageView/Placeholder/AfterContent'
    ),
);
export const PagePlaceholderAfterRelatedItems = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Page" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PageView/Placeholder/AfterRelatedItems'
    ),
);
export const PagePlaceholderTitle = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Page" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PageView/Placeholder/Title'
    ),
);
