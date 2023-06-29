import React from 'react';
import PropTypes from 'prop-types';
import { RichTextRender } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
/**
 * RichTextArticle view component class.
 * @function RichTextArticle
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const RichTextArticle = ({
  title,
  title_size,
  show_title = true,
  content,
  tag_id,
  add_class,
  children,
}) => {
  let content_to_display = RichTextRender({
    content: content,
    add_class: add_class,
    serif: true,
  });

  return content_to_display || children ? (
    <article
      id={tag_id}
      className="it-page-section anchor-offset mt-5"
      menu_title={title ? title : ''}
      aria-labelledby={title_size !== 'h5' ? `header-${tag_id}` : undefined}
    >
      {title && show_title ? (
        title_size === 'h5' ? (
          <h5>{title}</h5>
        ) : (
          <h4 id={`header-${tag_id}`}>{title}</h4>
        )
      ) : (
        <h4 id={`header-${tag_id}`} style={{ display: 'none' }}>
          {title}
        </h4>
      )}

      {content_to_display}
      {children}
    </article>
  ) : null;
};
export default RichTextArticle;

RichTextArticle.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
  tag_id: PropTypes.string,
  add_class: PropTypes.string,
};
