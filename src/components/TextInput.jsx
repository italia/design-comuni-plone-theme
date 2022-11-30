/**
 * Input that supports the floating labels, prepend and append buttons or icons
 */
import React, { useState } from 'react';
import cx from 'classnames';
//import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

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
    <div className="form-group io-text-input">
      <div className={cx('input-group', size ? 'input-group-' + size : '')}>
        {prepend}
        <label
          htmlFor={id}
          className={cx({
            active: isFocused,
            'has-prepend': !!prepend,
          })}
        >
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
        {append}
      </div>
    </div>
  );
}
