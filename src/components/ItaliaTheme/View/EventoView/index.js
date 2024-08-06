import loadable from '@loadable/component';

export const EventoView = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Evento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoView'
    ),
);
export const EventoPlaceholderAfterContent = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Evento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/Placeholder/AfterContent'
    ),
);
export const EventoPlaceholderAfterRelatedItems = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Evento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/Placeholder/AfterRelatedItems'
    ),
);
export const EventoCosE = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Evento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoCosE'
    ),
);
export const EventoLuoghi = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Evento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoLuoghi'
    ),
);
export const EventoDateOrari = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Evento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoDateOrari'
    ),
);
export const EventoCosti = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Evento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoCosti'
    ),
);
export const EventoDocumenti = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Evento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoDocumenti'
    ),
);
export const EventoContatti = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Evento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoContatti'
    ),
);
export const EventoPadreEFigli = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Evento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoPadreEFigli'
    ),
);
export const EventoSponsors = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Evento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoSponsors'
    ),
);
export const EventoUlterioriInformazioni = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Evento" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/EventoView/EventoUlterioriInformazioni'
    ),
);
