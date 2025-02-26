/**
 * Field
 * @module components/manage/Blocks/IconsBlocks/View
 *
 * CUSTOMIZATIONS:
 * - customized to use design-react-kit elements instead semantic-ui elements
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { Input, FormGroup, Label } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

import FileWidget from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/FileWidget';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import { TextEditorWidget } from 'design-comuni-plone-theme/components/ItaliaTheme';
import config from '@plone/volto/registry';

import { fromHtml } from 'design-comuni-plone-theme/config/Slate/utils';

const messages = defineMessages({
  select_a_value: {
    id: 'form_select_a_value',
    defaultMessage: 'Seleziona un valore',
  },
  static_field_placeholder: {
    id: 'form_static_field_placeholder',
    defaultMessage: 'Inserisci qui il testo statico da mostrare.',
  },
  open_menu: {
    id: 'open_menu',
    defaultMessage: 'Apri il menu',
  },
});

const DropdownIndicator = injectLazyLibs('reactSelect')((props) => {
  const intl = useIntl();
  const components = props.reactSelect.components;
  return (
    <components.DropdownIndicator {...props}>
      <Icon
        icon="chevron-down"
        style={{ ariaHidden: true }}
        title={intl.formatMessage(messages.open_menu)}
      />
    </components.DropdownIndicator>
  );
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
  formHasErrors = false,
  errorMessage,
  id,
  reactSelect,
  autocomplete,
}) => {
  const intl = useIntl();
  const Select = reactSelect.default;

  const [selected, setSelected] = useState(false);

  const getLabel = () => {
    return required ? label + ' *' : label;
  };

  const isInvalid = () => {
    return !isOnEdit && !valid;
  };

  const infoText = errorMessage ? (
    <>
      <div className="form-text">{description}</div>
      {errorMessage}
    </>
  ) : (
    description
  );

  let static_text_value = value;
  if (field_type === 'static_text') {
    if (value?.data) {
      static_text_value = fromHtml(value);
    } //per retrocompatibilità con il vecchio widget che usava draftjs
  }

  return (
    <div className="field">
      {field_type === 'text' && (
        <Input
          id={name}
          name={name}
          label={getLabel()}
          type="text"
          required={required}
          infoText={infoText}
          disabled={disabled}
          readOnly={disabled}
          invalid={isInvalid() ? 'true' : null}
          onChange={(e) => {
            onChange(name, e.target.value);
          }}
          value={value ?? ''}
          autoComplete={autocomplete}
        />
      )}
      {field_type === 'textarea' && (
        <Input
          id={name}
          name={name}
          label={getLabel()}
          tag="textarea"
          rows={10}
          required={required}
          infoText={infoText}
          disabled={disabled}
          readOnly={disabled}
          invalid={isInvalid() ? 'true' : null}
          onChange={(e) => {
            onChange(name, e.target.value);
          }}
          value={value ?? undefined}
          autoComplete={autocomplete}
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
                DropdownIndicator,
              }}
              id={name}
              name={name}
              label={getLabel()}
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
              value={value ? [{ value: value, label: value }] : []}
              autoComplete={autocomplete}
            />
            {description && <small className="form-text">{description}</small>}
            {errorMessage && (
              <div className="invalid-feedback form-feedback just-validate-error-label form-text form-feedback just-validate-error-label">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      )}
      {field_type === 'single_choice' && (
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
                  addon // Needed to avoid application of form-control class as of kit v4.0.2
                  checked={value === v}
                />
                <Label for={v + name} check>
                  {v}
                </Label>
              </FormGroup>
            ))}
            {description && <small className="form-text">{description}</small>}
            {errorMessage && (
              <div className="invalid-feedback form-feedback just-validate-error-label form-text form-feedback just-validate-error-label">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      )}
      {field_type === 'multiple_choice' && (
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
                  addon // Needed to avoid application of form-control class as of kit v4.0.2
                />
                <Label for={v + name} check>
                  {v}
                </Label>
              </FormGroup>
            ))}
            {description && <small className="form-text">{description}</small>}
            {errorMessage && (
              <div className="invalid-feedback form-feedback just-validate-error-label form-text form-feedback just-validate-error-label">
                {errorMessage}
              </div>
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
            <FormGroup check key={name}>
              <Input
                id={name}
                name={name}
                type="checkbox"
                checked={!!value}
                onChange={(e) => {
                  onChange(name, e.target.checked);
                }}
                invalid={isInvalid() ? 'true' : null}
                required={required}
                addon // Needed to avoid application of form-control class as of kit v4.0.2
              />
              <Label for={name} check>
                {getLabel()}
              </Label>
            </FormGroup>
            {description && <small className="form-text">{description}</small>}
            {errorMessage && (
              <div className="invalid-feedback form-feedback just-validate-error-label form-text form-feedback just-validate-error-label">
                {errorMessage}
              </div>
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
          infoText={infoText}
          disabled={disabled}
          readOnly={disabled}
          invalid={isInvalid() ? 'true' : null}
          onChange={(e) => {
            onChange(name, e.target.value);
          }}
          value={value ?? ''}
          autoComplete={autocomplete}
        />
      )}
      {field_type === 'attachment' && (
        <FileWidget
          id={name}
          name={name}
          label={getLabel()}
          type="file"
          required={required}
          infoText={infoText}
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
          infoText={infoText}
          disabled={disabled}
          readOnly={disabled}
          invalid={isInvalid() ? 'true' : null}
          validationText={errorMessage}
          onChange={(e) => {
            onChange(name, e.target.value);
          }}
          value={value ?? ''}
          autoComplete={autocomplete}
        />
      )}

      {field_type === 'static_text' && (
        <>
          {isOnEdit ? (
            <div className="mb-2">
              <TextEditorWidget
                value={static_text_value}
                selected={selected}
                setSelected={setSelected}
                placeholder={intl.formatMessage(
                  messages.static_field_placeholder,
                )}
                showToolbar={true}
                onChangeBlock={(block, data) => {
                  onChange(name, data.value);
                }}
              />
            </div>
          ) : value ? (
            <div className="static-text">
              <TextBlockView id={name} data={{ value: static_text_value }} />
            </div>
          ) : (
            <br />
          )}
        </>
      )}
      {config.blocks.blocksConfig.form.additionalFields?.reduce((acc, val) => {
        if (val.id === field_type)
          return [
            ...acc,
            <val.component
              id={name}
              name={name}
              title={label}
              description={description}
              infoText={infoText}
              required={required}
              onChange={onChange}
              value={value}
              isDisabled={disabled}
              formHasErrors={formHasErrors}
              invalid={isInvalid().toString()}
              {...(isInvalid() ? { className: 'is-invalid' } : {})}
            />,
          ];

        return acc;
      }, []) ?? []}
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
  formHasErrors: PropTypes.bool,
  onChange: PropTypes.func,
  autoComplete: PropTypes.string,
};

export default injectLazyLibs('reactSelect')(Field);
