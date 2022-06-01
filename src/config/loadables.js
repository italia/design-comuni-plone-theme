import loadable from '@loadable/component';

export const loadables = {
  reactSlick: loadable.lib(() => import('react-slick')),
  rrule: loadable.lib(() => import('rrule')),
  designReactKit: loadable.lib(() =>
    import('design-react-kit/dist/design-react-kit'),
  ),
};
