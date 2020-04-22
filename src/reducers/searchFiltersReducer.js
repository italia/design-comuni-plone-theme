import { UPDATE_SEARCH_FILTERS } from '../actions/updateSearchFilters';

export const searchFiltersReducer = (state = {}, action = {}) =>
  action.type === UPDATE_SEARCH_FILTERS ? action.content : state;
