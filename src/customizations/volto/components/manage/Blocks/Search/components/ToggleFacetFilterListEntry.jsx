/* CUSTOMIZATIONS:
  - Agid styling
*/
import React, { useMemo } from 'react';
import { Label, Icon, Button } from 'design-react-kit';
import { defineMessages } from 'react-intl';
import { commonSearchBlockMessages } from 'design-comuni-plone-theme/helpers';

const messages = defineMessages({
  yes: {
    id: 'yes',
    defaultMessage: 'Yes',
  },
  no: {
    id: 'no',
    defaultMessage: 'No',
  },
});

function ToggleFacetFilterListEntry(props) {
  const {
    facet,
    isEditMode,
    setFacets,
    facets,
    intl,
    data,
    facetSettings,
  } = props;
  const entrySettings = useMemo(() => {
    return data.facets?.find((f) => f?.field?.value === facet)?.field;
  }, [data, facet]);
  return facets[facet] ? (
    <>
      <span className="label-title mb-2">
        {facetSettings.title ?? facetSettings?.field?.label}
      </span>
      <Label className="d-flex w-100 py-1">
        {intl.formatMessage(messages.yes)}
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
  ) : null;
}

export default ToggleFacetFilterListEntry;
