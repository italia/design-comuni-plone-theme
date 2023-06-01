import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import PropTypes from 'prop-types';
import { RichText } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
/**
 * Venue view component class.
 * @function Venue
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const Venue = ({ venue, display_title = true }) => {
  const url = flattenToAppURL(venue['@id']);
  const key = `${url}_venue`;

  const venueContent = useSelector((state) => state.content.subrequests?.[key]);
  const loaded = venueContent?.loaded || venueContent?.loading;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loaded) {
      dispatch(getContent(url, null, key));
    }
    return () => dispatch(resetContent(key));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  let venue_fo = venueContent?.data;
  return venue_fo ? (
    <>
      <RichText data={venue_fo?.descrizione_breve} />

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
