/**
 * Search filters action
 * @module src/actions/getDettagliProcedimento
 */
export const GET_DETTAGLI_PROCEDIMENTO = 'GET_DETTAGLI_PROCEDIMENTO';

/**
 * Get search filters.
 * @function getDettagliProcedimento
 * @returns {Object} Get search filters action.
 */
export function getDettagliProcedimento(path) {
  return {
    type: GET_DETTAGLI_PROCEDIMENTO,
    request: {
      op: 'get',
      path: `${path}`,
    },
  };
}
