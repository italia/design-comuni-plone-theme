/*
- il reducer del type RESET_QUERYSTRING_RESULTS viene già dichiarato in Volto nel file reducers/querystringsearch/querystringsearch.js
*/

export const RESET_QUERYSTRING_RESULTS = 'RESET_QUERYSTRING_RESULTS';

/**
 * Reset querystring results function.
 * @function resetQuerystringResults
 * @param {string} subrequest Key of the subrequest.
 * @returns {Object} Search content action.
 */
export function resetQuerystringResults(subrequest = null) {
  return {
    type: RESET_QUERYSTRING_RESULTS,
    subrequest,
  };
}
