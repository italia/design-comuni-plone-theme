import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextSection,
  VenuesSmall,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  luoghi: {
    id: 'luoghi_notizia',
    defaultMessage: 'Luoghi',
  },
});

const NewsItemLuoghiCorrelati = ({ content }) => {
  const intl = useIntl();
  return content.luoghi_correlati?.length > 0 ? (
    <RichTextSection
      tag_id="luoghi"
      title={intl.formatMessage(messages.luoghi)}
    >
      <VenuesSmall venues={content.luoghi_correlati} />
    </RichTextSection>
  ) : (
    <></>
  );
};

NewsItemLuoghiCorrelati.propTypes = {
  content: PropTypes.shape({
    luoghi_correlati: PropTypes.array,
  }).isRequired,
};

export default NewsItemLuoghiCorrelati;
