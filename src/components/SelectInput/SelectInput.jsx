import React from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import { Icon } from 'design-react-kit/dist/design-react-kit';
import './select-styles.css';

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

const Option = props => {
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

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon="it-arrow-down-triangle" style={{ ariaHidden: true }} />
    </components.DropdownIndicator>
  );
};

const GroupHeading = props => (
  <div>
    <components.GroupHeading {...props} />
  </div>
);

const CustomClearText = () => 'Annulla';

const ClearIndicator = props => {
  const {
    children = <CustomClearText />,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div className="select-pill text-primary" {...restInnerProps} ref={ref}>
      <div style={{ padding: '0px 5px' }}>{children}</div>
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
}) => (
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
      classNamePrefix={'react-select'}
    />
  </div>
);

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
