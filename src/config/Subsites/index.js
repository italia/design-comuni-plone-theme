import loadable from '@loadable/component';

export const loadables = {
  'subsite-light-blue': loadable.lib(() => import('./light-blue')),
  'subsite-light-pink': loadable.lib(() => import('./light-pink')),
  'subsite-light-teal': loadable.lib(() => import('./light-teal')),
  'subsite-light-yellow': loadable.lib(() => import('./light-yellow')),
  'subsite-magenta': loadable.lib(() => import('./magenta')),
  'subsite-teal': loadable.lib(() => import('./teal')),
  'subsite-white': loadable.lib(() => import('./white')),
  'subsite-yellow': loadable.lib(() => import('./yellow')),
};
