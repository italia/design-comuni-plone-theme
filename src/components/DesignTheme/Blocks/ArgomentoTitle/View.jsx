/**
 * View title block.
 * @module components/manage/Blocks/Title/View
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * View title block class.
 * @class View
 * @extends Component
 */
const View = ({ data }) => {
  return (
    <div className={data['@type'] + ' ' + data.align}>
      <h2>{data.title}</h2>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;
