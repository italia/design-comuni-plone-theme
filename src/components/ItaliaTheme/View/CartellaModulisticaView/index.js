import loadable from '@loadable/component';

export const CartellaModulisticaView = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_CartMod" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/CartellaModulisticaView/CartellaModulisticaView'
    ),
);
export const CartellaModulisticaAfterContent = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_CartMod" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/CartellaModulisticaView/Placeholder/AfterContent'
    ),
);
export const CartellaModulisticaAfterRelatedItems = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_CartMod" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/CartellaModulisticaView/Placeholder/AfterRelatedItems'
    ),
);
