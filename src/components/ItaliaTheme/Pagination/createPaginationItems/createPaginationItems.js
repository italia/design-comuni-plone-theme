import {
  createFirstPage,
  createLastItem,
  createNextItem,
  createPageFactory,
  createPrevItem,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Pagination/createPaginationItems/itemFactories';
import {
  createComplexRange,
  createSimpleRange,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Pagination/createPaginationItems/rangeFactories';
import {
  isSimplePagination,
  typifyOptions,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Pagination/createPaginationItems/paginationUtils';

/**
 * @param {object} rawOptions
 * @param {number|string} rawOptions.activePage
 * @param {number|string} rawOptions.boundaryRange Number of always visible pages at the beginning and end.
 * @param {boolean} rawOptions.hideEllipsis Marks if ellipsis should be hidden.
 * @param {number|string} rawOptions.siblingRange Number of always visible pages before and after the current one.
 * @param {number|string} rawOptions.totalPages Total number of pages.
 */
const createPaginationItems = (rawOptions) => {
  const options = typifyOptions(rawOptions);
  const { activePage, totalPages } = options;

  const pageFactory = createPageFactory(activePage);
  const innerRange = isSimplePagination(options)
    ? createSimpleRange(1, totalPages, pageFactory)
    : createComplexRange(options, pageFactory);

  return [
    createFirstPage(),
    createPrevItem(activePage),
    ...innerRange,
    createNextItem(activePage, totalPages),
    createLastItem(totalPages),
  ];
};

export default createPaginationItems;
