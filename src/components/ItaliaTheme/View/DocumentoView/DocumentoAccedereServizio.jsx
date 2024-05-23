import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection,
  GenericCard,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  accedere_al_servizio: {
    id: 'documento_accedere_al_servizio',
    defaultMessage: 'Accedere al servizio',
  },
});

const DocumentoAccedereServizio = ({ content }) => {
  const intl = useIntl();

  return content?.servizi_collegati?.length > 0 ? (
    <RichTextSection
      tag_id={'accedere-al-servizio'}
      title={intl.formatMessage(messages.accedere_al_servizio)}
    >
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {content.servizi_collegati?.map((servizio, i) => (
          <GenericCard
            key={servizio['@id']}
            item={servizio}
            showimage={false}
          ></GenericCard>
        ))}
      </div>
    </RichTextSection>
  ) : (
    <></>
  );
};

export default DocumentoAccedereServizio;
