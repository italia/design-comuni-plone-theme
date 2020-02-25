import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { getContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';

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
const Location = ({ location }) => {
  const intl = useIntl();
  const key = 'luogo' + location['@id'];
  const url = flattenToAppURL(location['@id']);
  const locationContent = useSelector(state => state.content.subrequests);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getContent(url, null, key));
    return () => {};
  }, [dispatch, location, url, key]);
  let location_fo = null;
  if (key in locationContent) {
    location_fo = locationContent[key].data;
  }
  let card;
  if (location_fo) {
    card = (
      <div className="card card-teaser shadow mt-3 rounded">
        <div className="card-body">
          <h5 className="card-title">{location_fo.title}</h5>
          <div className="card-text">
            <p>{location_fo.address}</p>
            <p className="mt-3">
              <a href={location_fo['@id']} alt={location_fo.title}>
                {intl.formatMessage(messages.details)}
              </a>
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
    );
  } else {
    card = '';
  }
  return card;
};

/**
 * Locations view component class.
 * @function Locations
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const Locations = ({ locations }) => {
  const intl = useIntl();
  return (
    <article id="luoghi" className="it-page-section anchor-offset mt-5">
      <h4>{intl.formatMessage(messages.locations)}</h4>
      <div className="card-wrapper card-teaser-wrapper">
        {locations.map((item, i) => (
          <Location key={i} location={item} />
        ))}
      </div>
    </article>
  );
};
export default Locations;
