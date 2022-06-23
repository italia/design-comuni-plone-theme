import { ORIGINAL_QUERY } from '@italia/actions';
import { List } from 'immutable';

const initialState = {};

export function originalQueryReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ORIGINAL_QUERY:
      if (state[action.subrequest]?.[action.blockId]) {
        return state;
      } else {
        return {
          ...state,
          [action.subrequest]: {
            [action.blockId]: List(action.query),
          },
        };
      }
    default:
      return state;
  }
}
