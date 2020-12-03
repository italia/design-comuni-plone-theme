/**
 * Search filters reducer
 * @module src/reducers/getAmministrazioneTrasparenteTree
 */

import { GET_AMMINISTRAZIONE_TRASPARENTE } from '@italia/actions';

const initialState = {
  error: null,
  hasError: false,
  result: {},
  loadingResults: false,
};

export const amministrazioneTrasparenteTree = (
  state = initialState,
  action = {},
) => {
  switch (action.type) {
    case `${GET_AMMINISTRAZIONE_TRASPARENTE}_PENDING`:
      return {
        ...state,
        loadingResults: true,
      };

    case `${GET_AMMINISTRAZIONE_TRASPARENTE}_SUCCESS`:
      return {
        ...state,
        result: action.result,
        loadingResults: false,
      };

    case `${GET_AMMINISTRAZIONE_TRASPARENTE}_FAIL`:
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
