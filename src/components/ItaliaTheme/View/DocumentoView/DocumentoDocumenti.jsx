import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import { Modules } from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  documenti: {
    id: 'documento_documenti',
    defaultMessage: 'Documenti',
  },
});

const DocumentoDocumenti = ({ content }) => {
  const intl = useIntl();

  return (
    <Modules
      content={content}
      title={intl.formatMessage(messages.documenti)}
      id="elenco-documenti"
    />
  );
};

export default DocumentoDocumenti;
