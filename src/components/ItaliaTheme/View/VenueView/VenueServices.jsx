import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { RelatedArticles } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  related_services: {
    id: 'related_services',
    defaultMessage: 'Servizi presenti nel luogo',
  },
});

const VenueServices = ({ content }) => {
  const intl = useIntl();

  return content?.venue_services?.length > 0 ? (
    <RelatedArticles
      id="venue_services"
      items={content.venue_services}
      title={intl.formatMessage(messages.related_services)}
      title_tag="h4"
    />
  ) : (
    <></>
  );
};

VenueServices.propTypes = {
  content: PropTypes.shape({
    venue_services: PropTypes.array,
  }).isRequired,
};

export default VenueServices;
