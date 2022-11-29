import React from 'react';
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
});

const SkipLinks = () => {
  const intl = useIntl();

  return (
    <Skiplink tag="div">
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
  );
};

export default SkipLinks;
