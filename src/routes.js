/**
 * Routes.
 * @module routes
 */

import { App, Search } from '@plone/volto/components';
import { defaultRoutes, multilingualRoutes } from '@plone/volto/routes';
import { LoginAgid } from 'design-comuni-plone-theme/components/ItaliaTheme';
import config from '@plone/volto/registry';

export const italiaRoutes = [
  // Add design-comuni-plone-theme routes here
  {
    path: '/**/search',
    component: Search,
  },
  {
    path: ['/login', '/**/login'],
    component: LoginAgid,
  },
];

/**
 * Routes array.
 * @array
 * @returns {array} Routes.
 */
const routes = [
  {
    path: '/',
    component: App, // Change this if you want a different component
    routes: [
      ...italiaRoutes,
      ...(config.addonRoutes || []),
      ...((config.settings?.isMultilingual && multilingualRoutes) || []),
      ...defaultRoutes,
    ],
  },
];

export default routes;
