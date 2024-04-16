import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection,
  Locations,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  luoghi: {
    id: 'luogo',
    defaultMessage: 'Luogo',
  },
});

const EventoLuoghi = ({ content }) => {
  const intl = useIntl();

  return content?.luoghi_correlati?.length > 0 ||
    content?.nome_sede?.length > 0 ||
    content?.street?.length > 0 ||
    (content?.geolocation?.latitude && content?.geolocation?.longitude) ||
    content?.zip_code?.length > 0 ||
    content?.city?.length > 0 ||
    content?.quartiere?.length > 0 ||
    content?.circoscrizione?.length > 0 ||
    content?.country?.length > 0 ? (
    <RichTextSection
      tag_id="luoghi"
      title={intl.formatMessage(messages.luoghi)}
    >
      <Locations
        content={content}
        locations={content?.luoghi_correlati ?? []}
        show_icon={true}
      />
    </RichTextSection>
  ) : (
    <></>
  );
};

EventoLuoghi.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoLuoghi;
