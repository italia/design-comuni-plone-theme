import loadable from '@loadable/component';

export CalendarView from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Calendar/View';

export const CalendarEdit = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Calendar/Edit'
    ),
);

export const Sidebar = loadable(
  () =>
    import(
      /* webpackChunkName: "DCPTManage" */ 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Calendar/ListingSidebar'
    ),
);
