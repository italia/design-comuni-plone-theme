/* CUSTOMIZATIONS:
  - Agid styling
*/
import React from 'react';
import { Form, FormGroup, Input, Label } from 'design-react-kit';
import {
  selectFacetSchemaEnhancer,
  selectFacetStateToValue,
  selectFacetValueToQuery,
} from '@plone/volto/components/manage/Blocks/Search/components/base';

/**
 * A facet that uses radio/checkboxes to provide an explicit list of values for
 * filtering
 */
const CheckboxFacet = (props) => {
  const { facet, choices, isMulti, onChange, value, isEditMode } = props;
  const facetValue = value;

  return (
    <div className="checkbox-facet">
      <h6 className="mb-4 columnTextTitle">
        {facet.title ?? facet?.field?.label}
      </h6>
      <Form className="entries">
        {choices.map(({ label, value }, i) => (
          <FormGroup className="entry form-check-group" check key={value}>
            <Input
              disabled={isEditMode}
              id={label}
              type={'checkbox'}
              checked={
                isMulti
                  ? !!facetValue?.find((f) => f.value === value)
                  : facetValue && facetValue.value === value
              }
              onChange={({ target }) => {
                onChange(
                  facet.field.value,
                  isMulti
                    ? [
                        ...facetValue
                          .filter((f) => f.value !== value)
                          .map((f) => f.value),
                        ...(target.checked ? [value] : []),
                      ]
                    : target.checked
                      ? value
                      : null,
                );
              }}
            />
            <Label for={label} check>
              {label}
            </Label>
          </FormGroup>
        ))}
      </Form>
    </div>
  );
};

CheckboxFacet.schemaEnhancer = selectFacetSchemaEnhancer;
CheckboxFacet.stateToValue = selectFacetStateToValue;
CheckboxFacet.valueToQuery = selectFacetValueToQuery;

export default CheckboxFacet;
