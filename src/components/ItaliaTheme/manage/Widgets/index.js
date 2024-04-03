import loadable from '@loadable/component';

export FileWidget from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/FileWidget'; //non metterlo nel boundle dei widget perchè è usato dal blocco form in view

export const TextEditorWidget = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/TextEditorWidget'
  ),
);
export const LinkToWidget = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/LinkToWidget'
  ),
);
export const ColorListWidget = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/ColorListWidget'
  ),
);

export const PathFiltersWidget = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/PathFiltersWidget'
  ),
);
export const LocationFiltersWidget = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/LocationFiltersWidget'
  ),
);
export const CanaleDigitaleWidget = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/CanaleDigitaleWidget'
  ),
);

export const IconWidget = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/IconWidget'
  ),
);

export const IconPreviewWidget = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/IconPreviewWidget'
  ),
);

export const SearchSectionsConfigurationWidget = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/SearchSectionsConfigurationWidget/SearchSectionsConfigurationWidget'
  ),
);

export const CharCounterTextareaWidget = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/CharCounterTextareaWidget'
  ),
);

export const CharCounterTextWidget = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/CharCounterTextWidget'
  ),
);
export const SubsiteSocialLinksWidget = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/SubsiteSocialLinksWidget'
  ),
);

export const MenuConfigurationForm = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/MenuConfigurationForm'
  ),
);

export const SecondaryMenuConfigurationForm = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/SecondaryMenuConfigurationForm'
  ),
);

export const SubFooterConfigurationForm = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/SubFooterConfigurationForm'
  ),
);

export const LuoghiCorrelatiEventoWidget = loadable(() =>
  import(
    /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/LuoghiCorrelatiEventoWidget'
  ),
);
