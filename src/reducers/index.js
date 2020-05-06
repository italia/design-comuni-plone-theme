/**
 * Root reducer.
 * @module reducers/root
 */

import defaultReducers from '@plone/volto/reducers';
import { cookieConsentReducer } from 'volto-cookie-banner';
import { searchFiltersReducer } from './searchFiltersReducer';
import { getSearchFiltersReducer } from './getSearchFiltersReducer';

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
const reducers = {
  ...defaultReducers,
  cookieConsentInfos: cookieConsentReducer,
  searchFilters: searchFiltersReducer,
  searchFiltersFetched: getSearchFiltersReducer,
};

export default reducers;
