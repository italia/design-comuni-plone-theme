import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichTextArticle,
} from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  orario_pubblico: {
    id: 'orario_pubblico',
    defaultMessage: 'Orari di apertura',
  },
});

const VenuePublicTimetable = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content.orario_pubblico) ? (
    <RichTextArticle
      content={content.orario_pubblico}
      tag_id={'orario-per-pubblico'}
      title={intl.formatMessage(messages.orario_pubblico)}
    />
  ) : (
    <></>
  );
};

VenuePublicTimetable.propTypes = {
  content: PropTypes.shape({
    orario_pubblico: PropTypes.object,
  }).isRequired,
};

export default VenuePublicTimetable;
