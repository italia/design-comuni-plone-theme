import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextSection,
  richTextHasContent,
  VenueTipologia,
  VenueElementiDiInteresse,
  VenueLuoghiCorrelati,
  VenueMultimedia,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  descrizione: {
    id: 'descrizione',
    defaultMessage: 'Descrizione',
  },
});

const VenueDescription = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {richTextHasContent(content?.descrizione_completa) && (
        <RichTextSection
          tag_id="description"
          title={intl.formatMessage(messages.descrizione)}
          data={content.descrizione_completa}
        />
      )}

      <VenueTipologia content={content} />
      <VenueElementiDiInteresse content={content} />
      <VenueLuoghiCorrelati content={content} />
      <VenueMultimedia content={content} />
    </>
  );
};

export default VenueDescription;
