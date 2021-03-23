/**
 * Tags component.
 * @module components/theme/Tags/Tags
 */

import PropTypes from 'prop-types';

/**
 * Tags component class.
 * @function Tags
 * @param {array} tags Array of tags.
 * @returns {string} Markup of the component.
 */
const Tags = ({ tags }) => null; //abbiamo il nostro componente <Metadata> che mostra i tag. Questi sono superflui

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
Tags.defaultProps = {
  tags: null,
};

export default Tags;
