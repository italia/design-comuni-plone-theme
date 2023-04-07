import LocationsMap from 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/LocationsMap';
import LocationItem from 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/LocationItem';
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
  show_title_link = false,
  load = true,
  details_link = true,
}) => {
  let location_items = [];
  if (
    content?.nome_sede ||
    content.street ||
    content.city ||
    content.zip_code ||
    content.quartiere ||
    content.circoscrizione
  ) {
    location_items.push(content);
  }

  location_items = [...location_items, ...locations];
  return (
    <>
      <div className="card-wrapper card-teaser-wrapper align-items-stretch">
        {[...location_items].map((item, i) => (
          <LocationItem
            key={item['@id'] + i}
            location={item}
            show_icon={show_icon}
            show_title_link={show_title_link}
            load={item['@id'] === content['@id'] ? false : load}
            details_link={item['@id'] === content['@id'] ? false : details_link}
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
