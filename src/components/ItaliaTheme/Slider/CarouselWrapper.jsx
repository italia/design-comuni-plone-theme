import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
const messages = defineMessages({
  carousel: {
    id: 'carousel',
    defaultMessage: 'Carosello',
  },
});
const CarouselWrapper = ({ className, children }) => {
  const intl = useIntl();

  return (
    <div
      className={`it-carousel-all ${className ?? ''}`}
      role="region"
      aria-label={intl.formatMessage(messages.carousel)}
    >
      {children}
    </div>
  );
};

export default CarouselWrapper;
