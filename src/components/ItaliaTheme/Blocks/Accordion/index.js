import loadable from '@loadable/component';

export AccordionView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Accordion/View';

export const AccordionEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Accordion/Edit'
    ),
);
export const Sidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Accordion/Sidebar'
    ),
);
