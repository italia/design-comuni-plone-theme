import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { OSMMap } from 'volto-venue';
import PropTypes from 'prop-types';
import { UniversalLink } from '@plone/volto/components';

/**
 * LocationsMap view component class.
 * @function LocationMap
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  view_on_googlemaps: {
    id: 'view_on_googlemaps',
    defaultMessage: 'Vedi su Google Maps',
  },
  view_on_bingmaps: {
    id: 'view_on_bingmaps',
    defaultMessage: 'Vedi su Bing Maps',
  },
  view_on_applemaps: {
    id: 'view_on_applemaps',
    defaultMessage: 'Vedi su Apple Maps',
  },
});

const LocationsMap = ({ center, locations }) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const fetchedLocations = useSelector((state) => state.content.subrequests);
  const venues = locations.map((location) => {
    let url = flattenToAppURL(location['@id']);
    return {
      key: `luogo${url}`,
      url: url,
    };
  });

  useEffect(() => {
    venues.forEach((loc) => {
      dispatch(getContent(loc.url, null, loc.key));
    });

    return () =>
      venues.forEach((loc) => {
        dispatch(resetContent(loc.key));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, locations]);

  const pinContent = (item) => {
    return (
      <div className="map-pin-popup">
        <div className="title">{item.title}</div>
        <p>
          <UniversalLink
            href={`http://maps.google.com/?q=${item.street ?? ''} ${
              item.zip_code ?? ''
            } ${item.city ?? ''} ${item.province ?? ''} ${
              item.geolocation.latitude
            },${item.geolocation.longitude}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {intl.formatMessage(messages.view_on_googlemaps)}
          </UniversalLink>
        </p>
        <p>
          <UniversalLink
            href={`https://bing.com/maps/default.aspx?where1=${
              item.street ?? ''
            } ${item.zip_code ?? ''} ${item.city ?? ''} ${item.province ?? ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {intl.formatMessage(messages.view_on_bingmaps)}
          </UniversalLink>
        </p>
        <p>
          <UniversalLink
            href={`  http://maps.apple.com/?q=${item.street ?? ''} ${
              item.zip_code ?? ''
            } ${item.city ?? ''} ${item.province ?? ''}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {intl.formatMessage(messages.view_on_applemaps)}
          </UniversalLink>
        </p>
      </div>
    );
  };

  let venuesData = venues.reduce((acc, val) => {
    let venue = fetchedLocations?.[val.key]?.data;

    if (venue?.geolocation?.latitude && venue?.geolocation?.longitude) {
      return [
        ...acc,
        {
          latitude: venue.geolocation.latitude,
          longitude: venue.geolocation.longitude,
          title: venue.title,
          popupContent: pinContent(venue),
        },
      ];
    }

    return acc;
  }, []);

  if (center?.geolocation?.latitude && center?.geolocation?.longitude) {
    venuesData = [
      {
        latitude: center.geolocation.latitude,
        longitude: center.geolocation.longitude,
        title: center.title,
        popupContent: pinContent(center),
      },
      ...venuesData,
    ];
  }

  return venuesData?.length > 0 ? (
    <>
      {__CLIENT__ && (
        <OSMMap
          center={[venuesData[0].latitude, venuesData[0].longitude]}
          markers={venuesData}
          showTooltip={true}
          showPopup={true}
          mapOptions={{
            scrollWheelZoom: false,
            // tap: false,
            // dragging: false,
          }}
        />
      )}
    </>
  ) : null;
};

LocationsMap.propTypes = {
  content: PropTypes.shape({
    '@id': PropTypes.string,
    geolocation: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
  }),
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      '@id': PropTypes.string,
      '@type': PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      review_state: PropTypes.string,
    }),
  ),
};

export default LocationsMap;
