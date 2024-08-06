import loadable from '@loadable/component';

export const PaginaArgomentoView = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Argomento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PaginaArgomentoView/PaginaArgomentoView'
    ),
);
export const PaginaArgomentoPlaceholderAfterContent = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Argomento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PaginaArgomentoView/Placeholder/AfterContent'
    ),
);
export const PaginaArgomentoPlaceholderAfterRelatedItems = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Argomento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PaginaArgomentoView/Placeholder/AfterRelatedItems'
    ),
);
export const PaginaArgomentoViewNoBlocks = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Argomento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PaginaArgomentoView/PaginaArgomentoViewNoBlocks'
    ),
);
