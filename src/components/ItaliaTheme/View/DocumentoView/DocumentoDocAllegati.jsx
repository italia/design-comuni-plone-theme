import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection,
  GenericCard,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  documenti_collegati: {
    id: 'documento_documenti_collegati',
    defaultMessage: 'Documenti collegati',
  },
});

const DocumentoDocAllegati = ({ content }) => {
  const intl = useIntl();

  return content?.documenti_allegati?.length > 0 ? (
    <RichTextSection
      tag_id={'documenti-collegati'}
      title={intl.formatMessage(messages.documenti_collegati)}
    >
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {content.documenti_allegati.map((item, i) => (
          <GenericCard key={item['@id']} item={item} show_icon="it-clip" />
        ))}
      </div>
    </RichTextSection>
  ) : (
    <></>
  );
};

export default DocumentoDocAllegati;
