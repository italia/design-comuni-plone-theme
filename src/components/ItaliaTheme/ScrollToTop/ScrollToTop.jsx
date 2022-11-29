/**
 * ScrollToTop component.
 * @module components/ScrollToTop/ScrollToTop
 */

import React, { useState, useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Button } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  scrollToTop: {
    id: 'Scroll to top',
    defaultMessage: 'Torna su',
  },
});

const ScrollToTop = () => {
  const intl = useIntl();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {isVisible && (
        <div className="public-ui scroll-to-top">
          <Button
            color="tertiary"
            tag="button"
            size="sm"
            title={intl.formatMessage(messages.scrollToTop)}
            onClick={scrollToTop}
          >
            <Icon icon="it-arrow-up" padding={false} size="sm" />
          </Button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
