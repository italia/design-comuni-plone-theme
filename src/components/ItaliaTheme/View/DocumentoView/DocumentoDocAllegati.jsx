import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextArticle,
  GenericCard,
} from 'design-volto-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  documenti_allegati: {
    id: 'documento_documenti_allegati',
    defaultMessage: 'Documenti allegati',
  },
});

const DocumentoDocAllegati = ({ content }) => {
  const intl = useIntl();

  return content?.documenti_allegati?.length > 0 ? (
    <RichTextArticle
      tag_id={'documenti-allegati'}
      title={intl.formatMessage(messages.documenti_allegati)}
    >
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {content.documenti_allegati.map((item, i) => (
          <GenericCard key={item['@id']} item={item} show_icon="it-clip" />
        ))}
      </div>
    </RichTextArticle>
  ) : (
    <></>
  );
};

export default DocumentoDocAllegati;
