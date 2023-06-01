import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import { RichTextSection } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  cos_e: {
    id: 'service_cos_e',
    defaultMessage: 'Descrizione',
  },
});

const ServizioCosE = ({ content }) => {
  const intl = useIntl();
  return (
    <RichTextSection
      data={content.descrizione_estesa}
      tag_id="description"
      title={intl.formatMessage(messages.cos_e)}
      show_title={true}
    />
  );
};

ServizioCosE.propTypes = {
  content: PropTypes.shape({
    descrizione_estesa: PropTypes.object,
  }),
};
export default ServizioCosE;
