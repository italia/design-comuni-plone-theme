import loadable from '@loadable/component';
import { loadables as subsitesLoadbles } from './Subsites';

export const loadables = {
  reactSlick: loadable.lib(() => import('react-slick')),
  rrule: loadable.lib(() => import('rrule')),
  ...subsitesLoadbles,
};
