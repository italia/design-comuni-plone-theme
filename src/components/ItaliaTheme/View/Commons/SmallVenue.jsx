import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * SmallVenue view component class.
 * @function SmallVenue
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const SmallVenue = ({ venue }) => {
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
      <div className="card card-teaser shadow mt-3 rounded bigborder">
        <div className="card-body">
          <h5 className="card-title">
            <Link to={flattenToAppURL(venue_fo['@id'])} title={venue_fo.title}>
              {venue_fo.title}
            </Link>
          </h5>
          <div className="card-text">
            {venue_fo.telefono && <p>{venue_fo.telefono}</p>}
            {venue_fo.email && (
              <p>
                <a href={`mailto:${venue_fo.email}`} title={venue_fo.email}>
                  {venue_fo.email}
                </a>
              </p>
            )}
            {venue_fo.pec && (
              <p>
                <a href={`mailto:${venue_fo.pec}`} title={venue_fo.pec}>
                  {venue_fo.pec}
                </a>
              </p>
            )}
            {venue_fo.web && (
              <p>
                <a
                  href={
                    venue_fo.web.match(/^(http:\/\/|https:\/\/)/gm)
                      ? venue_fo.web
                      : `http://${venue_fo.web}`
                  }
                  title={venue_fo.web}
                >
                  {venue_fo.web}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  ) : null;
};
export default SmallVenue;

SmallVenue.propTypes = {
  venue: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    review_state: PropTypes.string,
  }),
};
