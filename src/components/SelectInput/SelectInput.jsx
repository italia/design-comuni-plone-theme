import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import './select-styles.css';

const messages = defineMessages({
  select_noOptionsMessage: {
    id: 'select_noOptionsMessage',
    defaultMessage: 'Nessuna opzione',
  },
  risultato: { id: 'select_risultato', defaultMessage: 'risultato' },
  risultati: { id: 'select_risultati', defaultMessage: 'risultati' },
  ay11_up_down: {
    id: 'ay11_Use Up and Down to choose options',
    defaultMessage: "Usa le frecce Su e Giu per scegliere un'opzione",
  },
  ay11_select_option: {
    id: 'ay11_select_press Enter to select the currently focused option',
    defaultMessage: "premi Invio per selezionare l'opzione corrente",
  },
  ay11_exit_menu: {
    id: 'ay11_select_press Escape to exit the menu',
    defaultMessage: 'premi Esc per uscire dal menu',
  },
  ay11_tab_select_and_exit: {
    id: 'ay11_select__press Tab to select the option and exit the menu',
    defaultMessage: "premi Tab per selezionare l'opzione e uscire dal menu",
  },
  ay11_is_focused: {
    id: 'ay11_select_is_focused',
    defaultMessage: 'è selezionato',
  },
  ay11_type_to_refine_list: {
    id: 'ay11_select__type to refine list',
    defaultMessage: 'digita per filtrare la lista',
  },
  ay11_open_menu: {
    id: 'ay11_select_press Down to open the menu',
    defaultMessage:
      'premi freccia giu per aprire il menu, premi Backspace per rimuovere il valore selezionato',
  },
  ay11_multi_select_focus_values: {
    id: 'ay11_select_press left to focus selected values',
    defaultMessage:
      'premi la freccia a sinistra per evidenziare i valori selezionati',
  },
  ay11_toggle_values: {
    id:
      'ay11_select_Use left and right to toggle between focused values, press Backspace to remove the currently focused value',
    defaultMessage:
      'Usa le frecce destra e sinistra per attivare o disattivare i valori evidenziati, premi Backspace per rimuovere il valore corrente evidenziato',
  },
  ay11_option: {
    id: 'ay11_select option',
    defaultMessage: 'opzione',
  },
  ay11_option_deselected: {
    id: 'ay11_select deselected',
    defaultMessage: 'deselezionata',
  },
  ay11_option_disabled: {
    id: 'ay11_select is disabled. Select another option.',
    defaultMessage: "è disabilitata. Seleziona un'altra opzione",
  },
  ay11_option_selected: {
    id: 'ay11_select selected',
    defaultMessage: 'selezionata',
  },
  ay11_value: {
    id: 'ay11_select value',
    defaultMessage: 'valore',
  },
  ay11_focused: {
    id: 'ay11_select focused',
    defaultMessage: 'evidenziato',
  },

  ay11_disabled: {
    id: 'ay11_select disabled',
    defaultMessage: 'disabilitato',
  },
  ay11_for_search_term: {
    id: 'ay11_select for search term',
    defaultMessage: 'per la ricerca',
  },
  ay11_for_cancel: {
    id: 'ay11_select cancel',
    defaultMessage: 'Annulla',
  },
});

const SelectContainer = injectLazyLibs('reactSelect')(
  ({ children, ...props }) => {
    const components = props.reactSelect.components;
    return (
      <div>
        <components.SelectContainer {...props}>
          {children}
        </components.SelectContainer>
      </div>
    );
  },
);

SelectContainer.propTypes = {
  children: PropTypes.node,
};

const Option = injectLazyLibs('reactSelect')((props) => {
  const components = props.reactSelect.components;
  return (
    <div className="select-pill text-primary">
      <components.Option {...props} />
    </div>
  );
});

const MenuList = injectLazyLibs('reactSelect')(({ children, ...props }) => {
  const components = props.reactSelect.components;
  return (
    <div>
      <components.MenuList {...props}>{children}</components.MenuList>
    </div>
  );
});

MenuList.propTypes = {
  children: PropTypes.node,
};

const DropdownIndicator = injectLazyLibs('reactSelect')((props) => {
  const components = props.reactSelect.components;
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon="it-arrow-down-triangle" style={{ ariaHidden: true }} />
    </components.DropdownIndicator>
  );
});

const GroupHeading = injectLazyLibs('reactSelect')((props) => {
  const components = props.reactSelect.components;
  return (
    <div>
      <components.GroupHeading {...props} />
    </div>
  );
});

const ClearIndicator = (props) => {
  const intl = useIntl();

  const {
    innerProps: { ref, ...restInnerProps },
  } = props;

  return (
    <div
      className="select-pill text-primary clearButton"
      {...restInnerProps}
      ref={ref}
    >
      <div
        style={{ padding: '0px 5px' }}
        title={intl.formatMessage(messages.ay11_for_cancel)}
      >
        <Icon icon="it-close" style={{ ariaHidden: true }} />
      </div>
    </div>
  );
};

ClearIndicator.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
};

const getSelectAriaLiveMessages = (intl) => {
  return {
    guidance: (props) => {
      const {
        isSearchable,
        isMulti,
        isDisabled,
        tabSelectsValue,
        context,
      } = props;
      switch (context) {
        case 'menu':
          return `${intl.formatMessage(messages.ay11_up_down)}${
            isDisabled
              ? ''
              : `, ${intl.formatMessage(messages.ay11_select_option)}`
          }, ${intl.formatMessage(messages.ay11_exit_menu)}${
            tabSelectsValue
              ? `, ${intl.formatMessage(messages.ay11_tab_select_and_exit)}`
              : ''
          }.`;
        case 'input':
          return `${props['aria-label'] || 'Select'} ${intl.formatMessage(
            messages.ay11_is_focused,
          )} ${
            isSearchable
              ? `,${intl.formatMessage(messages.ay11_type_to_refine_list)}`
              : ''
          }, ${intl.formatMessage(messages.ay11_open_menu)}, ${
            isMulti
              ? ` ${intl.formatMessage(
                  messages.ay11_multi_select_focus_values,
                )}`
              : ''
          }`;
        case 'value':
          return intl.formatMessage(messages.ay11_toggle_values);
        default:
          return '';
      }
    },

    onChange: (props) => {
      const { action, label = '', isDisabled } = props;
      switch (action) {
        case 'deselect-option':
        case 'pop-value':
        case 'remove-value':
          return `${intl.formatMessage(
            messages.ay11_option,
          )} ${label}, ${intl.formatMessage(messages.ay11_option_deselected)}.`;
        case 'select-option':
          return isDisabled
            ? `${intl.formatMessage(
                messages.ay11_option,
              )} ${label} ${intl.formatMessage(messages.ay11_option_disabled)}.`
            : `${intl.formatMessage(
                messages.ay11_option,
              )} ${label}, ${intl.formatMessage(
                messages.ay11_option_selected,
              )}.`;
        default:
          return '';
      }
    },

    onFocus: (props) => {
      const {
        context,
        focused = {},
        options,
        label = '',
        selectValue,
        isDisabled,
        isSelected,
      } = props;

      const getArrayIndex = (arr, item) =>
        arr && arr.length ? `${arr.indexOf(item) + 1} of ${arr.length}` : '';

      if (context === 'value' && selectValue) {
        return `${intl.formatMessage(
          messages.ay11_value,
        )} ${label} ${intl.formatMessage(
          messages.ay11_focused,
        )}, ${getArrayIndex(selectValue, focused)}.`;
      }

      if (context === 'menu') {
        const disabled = isDisabled
          ? ` ${intl.formatMessage(messages.ay11_disabled)}`
          : '';
        const status = `${
          isSelected
            ? intl.formatMessage(messages.ay11_option_selected)
            : intl.formatMessage(messages.ay11_focused)
        }${disabled}`;
        return `${intl.formatMessage(
          messages.ay11_option,
        )} ${label} ${status}, ${getArrayIndex(options, focused)}.`;
      }
      return '';
    },

    onFilter: (props) => {
      const { inputValue, resultsMessage } = props;
      return `${resultsMessage}${
        inputValue
          ? ` ${intl.formatMessage(messages.ay11_for_search_term)} ` +
            inputValue
          : ''
      }.`;
    },
  };
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
  reactSelect,
}) => {
  const intl = useIntl();
  const Select = reactSelect.default;
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
        ariaLiveMessages={getSelectAriaLiveMessages(intl)}
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

export default injectLazyLibs('reactSelect')(SelectInput);
