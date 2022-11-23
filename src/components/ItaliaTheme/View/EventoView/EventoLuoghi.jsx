import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextArticle,
  Locations,
} from 'design-volto-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  luoghi: {
    id: 'luogo',
    defaultMessage: 'Luogo',
  },
});

const EventoLuoghi = ({ content }) => {
  const intl = useIntl();

  return content?.luoghi_correlati?.length > 0 ||
    content?.nome_sede > 0 ||
    content?.street > 0 ||
    (content?.geolocation?.latitude && content?.geolocation?.longitude) ||
    content?.zip_code ||
    content?.city ||
    content?.quartiere ||
    content?.circoscrizione ||
    content?.country ? (
    <RichTextArticle
      tag_id="luoghi"
      title={intl.formatMessage(messages.luoghi)}
    >
      <Locations
        content={content}
        locations={content?.luoghi_correlati ?? []}
        show_icon={true}
      />
    </RichTextArticle>
  ) : (
    <></>
  );
};

EventoLuoghi.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoLuoghi;
