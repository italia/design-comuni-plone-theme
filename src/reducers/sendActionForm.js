/**
 * sendActionForm reducer.
 * @module reducers/sendActionForm/sendActionForm
 */

import { EMAIL_SEND_ACTION_FORM } from '@italia/actions/sendActionForm';

const initialState = {
  error: null,
  loaded: false,
  loading: false,
};

/**
 * sendActionForm reducer.
 * @function sendActionForm
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
export const sendActionForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${EMAIL_SEND_ACTION_FORM}_PENDING`:
      return {
        ...state,
        error: null,
        loaded: false,
        loading: true,
      };
    case `${EMAIL_SEND_ACTION_FORM}_SUCCESS`:
      return {
        ...state,
        error: null,
        loaded: true,
        loading: false,
      };
    case `${EMAIL_SEND_ACTION_FORM}_FAIL`:
      return {
        ...state,
        error: action.error,
        loaded: false,
        loading: false,
      };
    default:
      return state;
  }
};
