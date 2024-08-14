import loadable from '@loadable/component';
import { loadables as subsitesLoadables } from './Subsites';

export const loadables = {
  reactSlick: loadable.lib(() => import('react-slick')),
  rrule: loadable.lib(() => import('rrule')),
  htmlDiffLib: loadable.lib(() => import('htmldiff-js')),
  ...subsitesLoadables,
};
