import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichText,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  costi_e_vincoli: {
    id: 'costi_e_vincoli',
    defaultMessage: 'Costi',
  },
  vincoli: {
    id: 'vincoli',
    defaultMessage: 'Vincoli',
  },
});

const ServizioCostiVincoli = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {richTextHasContent(content.costi) && (
        <RichText
          title={intl.formatMessage(messages.costi_e_vincoli)}
          title_size="h4"
          add_class="mb-5"
          content={content.costi}
        />
      )}
      {richTextHasContent(content.vincoli) && (
        <RichText
          title={intl.formatMessage(messages.vincoli)}
          title_size="h4"
          add_class="mb-5"
          content={content.vincoli}
        />
      )}
    </>
  );
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
