/**
 * Input that supports the floating labels, prepend and append buttons or icons
 */
import React, { useState } from 'react';
import cx from 'classnames';

export default function TextInput(props) {
  const {
    id,
    label,
    placeholder,
    onChange,
    prepend,
    append,
    size,
    className,
    groupClassName,
    ...otherProps
  } = props;
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
    <div className={cx('form-group io-text-input', groupClassName)}>
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
          {...otherProps}
          id={id}
          type="text"
          className={cx('form-control', className, {
            [`form-control-${size}`]: size,
            'focus--mouse': isFocused,
          })}
          onFocus={toggleFocusLabel}
          onBlur={(e) => toggleBlurLabel(e)}
          name={id}
          onChange={(e) => {
            onChange(e.target.id, e.target.value);
          }}
          placeholder={placeholder}
        />
        {append}
      </div>
    </div>
  );
}
