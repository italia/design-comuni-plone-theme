import React from 'react';
import cx from 'classnames';

const BodyWrapper = ({ inEditMode, children }) => {
  return (
    <div
      className={cx('block cta-block', {
        'public-ui': inEditMode,
      })}
    >
      {children}
    </div>
  );
};
export default BodyWrapper;
