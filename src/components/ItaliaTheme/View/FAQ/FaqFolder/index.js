import loadable from '@loadable/component';

export const FaqFolderView = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_FaqFolder" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/FAQ/FaqFolder/FaqFolderView'
    ),
);
export const FaqFolderPlaceholderAfterContent = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_FaqFolder" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/FAQ/FaqFolder/Placeholder/AfterContent'
    ),
);
export const FaqFolderPlaceholderAfterRelatedItems = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_FaqFolder" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/FAQ/FaqFolder/Placeholder/AfterRelatedItems'
    ),
);
export const FaqFolderSearchBar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_FaqFolder" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/FAQ/FaqFolder/SearchBar'
    ),
);
export const FaqFolderTree = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_FaqFolder" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/FAQ/FaqFolder/FaqFolderTree'
    ),
);
