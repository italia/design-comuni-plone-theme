/**
 * Search filters action
 * @module src/actions/getAmministrazioneTrasparenteTree
 */
export const GET_AMMINISTRAZIONE_TRASPARENTE =
  'GET_AMMINISTRAZIONE_TRASPARENTE';

/**
 * Get search filters.
 * @function getAmministrazioneTrasparenteTree
 * @returns {Object} Get search filters action.
 */
export function getAmministrazioneTrasparenteTree(path) {
  return {
    type: GET_AMMINISTRAZIONE_TRASPARENTE,
    request: {
      op: 'get',
      path: `${path}`,
    },
  };
}
