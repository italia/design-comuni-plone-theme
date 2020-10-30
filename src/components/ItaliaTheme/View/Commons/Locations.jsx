import LocationsMap from '@italia/components/ItaliaTheme/View/Commons/LocationsMap';
import LocationItem from '@italia/components/ItaliaTheme/View/Commons/LocationItem';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Locations view component class.
 * @function Locations
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const Locations = ({
  content = {},
  locations = [],
  show_icon,
  load = true,
  details_link = true,
}) => {
  return (
    <>
      <div className="card-wrapper card-teaser-wrapper">
        {[content, ...locations].map((item, i) => (
          <LocationItem
            key={item['@id'] + i}
            location={item}
            show_icon={show_icon}
            load={load}
            details_link={details_link}
          />
        ))}
      </div>
      <LocationsMap center={content} locations={locations} />
    </>
  );
};

Locations.propTypes = {
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
  show_icon: PropTypes.bool,
};

export default Locations;
