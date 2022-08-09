import loadable from '@loadable/component';

export const loadables = {
  'subsite-light-blue': loadable.lib(() =>
    import('@italia/config/Subsites/light-blue'),
  ),
  'subsite-light-pink': loadable.lib(() =>
    import('@italia/config/Subsites/light-pink'),
  ),
  'subsite-light-teal': loadable.lib(() =>
    import('@italia/config/Subsites/light-teal'),
  ),
  'subsite-light-yellow': loadable.lib(() =>
    import('@italia/config/Subsites/light-yellow'),
  ),
  'subsite-magenta': loadable.lib(() =>
    import('@italia/config/Subsites/magenta'),
  ),
  'subsite-teal': loadable.lib(() => import('@italia/config/Subsites/teal')),
  'subsite-white': loadable.lib(() => import('@italia/config/Subsites/white')),
  'subsite-yellow': loadable.lib(() =>
    import('@italia/config/Subsites/yellow'),
  ),
};
