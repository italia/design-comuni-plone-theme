import loadable from '@loadable/component';

export const PersonaView = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Persona" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PersonaView/PersonaView'
    ),
);
export const PersonaPlaceholderAfterContent = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Persona" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PersonaView/Placeholder/AfterContent'
    ),
);
export const PersonaPlaceholderAfterRelatedItems = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Persona" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PersonaView/Placeholder/AfterRelatedItems'
    ),
);
export const PersonaRuolo = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Persona" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PersonaView/PersonaRuolo'
    ),
);
export const PersonaContatti = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Persona" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PersonaView/PersonaContatti'
    ),
);
export const PersonaDocumenti = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Persona" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PersonaView/PersonaDocumenti'
    ),
);
export const PersonaUlterioriInformazioni = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Persona" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/PersonaView/PersonaUlterioriInformazioni'
    ),
);
