import loadable from '@loadable/component';

export ContactsBlockView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/ContactsBlock/View';

export const ContactsBlockEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/ContactsBlock/Edit'
    ),
);

export const Sidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/ContactsBlock/Sidebar'
    ),
);
