import React from 'react';
import PropTypes from 'prop-types';
import { GenericCard } from '@italia/components/ItaliaTheme/View';
/**
 * RichTextArticle view component class.
 * @function ServicesArticle
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const ServicesArticle = ({ id='servizi-offerti', services, title }) => {
  return (
    <article
      id={id}
      className="it-page-section anchor-offset mt-5"
    >
      <h4 id={`header-${id}`}>
        {title}
      </h4>
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
        {services?.map((item, i) => (
          <GenericCard
            key={item['@id']}
            item={item}
            showimage={true}
            image_field={'immagine'}
          />
        ))}
      </div>
    </article>
  );
};
export default ServicesArticle;

ServicesArticle.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  news: PropTypes.arrayOf(Object),
};