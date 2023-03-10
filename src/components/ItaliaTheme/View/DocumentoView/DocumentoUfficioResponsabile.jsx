import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection,
  OfficeCard,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  ufficio_responsabile: {
    id: 'documento_ufficio_responsabile',
    defaultMessage: 'Ufficio responsabile',
  },
});

const DocumentoUfficioResponsabile = ({ content }) => {
  const intl = useIntl();

  return content.ufficio_responsabile?.length > 0 ? (
    <RichTextSection
      tag_id="ufficio_responsabile"
      title={intl.formatMessage(messages.ufficio_responsabile)}
    >
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {content.ufficio_responsabile?.length > 0 && (
          <>
            {content.ufficio_responsabile.map((item, i) => (
              <OfficeCard key={item['@id']} office={item} />
            ))}
          </>
        )}
      </div>
    </RichTextSection>
  ) : (
    <></>
  );
};

export default DocumentoUfficioResponsabile;
