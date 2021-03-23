/**
 * Input that supports the floating labels, prepend and append buttons or icons
 */
import React, { useState } from 'react';
import cx from 'classnames';
//import { Icon } from '@italia/components/ItaliaTheme';

export default function TextInput(props) {
  const { id, label, placeholder, onChange, prepend, append, size } = props;
  const [isFocused, setIsFocused] = useState(false);

  const toggleFocusLabel = () => {
    setIsFocused(true);
  };

  const toggleBlurLabel = (e) => {
    if (e.target.value === '') {
      setIsFocused(!isFocused);
    }
  };

  return (
    <div className="form-group">
      <div className={cx('input-group', size ? 'input-group-' + size : '')}>
        {prepend && <div className="input-group-prepend">{prepend}</div>}
        {/* <div className="input-group-prepend">
          <div className="input-group-text">
            <Icon color="" icon="it-search" padding={false} size="sm" />
          </div>
        </div> */}
        <label htmlFor={id} className={isFocused ? 'active' : ''}>
          {label}
        </label>

        <input
          {...props}
          type="text"
          className={cx('form-control', size ? 'form-control-' + size : '', {
            'focus--mouse': isFocused,
          })}
          onFocus={toggleFocusLabel}
          onBlur={(e) => toggleBlurLabel(e)}
          name={id}
          onChange={(e) => {
            onChange(e.target.id, e.target.value);
          }}
          placeholder={placeholder ? placeholder : label}
        />
        {append && <div className="input-group-append">{append}</div>}
        {/* <div className="input-group-append">
          <Button className="btn-icon" tag="button" icon color="">
            <Icon color="" icon="it-search" padding={false} size="sm" />
          </Button>
        </div> */}
      </div>
    </div>
  );
}
