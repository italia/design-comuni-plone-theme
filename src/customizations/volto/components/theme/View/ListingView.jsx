// Customization: added folder title and bootstrap layout

/**
 * Document view component.
 * @module components/theme/View/ListingView
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PageHeader } from '@italia/components/ItaliaTheme/View';
import Image from '@plone/volto/components/theme/Image/Image';

/**
 * List view component class.
 * @function ListingView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const ListingView = ({ content }) => (
  <div id="page-home" className="ui container">
    <PageHeader content={content} />
    <section id="content-core">
      {content.items.map((item) => {
        const image = item.image || item.immagine_testata || item.foto_persona;

        return (
          <div key={item.url} className="listing-item mx-3 my-4">
            <div className="container">
              <h2>
                <Link to={item.url} title={item['@type']}>
                  {item.title}
                </Link>
              </h2>
              {item.description && <p>{item.description}</p>}
            </div>
            {item.image && (
              <Image
                image={image}
                alt={item.image_caption ? item.image_caption : item.title}
                src={item.image.scales.thumb.download}
                loading="lazy"
              />
            )}
          </div>
        );
      })}
    </section>
  </div>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ListingView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        '@id': PropTypes.string,
        '@type': PropTypes.string,
        description: PropTypes.string,
        review_state: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default ListingView;
