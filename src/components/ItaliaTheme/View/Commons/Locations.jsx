import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Icon } from 'design-react-kit/dist/design-react-kit';
import { Link } from 'react-router-dom';
import { OSMMap } from '@italia/addons/volto-venue';
import PropTypes from 'prop-types';

const messages = defineMessages({
  locations: {
    id: 'locations',
    defaultMessage: 'Luoghi',
  },
  details: {
    id: 'details',
    defaultMessage: 'Maggiori dettagli',
  },
});

/**
 * Location view component class.
 * @function Location
 * @params {object} location: object.
 * @returns {string} Markup of the component.
 */
const Location = ({ location, show_icon }) => {
  const intl = useIntl();
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
    <div className="card card-teaser shadow mt-3 rounded">
      {show_icon && <Icon icon={'it-pin'} />}
      <div className="card-body">
        <h5 className="card-title">{location_fo.title}</h5>
        <div className="card-text">
          <p>{`${location_fo.street} - ${location_fo.zip_code}`}</p>
          <p className="mt-3">
            <Link
              to={flattenToAppURL(location_fo['@id'])}
              title={location_fo.title}
            >
              {intl.formatMessage(messages.details)}
            </Link>
          </p>
        </div>
      </div>
      {location_fo.immagine && (
        <div className="avatar size-xl">
          <img
            src={flattenToAppURL(location_fo.immagine.scales.mini.download)}
            alt="Immagine"
          ></img>
        </div>
      )}
    </div>
  ) : (
    ''
  );
};

/**
 * LocationMap view component class.
 * @function LocationMap
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const LocationMap = ({ location }) => {
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
      <h4 className="no-toc map-header">Mappa</h4>
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

/**
 * Locations view component class.
 * @function Locations
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const Locations = ({ locations, show_icon }) => {
  return (
    <>
      <div className="card-wrapper card-teaser-wrapper">
        {locations.map((item, i) => (
          <Location key={item['@id']} location={item} show_icon={show_icon} />
        ))}
      </div>
      <LocationMap location={locations[0]} />
    </>
  );
};
export default Locations;

Locations.propTypes = {
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      '@id': PropTypes.string,
      '@type': PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      review_state: PropTypes.string,
    }),
  ),
  show_icon: PropTypes.bool,
};

Location.propTypes = {
  location: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    review_state: PropTypes.string,
  }),
  show_icon: PropTypes.bool,
};

LocationMap.propTypes = {
  location: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    review_state: PropTypes.string,
  }),
};
