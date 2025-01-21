import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichText,
  RichTextSection,
  richTextHasContent,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  news_item_contenuto: {
    id: 'news_item_contenuto',
    defaultMessage: 'Contenuto',
  },
});

const NewsItemText = ({ content }) => {
  const intl = useIntl();
  if (typeof content !== 'object') return null;

  // NewsItem ha la descrizione_estesa (testo con blocchi)
  // altri CT (come i Comunicati Stampa) potrebbero avere `text`
  // (richtext senza blocchi).
  //
  // La condizione sul campo descrizione_estesa è volutamente semplificata
  // senza `richTextHasContent` perchè non interessa tanto se il campo
  // ha o non ha contenuto, ma se il campo esiste o non esiste
  return (Object.hasOwn || Object.hasOwnProperty)(content, 'descrizione_estesa')
    ? richTextHasContent(content.descrizione_estesa) && (
        <RichTextSection
          data={content.descrizione_estesa}
          tag_id={'text-body'}
          field="descrizione_estesa"
          title={intl.formatMessage(messages.news_item_contenuto)}
          show_title={false}
        />
      )
    : content.text && (
        <RichTextSection
          tag_id={'text-body'}
          title={intl.formatMessage(messages.news_item_contenuto)}
          show_title={false}
        >
          <RichText data={content.text} />
        </RichTextSection>
      );
};

NewsItemText.propTypes = {
  content: PropTypes.shape({
    descrizione_estesa: PropTypes.object,
    text: PropTypes.object,
  }).isRequired,
};

export default NewsItemText;
