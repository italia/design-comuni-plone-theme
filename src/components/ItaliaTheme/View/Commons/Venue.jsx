import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import PropTypes from 'prop-types';
import { RichText } from '@italia/components/ItaliaTheme/View';
/**
 * Venue view component class.
 * @function Venue
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const Venue = ({ venue, display_title = true }) => {
  const key = `${venue['@id']}_venue`;
  const url = flattenToAppURL(venue['@id']);
  const venueContent = useSelector((state) => state.content.subrequests);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContent(url, null, key));
    return () => dispatch(resetContent(key));
  }, [dispatch, venue, url, key]);

  let venue_fo = venueContent[key]?.data;
  return venue_fo ? (
    <>
      <RichText content={venue_fo?.descrizione_breve} />

      {venue_fo.geolocation ? (
        <div className="mapbox">
          {display_title && <h4>Mappa</h4>}
          <div className="map"></div>
        </div>
      ) : null}
    </>
  ) : null;
};
export default Venue;

Venue.propTypes = {
  venue: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    review_state: PropTypes.string,
  }),
};
