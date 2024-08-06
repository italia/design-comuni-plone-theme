import loadable from '@loadable/component';

export const NewsItemView = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Notizia" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/NewsItemView/NewsItemView'
    ),
);
export const NewsItemPlaceholderAfterContent = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Notizia" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/NewsItemView/Placeholder/AfterContent'
    ),
);
export const NewsItemPlaceholderAfterRelatedItems = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Notizia" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/NewsItemView/Placeholder/AfterRelatedItems'
    ),
);
export const NewsItemText = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Notizia" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/NewsItemView/NewsItemText'
    ),
);
export const NewsItemGallery = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Notizia" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/NewsItemView/NewsItemGallery'
    ),
);
export const NewsItemAllegati = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Notizia" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/NewsItemView/NewsItemAllegati'
    ),
);
export const NewsItemACuraDi = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Notizia" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/NewsItemView/NewsItemACuraDi'
    ),
);
export const NewsItemLuoghiCorrelati = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Notizia" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/NewsItemView/NewsItemLuoghiCorrelati'
    ),
);
export const NewsItemDataset = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Notizia" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/NewsItemView/NewsItemDataset'
    ),
);
export const NewsItemMetadata = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTViews_Notizia" */ 'design-comuni-plone-theme/components/ItaliaTheme/View/NewsItemView/NewsItemMetadata'
    ),
);
