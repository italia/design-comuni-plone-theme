import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichText,
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  costi_e_vincoli_header: {
    id: 'costi_e_vincoli_header',
    defaultMessage: 'Quanto costa',
  },
  vincoli: {
    id: 'vincoli',
    defaultMessage: 'Vincoli',
  },
});

const ServizioCostiVincoli = ({ content }) => {
  const intl = useIntl();
  const sectionTitleToRender = () => {
    if (richTextHasContent(content.costi))
      return intl.formatMessage(messages.costi_e_vincoli_header);
    else if (
      !richTextHasContent(content.costi) &&
      richTextHasContent(content.vincoli)
    )
      return intl.formatMessage(messages.vincoli);
  };

  return richTextHasContent(content.costi) ||
    richTextHasContent(content.vincoli) ? (
    <RichTextSection tag_id="costs" title={sectionTitleToRender()}>
      {richTextHasContent(content.costi) && (
        <RichText add_class="mb-5" data={content.costi} />
      )}
      {richTextHasContent(content.vincoli) && (
        <RichText
          title={
            richTextHasContent(content.costi)
              ? intl.formatMessage(messages.vincoli)
              : null
          }
          title_size="h4"
          add_class="mb-5"
          data={content.vincoli}
        />
      )}
    </RichTextSection>
  ) : null;
};

ServizioCostiVincoli.propTypes = {
  content: PropTypes.shape({
    costi: PropTypes.shape({
      data: PropTypes.object,
    }),
    vincoli: PropTypes.shape({
      data: PropTypes.object,
    }),
  }),
};
export default ServizioCostiVincoli;
