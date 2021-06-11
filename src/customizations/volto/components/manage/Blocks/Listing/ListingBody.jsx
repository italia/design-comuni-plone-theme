import React, { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { getQueryStringResults, getContent } from '@plone/volto/actions';
import { Pagination, Skeleton } from '@italia/components/ItaliaTheme';
import { setOriginalQuery } from '@italia/actions';
import { isEqual } from 'lodash';

import config from '@plone/volto/registry';

const getAdaptedQuery = (querystring, b_size) => {
  const copyFields = ['limit', 'query', 'sort_on', 'sort_order', 'depth'];

  return Object.assign(
    {
      b_size: b_size,
      fullobjects: 1,
    },
    ...copyFields.map((name) =>
      Object.keys(querystring).includes(name)
        ? { [name]: querystring[name] }
        : {},
    ),
  );
};

const ListingBody = React.memo(
  ({ data, properties, path = '', isEditMode, variation }) => {
    const querystring = data.querystring || data; // For backwards compat with data saved before Blocks schema
    const [currentPage, setCurrentPage] = React.useState(1);
    //const content = properties;
    const content = useSelector((state) => state.content.data);
    const { settings } = config;
    const { b_size = settings.defaultPageSize } = querystring;

    const querystringResults = useSelector(
      (state) => state.querystringsearch.subrequests?.[data.block],
    );
    const [firstLoading, setFirstLoading] = React.useState(true);
    const dispatch = useDispatch();
    const listingRef = createRef();
    const [additionalFilters, setAdditionalFilters] = React.useState([]);

    const originalQuery = useSelector((state) => {
      return state.originalQuery?.[properties['@id']]?.[
        data.block
      ]?.querystring?.toArray?.();
    });

    useEffect(() => {
      if (
        !originalQuery &&
        properties['@id'] &&
        data.block &&
        querystring.query?.length > 0
      ) {
        dispatch(
          setOriginalQuery(
            properties['@id'],
            data.block,
            JSON.parse(JSON.stringify(querystring.query)),
          ),
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      if (
        querystring?.query?.length > 0 &&
        (isEditMode || (!isEditMode && !querystringResults?.loaded))
      ) {
        doSearch(data);
      }
      /* eslint-disable react-hooks/exhaustive-deps */
    }, [data]);

    const doSearch = (data = { querystring: { query: [] } }, page = 1) => {
      const _dataQuerystring = data?.querystring ?? data; //Backward compatibility before blockSchema

      if (data.querystring.query?.length > 0 || additionalFilters.length > 0) {
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
            getAdaptedQuery(_querystring, b_size),
            data.block,
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
              ...getAdaptedQuery(_dataQuerystring, b_size),
              query: [
                {
                  i: 'path',
                  o: 'plone.app.querystring.operation.string.relativePath',
                  v: '',
                },
              ],
            },
            data.block,
            page,
          ),
        );
      }
    };

    useEffect(() => {
      if (!firstLoading) {
        doSearch(data);
      }
    }, [additionalFilters]);

    const addFilters = (filters = []) => {
      setCurrentPage(1);
      setAdditionalFilters(filters);
    };

    const folderItems = content?.is_folderish ? content.items : [];

    const loadingQuery =
      querystring?.query?.length > 0 && querystringResults?.loading;

    if (firstLoading && querystringResults && !loadingQuery) {
      setFirstLoading(false);
    }
    const listingItems =
      querystring?.query?.length > 0
        ? querystringResults?.items || []
        : folderItems;

    let ListingBodyTemplate;
    let templateConfig;

    // Legacy support if template is present
    if (data.template && !data.variation) {
      const variations =
        config.blocks?.blocksConfig['listing']?.variations || [];

      let legacyTemplateConfig = variations.find(
        (item) => item.id === data.template,
      );

      if (!legacyTemplateConfig) {
        legacyTemplateConfig = variations.find(
          (item) => item.isDefault === true,
        );
      }
      templateConfig = legacyTemplateConfig;
      ListingBodyTemplate = legacyTemplateConfig.template;
    } else {
      templateConfig = variation;
      ListingBodyTemplate = variation.template;
    }

    const SkeletonTemplate = templateConfig.skeleton || Skeleton;

    function handleContentPaginationChange(e, { activePage }) {
      !isEditMode && listingRef.current.scrollIntoView({ behavior: 'smooth' });
      const current = activePage?.children ?? 1;
      setCurrentPage(current);
      dispatch(getContent(path, null, null, current));
    }

    function handleQueryPaginationChange(e, { activePage }) {
      !isEditMode && listingRef.current.scrollIntoView({ behavior: 'smooth' });
      const current = activePage?.children ?? 1;
      setCurrentPage(current);
      doSearch(data, current);
    }

    const getBackgroundClass = () => {
      const block = properties.blocks[data.block];
      if (!block?.show_block_bg) return '';

      let bg_color = data.bg_color ? `bg-${data.bg_color}` : '';

      if (block.template === 'gridGalleryTemplate') {
        return `section section-muted section-inset-shadow py-5 ${bg_color}`;
      } else {
        return `bg-light py-5 ${bg_color}`;
      }
    };

    const getBlockClasses = () => {
      let bg_color = getBackgroundClass();
      let items_color = data.items_color
        ? `items-color-${data.items_color}`
        : '';

      return `${bg_color} ${items_color}`;
    };

    return (
      <div className="public-ui">
        {loadingQuery && (
          <div className={`full-width ${getBlockClasses()}`} ref={listingRef}>
            <SkeletonTemplate {...data} />
          </div>
        )}

        {!loadingQuery &&
        (listingItems.length > 0 || additionalFilters?.length > 0) ? (
          <div className={`full-width ${getBlockClasses()}`} ref={listingRef}>
            <ListingBodyTemplate
              items={listingItems}
              isEditMode={isEditMode}
              {...data}
              addFilters={addFilters}
              additionalFilters={additionalFilters}
              items_total={
                querystring?.query?.length === 0
                  ? content?.items_total
                  : querystringResults?.total
              }
              loading={loadingQuery}
              firstLoading={firstLoading}
            />
            {querystring?.query?.length === 0 && content?.items_total > b_size && (
              <div className="pagination-wrapper">
                <Pagination
                  activePage={currentPage}
                  totalPages={Math.ceil(content.items_total / b_size)}
                  onPageChange={handleContentPaginationChange}
                />
              </div>
            )}
            {(querystring?.query?.length > 0 ||
              additionalFilters?.length > 0) &&
              querystringResults.total > b_size && (
                <div className="pagination-wrapper" key={currentPage}>
                  <Pagination
                    activePage={currentPage}
                    totalPages={Math.ceil(querystringResults.total / b_size)}
                    onPageChange={handleQueryPaginationChange}
                  />
                </div>
              )}
          </div>
        ) : isEditMode ? (
          <div className="listing message">
            {querystring?.query?.length === 0 && (
              <FormattedMessage
                id="No items found in this container."
                defaultMessage="No items found in this container."
              />
            )}
            {!loadingQuery && querystring?.query?.length > 0 && (
              <FormattedMessage
                id="No results found."
                defaultMessage="No results found."
              />
            )}
          </div>
        ) : null}
      </div>
    );
  },
  function areEqual(prevProps, nextProps) {
    return isEqual(prevProps.data, nextProps.data);
  },
);

ListingBody.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  path: PropTypes.string.isRequired,
  isEditMode: PropTypes.bool,
};

export default injectIntl(ListingBody);
