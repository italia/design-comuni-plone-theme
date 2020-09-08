import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * RichTextArticle view component class.
 * @function RichTextArticle
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const RichTextArticles = ({ title, contents, tag_id, add_class, children }) => {
  return (
    <article id={tag_id} className="it-page-section anchor-offset mt-5">
      {title && <h4 id={`header-${tag_id}`}>{title}</h4>}
      {contents?.length > 0 && 
        contents.map((content, index) => (
          content?.text && 
            <div className="mt-3" key={index}>
              {content.title && <h6>{content.title}</h6>}
              {
                content.href ? 
                  <a href={content.href}
                    className={cx('text-serif', add_class)}
                    dangerouslySetInnerHTML={{ __html: content.text }} 
                  />
                :
                  <div
                    className={cx('text-serif', add_class)}
                    dangerouslySetInnerHTML={{ __html: content.text }}
                  />
              }
            </div>
        )
      )}
      {children}
    </article>
  );
};
export default RichTextArticles;

RichTextArticles.propTypes = {
  title: PropTypes.string,
  contents: PropTypes.string,
  tag_id: PropTypes.string,
  add_class: PropTypes.string,
};
