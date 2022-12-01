/**
 * Checkbox that supports the indeterminate property as a react prop
 */
import React from 'react';
import cx from 'classnames';

export default function Checkbox({ indeterminate = false, ...otherProps }) {
  const setCheckboxRef = (checkbox) => {
    if (checkbox) {
      checkbox.indeterminate = indeterminate;
    }
  };

  return (
    <input
      className={cx({ indeterminate })}
      type="checkbox"
      ref={setCheckboxRef}
      {...otherProps}
    />
  );
}
