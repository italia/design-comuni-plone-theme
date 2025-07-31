import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { getCTSchema } from 'design-comuni-plone-theme/actions';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import FormFieldWrapper from '@plone/volto/components/manage/Widgets/FormFieldWrapper';
import { normalizeValue } from '@plone/volto/components/manage/Widgets/SelectUtils';

import {
  Option,
  DropdownIndicator,
  selectTheme,
  customSelectStyles,
} from '@plone/volto/components/manage/Widgets/SelectStyling';

const CTFieldsWidget = ({ ct, reactSelect, value, ...props }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const Select = reactSelect.default;
  const exclude_fieldsets = ['ownership', 'seo', 'settings'];
  const ct_schema = useSelector(
    (state) => state.ct_schema?.subrequests?.[ct]?.result,
  );

  useEffect(() => {
    if (!ct_schema) {
      dispatch(getCTSchema(ct));
    }
  }, [ct, ct_schema, dispatch]);

  const groups_choices =
    ct_schema?.fieldsets
      ?.filter((fieldset) => exclude_fieldsets.indexOf(fieldset.id) < 0)
      .map((fieldset) => {
        return {
          label: fieldset.title,
          options: fieldset.fields.map((f) => {
            return {
              value: f,
              label: ct_schema.properties[f].title,
            };
          }),
        };
      }) ?? [];

  const disabled = props.disabled || props.isDisabled;
  const normalizedValue = normalizeValue(
    groups_choices.reduce((acc, fieldset) => {
      return [...acc, ...fieldset.options];
    }, []),
    value,
    intl,
  );

  return groups_choices?.length > 0 ? (
    <FormFieldWrapper {...props}>
      <Select
        id={`field-${props.id}`}
        name={props.id}
        disabled={disabled}
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder={props.placeholder ?? 'Seleziona un valore'}
        options={groups_choices}
        styles={customSelectStyles}
        theme={selectTheme}
        components={{ DropdownIndicator, Option }}
        value={normalizedValue}
        onChange={(selectedOption) => {
          props.onChange(
            props.id,
            selectedOption && selectedOption.value !== 'no-value'
              ? selectedOption.value
              : undefined,
          );
        }}
      />
    </FormFieldWrapper>
  ) : (
    <></>
  );
};

export default injectLazyLibs('reactSelect')(CTFieldsWidget);
