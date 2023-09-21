import React from 'react';
import cx from 'classnames';

const BodyWrapper = ({ data, inEditMode, children, id }) => {
  return (
    <div className={cx('container pt-5', { 'p-5': inEditMode })}>
      <h2 id={id + 'title'}>{data.text}</h2>
      <div className="grid mt-5">{children}</div>
    </div>
  );
};
export default BodyWrapper;
