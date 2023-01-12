import React from 'react';
import {
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { defineMessages, useIntl } from 'react-intl';

const UOMoreInfos = ({ content }) => {
  const intl = useIntl();
  return richTextHasContent(content.ulteriori_informazioni) ? (
    <RichTextSection
      content={content.ulteriori_informazioni}
      tag_id="more-info"
      title={intl.formatMessage(messages.other_info)}
      anchorOffset={true}
    />
  ) : null;
};

export default UOMoreInfos;

const messages = defineMessages({
  other_info: {
    id: 'other_info',
    defaultMessage: 'Ulteriori informazioni',
  },
});
