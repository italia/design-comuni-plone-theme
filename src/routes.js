/**
 * Routes.
 * @module routes
 */

import { App } from '@plone/volto/components';
import { defaultRoutes } from '@plone/volto/routes';

export const italiaRoutes = [
  // Add design-volto-theme routes here
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
    routes: [...defaultRoutes, ...italiaRoutes],
  },
];

export default routes;
