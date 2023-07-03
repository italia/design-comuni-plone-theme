import React from 'react';
import PropTypes from 'prop-types';
import { RelatedNews } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
/**
 * RelatedNewsArticles view component class.
 * @function RelatedNewsArticles
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const RelatedNewsArticles = ({ id = 'related-news', news, title }) => {
  return (
    <article
      id={id}
      className="it-page-section anchor-offset mt-5"
      aria-labelledby={`header-${id}`}
    >
      <h4 id={`header-${id}`}>{title}</h4>
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {news?.map((item, i) => (
          <RelatedNews key={item['@id']} item={item} showimage={false} />
        ))}
      </div>
    </article>
  );
};
export default RelatedNewsArticles;

RelatedNewsArticles.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  news: PropTypes.arrayOf(Object),
};
