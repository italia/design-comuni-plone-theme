import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { OSMMap } from '@italia/addons/volto-venue';
import PropTypes from 'prop-types';

/**
 * EventLocationMap view component class.
 * @function LocationMap
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const EventLocationMap = ({ location }) => {
  const key = `luogo${location['@id']}`;
  const url = flattenToAppURL(location['@id']);
  const locationContent = useSelector((state) => state.content.subrequests);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContent(url, null, key));
    return () => dispatch(resetContent(key));
  }, [dispatch, location, url, key]);

  let location_fo = locationContent[key]?.data;
  return location_fo ? (
    <>
      {__CLIENT__ &&
      location_fo.geolocation?.latitude &&
      location_fo.geolocation?.longitude ? (
        <>
          <OSMMap
            position={[
              location_fo.geolocation.latitude,
              location_fo.geolocation.longitude,
            ]}
          />
        </>
      ) : null}
    </>
  ) : null;
};

EventLocationMap.propTypes = {
  location: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    review_state: PropTypes.string,
  }),
};

export default EventLocationMap;
