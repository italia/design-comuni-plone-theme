/**
 * BITIcon component.
 * @module components/ItaliaTheme/Icons/BITIcon
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component to display an SVG as Icon.
 * @function Field
 * @param {Object} props Component properties.
 * @param {string} props.name Name source object.
 * @param {string} props.size Size of the Icon (in px).
 * @param {string} props.color Color of the Icon.
 * @param {string} props.className className to add to the component.
 * @param {string} props.title Title (a11y).
 * @returns {string} Markup of the component.
 *
 */
const BITIcon = ({ name, size, color, className, title, onClick }) => {
  let style = null;
  if (size != null) {
    style = { height: size, width: 'auto' };
  }
  let class_name = 'icon';
  if (className) {
    class_name = class_name + ' ' + className;
  }
  if (color) {
    class_name = class_name + ' icon-' + color;
  }

  return (
    <svg
      xmlns={name.attributes && name.attributes.xmlns}
      viewBox={name.attributes && name.attributes.viewBox}
      style={style}
      className={class_name}
      onClick={onClick}
      dangerouslySetInnerHTML={{
        __html: title ? `<title>${title}</title>${name.content}` : name.content,
      }}
    />
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
BITIcon.propTypes = {
  name: PropTypes.shape({
    xmlns: PropTypes.string,
    viewBox: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
BITIcon.defaultProps = {
  size: null,
  color: null,
  className: null,
  title: null,
  onClick: null,
};

export default BITIcon;
