import React from 'react';
import PropTypes from 'prop-types';
import { RichTextRender } from '@italia/components/ItaliaTheme/View';
/**
 * RichText view component class.
 * @function RichText
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const RichText = ({
  title,
  title_size,
  content,
  add_class,
  children,
  serif = true,
}) => {
  let content_to_display = RichTextRender({
    content: content,
    add_class: add_class,
    serif: serif,
  });

  return content_to_display || children ? (
    <>
      {title &&
        (title_size === 'h6' ? (
          <h6 className="font-weight-bold mt-4">{title}</h6>
        ) : (
          <h5 className="mt-4">{title}</h5>
        ))}
      {content_to_display}
      {children}
    </>
  ) : null;
};
export default RichText;

RichText.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object,
  add_class: PropTypes.string,
  title_size: PropTypes.string,
};
