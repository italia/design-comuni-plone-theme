/* CUSTOMIZATIONS:
  - Agid styling
  - Use with more plone.app.querystring.date operations
*/
import React, { useMemo } from 'react';
import { Label, Icon, Button } from 'design-react-kit';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { commonSearchBlockMessages } from 'design-comuni-plone-theme/helpers';

function DateRangeFacetFilterListEntry(props) {
  const {
    facet,
    isEditMode,
    setFacets,
    facets,
    data,
    intl,
    searchData,
    moment: momentLib,
    facetSettings,
  } = props;
  const moment = momentLib.default;
  const entrySettings = useMemo(() => {
    return data.facets?.find((f) => f?.field?.value === facet)?.field;
  }, [data, facet]);
  const dateRangeLabel = useMemo(() => {
    const queryIndex = searchData?.query?.find((q) => q.i === facet);
    let start, end;
    if (queryIndex) {
      if (queryIndex.o.includes('date.largerThan'))
        [start, end] = [queryIndex.v, null];
      else if (queryIndex.o.includes('date.lessThan'))
        [start, end] = [null, queryIndex.v];
      else if (queryIndex.o.includes('date.between'))
        [start, end] = queryIndex.v;
    }

    let label;
    if (start) {
      if (end)
        label = `${intl.formatMessage(
          commonSearchBlockMessages.DateRangeFacetFilterListEntryDalAl,
          {
            start: moment(start).locale(intl.locale).format('DD-MM-YYYY'),
            end: moment(end).locale(intl.locale).format('DD-MM-YYYY'),
          },
        )}`;
      else
        label = `${intl.formatMessage(
          commonSearchBlockMessages.DateRangeFacetFilterListEntryDal,
          {
            start: moment(start).locale(intl.locale).format('DD-MM-YYYY'),
          },
        )}`;
    } else {
      if (end)
        label = `${intl.formatMessage(
          commonSearchBlockMessages.DateRangeFacetFilterListEntryAl,
          {
            end: moment(end).locale(intl.locale).format('DD-MM-YYYY'),
          },
        )}`;
    }
    return label;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facet, searchData]);
  return (
    <>
      <span className="label-title mb-2">
        {facetSettings.title ?? facetSettings?.field?.label}
      </span>
      <Label className="d-flex w-100 py-1">
        <span>{dateRangeLabel}</span>
        <Button
          className="p-0"
          onClick={() => {
            const filteredFacets = Object.assign(
              {},
              ...Object.keys(facets)
                .filter((f) => f !== facet)
                .map((f) => ({ [f]: facets[f] })),
            );
            !isEditMode && setFacets(filteredFacets);
          }}
          aria-label={intl.formatMessage(
            commonSearchBlockMessages.clearFilter,
            {
              filterName: entrySettings?.label ?? '',
            },
          )}
          title={intl.formatMessage(commonSearchBlockMessages.clearFilter, {
            filterName: entrySettings?.label ?? '',
          })}
        >
          <Icon
            icon="it-close"
            size="md"
            aria-label={intl.formatMessage(
              commonSearchBlockMessages.clearFilter,
              {
                filterName: entrySettings?.label ?? '',
              },
            )}
            title={intl.formatMessage(commonSearchBlockMessages.clearFilter, {
              filterName: entrySettings?.label ?? '',
            })}
          />
        </Button>
      </Label>
    </>
  );
}

export default injectLazyLibs(['moment'])(DateRangeFacetFilterListEntry);
