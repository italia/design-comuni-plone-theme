/**
 * Checkbox that supports the indeterminate property as a react prop
 */
import React from 'react';

export default function Checkbox({ indeterminate = false, ...otherProps }) {
  const setCheckboxRef = checkbox => {
    if (checkbox) {
      checkbox.indeterminate = indeterminate;
    }
  };

  return <input type="checkbox" ref={setCheckboxRef} {...otherProps} />;
}
