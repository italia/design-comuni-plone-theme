import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * RichTextArticle view component class.
 * @function RichTextArticle
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const RichTextArticle = ({ title, content, tag_id, add_class, children }) => {
  return (
    <article id={tag_id} className="it-page-section anchor-offset mt-5">
      {title && <h4 id={`header-${tag_id}`}>{title}</h4>}
      {content && (
        <div
          className={cx('text-serif', add_class)}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      {children}
    </article>
  );
};
export default RichTextArticle;

RichTextArticle.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  tag_id: PropTypes.string,
  add_class: PropTypes.string,
};
