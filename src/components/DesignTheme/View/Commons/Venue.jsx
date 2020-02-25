import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { getContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';

/**
 * OfficeCard view component class.
 * @function Venue
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const Venue = ({ content, venue }) => {
  const key = content['UID'] + 'venue';
  const url = flattenToAppURL(venue['@id']);
  const venueContent = useSelector(state => state.content.subrequests);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (venue) {
      dispatch(getContent(url, null, key));
    }
    return () => {
      // setValue(key, null);
    };
  }, [dispatch, venue, url, key]);

  let venue_fo = null;
  if (key in venueContent) {
    venue_fo = venueContent[key].data;
    return venue_fo ? (
      <>
        <div
          dangerouslySetInnerHTML={{ __html: venue_fo.descrizione_breve.data }}
        />{' '}
        {venue_fo.geolocation ? (
          <div className="mapbox">
            <h4>Mappa</h4>
            <div className="map"></div>
          </div>
        ) : null}
      </>
    ) : null;
  }
  return null;
};
export default Venue;
