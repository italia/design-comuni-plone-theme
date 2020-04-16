import React from 'react';
import PropTypes from 'prop-types';

/**
 * RichTextArticle view component class.
 * @function RichTextArticle
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const RichTextArticle = params => {
  return (
    <article id={params.tag_id} className="it-page-section anchor-offset mt-5">
      {params.title && <h4>{params.title}</h4>}
      <div
        className="text-serif"
        dangerouslySetInnerHTML={{ __html: params.content }}
      />
    </article>
  );
};
export default RichTextArticle;

RichTextArticle.propTypes = {
  params: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    tag_id: PropTypes.string,
  }),
};
