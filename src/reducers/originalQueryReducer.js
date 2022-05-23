import { ORIGINAL_QUERY } from '@italia/actions';

const initialState = {};

export function originalQueryReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ORIGINAL_QUERY:
      if (state[action.subrequest]?.[action.blockId]) {
        return state;
      } else {
        let query = state[action.subrequest]?.[action.blockId] ?? action.query; //this to make Immutable list of action.query

        return {
          ...state,
          [action.subrequest]: {
            [action.blockId]: query,
          },
        };
      }
    default:
      return state;
  }
}
