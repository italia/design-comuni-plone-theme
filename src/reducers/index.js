/**
 * Root reducer.
 * @module reducers/root
 */

import defaultReducers from '@plone/volto/reducers';
import { addonReducers } from '@italia/config';
import { searchFiltersReducer } from './searchFiltersReducer';
import { searchResultsReducer } from './searchResultsReducer';

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
const reducers = {
  ...defaultReducers,
  ...addonReducers,
  searchFilters: searchFiltersReducer,
  searchResults: searchResultsReducer,
};

export default reducers;
