/**
 * Search action
 * @module src/actions/doSearch
 */
export const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS';

/**
 * Get search results.
 * @function searchResults
 * @returns {Object} Get search results action.
 */
export function getSearchResults(params) {
  return {
    type: GET_SEARCH_RESULTS,
    request: {
      op: 'get',
      path: `/@search`,
      params: params,
    },
  };
}
