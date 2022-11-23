import React from 'react';
import cx from 'classnames';

const BodyWrapper = ({ inEditMode, children }) => {
  return (
    <div
      className={cx('block simple-text-block', {
        'public-ui': inEditMode,
      })}
    >
      <div>{children}</div>
    </div>
  );
};
export default BodyWrapper;
