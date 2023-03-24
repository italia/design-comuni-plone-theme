import React from 'react';
import { useIntl } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import PropTypes from 'prop-types';
import { viewDate } from 'design-comuni-plone-theme/helpers';
/**
 *
 * NewsCard view component class.
 * @function NewsCard
 * @params {object} news: object.
 * @returns {string} Markup of the component.
 */
const NewsCard = ({ title, typology, effective, description, id }) => {
  const intl = useIntl();

  let date = effective ? new Date(effective) : false;

  return (
    <div className="relatedNews card card-teaser shadow p-4 mt-3 rounded">
      <div className="card-body">
        <div className="header text-uppercase"></div>
        <div className="category-top">
          {typology}
          {date ? (
            <span className="data">
              {viewDate(intl.locale, date, 'DD MMM Y')}
            </span>
          ) : null}
        </div>
        <h5 className="card-title">
          <UniversalLink href={flattenToAppURL(id)}>{title}</UniversalLink>
        </h5>
        <div className="card-text">{description}</div>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  title: PropTypes.string,
  typology: PropTypes.string,
  effective: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
};
