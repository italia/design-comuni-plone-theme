import { UPDATE_SEARCH_FILTERS } from '~/actions';

export const searchFiltersReducer = (state = {}, action = {}) =>
  action.type === UPDATE_SEARCH_FILTERS ? action.content : state;
