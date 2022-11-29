import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  content: {
    id: 'Go to content',
    defaultMessage: 'Vai al contenuto',
  },
});

const SkipToMainContent = ({ to = '#main-content-section' }) => {
  const intl = useIntl();

  return (
    <a className="visually-hidden" href={to}>
      {intl.formatMessage(messages.content)}
    </a>
  );
};

export default SkipToMainContent;
