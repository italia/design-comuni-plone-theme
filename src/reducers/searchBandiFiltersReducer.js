import { omit } from 'lodash';
import { GET_SEARCH_BANDI_FILTERS } from '@italia/actions';

const RESET_SEARCH_BANDI_FILTERS_RESULTS = 'RESET_SEARCH_BANDI_FILTERS_RESULTS';

const initialState = {
  error: null,
  result: {},
  loaded: false,
  loading: false,
  subrequests: {},
};

export function searchBandiFiltersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_SEARCH_BANDI_FILTERS}_PENDING`:
      return action.subrequest
        ? {
            ...state,
            subrequests: {
              ...state.subrequests,
              [action.subrequest]: {
                ...state.subrequests[action.subrequest],
                result: {},
                error: null,
                loaded: false,
                loading: true,
              },
            },
          }
        : {
            ...state,
            error: null,
            loading: true,
            loaded: false,
          };
    case `${GET_SEARCH_BANDI_FILTERS}_SUCCESS`:
      return action.subrequest
        ? {
            ...state,
            subrequests: {
              ...state.subrequests,
              [action.subrequest]: {
                error: null,
                result: action.result,
                loaded: true,
                loading: false,
              },
            },
          }
        : {
            ...state,
            error: null,
            result: action.result,
            loaded: true,
            loading: false,
          };
    case `${GET_SEARCH_BANDI_FILTERS}_FAIL`:
      return action.subrequest
        ? {
            ...state,
            subrequests: {
              ...state.subrequests,
              [action.subrequest]: {
                error: action.error,
                result: {},
                loading: false,
                loaded: false,
              },
            },
          }
        : {
            ...state,
            error: action.error,
            result: {},

            loading: false,
            loaded: false,
          };
    case RESET_SEARCH_BANDI_FILTERS_RESULTS:
      return action.subrequest
        ? {
            ...state,
            subrequests: omit(state.subrequests, [action.subrequest]),
          }
        : {
            ...state,
            error: null,
            result: {},
            total: 0,
            loading: false,
            loaded: false,
          };
    default:
      return state;
  }
}
