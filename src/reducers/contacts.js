import { GET_CONTACTS } from 'design-comuni-plone-theme/actions';

const initialState = {
  error: null,
  result: {},
  loaded: false,
  loading: false,
};

export function contacts(state = initialState, action = {}) {
  switch (action.type) {
    case `${GET_CONTACTS}_PENDING`:
      return {
        ...state,
        error: null,
        loading: true,
        loaded: false,
      };
    case `${GET_CONTACTS}_SUCCESS`:
      return {
        ...state,
        error: null,
        result: action.result,
        loading: false,
        loaded: true,
      };
    case `${GET_CONTACTS}_FAIL`:
      return {
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
