import React from 'react';
import cx from 'classnames';

const BodyWrapper = ({ data, inEditMode, children }) => {
  return (
    <div
      className={cx('block image-text-block', {
        'public-ui': inEditMode,
      })}
    >
      <div>{children}</div>
    </div>
  );
};
export default BodyWrapper;
