import React, { Fragment } from 'react';
import classNames from 'classnames';
import { Icon } from 'design-react-kit';
import { FormGroup, Label } from 'reactstrap';
import cx from 'classnames';

const RTRating = ({
  className,
  inputs,
  legend,
  name,
  readOnly,
  value,
  wrapperClassName,
  testId,
  labelTemplate = (value) => `Valuta ${value} stelle su 5`,
  onChangeRating = () => {},
  ...attributes
}) => {
  // Fields
  const labelFn = labelTemplate;

  const onChange = readOnly ? () => null : onChangeRating;

  const wrapperClasses = classNames(wrapperClassName, {
    'rating-read-only': readOnly,
    'rating-label': legend,
  });
  const fieldClasses = classNames(className);
  const extraFieldAttrs = readOnly ? { 'aria-hidden': true } : {};

  const legendContent = legend || '';

  const handleChange = (e) => {
    onChange(parseInt(e.target.value), name);
  };

  function getAllPrevSiblings(element, parent) {
    const children = [...parent.children];
    const elIndex = children.findIndex((child) => child === element);
    return children
      .slice(0, elIndex)
      .filter((c) => c.nodeName.toUpperCase() === 'LABEL');
  }
  return (
    <FormGroup
      {...attributes}
      cssModule={{ 'form-group': 'rating' }}
      tag="fieldset"
      className={wrapperClasses}
      data-testid={testId}
    >
      <legend className="visually-hidden">{legendContent}</legend>
      {inputs.map((input, i) => {
        return (
          <Fragment key={input.name}>
            <input
              {...extraFieldAttrs}
              type="radio"
              id={input.name}
              name={name}
              value={input.value}
              className={cx(extraFieldAttrs.className, fieldClasses)}
              onChange={handleChange}
              checked={value === input.value}
              disabled={readOnly}
              data-element={'feedback-rate-' + input.value}
              aria-label={labelFn(input.value)}
            />
            <Label
              for={input.name}
              // aria-label={labelFn(input.value)}
              onMouseEnter={(e) => {
                const parentNode = e.currentTarget.parentElement;
                const toBeHovered = getAllPrevSiblings(
                  e.currentTarget,
                  parentNode,
                );
                [...toBeHovered, e.currentTarget].forEach((tbh) => {
                  tbh.children[0].classList.add('starFilled');
                });
              }}
              onMouseLeave={(e) => {
                const allHoveredStars = Array.from(
                  document.getElementsByClassName('starFilled'),
                );
                allHoveredStars?.forEach((ahs) => {
                  const associatedInput = document.getElementById(
                    ahs.parentElement.htmlFor,
                  );
                  if (value < associatedInput.value)
                    ahs.classList.remove('starFilled');
                });
              }}
            >
              <Icon
                icon="it-star-full"
                size="sm"
                className={cx('rating-star', {
                  starFilled: value >= input.value,
                })}
              />
            </Label>
          </Fragment>
        );
      })}
    </FormGroup>
  );
};

export default RTRating;
