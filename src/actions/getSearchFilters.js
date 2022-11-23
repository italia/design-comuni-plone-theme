/**
 * Search filters action
 * @module src/actions/getSearchFilters
 */
export const GET_SEARCH_FILTERS = 'GET_SEARCH_FILTERS';

/**
 * Get search filters.
 * @function getSearchFilters
 * @returns {Object} Get search filters action.
 */
export function getSearchFilters() {
  return {
    type: GET_SEARCH_FILTERS,
    request: {
      op: 'get',
      path: '/@search-filters',
    },
  };
}
