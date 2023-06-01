import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichTextSection,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  orario_pubblico: {
    id: 'orario_pubblico',
    defaultMessage: 'Orari per il pubblico',
  },
});

const VenuePublicTimetable = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content.orario_pubblico) ? (
    <RichTextSection
      data={content.orario_pubblico}
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
