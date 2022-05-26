import loadable from '@loadable/component';

export const loadables = {
  reactSlick: loadable.lib(() => import('react-slick')),
  rrule: loadable.lib(() => import('rrule')),
};
