/**
 * Search filters reducer
 * @module src/reducers/getdettagliProcedimento
 */

import { GET_DETTAGLI_PROCEDIMENTO } from '@italia/actions';

const initialState = {
  error: null,
  hasError: false,
  result: {},
  loadingResults: false,
};

export const dettagliProcedimento = (
  state = initialState,
  action = {},
) => {
  switch (action.type) {
    case `${GET_DETTAGLI_PROCEDIMENTO}_PENDING`:
      return {
        ...state,
        loadingResults: true,
      };

    case `${GET_DETTAGLI_PROCEDIMENTO}_SUCCESS`:
      return {
        ...state,
        result: action.result,
        loadingResults: false,
      };

    case `${GET_DETTAGLI_PROCEDIMENTO}_FAIL`:
      return {
        ...state,
        error: action.error,
        hasError: true,
        loadingResults: false,
      };

    default:
      return state;
  }
};
