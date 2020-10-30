import { omit } from 'lodash';
import { GET_CALENDAR_DAY_RESULTS } from '@italia/actions'

const RESET_CALENDAR_RESULTS = 'RESET_CALENDAR_RESULTS';

const initialState = {
  error: null,
  items: [],
  total: 0,
  loaded: false,
  loading: false,
  batching: {},
  subrequests: {},
};

/**
 * querystringsearch reducer.
 * @function querystring
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export function calendarDaySearchReducer(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_CALENDAR_DAY_RESULTS}_PENDING`:
      return action.subrequest
        ? {
            ...state,
            subrequests: {
              ...state.subrequests,
              [action.subrequest]: {
                ...(state.subrequests[action.subrequest] || {
                  items: [],
                  total: 0,
                  batching: {},
                }),
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
    case `${GET_CALENDAR_DAY_RESULTS}_SUCCESS`:
      return action.subrequest
        ? {
            ...state,
            subrequests: {
              ...state.subrequests,
              [action.subrequest]: {
                error: null,
                items: action.result.items,
                total: action.result.items_total,
                loaded: true,
                loading: false,
                batching: { ...action.result.batching },
              },
            },
          }
        : {
            ...state,
            error: null,
            items: action.result.items,
            total: action.result.items_total,
            loaded: true,
            loading: false,
            batching: { ...action.result.batching },
          };
    case `${GET_CALENDAR_DAY_RESULTS}_FAIL`:
      return action.subrequest
        ? {
            ...state,
            subrequests: {
              ...state.subrequests,
              [action.subrequest]: {
                error: action.error,
                items: [],
                total: 0,
                loading: false,
                loaded: false,
                batching: {},
              },
            },
          }
        : {
            ...state,
            error: action.error,
            items: [],
            total: 0,
            loading: false,
            loaded: false,
            batching: {},
          };
    case RESET_CALENDAR_RESULTS:
      return action.subrequest
        ? {
            ...state,
            subrequests: omit(state.subrequests, [action.subrequest]),
          }
        : {
            ...state,
            error: null,
            items: [],
            total: 0,
            loading: false,
            loaded: false,
            batching: {},
          };
    default:
      return state;
  }
}
