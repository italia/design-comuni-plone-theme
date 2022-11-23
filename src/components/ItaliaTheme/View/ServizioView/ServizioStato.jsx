import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextArticle,
  richTextHasContent,
} from 'design-volto-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  service_not_active: {
    id: 'service_not_active',
    defaultMessage: 'Il servizio non è attivo',
  },
});

const ServizioStato = ({ content }) => {
  const intl = useIntl();
  return content.stato_servizio &&
    richTextHasContent(content.motivo_stato_servizio) ? (
    <RichTextArticle
      content={content.motivo_stato_servizio}
      field="motivo_stato_servizio"
      tag_id={'text-motivo-stato-servizio'}
      title={intl.formatMessage(messages.service_not_active)}
    />
  ) : (
    <></>
  );
};

ServizioStato.propTypes = {
  content: PropTypes.shape({
    stato_servizio: PropTypes.bool,
    motivo_stato_servizio: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};
export default ServizioStato;
