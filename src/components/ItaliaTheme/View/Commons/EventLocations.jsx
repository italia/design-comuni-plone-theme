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
  locations,
  show_icon,
  load = true,
  details_link = true,
}) => {
  return (
    <>
      <div className="card-wrapper card-teaser-wrapper">
        {locations.map((item, i) => (
          <EventLocation
            key={item['@id']}
            location={item}
            show_icon={show_icon}
            load={load}
            details_link={details_link}
          />
        ))}
      </div>
      <EventLocationMap location={locations[0]} />
    </>
  );
};
export default EventLocations;

EventLocations.propTypes = {
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
