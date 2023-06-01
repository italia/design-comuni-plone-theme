import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichTextSection,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
const messages = defineMessages({
  cosa_fa: {
    id: 'cosa_fa',
    defaultMessage: 'Cosa fa',
  },
  competenze: {
    id: 'competenze',
    defaultMessage: 'Competenze',
  },
});

const UOWhatDoesItDo = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content?.competenze) ? (
    <RichTextSection
      data={content.competenze}
      tag_id="competenze"
      title={intl.formatMessage(messages.competenze)}
    />
  ) : null;
};

export default UOWhatDoesItDo;
