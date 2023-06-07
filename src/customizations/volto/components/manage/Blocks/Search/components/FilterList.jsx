/* CUSTOMIZATIONS:
  - Agid styling
  - Pass more useful props to components
*/
import React, { useMemo, useRef } from 'react';
import { Button, Icon } from 'design-react-kit';
import { defineMessages, injectIntl } from 'react-intl';
import { isEmpty } from 'lodash';
import { resolveExtension } from '@plone/volto/helpers';
import cx from 'classnames';
import { compose } from 'redux';
import { useClickOutside } from '../utils';
import { commonSearchBlockMessages } from 'design-comuni-plone-theme/helpers';
import config from '@plone/volto/registry';

const messages = defineMessages({
  currentFilters: {
    id: 'Current filters applied',
    defaultMessage: 'Current filters applied',
  },
  clearFilters: {
    id: 'Clear filters',
    defaultMessage: 'Clear filters',
  },
});

/**
 * A list of active filtered values and controls to clear those filters.
 *
 */
const FilterList = (props) => {
  const { data = {}, facets = {}, setFacets, isEditMode, intl } = props;
  const definedFacets = data.facets || [];
  const [isOpened, setIsOpened] = React.useState(false);
  const totalFilters = useMemo(
    () =>
      definedFacets.filter(
        ({ field, type }) =>
          field &&
          Object.keys(facets).includes(field.value) &&
          (type !== 'toggleFacet'
            ? !isEmpty(facets[field.value])
            : facets[field.value]),
      ).length,
    [definedFacets, facets],
  );
  const {
    types: facetWidgetTypes,
  } = config.blocks.blocksConfig.search.extensions.facetWidgets;
  const closeFilters = () => setIsOpened(false);
  const ref = useRef();
  useClickOutside(ref, closeFilters);

  return totalFilters > 0 ? (
    <div className={'accordion-wrapper filter-listing'} ref={ref}>
      <button
        onClick={() => {
          setIsOpened(!isOpened);
        }}
        aria-expanded={isOpened}
        aria-controls="collapsedContent"
        aria-labelledby={intl.formatMessage(messages.currentFilters)}
        className={cx('filter-list-header accordion-header', {
          'bg-white': isOpened,
          'bg-transparent': !isOpened,
        })}
        id="headingAccordion"
      >
        <div className="filter-list-title" aria-live="polite">
          <div className="accordion-control">
            <Icon color="primary" icon={'it-funnel'} size="sm" />
            <Icon
              color="primary"
              icon={isOpened ? 'it-collapse' : 'it-expand'}
              className="indicator"
              size="md"
            />
          </div>
          {intl.formatMessage(messages.currentFilters)}: {totalFilters}
        </div>
      </button>
      <div
        id="collapsedContent"
        className={cx('accordion-content filter-list-content', {
          'bg-white': isOpened,
          'bg-transparent': !isOpened,
        })}
        role="region"
        aria-labelledby="headingAccordion"
        aria-expanded={isOpened}
        aria-hidden={!isOpened}
      >
        <div className="filter-list accordion-inner bg-white py-4">
          {data.facets?.map((facetSettings, i) => {
            const {
              filterListComponent: FilterListComponent,
            } = resolveExtension('type', facetWidgetTypes, facetSettings);
            const facet = facetSettings?.field?.value;

            if (!facet) return null;
            return (
              <div key={i}>
                {Object.keys(facets).includes(facet) && !!facets[facet] && (
                  <div className="filter-list-group px-2" key={i}>
                    <FilterListComponent
                      {...props}
                      facet={facet}
                      intl={intl}
                      facetSettings={facetSettings}
                    />
                  </div>
                )}
              </div>
            );
          })}
          <Button
            icon
            color="danger"
            size="md"
            outline
            className="clear-filters"
            onClick={(e) => {
              e.stopPropagation();
              !isEditMode && setFacets({});
            }}
            aria-label={intl.formatMessage(
              commonSearchBlockMessages.clearAllFilters,
            )}
            title={intl.formatMessage(
              commonSearchBlockMessages.clearAllFilters,
            )}
          >
            <Icon
              icon="it-delete"
              title={intl.formatMessage(
                commonSearchBlockMessages.clearAllFilters,
              )}
              aria-label={intl.formatMessage(
                commonSearchBlockMessages.clearAllFilters,
              )}
            />
            {intl.formatMessage(messages.clearFilters)}
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default compose(injectIntl)(FilterList);
