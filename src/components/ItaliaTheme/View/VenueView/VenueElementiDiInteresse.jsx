import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  elementi_di_interesse: {
    id: 'elementi_di_interesse',
    defaultMessage: 'Elementi di interesse',
  },
});

const VenueElementiDiInteresse = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content.elementi_di_interesse) ? (
    <RichTextSection
      tag_id="elementi-di-interesse"
      title={`${intl.formatMessage(messages.elementi_di_interesse)}`}
      data={content.elementi_di_interesse}
    />
  ) : null;
};

export default VenueElementiDiInteresse;
