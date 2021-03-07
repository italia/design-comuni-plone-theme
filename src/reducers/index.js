/**
 * Root reducer.
 * @module reducers/root
 */

import defaultReducers from '@plone/volto/reducers';
import { searchFiltersReducer } from './searchFiltersReducer';
import { searchResultsReducer } from './searchResultsReducer';
import { calendarSearchReducer } from './calendarSearchReducer';
import { calendarDaySearchReducer } from './calendarDaySearchReducer';
import { amministrazioneTrasparenteTree } from './amministrazioneTrasparenteTree';
import { dettagliProcedimento } from './dettagliProcedimento';
import { sendActionForm } from './sendActionForm';
import { twitterPosts } from './twitterPosts';
import { eventSearchReducer } from './eventSearchReducer';

import config from '@plone/volto/registry';

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
const reducers = {
  ...defaultReducers,
  ...config.addonReducers,
  searchFilters: searchFiltersReducer,
  searchResults: searchResultsReducer,
  calendarSearch: calendarSearchReducer,
  calendarDaySearch: calendarDaySearchReducer,
  amministrazioneTrasparenteTree: amministrazioneTrasparenteTree,
  dettagliProcedimento: dettagliProcedimento,
  sendActionForm: sendActionForm,
  twitterPosts: twitterPosts,
  eventSearchResults: eventSearchReducer,
};

export default reducers;
