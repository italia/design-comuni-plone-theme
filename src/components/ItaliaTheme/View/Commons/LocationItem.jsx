/*
 * Component used to display a location item (luoghi_correlati)
 * in VenueDescription, subcomponents of VenueView (luogo)
 */
import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';
import PropTypes from 'prop-types';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import config from '@plone/volto/registry';

const messages = defineMessages({
  locations: {
    id: 'locations',
    defaultMessage: 'Luoghi',
  },
  details: {
    id: 'details',
    defaultMessage: 'Maggiori dettagli',
  },
  quartiere: {
    id: 'quartiere',
    defaultMessage: 'Quartiere',
  },
  circoscrizione: {
    id: 'circoscrizione',
    defaultMessage: 'Circoscrizione',
  },
});

const LocationItem = ({
  location,
  show_icon,
  show_title_link,
  details_link = true,
}) => {
  const intl = useIntl();
  const Image = config.getComponent({ name: 'Image' }).component;
  const image = Image({ item: location, sizes: '80px', loading: 'lazy' });
  const address = ['street', 'city', 'zip_code']
    .map((key) => location?.[key])
    .filter(Boolean)
    .join(' - ');

  return location ? (
    <div className="card card-teaser shadow mt-3 border-left-card card-big-io-comune p-4 rounded location-item">
      {show_icon && <Icon icon={'it-pin'} />}
      <div className="card-body">
        <div className="card-title h5 venue-card-title">
          {(location.nome_sede || location.title) && (
            <>
              {location['@type'] === 'Venue' ||
              (location['@type'] === 'UnitaOrganizzativa' &&
                show_title_link) ? (
                <UniversalLink
                  href={flattenToAppURL(location['@id'])}
                  title={location.title || ''}
                >
                  {location.nome_sede || location.title}
                </UniversalLink>
              ) : (
                location.nome_sede || location.title
              )}
            </>
          )}
        </div>
        <div className="card-text">
          <p>{address}</p>

          {!details_link && (
            <>
              {location.quartiere && (
                <p>
                  {intl.formatMessage(messages.quartiere)}: {location.quartiere}
                </p>
              )}
              {location.circoscrizione && (
                <p>
                  {intl.formatMessage(messages.circoscrizione)}:{' '}
                  {location.circoscrizione}
                </p>
              )}
            </>
          )}
          {details_link && (
            <p className="mt-3">
              <UniversalLink
                href={flattenToAppURL(location['@id'])}
                title={location.title || ''}
              >
                {intl.formatMessage(messages.details)}
              </UniversalLink>
            </p>
          )}
        </div>
      </div>
      {image && <div className="avatar size-xl">{image}</div>}
    </div>
  ) : (
    ''
  );
};

LocationItem.propTypes = {
  location: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    review_state: PropTypes.string,
  }),

  show_icon: PropTypes.bool,
};

export default LocationItem;
