/* CUSTOMIZATIONS:
  - Agid styling
*/
import React, { useMemo } from 'react';
import { Label, Icon, Button } from 'design-react-kit';
import { selectFacetStateToValue } from '@plone/volto/components/manage/Blocks/Search/components/base';
import { commonSearchBlockMessages } from 'design-comuni-plone-theme/helpers';

function SelectFacetFilterListEntry(props) {
  const {
    facet,
    isEditMode,
    setFacets,
    facets,
    querystring,
    facetSettings,
    data,
    intl,
  } = props;

  const selectedValue = useMemo(
    () =>
      selectFacetStateToValue({
        facetSettings,
        index: querystring?.indexes?.[facet] ?? {},
        selectedValue: facets[facet],
      }),
    [querystring, facet, facets, facetSettings],
  );
  return typeof facets[facet] === 'string' ? (
    <>
      <span className="label-title mb-2">
        {facetSettings.title ?? facetSettings?.field?.label}
      </span>

      <Label className="d-flex w-100 py-1">
        <span>{selectedValue?.label || ''}</span>
        <Button
          className="p-0"
          onClick={() => {
            !isEditMode &&
              setFacets({
                ...facets,
                [facet]: '',
              });
          }}
          aria-label={intl.formatMessage(
            commonSearchBlockMessages.clearFilter,
            {
              filterName: selectedValue?.label ?? '',
            },
          )}
          title={intl.formatMessage(commonSearchBlockMessages.clearFilter, {
            filterName: selectedValue?.label ?? '',
          })}
        >
          <Icon
            icon="it-close"
            size="md"
            aria-label={intl.formatMessage(
              commonSearchBlockMessages.clearFilter,
              {
                filterName: selectedValue?.label ?? '',
              },
            )}
            title={intl.formatMessage(commonSearchBlockMessages.clearFilter, {
              filterName: selectedValue?.label ?? '',
            })}
          />
        </Button>
      </Label>
    </>
  ) : (
    <>
      {facets[facet]?.length > 0 && (
        <span className="label-title mb-2">
          {facetSettings.title ?? facetSettings?.field?.label}
        </span>
      )}
      {facets[facet].map((entry, i) => {
        const label = Array.isArray(selectedValue)
          ? selectedValue?.find((sv) => sv.value === entry)?.label ?? ''
          : '';
        return (
          <Label key={i} className="d-flex w-100 py-1">
            <span>{label}</span>
            <Button
              className="p-0"
              onClick={() => {
                const entries = facets[facet].filter((item) => item !== entry);
                !isEditMode &&
                  setFacets({
                    ...facets,
                    [facet]: entries,
                  });
              }}
              aria-label={intl.formatMessage(
                commonSearchBlockMessages.clearFilter,
                {
                  filterName: label,
                },
              )}
              title={intl.formatMessage(commonSearchBlockMessages.clearFilter, {
                filterName: label,
              })}
            >
              <Icon
                icon="it-close"
                size="md"
                aria-label={intl.formatMessage(
                  commonSearchBlockMessages.clearFilter,
                  {
                    filterName: label,
                  },
                )}
                title={intl.formatMessage(
                  commonSearchBlockMessages.clearFilter,
                  {
                    filterName: label,
                  },
                )}
              />
            </Button>
          </Label>
        );
      })}
    </>
  );
}

export default SelectFacetFilterListEntry;
