import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { getContent, getQueryStringResults } from '@plone/volto/actions';
import {
  Pagination,
} from '@italia/components/ItaliaTheme';
import { blocks, settings } from '~/config';

const ListingBody = ({ data, properties, intl, path, isEditMode }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const content = useSelector((state) => state.content.data);
  const querystringResults = useSelector(
    (state) => state.querystringsearch.subrequests,
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (data?.query?.length > 0) {
      dispatch(
        getQueryStringResults(path, { ...data, fullobjects: 1 }, data.block),
      );
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [data]);

  const folderItems = content.is_folderish ? content.items : [];

  const loadingQuery =
    data?.query?.length > 0 && querystringResults?.[data.block]?.loading;

  const listingItems =
    data?.query?.length > 0
      ? (querystringResults &&
          querystringResults[data.block] &&
          querystringResults[data.block].items) ||
        []
      : folderItems;

  const templateConfig = blocks.blocksConfig.listing.templates;

  let templateName =
    data.template && !!templateConfig[data.template]
      ? data.template
      : 'default';

  const ListingBodyTemplate = templateConfig[templateName].template;

  function handleContentPaginationChange(e, { activePage }) {
    !isEditMode && window.scrollTo(0, 0);
    const current = activePage?.children ?? 1
    setCurrentPage(current);
    dispatch(getContent(path, null, null, current));
  }

  function handleQueryPaginationChange(e, { activePage }) {
    // !isEditMode && window.scrollTo(0, 0);
    const current = activePage?.children ?? 1
    setCurrentPage(current);
    dispatch(
      getQueryStringResults(
        path,
        { ...data, fullobjects: 1 },
        data.block,
        current,
      ),
    );
  }

  const getBackgroundClass = () => {
    const block = properties.blocks[data.block];
    if (!block?.show_block_bg) return ''

    if(block.template === 'gridGalleryTemplate') {
      return 'section section-muted section-inset-shadow py-5';
    } else {
      return 'bg-light py-5';
    }
  }

  return (
    <div className="public-ui">
      {listingItems.length > 0 ? (
        <div className={`full-width ${getBackgroundClass()}`}>
          <ListingBodyTemplate
            items={listingItems}
            isEditMode={isEditMode}
            {...data}
          />
          {data?.query?.length === 0 &&
            content.items_total > settings.defaultPageSize && (
              <div className="pagination-wrapper">
                <Pagination
                  activePage={currentPage}
                  totalPages={Math.ceil(
                    querystringResults[data.block].total /
                      (data.b_size || settings.defaultPageSize),
                  )}
                  onPageChange={handleQueryPaginationChange}
                />
              </div>
            )}
          {data?.query?.length > 0 &&
            querystringResults[data.block].total >
              (data.b_size || settings.defaultPageSize) && (
              <div className="pagination-wrapper">
                <Pagination
                  activePage={currentPage}
                  totalPages={Math.ceil(
                    querystringResults[data.block].total /
                      (data.b_size || settings.defaultPageSize),
                  )}
                  onPageChange={handleQueryPaginationChange}
                />
              </div>
            )}
        </div>
      ) : isEditMode ? (
        <div className="listing message">
          {data?.query?.length === 0 && (
            <FormattedMessage
              id="No items found in this container."
              defaultMessage="No items found in this container."
            />
          )}
          {!loadingQuery && data?.query?.length > 0 && (
            <FormattedMessage
              id="No results found."
              defaultMessage="No results found."
            />
          )}
        </div>
      ) : null}
    </div>
  );
};

ListingBody.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  path: PropTypes.string.isRequired,
  isEditMode: PropTypes.bool,
};

export default injectIntl(ListingBody);
