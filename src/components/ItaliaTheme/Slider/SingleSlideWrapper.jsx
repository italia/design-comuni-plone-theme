import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
const messages = defineMessages({
  carouselSlide: {
    id: 'carouselSlide',
    defaultMessage: 'Slide',
  },
});
const SingleSlideWrapper = (props) => {
  const { className, key, index, children, onKeyDown } = props;
  const intl = useIntl();
  const wrapperKey = key ?? 'slide-wrapper-' + index;

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <div
      className={`it-single-slide-wrapper ${className ?? ''}`}
      key={wrapperKey}
      data-slide={index}
      role="group"
      aria-label={
        intl.formatMessage(messages.carouselSlide) +
        ' ' +
        (index ? index + 1 : '') +
        ' - ' +
        (props['aria-label'] ?? '')
      }
      onKeyDown={onKeyDown}
      onClick={(e) => {
        //commentato perchè i link esterni non si aprivano
        //e.preventDefault();
        //e.stopPropagation();
      }}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
      tabIndex={0}
    >
      {children}
    </div>
  );
};

export default SingleSlideWrapper;
