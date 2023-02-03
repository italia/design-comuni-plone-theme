import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import {
  Modules,
  richTextHasContent,
  RichTextArticle,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  documenti: {
    id: 'documento_documenti',
    defaultMessage: 'Documenti',
  },
  formati_disponibili: {
    id: 'documento_formati_disponibili',
    defaultMessage: 'Formati disponibili',
  },
});

const DocumentoDocumenti = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      <Modules
        content={content}
        title={intl.formatMessage(messages.documenti)}
        id="elenco-documenti"
      />
      {richTextHasContent(content.formati_disponibili) && (
        <RichTextArticle
          tag_id="formats"
          title={intl.formatMessage(messages.formati_disponibili)}
          content={content.formati_disponibili}
        />
      )}
    </>
  );
};

export default DocumentoDocumenti;
