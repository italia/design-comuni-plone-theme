import { UPDATE_SEARCH_FILTERS } from '../actions/updateSearchFilters';

export const searchFiltersReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case `${UPDATE_SEARCH_FILTERS}_PENDING`:
      return {
        ...state,
        loadingResults: true,
      };
    case `${UPDATE_SEARCH_FILTERS}_SUCCESS`:
      return {
        ...state,
        result: action.content,
        loadingResults: false,
      };
    case `${UPDATE_SEARCH_FILTERS}_FAIL`:
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
