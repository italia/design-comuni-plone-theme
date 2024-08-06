import loadable from '@loadable/component';

export const DocumentoView = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Documento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/DocumentoView/DocumentoView'
    ),
);
export const DocumentoPlaceholderAfterContent = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Documento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/DocumentoView/Placeholder/AfterContent'
    ),
);
export const DocumentoPlaceholderAfterRelatedItems = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Documento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/DocumentoView/Placeholder/AfterRelatedItems'
    ),
);
export const DocumentoAutori = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Documento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/DocumentoView/DocumentoAutori'
    ),
);
export const DocumentoDescrizione = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Documento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/DocumentoView/DocumentoDescrizione'
    ),
);
export const DocumentoDocumenti = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Documento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/DocumentoView/DocumentoDocumenti'
    ),
);
export const DocumentoUfficioResponsabile = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Documento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/DocumentoView/DocumentoUfficioResponsabile'
    ),
);
export const DocumentoAreaResponsabile = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Documento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/DocumentoView/DocumentoAreaResponsabile'
    ),
);
export const DocumentoAccedereServizio = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Documento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/DocumentoView/DocumentoAccedereServizio'
    ),
);
export const DocumentoDocAllegati = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Documento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/DocumentoView/DocumentoDocAllegati'
    ),
);
export const DocumentoUlterioriInformazioni = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Documento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/DocumentoView/DocumentoUlterioriInformazioni'
    ),
);
