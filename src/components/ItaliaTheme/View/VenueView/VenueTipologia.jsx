import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
const messages = defineMessages({
  tipologia_luogo: {
    id: 'tipologia_luogo',
    defaultMessage: 'Tipo di luogo',
  },
});

const VenueTipologia = ({ content }) => {
  const intl = useIntl();
  return content?.tipologia_luogo?.length > 0 ? (
    <RichTextSection
      tag_id="tipologia"
      title={intl.formatMessage(messages.tipologia_luogo)}
    >
      {content.tipologia_luogo.map((tipologia) => (
        <p key={tipologia.token} className="font-serif">
          {tipologia.title}
        </p>
      ))}
    </RichTextSection>
  ) : null;
};

export default VenueTipologia;
