/**
 * Add your helpers here.
 * @module helpers
 * @example
 * export { Api } from './Api/Api';
 */

export { defaultIconWidgetOptions } from 'design-comuni-plone-theme/helpers/IconWidget/IconWidgetHelper';
export { fontAwesomeAliases } from 'design-comuni-plone-theme/helpers/IconWidget/IconAliasHelper';
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
  getRealEventEnd,
  getRecurrenceExceptionDates,
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
  eventFormValidationHelper,
} from 'design-comuni-plone-theme/helpers/FormValidation/FormValidationHelpers';
export {
  getSpecificDataGridFieldValidation,
  realWidgetType,
  CUSTOM_DGFIELD_VALIDATION,
} from 'design-comuni-plone-theme/helpers/FormValidation/DataGridFormValidationHelpers';

export { commonSearchBlockMessages } from 'design-comuni-plone-theme/helpers/Translations/searchBlockExtendedTranslations';

export { getComponentWithFallback } from 'design-comuni-plone-theme/helpers/registry';
export {
  useHomePath,
  isResolveUID,
} from 'design-comuni-plone-theme/helpers/url';
export { usePaginatedItemsSection } from 'design-comuni-plone-theme/helpers/usePaginatedItemsSection.hook.ts';
export {
  useFallbackImageSrc,
  contentHasImage,
} from 'design-comuni-plone-theme/helpers/images';
export { getWidgetView } from 'design-comuni-plone-theme/helpers/getWidgetView';
