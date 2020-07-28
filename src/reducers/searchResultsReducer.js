/**
 * Search results reducer
 * @module src/reducers/getSearchFiltersReducer
 */

import { GET_SEARCH_RESULTS } from '@italia/actions';

const initialState = {
  error: null,
  hasError: false,
  result: {},
  loadingResults: false,
};

export const searchResultsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_SEARCH_RESULTS}_PENDING`:
      return {
        ...state,
        loadingResults: true,
      };

    case `${GET_SEARCH_RESULTS}_SUCCESS`:
      return {
        ...state,
        result: action.result,
        loadingResults: false,
      };

    case `${GET_SEARCH_RESULTS}_FAIL`:
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
