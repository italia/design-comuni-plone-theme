/**
 * ViewBlock.
 * @module components/ItaliaTheme/Blocks/Accordion/Block/ViewBlock
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * ViewBlock class.
 * @class ViewBlock
 * @extends Component
 */
const ViewBlock = ({ data, isOpen, toggle, id, index }) => {
  return (
    <div className="block-number">
      {data.title && (
        <div className="subblock-title font-monospace">{data.title}</div>
      )}
      {data.text && <div className="subblock-text">{data.text}</div>}
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ViewBlock.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ViewBlock;
