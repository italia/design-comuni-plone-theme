/**
 * Root reducer.
 * @module reducers/root
 */

import { searchFiltersReducer } from './searchFiltersReducer';
import { searchResultsReducer } from './searchResultsReducer';
import { calendarSearchReducer } from './calendarSearchReducer';
import { calendarDaySearchReducer } from './calendarDaySearchReducer';
import { amministrazioneTrasparenteTree } from './amministrazioneTrasparenteTree';
import { dettagliProcedimento } from './dettagliProcedimento';
import { modulisticaItems } from './modulisticaItems';
import { originalQueryReducer } from './originalQueryReducer';
import { searchBandiFiltersReducer } from './searchBandiFiltersReducer';
import { breadcrumbs } from './breadcrumbs';

/**
 * Root reducer.
 * @function
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */
const reducers = {
  searchFilters: searchFiltersReducer,
  searchResults: searchResultsReducer,
  calendarSearch: calendarSearchReducer,
  calendarDaySearch: calendarDaySearchReducer,
  amministrazioneTrasparenteTree: amministrazioneTrasparenteTree,
  dettagliProcedimento: dettagliProcedimento,
  modulisticaItems,
  originalQuery: originalQueryReducer,
  searchBandiFilters: searchBandiFiltersReducer,
  breadcrumbs: breadcrumbs,
};

export default reducers;
