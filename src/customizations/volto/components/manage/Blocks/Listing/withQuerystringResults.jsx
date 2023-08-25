/*
CUSTOMIZATIONS:
- get content from state.content.data and not from data.properties.content,
- added listingRef to scroll to start of listing, and not to start of page
- added additional filters
- added additional fields to pass to @querystring-search (config.settings.querystringAdditionalFields)
- usedeepCompareEffect and integrate custom logic for searchBlock to make it work with our implementation
- used [subrequestID] instead [id] of block, as id of subrequest to avoid block unload on duplicate contents with blocks with same id's. Volto's pr: https://github.com/plone/volto/pull/5071
*/
import React, { createRef, useEffect } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { getContent, getQueryStringResults } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { flattenToAppURL, getBaseUrl } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

import { setOriginalQuery } from 'design-comuni-plone-theme/actions';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const getVariationSettings = (variation) => {
  return config?.blocks?.blocksConfig?.listing?.variations?.find(
    (v) => v.id === variation,
  );
};

const getAdaptedQuery = (querystring, b_size, variation) => {
  const copyFields = [
    'limit',
    'query',
    'sort_on',
    'sort_order',
    'depth',
    ...(config.settings.querystringAdditionalFields ?? []),
  ];

  const variationSettings = getVariationSettings(variation) ?? {};
  return Object.assign(
    variationSettings?.fullobjects
      ? { fullobjects: 1 }
      : { metadata_fields: '_all' },
    {
      b_size: b_size,
    },
    ...copyFields.map((name) =>
      Object.keys(querystring).includes(name)
        ? { [name]: querystring[name] }
        : {},
    ),
  );
};

export default function withQuerystringResults(WrappedComponent) {
  function WithQuerystringResults(props) {
    const {
      data = {},
      id = data.block,
      //properties: content,
      properties,
      path,
      //variation,
      isEditMode,
    } = props;
    const content = useSelector((state) => state.content.data);
    const { settings } = config;
    const querystring = data.querystring || data; // For backwards compat with data saved before Blocks schema
    const subrequestID = content?.UID + '-' + id;
    const { b_size = settings.defaultPageSize } = querystring;
    const [firstLoading, setFirstLoading] = React.useState(true);
    // save the path so it won't trigger dispatch on eager router location change
    const [initialPath] = React.useState(getBaseUrl(path));

    const [currentPage, setCurrentPage] = React.useState(1);
    const querystringResults = useSelector(
      (state) => state.querystringsearch.subrequests,
    );

    const dispatch = useDispatch();
    const listingRef = createRef();
    const [additionalFilters, setAdditionalFilters] = React.useState([]);

    const originalQuery = useSelector((state) => {
      if (props?.variation?.['@type'] === 'search') {
        return state.originalQuery?.[path]?.[subrequestID];
      }
      return state.originalQuery?.[properties['@id']]?.[
        subrequestID
      ]?.toArray?.();
    });
    const folderItems = content?.is_folderish ? content.items : [];
    const hasQuery = querystring?.query?.length > 0;
    const hasLoaded = hasQuery
      ? querystringResults?.[subrequestID]?.loaded
      : true;
    const loadingQuery =
      hasQuery &&
      (querystringResults?.[subrequestID]?.loading ||
        !querystringResults?.[subrequestID]?.loaded);

    const listingItems = hasQuery
      ? querystringResults?.[subrequestID]?.items || []
      : folderItems;

    const showAsFolderListing = !hasQuery && content?.items_total > b_size;
    const showAsQueryListing =
      hasQuery && querystringResults?.[subrequestID]?.total > b_size;

    const itemsTotal = showAsFolderListing
      ? content.items_total
      : querystringResults?.[subrequestID]?.total;

    const totalPages = showAsFolderListing
      ? Math.ceil(content.items_total / b_size)
      : showAsQueryListing
      ? Math.ceil(querystringResults[subrequestID].total / b_size)
      : 0;

    const prevBatch = showAsFolderListing
      ? content.batching?.prev
      : showAsQueryListing
      ? querystringResults[subrequestID].batching?.prev
      : null;
    const nextBatch = showAsFolderListing
      ? content.batching?.next
      : showAsQueryListing
      ? querystringResults[subrequestID].batching?.next
      : null;

    function handleContentPaginationChange(e, { activePage }) {
      !isEditMode && listingRef.current.scrollIntoView({ behavior: 'smooth' });
      const current = activePage?.children ?? 1;
      setCurrentPage(current);

      dispatch(getContent(initialPath, null, null, current));
    }

    function handleQueryPaginationChange(e, { activePage }) {
      !isEditMode && listingRef.current.scrollIntoView({ behavior: 'smooth' });
      const current = activePage?.children ?? 1;
      setCurrentPage(current);
      doSearch(data, current);
    }

    // const isImageGallery =
    //   (!data.variation && data.template === 'imageGallery') ||
    //   data.variation === 'imageGallery';

    //set original query on loading component
    useEffect(() => {
      let path = properties?.['@id'];
      if (props?.variation?.['@type'] === 'search') {
        path = flattenToAppURL(props?.path);
      }

      if (
        !originalQuery &&
        path &&
        data.block &&
        querystring.query?.length > 0
      ) {
        dispatch(
          setOriginalQuery(
            path,
            data.block,
            JSON.parse(JSON.stringify(querystring.query)),
          ),
        );
      }

      if (firstLoading && querystringResults[subrequestID] && !loadingQuery) {
        setFirstLoading(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useDeepCompareEffect(() => {
      if (
        (hasQuery &&
          (isEditMode ||
            (!isEditMode && !querystringResults[subrequestID]?.loaded))) ||
        (hasQuery && props.variation?.['@type'] === 'search')
      ) {
        doSearch(data);
      }
      /* eslint-disable react-hooks/exhaustive-deps */
    }, [data, content]);

    const doSearch = (data = { querystring: { query: [] } }, page = 1) => {
      let _dataQuerystring = data?.querystring ?? data; //Backward compatibility before blockSchema

      //additional fields to pass to @querystring-search
      if (config.settings.querystringAdditionalFields?.length > 0) {
        config.settings.querystringAdditionalFields.forEach((f) => {
          if (data[f] != null) {
            _dataQuerystring[f] = data[f];
          }
        });
      }

      if (_dataQuerystring?.query?.length > 0 || additionalFilters.length > 0) {
        let query = [
          ...(originalQuery && additionalFilters.length > 0
            ? JSON.parse(JSON.stringify(originalQuery))
            : _dataQuerystring.query),
        ];

        //faccio l'override dei filtri di default
        additionalFilters.forEach((filter) => {
          let replaced = false;
          query.forEach((f) => {
            if (f.i === filter.i && f.o === filter.o) {
              replaced = true;
              f.v = filter.v;
            }
          });
          if (!replaced) {
            query.push(filter);
          }
        });

        let _querystring = { ..._dataQuerystring, query: query };

        if (page !== currentPage) {
          setCurrentPage(page);
        }
        dispatch(
          getQueryStringResults(
            path,
            getAdaptedQuery(_querystring, b_size, data.variation),
            subrequestID,
            page,
          ),
        );
      } else if (
        ((!data.variation && data.template === 'imageGallery') ||
          data.variation === 'imageGallery') &&
        _dataQuerystring?.query?.length === 0
      ) {
        dispatch(
          getQueryStringResults(
            path,
            {
              ...getAdaptedQuery(_dataQuerystring, b_size, data.variation),
              b_size: 10000000000,
              query: [
                {
                  i: 'path',
                  o: 'plone.app.querystring.operation.string.relativePath',
                  v: '',
                },
              ],
            },
            subrequestID,
          ),
        );
      }
    };

    useDeepCompareEffect(() => {
      if (!firstLoading && !loadingQuery) {
        doSearch(data);
      }
    }, [additionalFilters]);

    const addFilters = (filters = []) => {
      setCurrentPage(1);
      setAdditionalFilters(filters);
    };

    return (
      <WrappedComponent
        {...props}
        onPaginationChange={(e, { activePage }) => {
          showAsFolderListing
            ? handleContentPaginationChange(e, { activePage })
            : handleQueryPaginationChange(e, { activePage });
        }}
        total={querystringResults?.[subrequestID]?.total}
        batch_size={b_size}
        currentPage={currentPage}
        totalPages={totalPages}
        itemsTotal={itemsTotal}
        prevBatch={prevBatch}
        nextBatch={nextBatch}
        listingItems={listingItems}
        hasLoaded={hasLoaded}
        isFolderContentsListing={showAsFolderListing}
        addFilters={addFilters}
        firstLoading={firstLoading}
        loadingQuery={loadingQuery}
        listingRef={listingRef}
        hasQuery={hasQuery}
        additionalFilters={additionalFilters}
      />
    );
  }

  WithQuerystringResults.displayName = `WithQuerystringResults(${getDisplayName(
    WrappedComponent,
  )})`;

  return hoistNonReactStatics(WithQuerystringResults, WrappedComponent);
}
