import loadable from '@loadable/component';

export const ModuloView = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Modulo" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/ModuloView/ModuloView'
    ),
);
export const ModuloPlaceholderAfterContent = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Modulo" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/ModuloView/Placeholder/AfterContent'
    ),
);
export const ModuloPlaceholderAfterRelatedItems = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Modulo" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/ModuloView/Placeholder/AfterRelatedItems'
    ),
);
export const ModuloFilePrincipale = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Modulo" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/ModuloView/ModuloFilePrincipale'
    ),
);
export const ModuloFormatiAlternativi = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Modulo" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/ModuloView/ModuloFormatiAlternativi'
    ),
);
export const ModuloFiles = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Modulo" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/ModuloView/ModuloFiles'
    ),
);
export const ModuloText = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Modulo" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/ModuloView/ModuloText'
    ),
);
