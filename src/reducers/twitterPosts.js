/**
 * Search twitterPosts reducer
 * @module src/reducers/twitterPosts
 */

import { GET_TWITTER_POSTS } from '@italia/actions';

const initialState = {
  error: null,
  hasError: false,
  result: {},
  loadingResults: false,
};

export const twitterPosts = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_TWITTER_POSTS}_PENDING`:
      return {
        ...state,
        loadingResults: true,
      };

    case `${GET_TWITTER_POSTS}_SUCCESS`:
      return {
        ...state,
        result: action.result,
        loadingResults: false,
        error: null,
        hasError: false,
      };

    case `${GET_TWITTER_POSTS}_FAIL`:
      return {
        ...state,
        error: action.error,
        hasError: true,
        loadingResults: false,
      };

    default:
      return state;
  }
};
