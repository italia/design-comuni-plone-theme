/**
 * Search component.
 * @module components/theme/Search/Search
 */

import loadable from '@loadable/component';

const Search = loadable(() =>
  import(
    /* webpackChunkName: "DCPTSearch" */ 'design-comuni-plone-theme/components/ItaliaTheme/Search/Search'
  ),
);
export default Search;
