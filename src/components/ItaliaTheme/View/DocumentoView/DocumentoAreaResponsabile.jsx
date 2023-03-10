import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection,
  OfficeCard,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  area_responsabile: {
    id: 'documento_area_responsabile',
    defaultMessage: 'Area responsabile',
  },
});

const DocumentoAreaResponsabile = ({ content }) => {
  const intl = useIntl();

  return content?.area_responsabile?.length > 0 ? (
    <RichTextSection
      tag_id="area_responsabile"
      title={intl.formatMessage(messages.area_responsabile)}
    >
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {content.area_responsabile.map((item, i) => (
          <OfficeCard key={item['@id']} office={item} />
        ))}
      </div>
    </RichTextSection>
  ) : (
    <></>
  );
};

export default DocumentoAreaResponsabile;
