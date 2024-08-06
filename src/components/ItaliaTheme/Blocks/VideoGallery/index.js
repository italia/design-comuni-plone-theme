import loadable from '@loadable/component';

export VideoGalleryView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/VideoGallery/View';

export const VideoGalleryEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/VideoGallery/Edit'
    ),
);

export const Sidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/VideoGallery/Sidebar'
    ),
);
