import React from 'react';
import PropTypes from 'prop-types';
import { OSMMap } from '@italia/addons/volto-venue';
import { defineMessages, useIntl } from 'react-intl';
import { GenericCard } from '@italia/components/ItaliaTheme/View';
const messages = defineMessages({
  sedi: {
    id: 'sedi',
    defaultMessage: 'Dove e come trovarci',
  },
});
/**
 * Venue view component class.
 * @function UOLocation
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const UOLocation = ({
  sedi,
  contact_info,
  geolocation,
  street,
  city,
  country,
  zip_code,
}) => {
  const intl = useIntl();
  const searchAddress = [street, city, country?.title, zip_code]
    .filter(Boolean)
    .join(', ');
  return (
    <article id="sedi" className="it-page-section anchor-offset mt-5">
      <h4 id="header-sedi">{intl.formatMessage(messages.sedi)}</h4>
      {contact_info?.data.replace(/(<([^>]+)>)/g, '') && (
        <div
          className="text-serif"
          dangerouslySetInnerHTML={{
            __html: contact_info.data,
          }}
        />
      )}
      {__CLIENT__ && geolocation.latitude && geolocation.longitude ? (
        <>
          <OSMMap position={[geolocation.latitude, geolocation.longitude]} />
          <small>{searchAddress}</small>
        </>
      ) : (
        ''
      )}
      {sedi.length > 0 && (
        <>
          <h5 className="mt-3">Altre sedi</h5>
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
            {sedi.map((item, i) => (
              <GenericCard key={item['@id']} item={item} showimage={false} />
            ))}
          </div>
        </>
      )}
    </article>
  );
};
export default UOLocation;

UOLocation.propTypes = {
  sedi: PropTypes.array,
  geolocation: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
  contact_info: PropTypes.shape({
    data: PropTypes.string,
  }),
  street: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  zip_code: PropTypes.string,
};
