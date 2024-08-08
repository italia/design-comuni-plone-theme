import loadable from '@loadable/component';

export TextCardView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/TextCard/SimpleCard/View';
export const TextCardEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/TextCard/SimpleCard/Edit'
    ),
);

export TextCardWithImageView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/TextCard/CardWithImage/View';
export const TextCardWithImageEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/TextCard/CardWithImage/Edit'
    ),
);
export const TextCardWithImageSidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/TextCard/CardWithImage/Sidebar'
    ),
);
