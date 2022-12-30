/**
 * Search filters reducer
 * @module src/reducers/getdettagliProcedimento
 */

import {
  GET_MODULISTICA_ITEMS,
  RESET_MODULISTICA_ITEMS,
} from 'design-comuni-plone-theme/actions';

const initialState = {
  error: null,
  data: {},
  loading: false,
  loaded: false,
};

export const modulisticaItems = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_MODULISTICA_ITEMS}_PENDING`:
      return {
        ...state,
        error: null,
        loading: true,
        loaded: false,
      };

    case `${GET_MODULISTICA_ITEMS}_SUCCESS`:
      return {
        ...state,
        error: null,
        data: action.result,
        loading: false,
        loaded: true,
      };

    case `${GET_MODULISTICA_ITEMS}_FAIL`:
      return {
        ...state,
        error: action.error,
        loading: false,
        loaded: false,
      };
    case RESET_MODULISTICA_ITEMS:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
