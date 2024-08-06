import loadable from '@loadable/component';

export const TrasparenzaView = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Trasparenza" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/TrasparenzaView/TrasparenzaView'
    ),
);
export const TrasparenzaPlaceholderAfterContent = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Trasparenza" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/TrasparenzaView/Placeholder/AfterContent'
    ),
);
export const DettagliProcedimentiView = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Trasparenza" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/TrasparenzaView/DettagliProcedimentiView'
    ),
);
