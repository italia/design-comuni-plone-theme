import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import { RichTextArticle } from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  cos_e: {
    id: 'service_cos_e',
    defaultMessage: "Cos'è",
  },
});

const ServizioCosE = ({ content }) => {
  const intl = useIntl();
  return (
    <RichTextArticle
      content={content.descrizione_estesa}
      tag_id={'text-body'}
      field="cos_e"
      title={intl.formatMessage(messages.cos_e)}
      show_title={false}
    />
  );
};

ServizioCosE.propTypes = {
  content: PropTypes.shape({
    descrizione_estesa: PropTypes.object,
  }),
};
export default ServizioCosE;
