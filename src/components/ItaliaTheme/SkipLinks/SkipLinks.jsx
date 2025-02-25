import React, { useEffect } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { Skiplink, SkiplinkItem } from 'design-react-kit';

const messages = defineMessages({
  mainView: {
    id: 'skiplink-main-content',
    defaultMessage: 'Skip to main content',
  },
  navigation: {
    id: 'skiplink-navigation',
    defaultMessage: 'Skip to navigation',
  },
  footer: {
    id: 'skiplink-footer',
    defaultMessage: 'Skip to footer',
  },
  skiplinks_description: {
    id: 'skiplinks-description',
    defaultMessage: 'Skiplinks',
  },
});

const SkipLinks = () => {
  const intl = useIntl();

  // funzione per rimuovere .visually-hidden dagli skiplinks
  // per correggere bug di design-react-kit che li nasconde
  useEffect(() => {
    const skiplinks = document.querySelectorAll(
      '.skiplinks a.visually-hidden-focusable',
    );

    skiplinks.forEach((link) => link.classList.remove('visually-hidden'));
  }, []);

  return (
    <div className="public-ui">
      <Skiplink
        tag="div"
        role="complementary"
        aria-label={intl.formatMessage(messages.skiplinks_description)}
      >
        <SkiplinkItem href="#view" tag="a">
          {intl.formatMessage(messages.mainView)}
        </SkiplinkItem>
        <SkiplinkItem href="#navigation" tag="a">
          {intl.formatMessage(messages.navigation)}
        </SkiplinkItem>
        <SkiplinkItem href="#footer" tag="a">
          {intl.formatMessage(messages.footer)}
        </SkiplinkItem>
      </Skiplink>
    </div>
  );
};

export default SkipLinks;
