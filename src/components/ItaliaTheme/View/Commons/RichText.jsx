import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { flattenHTMLToAppURL } from '@plone/volto/helpers';

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
  let content_to_display = content ? content?.replace(/(<([^>]+)>)/g, '') : '';
  content_to_display =
    content_to_display.length > 0 ? content_to_display : null;

  return content_to_display || children ? (
    <>
      {title &&
        (title_size === 'h6' ? (
          <h6 className="font-weight-bold mt-4">{title}</h6>
        ) : (
          <h5 className="mt-4">{title}</h5>
        ))}
      {content && (
        <div
          className={cx(add_class, { 'text-serif': serif })}
          dangerouslySetInnerHTML={{ __html: flattenHTMLToAppURL(content) }}
        />
      )}
      {children}
    </>
  ) : null;
};
export default RichText;

RichText.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  add_class: PropTypes.string,
  title_size: PropTypes.string,
};
