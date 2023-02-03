import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import {
  RichText,
  RichTextArticle,
  Dates,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  date_e_orari: {
    id: 'date_e_orari',
    defaultMessage: 'Date e orari',
  },
  orari: {
    id: 'orari',
    defaultMessage: 'Orari',
  },
});

const EventoDateOrari = ({ content }) => {
  const intl = useIntl();

  return (
    <RichTextArticle
      tag_id="date-e-orari"
      title={intl.formatMessage(messages.date_e_orari)}
    >
      <Dates content={content} />
      {richTextHasContent(content.orari) && (
        <RichText
          title={intl.formatMessage(messages.orari)}
          content={content.orari}
        />
      )}
    </RichTextArticle>
  );
};

EventoDateOrari.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoDateOrari;
