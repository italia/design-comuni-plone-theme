/**
 * Root reducer.
 * @module reducers/root
 */

import defaultReducers from '@plone/volto/reducers';
import { cookieConsentReducer } from 'volto-cookie-banner';
import { searchFiltersReducer } from './searchFiltersReducer';

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
};

export default reducers;
