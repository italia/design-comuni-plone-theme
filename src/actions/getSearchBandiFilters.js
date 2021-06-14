export const GET_SEARCH_BANDI_FILTERS = 'GET_SEARCH_BANDI_FILTERS';

/**
 * Get search bandi filters.
 * @function getSearchBandiFilters
 * @returns {Object} Get search bandi filters action.
 */
export function getSearchBandiFilters(path = '') {
  let p = path === '/' ? '' : path;
  return {
    type: GET_SEARCH_BANDI_FILTERS,
    request: {
      op: 'get',
      path: p + '/@bandi-search-filters',
    },
  };
}
