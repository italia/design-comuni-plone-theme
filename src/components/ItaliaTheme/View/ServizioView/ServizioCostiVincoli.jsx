import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichText,
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  costi_e_vincoli: {
    id: 'costi_e_vincoli',
    defaultMessage: 'Quanto costa',
  },
  vincoli: {
    id: 'vincoli',
    defaultMessage: 'Vincoli',
  },
});

const ServizioCostiVincoli = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content.costi) ||
    richTextHasContent(content.vincoli) ? (
    <>
      <RichTextSection
        tag_id="costs"
        title={intl.formatMessage(messages.costi_e_vincoli)}
      >
        <RichText content={content.costi} />

        <RichText
          title={intl.formatMessage(messages.vincoli)}
          title_size="h3"
          content={content.vincoli}
        />
      </RichTextSection>
    </>
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
