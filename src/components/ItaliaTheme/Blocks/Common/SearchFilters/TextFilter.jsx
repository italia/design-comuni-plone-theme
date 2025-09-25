import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { Input } from 'design-react-kit';

const messages = defineMessages({
  text_filter_placeholder: {
    id: 'text_filter_placeholder',
    defaultMessage: 'Inserisci un valore',
  },
});

const TextFilter = ({
  value,
  id,
  onChange,
  placeholder,
  blockID,
  activeTopLabel = false,
  infoText = '',
}) => {
  const intl = useIntl();
  const placeholderText =
    placeholder || intl.formatMessage(messages.text_filter_placeholder);

  return (
    <div className="me-lg-3 my-2 my-lg-1 filter-wrapper text-filter">
      {!activeTopLabel ? (
        <>
          {/* Input con label NACOSTA */}
          <label htmlFor={`${blockID}-${id}`} className="visually-hidden">
            {placeholderText}
          </label>
          <input
            type="text"
            placeholder={placeholderText}
            value={value}
            onChange={(e, data) => {
              onChange(id, e.target.value ?? '');
            }}
            id={`${blockID}-${id}`}
          />
          {infoText && <small className="form-text d-block">{infoText}</small>}
        </>
      ) : (
        <>
          {/* Input con label VISIBILE */}
          <Input
            type="text"
            label={placeholderText}
            infoText={infoText} // small text
            value={value}
            onChange={(e, data) => {
              onChange(id, e.target.value ?? '');
            }}
            id={`${blockID}-${id}`}
          />
        </>
      )}
    </div>
  );
};

export default TextFilter;
