import EventLocationMap from './EventLocationMap';
import EventLocation from './EventLocation';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * EventLocations view component class.
 * @function EventLocations
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const EventLocations = ({
  content = {},
  locations = [],
  show_icon,
  load = true,
  details_link = true,
}) => {
  const venues =
    content?.geolocation?.latitude && content?.geolocation?.longitude
      ? [content, ...locations]
      : locations;

  return (
    <>
      <div className="card-wrapper card-teaser-wrapper">
        {venues.map((item, i) => (
          <EventLocation
            key={item['@id'] + i}
            location={item}
            show_icon={show_icon}
            load={load}
            details_link={details_link}
          />
        ))}
      </div>
      <EventLocationMap center={content} locations={locations} />
    </>
  );
};

EventLocations.propTypes = {
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

export default EventLocations;
