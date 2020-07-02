import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import PropTypes from 'prop-types';
/**
 *
 * NewsCard view component class.
 * @function NewsCard
 * @params {object} news: object.
 * @returns {string} Markup of the component.
 */
const NewsCard = ({ title, typology, effective, description, id }) => {
  let date = effective ? new Date(effective) : false;
  return (
    <div className="relatedNews card card-teaser shadow p-4 mt-3 rounded border">
      <div className="card-body">
        <div className="header text-uppercase"></div>
        <div className="category-top">
          {typology}
          {date ? (
            <span className="data">
              {moment(date.toISOString()).format('DD MMM Y')}
            </span>
          ) : null}
        </div>
        <h5 className="card-title big-heading no-toc">
          <Link to={flattenToAppURL(id)}>{title}</Link>
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
