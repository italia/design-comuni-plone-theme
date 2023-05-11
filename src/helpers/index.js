/**
 * Add your helpers here.
 * @module helpers
 * @example
 * export { Api } from './Api/Api';
 */

export { defaultIconWidgetOptions } from 'design-comuni-plone-theme/helpers/IconWidget/IconWidgetHelper';
export {
  getCalendarDate,
  getEventRecurrenceMore,
} from 'design-comuni-plone-theme/helpers/ListingHelper';
export {
  contentFolderHasItems,
  renderPDCItemValue,
} from 'design-comuni-plone-theme/helpers/contentHelper';
export { checkRedraftHasContent } from 'design-comuni-plone-theme/helpers/redraftHelper';
export { getTableRowData } from 'design-comuni-plone-theme/helpers/amministrazioneTrasparenteHelper';
export { getItemsByPath } from 'design-comuni-plone-theme/helpers/getItemsByPath';
export {
  viewDate,
  getRealStartAndEndWithRecurrence,
} from 'design-comuni-plone-theme/helpers/dates';
export { getSiteProperty } from 'design-comuni-plone-theme/helpers/config';
export { useDebouncedEffect } from 'design-comuni-plone-theme/helpers/debounce';
export {
  FILE_FORMATS,
  FILE_EXTENSIONS,
  getFileViewFormat,
} from 'design-comuni-plone-theme/helpers/files';
export {
  videoUrlHelper,
  checkIfValidVideoLink,
} from 'design-comuni-plone-theme/helpers/videoUrlHelper';
export {
  blockIsNotEmptyPlaceholder,
  SSRRenderHtml,
} from 'design-comuni-plone-theme/helpers/htmlDiff';
export {
  serviceFormValidationHelper,
  blocksFieldIsEmpty,
  getRealEmptyField,
} from 'design-comuni-plone-theme/helpers/FormValidation/FormValidationHelpers';
