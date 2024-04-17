import React from 'react';
import cx from 'classnames';

const BodyWrapper = ({ data, inEditMode, children, id, hasArguments }) => {
  return (
    <div
      className={cx('container argumentsCardsWrapper', {
        'pt-5': hasArguments,
        'p-5': inEditMode,
      })}
    >
      <h2 id={id + 'title'}>{data.text}</h2>
      {children?.length > 0 && <div className="grid mt-5">{children}</div>}
    </div>
  );
};
export default BodyWrapper;
