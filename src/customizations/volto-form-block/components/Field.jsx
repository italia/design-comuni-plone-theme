/**
 * Field
 * @module components/manage/Blocks/IconsBlocks/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import {
  Input,
  FormGroup,
  Label,
} from 'design-react-kit/dist/design-react-kit';
import Select from 'react-select';
import FileWidget from '@italia/components/ItaliaTheme/manage/Widgets/FileWidget';

const messages = defineMessages({
  select_a_value: {
    id: 'form_select_a_value',
    defaultMessage: 'Seleziona un valore',
  },
});

/**
 * Field class.
 * @class View
 * @extends Component
 */
const Field = ({
  label,
  description,
  name,
  field_type,
  required,
  input_values,
  value,
  onChange,
  isOnEdit,
  valid,
  disabled = false,
}) => {
  const intl = useIntl();

  const getLabel = () => {
    return required ? label + ' *' : label;
  };

  const isInvalid = () => {
    return !isOnEdit && !valid;
  };

  return (
    <div className="field">
      {field_type === 'text' && (
        <Input
          id={name}
          name={name}
          label={getLabel()}
          type="text"
          required={required}
          infoText={description}
          disabled={disabled}
          readOnly={disabled}
          invalid={isInvalid() ? 'true' : null}
          onChange={(e) => {
            onChange(name, e.target.value);
          }}
          {...(value ? { value } : {})}
        />
      )}
      {field_type === 'textarea' && (
        <Input
          id={name}
          name={name}
          label={getLabel()}
          type="textarea"
          rows={10}
          required={required}
          infoText={description}
          disabled={disabled}
          readOnly={disabled}
          invalid={isInvalid() ? 'true' : null}
          onChange={(e) => {
            onChange(name, e.target.value);
          }}
          {...(value ? { value } : {})}
        />
      )}
      {field_type === 'select' && (
        <div className="form-group">
          <div
            className={`bootstrap-select-wrapper ${
              isInvalid() ? 'is-invalid' : ''
            }`}
          >
            <label htmlFor={name}>{getLabel()}</label>
            <Select
              components={{
                IndicatorSeparator: null,
              }}
              id={name}
              name={name}
              label={getLabel()}
              infoText={description}
              isSearchable={true}
              onChange={(v) => {
                onChange(name, v.value);
              }}
              options={[
                ...(input_values?.map((v) => ({ value: v, label: v })) ?? []),
              ]}
              isDisabled={disabled}
              placeholder={intl.formatMessage(messages.select_a_value)}
              aria-label={intl.formatMessage(messages.select_a_value)}
              classNamePrefix="react-select"
              className={isInvalid() ? 'is-invalid' : ''}
            />
          </div>
        </div>
      )}
      {field_type === 'radio' && (
        <div className="form-group">
          <div
            className={`bootstrap-checkbox-radio-wrapper ${
              isInvalid() ? 'is-invalid' : ''
            }`}
          >
            <label className="active">{getLabel()}</label>
            {input_values?.map((v, index) => (
              <FormGroup check key={v + name + index}>
                <Input
                  id={v + name}
                  name={name}
                  type="radio"
                  disabled={disabled}
                  readOnly={disabled}
                  onChange={(e) => {
                    onChange(name, v);
                  }}
                  invalid={isInvalid() ? 'true' : null}
                />
                <Label for={v + name} check>
                  {v}
                </Label>
              </FormGroup>
            ))}
            {description && (
              <small className="form-text text-muted">{description}</small>
            )}
          </div>
        </div>
      )}
      {field_type === 'checkbox' && (
        <div className="form-group">
          <div
            className={`bootstrap-checkbox-radio-wrapper ${
              isInvalid() ? 'is-invalid' : ''
            }`}
          >
            <label className="active">{getLabel()}</label>
            {input_values?.map((v, index) => (
              <FormGroup check key={v + name + index}>
                <Input
                  id={v + name}
                  name={name}
                  type="checkbox"
                  checked={value?.indexOf(v) > -1}
                  onChange={(e) => {
                    let values = JSON.parse(JSON.stringify(value ?? []));
                    if (e.target.checked) {
                      values.push(v);
                    } else {
                      values.splice(values.indexOf(v), 1);
                    }
                    onChange(name, values);
                  }}
                  invalid={isInvalid() ? 'true' : null}
                />
                <Label for={v + name} check>
                  {v}
                </Label>
              </FormGroup>
            ))}
            {description && (
              <small className="form-text text-muted">{description}</small>
            )}
          </div>
        </div>
      )}
      {field_type === 'date' && (
        <Input
          id={name}
          name={name}
          label={getLabel()}
          type="date"
          required={required}
          infoText={description}
          disabled={disabled}
          readOnly={disabled}
          invalid={isInvalid() ? 'true' : null}
          onChange={(e) => {
            onChange(name, e.target.value);
          }}
        />
      )}
      {field_type === 'attachment' && (
        <FileWidget
          id={name}
          name={name}
          label={getLabel()}
          type="file"
          required={required}
          infoText={description}
          disabled={disabled}
          readOnly={disabled}
          invalid={isInvalid() ? 'true' : null}
          onChange={onChange}
          onEdit={isOnEdit}
          value={value}
        />
      )}
      {(field_type === 'from' || field_type === 'email') && (
        <Input
          id={name}
          name={name}
          label={getLabel()}
          type="email"
          required={true}
          infoText={description}
          disabled={disabled}
          readOnly={disabled}
          invalid={isInvalid() ? 'true' : null}
          onChange={(e) => {
            onChange(name, e.target.value);
          }}
          {...(value ? { value } : {})}
        />
      )}
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Field.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  required: PropTypes.bool,
  field_type: PropTypes.string,
  input_values: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default Field;
