import React from 'react';
import cx from 'classnames';

export const FormHeader = ({ title, step, totalSteps, className, hidden }) => {
  return (
    <div className={className}>
      <legend
        data-element="feedback-rating-question"
        aria-hidden={hidden}
        className={cx('w-100 p-0', {
          'd-none': hidden,
        })}
      >
        <div className={'m-0 fs-6'}>{title}</div>
      </legend>
      <div
        className={cx('fs-6', {
          'd-none': hidden,
        })}
      >{`${step}/${totalSteps}`}</div>
    </div>
  );
};
