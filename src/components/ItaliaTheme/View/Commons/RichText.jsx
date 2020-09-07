import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * RichText view component class.
 * @function RichText
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const RichText = ({ title, title_size, content, add_class, children }) => {
  return (
    <>
      {title &&
        (title_size === 'h6' ? (
          <h6 className="text-serif font-weight-bold mt-4">{title}</h6>
        ) : (
          <h5 className="mt-4">{title}</h5>
        ))}
      {content && (
        <div
          className={cx('text-serif', add_class)}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      {children}
    </>
  );
};
export default RichText;

RichText.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  add_class: PropTypes.string,
  title_size: PropTypes.string,
};
