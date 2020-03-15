import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
/**
 * NewsCard view component class.
 * @function NewsCard
 * @params {object} news: object.
 * @returns {string} Markup of the component.
 */
const NewsCard = ({ title, typology, effective, description, id }) => {
  return (
    <div className="relatedNews card card-teaser shadow p-4 mt-3 rounded border">
      <div className="card-body">
        <div className="header text-uppercase"></div>
        <div class="category-top">
          {typology}
          {effective ? (
            <span className="data">{moment(effective).format('DD MMM Y')}</span>
          ) : null}
        </div>
        <h5 className="card-title big-heading">
          <Link to={flattenToAppURL(id)}>{title}</Link>
        </h5>
        <div className="card-text">{description}</div>
      </div>
    </div>
  );
};

export default NewsCard;
