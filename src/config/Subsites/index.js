import loadable from '@loadable/component';

export const loadables = {
  'light-blue': loadable.lib(() => import('./light-blue')),
  'light-pink': loadable.lib(() => import('./light-pink')),
  'light-teal': loadable.lib(() => import('./light-teal')),
  'light-yellow': loadable.lib(() => import('./light-yellow')),
  magenta: loadable.lib(() => import('./magenta')),
  teal: loadable.lib(() => import('./teal')),
  white: loadable.lib(() => import('./white')),
  yellow: loadable.lib(() => import('./yellow')),
};
