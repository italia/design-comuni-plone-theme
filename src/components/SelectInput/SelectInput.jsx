import React from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import { Icon } from '@italia/components/ItaliaTheme';
import './select-styles.css';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  select_noOptionsMessage: {
    id: 'select_noOptionsMessage',
    defaultMessage: 'Nessuna opzione',
  },
  risultato: { id: 'select_risultato', defaultMessage: 'risultato' },
  risultati: { id: 'select_risultati', defaultMessage: 'risultati' },
});

const SelectContainer = ({ children, ...props }) => {
  return (
    <div>
      <components.SelectContainer {...props}>
        {children}
      </components.SelectContainer>
    </div>
  );
};

SelectContainer.propTypes = {
  children: PropTypes.node,
};

const Option = (props) => {
  return (
    <div className="select-pill text-primary">
      <components.Option {...props} />
    </div>
  );
};
const MenuList = ({ children, ...props }) => {
  return (
    <div>
      <components.MenuList {...props}>{children}</components.MenuList>
    </div>
  );
};

MenuList.propTypes = {
  children: PropTypes.node,
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon="it-arrow-down-triangle" style={{ ariaHidden: true }} />
    </components.DropdownIndicator>
  );
};

const GroupHeading = (props) => (
  <div>
    <components.GroupHeading {...props} />
  </div>
);

const ClearIndicator = (props) => {
  const {
    innerProps: { ref, ...restInnerProps },
  } = props;

  return (
    <div
      className="select-pill text-primary clearButton"
      {...restInnerProps}
      ref={ref}
    >
      <div style={{ padding: '0px 5px' }} title="Annulla">
        <Icon icon="it-close" style={{ ariaHidden: true }} />
      </div>
    </div>
  );
};

ClearIndicator.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
};

const SelectInput = ({
  id = 'design-select',
  value = null,
  placeholder = '',
  label,
  isDisabled = false,
  isSearchable = false,
  isMulti = false,
  isClearable = false,
  onChange,
  options,
  components = {},
}) => {
  const intl = useIntl();

  return (
    <div className="bootstrap-select-wrapper">
      {label && <label htmlFor={id}>{label}</label>}

      <Select
        components={{
          MenuList,
          Option,
          SelectContainer,
          DropdownIndicator,
          ClearIndicator,
          GroupHeading,
          IndicatorSeparator: null,
          ...components,
        }}
        id={id}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isSearchable={isSearchable}
        isMulti={isMulti}
        isClearable={isClearable}
        aria-label={placeholder}
        noOptionsMessage={() =>
          intl.formatMessage(messages.select_noOptionsMessage)
        }
        escapeClearsValue={true}
        screenReaderStatus={({ count }) =>
          `${count} ${
            count !== 1
              ? intl.formatMessage(messages.risultato)
              : intl.formatMessage(messages.risultati)
          }`
        }
        classNamePrefix={'react-select'}
      />
    </div>
  );
};

SelectInput.propTypes = {
  id: PropTypes.string,
  value: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  isSearchable: PropTypes.bool,
  isMulti: PropTypes.bool,
  isClearable: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SelectInput;
