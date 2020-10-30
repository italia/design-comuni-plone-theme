import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { OSMMap } from '@italia/addons/volto-venue';
import PropTypes from 'prop-types';

/**
 * LocationsMap view component class.
 * @function LocationMap
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const LocationsMap = ({ center, locations }) => {
  const dispatch = useDispatch();
  const fetchedLocations = useSelector((state) => state.content.subrequests);
  const venues = locations.map((location) => ({
    key: `luogo${location['@id']}`,
    url: flattenToAppURL(location['@id']),
  }));

  useEffect(() => {
    venues.forEach((loc) => {
      dispatch(getContent(loc.url, null, loc.key));
    });

    return () =>
      venues.forEach((loc) => {
        dispatch(resetContent(loc.key));
      });
  }, [dispatch, locations]);

  let venuesData = venues.reduce((acc, val) => {
    let venue = fetchedLocations?.[val.key]?.data;

    if (venue?.geolocation?.latitude && venue?.geolocation?.longitude) {
      return [
        ...acc,
        {
          latitude: venue.geolocation.latitude,
          longitude: venue.geolocation.longitude,
          title: venue.title,
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
          showTooltip
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
