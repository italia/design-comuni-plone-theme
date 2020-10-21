import React from 'react';
import cx from 'classnames';

const BodyWrapper = ({ data, inEditMode, children }) => {
  return (
    <div className={cx('container pt-5', { 'p-5': inEditMode })}>
      <h2>{data.text}</h2>
      <div className="grid mt-5">{children}</div>
    </div>
  );
};
export default BodyWrapper;
