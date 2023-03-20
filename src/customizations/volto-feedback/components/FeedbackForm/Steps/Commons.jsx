import React from 'react';

export const FormHeader = ({ title, step, totalSteps, className }) => {
  return (
    <div className={className}>
      <legend data-element="feedback-rating-question">
        <h6>{title}</h6>
      </legend>

      <div>{`${step}/${totalSteps}`}</div>
    </div>
  );
};
