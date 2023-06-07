/* CUSTOMIZATIONS:
  - Agid styling
*/
import React from 'react';
import {
  selectFacetSchemaEnhancer,
  selectFacetStateToValue,
  selectFacetValueToQuery,
} from '@plone/volto/components/manage/Blocks/Search/components/base';
import { Select } from 'design-react-kit';

const SelectFacet = (props) => {
  const { facet, choices, isMulti, onChange, value, isEditMode } = props;
  const v = Array.isArray(value) && value.length === 0 ? null : value;
  return (
    <div className="select-facet">
      <h6 className="mb-3 columnTextTitle">
        {facet?.title || facet?.field?.label}
      </h6>

      <div className="bootstrap-select-wrapper">
        {/* <label htmlFor={facet['@id']}>
          {facet?.title || facet?.field?.label || ''}
        </label> */}
        {/* Cannot style with props because the kit is... the kit. Resorting to div[class*='-ValueContainer'] */}
        <Select
          placeholder={facet?.title ?? (facet?.field?.label || 'select...')}
          aria-label={facet?.title ?? (facet?.field?.label || 'select...')}
          id={facet['@id']}
          options={choices}
          isDisabled={isEditMode}
          onChange={(data) => {
            if (data) {
              onChange(
                facet.field.value,
                isMulti ? data.map(({ value }) => value) : data.value,
              );
            } else {
              // data has been removed
              onChange(facet.field.value, isMulti ? [] : '');
            }
          }}
          isMulti={facet.multiple}
          isClearable={true}
          value={v}
          isSearchable={true}
        />
      </div>
    </div>
  );
};

SelectFacet.schemaEnhancer = selectFacetSchemaEnhancer;
SelectFacet.stateToValue = selectFacetStateToValue;
SelectFacet.valueToQuery = selectFacetValueToQuery;

export default SelectFacet;
