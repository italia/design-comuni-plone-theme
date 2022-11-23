import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Attachments } from 'design-volto-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  documenti: {
    id: 'uo_documenti',
    defaultMessage: 'Documenti',
  },
});

const UODocuments = ({ content }) => {
  const intl = useIntl();

  return (
    <Attachments
      title={intl.formatMessage(messages.documenti)}
      content={content}
      folder_name={'allegati'}
    />
  );
};

export default UODocuments;
