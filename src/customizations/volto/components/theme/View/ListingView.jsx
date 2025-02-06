// Customization: added folder title and bootstrap layout

/**
 * Document view component.
 * @module components/theme/View/ListingView
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PageHeader } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { ListingImage } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { contentHasImage } from 'design-comuni-plone-theme/helpers';

/**
 * List view component class.
 * @function ListingView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const ListingView = ({ content }) => (
  <div id="page-home" className="ui container px-4">
    <PageHeader content={content} />
    <section id="content-core">
      {content.items.map((item) => {
        const hasImage = contentHasImage(item);
        return (
          <div key={item.url} className="listing-item my-4">
            <div>
              <h2>
                <Link to={item.url} title={item['@type']}>
                  {item.title}
                </Link>
              </h2>
              {item.description && <p>{item.description}</p>}
            </div>
            {hasImage && <ListingImage item={item} />}
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
