import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  news_item_contenuto: {
    id: 'news_item_contenuto',
    defaultMessage: 'Contenuto',
  },
});

const NewsItemText = ({ content }) => {
  const intl = useIntl();

  return (
    <RichTextSection
      data={content.descrizione_estesa}
      tag_id={'text-body'}
      field="descrizione_estesa"
      title={intl.formatMessage(messages.news_item_contenuto)}
      show_title={false}
    />
  );
};

NewsItemText.propTypes = {
  content: PropTypes.shape({
    descrizione_estesa: PropTypes.object,
  }).isRequired,
};

export default NewsItemText;
