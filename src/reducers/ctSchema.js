import { GET_CT_SCHEMA } from 'design-comuni-plone-theme/actions';

const initialState = {
  error: null,
  result: {},
  loaded: false,
  loading: false,
  subrequests: {},
};

export function ctSchema(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_CT_SCHEMA}_PENDING`:
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
    case `${GET_CT_SCHEMA}_SUCCESS`:
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
    case `${GET_CT_SCHEMA}_FAIL`:
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
    default:
      return state;
  }
}
