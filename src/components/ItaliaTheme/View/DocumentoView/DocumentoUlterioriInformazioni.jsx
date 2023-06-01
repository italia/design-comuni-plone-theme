import React, { useMemo } from 'react';
import { defineMessages, useIntl } from 'react-intl';

import {
  HelpBox,
  Metadata,
  RichText,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  riferimenti_normativi: {
    id: 'documento_riferimenti_normativi',
    defaultMessage: 'Riferimenti normativi',
  },
});

const DocumentoUlterioriInformazioni = ({ content }) => {
  const intl = useIntl();
  const showSectionTitle = useMemo(
    () =>
      richTextHasContent(content?.ulteriori_informazioni) ||
      richTextHasContent(content?.riferimenti_normativi),
    [content],
  );
  return (
    <Metadata content={content} showSectionTitle={showSectionTitle}>
      {richTextHasContent(content?.ulteriori_informazioni) && (
        <HelpBox text={content?.ulteriori_informazioni} />
      )}

      {/* RIFERIMENTI NORMATIVI */}
      {richTextHasContent(content?.riferimenti_normativi) && (
        <div className="mt-2">
          <h5>{intl.formatMessage(messages.riferimenti_normativi)}</h5>
          <RichText serif={false} data={content.riferimenti_normativi} />
        </div>
      )}
    </Metadata>
  );
};

export default DocumentoUlterioriInformazioni;
