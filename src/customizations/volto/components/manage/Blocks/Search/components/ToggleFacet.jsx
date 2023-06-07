/* CUSTOMIZATIONS:
  - Agid styling
*/
import React from 'react';
import { Toggle, FormGroup } from 'design-react-kit';

const ToggleFacet = (props) => {
  const { facet, isEditMode, onChange, value } = props; // value, choices, isMulti, onChange,

  return (
    <div className="checkbox-facet">
      <h6 className="mb-3 columnTextTitle">
        {facet?.title ?? facet?.field?.label}
      </h6>
      <FormGroup check className="radio">
        <Toggle
          label={facet?.field?.label}
          checked={value || typeof value === 'string'}
          disabled={isEditMode}
          onChange={({ target }) => {
            onChange(facet.field.value, target.checked);
          }}
          aria-describedby={facet?.field?.label}
        />
      </FormGroup>
    </div>
  );
};

ToggleFacet.stateToValue = ({ facetSettings, index, selectedValue }) => {
  return selectedValue || typeof selectedValue === 'string';
};

ToggleFacet.valueToQuery = ({ value, facet }) => {
  return value || typeof value === 'string'
    ? {
        i: facet.field.value,
        o: 'plone.app.querystring.operation.boolean.isTrue',
        v: '',
      }
    : null;
};

export default ToggleFacet;
