import React from 'react';
import { useIntl, defineMessages } from 'react-intl';

const messages = defineMessages({
  text_filter_placeholder: {
    id: 'text_filter_placeholder',
    defaultMessage: 'Inserisci un valore',
  },
});

const TextFilter = ({ value, id, onChange, placeholder, blockID }) => {
  const intl = useIntl();

  return (
    <div className="me-lg-3 my-2 my-lg-1 filter-wrapper text-filter">
      <label htmlFor={`${blockID}-${id}`} className="visually-hidden">
        {placeholder}
      </label>
      <input
        type="text"
        placeholder={
          placeholder || intl.formatMessage(messages.text_filter_placeholder)
        }
        value={value}
        onChange={(e, data) => {
          onChange(id, e.target.value ?? '');
        }}
        autocomplete="off"
        id={`${blockID}-${id}`}
      />
    </div>
  );
};

export default TextFilter;
