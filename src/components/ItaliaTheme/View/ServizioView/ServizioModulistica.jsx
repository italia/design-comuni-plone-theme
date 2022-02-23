import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Attachments } from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  modulistica: {
    id: 'modulistica',
    defaultMessage: 'Modulistica',
  },
});

const ServizioModulistica = ({ content }) => {
  const intl = useIntl();
  return (
    <Attachments
      content={content}
      folder_name={'modulistica'}
      title={intl.formatMessage(messages.modulistica)}
    />
  );
};

export default ServizioModulistica;
