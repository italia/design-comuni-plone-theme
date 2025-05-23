/* CUSTOMIZATIONS:
  - Agid styling
  - Add class .block.listing in listing body container div to use
    existing listing template styles
  - Inspired from
    https://github.com/plone/volto/commit/211d9bea13119cc430db9d53a4740a860781ca2e
    the way to handle search sort. If searchableText is setted, discard default sorting and uses plone's ranking only if is configured from sidebar. (Changed applyDefaults fn passing usePloneRanking)
*/

import React, { useState } from 'react';

import ListingBody from '@plone/volto/components/manage/Blocks/Listing/ListingBody';
import { withBlockExtensions } from '@plone/volto/helpers';

import {
  withQueryString,
  withSearch,
} from '@plone/volto/components/manage/Blocks/Search/hocs';
import config from '@plone/volto/registry';
import cx from 'classnames';
import { isEqual, isFunction } from 'lodash';
import { useSelector } from 'react-redux';
import { compose } from 'redux';
import { useEffect } from 'react';

const getListingBodyVariation = (data) => {
  const { variations } = config.blocks.blocksConfig.listing;

  let variation = data.listingBodyTemplate
    ? variations.find(({ id }) => id === data.listingBodyTemplate)
    : variations.find(({ isDefault }) => isDefault);

  if (!variation) variation = variations[0];

  return variation;
};

const isfunc = (obj) => isFunction(obj) || typeof obj === 'function';

const _filtered = (obj) =>
  Object.assign(
    {},
    ...Object.keys(obj).map((k) => {
      const reject = k !== 'properties' && !isfunc(obj[k]);
      return reject ? { [k]: obj[k] } : {};
    }),
  );

const blockPropsAreChanged = (prevProps, nextProps) => {
  const prev = _filtered(prevProps);
  const next = _filtered(nextProps);

  return isEqual(prev, next);
};

const applyDefaults = (data, root, usePloneRanking) => {
  const defaultQuery = [
    {
      i: 'path',
      o: 'plone.app.querystring.operation.string.absolutePath',
      v: root || '/',
    },
  ];

  const searchBySearchableText = data.query.filter(
    (item) => item['i'] === 'SearchableText',
  ).length;

  let sort_on = { sort_on: data?.sort_on ?? 'effective' };
  let sort_order = { sort_order: data?.sort_order ?? 'descending' };

  if (usePloneRanking && searchBySearchableText > 0) {
    sort_on = undefined;
    sort_order = undefined;
  }

  const result = {
    ...data,
    query: data?.query?.length ? data.query : defaultQuery,
  };
  if (!sort_on) {
    delete result.sort_on;
  }
  if (!sort_order) {
    delete result.sort_order;
  }
  return result;
};

const SearchBlockView = (props) => {
  const { data, searchData, mode = 'view', variation } = props;

  const Layout =
    variation?.view ||
    config.blocks.blocksConfig.search.variations.find(
      (f) => f.id === 'facetsRightSide',
    );

  const dataListingBodyVariation = getListingBodyVariation(data).id;
  const [selectedView, setSelectedView] = React.useState(
    dataListingBodyVariation,
  );

  // in the block edit you can change the used listing block variation,
  // but it's cached here in the state. So we reset it.
  React.useEffect(() => {
    if (mode !== 'view') {
      setSelectedView(dataListingBodyVariation);
    }
  }, [dataListingBodyVariation, mode]);

  const root = useSelector((state) => state.breadcrumbs.root);
  const [defaultListingBodyData] = React.useState(
    applyDefaults(searchData, root, data.usePloneRanking),
  );
  const listingBodyData = applyDefaults(searchData, root, data.usePloneRanking);

  const { variations } = config.blocks.blocksConfig.listing;
  const listingBodyVariation = variations.find(({ id }) => id === selectedView);

  const query = listingBodyData.query;
  const resultsRef = React.forwardRef(null);

  useEffect(() => {
    if (
      JSON.stringify(defaultListingBodyData.query) !== JSON.stringify(query)
    ) {
      //fai lo scroll solo quando vengono modificati i filtri dall'utente. Evita lo scroll al primo load
      resultsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [query]);

  if (!Layout) return null;
  return (
    <div className={cx('block search', { 'public-ui': mode === 'edit' })}>
      <Layout
        {...props}
        isEditMode={mode === 'edit'}
        selectedView={selectedView}
        setSelectedView={setSelectedView}
        resultsRef={resultsRef}
      >
        {/* Add class .block.listing to benefit from existing listing template styles */}
        <div className="block listing search-results">
          <ListingBody
            variation={{ ...data, ...listingBodyVariation }}
            data={listingBodyData}
            path={props.path}
            isEditMode={mode === 'edit'}
          />
        </div>
      </Layout>
    </div>
  );
};

export const SearchBlockViewComponent = compose(
  withBlockExtensions,
  (Component) => React.memo(Component, blockPropsAreChanged),
)(SearchBlockView);

export default compose(withQueryString, withSearch())(SearchBlockViewComponent);
