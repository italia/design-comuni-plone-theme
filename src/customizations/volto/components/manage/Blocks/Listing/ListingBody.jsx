/*
CUSTOMIZATIONS:
-added skeleton
- added additionalFilters
- 'background class' and 'block class'
- 'background class' and 'block class' logic for search block
- search block integration
*/
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import config from '@plone/volto/registry';
import withQuerystringResults from '@plone/volto/components/manage/Blocks/Listing/withQuerystringResults';
import {
  Pagination,
  Skeleton,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

import { isEqual } from 'lodash';

const ListingBody = React.memo(
  withQuerystringResults(
    (props) => {
      const {
        data = {},
        isEditMode,
        listingItems,
        totalPages,
        itemsTotal,
        onPaginationChange,
        variation,
        currentPage,
        isFolderContentsListing,
        hasLoaded,
        hasQuery,
        addFilters,
        firstLoading,
        loadingQuery,
        listingRef,
        additionalFilters,
      } = props;
      let ListingBodyTemplate;
      let templateConfig;
      // Legacy support if template is present
      const variations =
        config.blocks?.blocksConfig['listing']?.variations || [];
      const defaultVariation = variations.filter((item) => item.isDefault)?.[0];

      if (data.template && !data.variation) {
        let legacyTemplateConfig = variations.find(
          (item) => item.id === data.template,
        );

        if (!legacyTemplateConfig) {
          legacyTemplateConfig = defaultVariation;
        }
        templateConfig = legacyTemplateConfig;
        ListingBodyTemplate = legacyTemplateConfig.template;
      } else {
        templateConfig = variation ?? defaultVariation;
        ListingBodyTemplate = templateConfig?.template;
      }

      const SkeletonTemplate = templateConfig.skeleton || Skeleton;

      const getBackgroundClass = () => {
        const isSearchBlockResults = variation?.['@type'] === 'search';
        const block = isSearchBlockResults ? variation : data;

        if (!block?.show_block_bg && !isSearchBlockResults) return 'full-width';

        let bg_color = config.blocks?.blocksConfig[
          'listing'
        ]?.listing_bg_colors.some((color) => color.name === data.bg_color)
          ? `bg-${data.bg_color}`
          : 'bg-light';

        if (block.template === 'gridGalleryTemplate') {
          return `section section-muted section-inset-shadow py-5 ${bg_color} ${
            isSearchBlockResults ? '' : 'full-width'
          }`;
        } else {
          return `py-5 ${bg_color} ${
            isSearchBlockResults ? 'template-wrapper' : 'full-width'
          }`;
        }
      };

      const getBlockClasses = () => {
        let bg_color = getBackgroundClass();
        let items_color = data.items_color
          ? `items-color-${data.items_color}`
          : '';

        return `${bg_color} ${items_color}`;
      };
      // Props have different locations in seachBlock
      // Also need to purge title from searchblock schema, it's the name of the listing template used
      const listingBodyProps =
        variation?.['@type'] !== 'search' ? data : { ...variation, title: '' };
      return (
        <div className="public-ui">
          {loadingQuery && (
            <div className={`${getBlockClasses()}`} ref={listingRef}>
              <SkeletonTemplate {...listingBodyProps} />
            </div>
          )}
          {!loadingQuery &&
          (listingItems.length > 0 || additionalFilters?.length > 0) ? (
            <div
              className={`${getBlockClasses()}`}
              ref={listingRef}
              aria-live="polite"
            >
              <ListingBodyTemplate
                items={listingItems}
                isEditMode={isEditMode}
                {...listingBodyProps}
                addFilters={addFilters}
                additionalFilters={additionalFilters}
                items_total={itemsTotal}
                loading={loadingQuery}
                firstLoading={firstLoading}
              />
              {totalPages > 1 && (
                <div className="pagination-wrapper">
                  <Pagination
                    activePage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPaginationChange}
                  />
                </div>
              )}
            </div>
          ) : isEditMode ? (
            <div className="listing message" aria-live="polite">
              {isFolderContentsListing && (
                <FormattedMessage
                  id="No items found in this container."
                  defaultMessage="No items found in this container."
                />
              )}
              {hasLoaded && hasQuery && (
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
  ),
);

export default injectIntl(ListingBody);
