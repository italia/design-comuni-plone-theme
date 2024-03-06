import React from 'react';
import cx from 'classnames';

export const FormHeader = ({ title, step, totalSteps, className, hidden }) => {
  return (
    <legend
      data-element="feedback-rating-question"
      aria-hidden={hidden}
      className={cx(className, 'w-100', {
        'd-none': hidden,
      })}
    >
      <div className={'m-0 fs-6'}>{title}</div>
      <div>{`${step}/${totalSteps}`}</div>
    </legend>
  );
};
