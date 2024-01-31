import { defineMessages, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import config from '@plone/volto/registry';

const messages = defineMessages({
  VenuesSmall: {
    id: 'VenuesSmall',
    defaultMessage: 'Luoghi',
  },
  details: {
    id: 'details',
    defaultMessage: 'Maggiori dettagli',
  },
});

/**
 * Location view component class (internal).
 * @function Location
 * @params {object} location: object.
 * @params {boolean} show_icon:
 * @returns {string} Markup of the component.
 */
const Location = ({ location, show_icon }) => {
  const intl = useIntl();
  const Image = config.getComponent({ name: 'Image' }).component;
  const image = Image({ item: location, loading: 'lazy', sizes: '80px' });
  return (
    location && (
      <div className="card card-teaser shadow border-left-card mt-3 rounded location-item">
        {show_icon && <Icon icon={'it-pin'} />}
        <div className="card-body">
          <div className="card-title h5">{location.title}</div>
          <div className="card-text">
            {(location.street || location.zip_code) && (
              <p>
                {location.street && location.street}
                {location.street && location.zip_code ? ' - ' : ' '}
                {location.zip_code}
              </p>
            )}
            <p className="mt-3">
              <Link
                to={flattenToAppURL(location['@id'])}
                title={location.title}
              >
                {intl.formatMessage(messages.details)}
              </Link>
            </p>
          </div>
        </div>
        {image && <div className="avatar size-xl">{image}</div>}
      </div>
    )
  );
};

/**
 * VenuesSmall view component class. Used in NewsItemLuoghiCorrelati, subcomponent of NewsItemView.
 * @function VenuesSmall
 * @params ...
 * @returns {string} Markup of the component.
 */
const VenuesSmall = ({ venues, show_icon }) => {
  return venues ? (
    <div className="card-wrapper card-teaser-wrapper">
      {venues.map((item) => (
        <Location key={item['@id']} location={item} show_icon={show_icon} />
      ))}
    </div>
  ) : null;
};
export default VenuesSmall;

VenuesSmall.propTypes = {
  VenuesSmall: PropTypes.arrayOf(
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

Location.propTypes = {
  location: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    review_state: PropTypes.string,
  }),
  show_icon: PropTypes.bool,
};
