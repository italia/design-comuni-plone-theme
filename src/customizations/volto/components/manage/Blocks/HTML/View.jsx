/**
 * View html block.
 * @module components/manage/Blocks/HTML/View
 */

import React from 'react';
import PropTypes from 'prop-types';
/**
 * View html block class.
 * @class View
 * @extends Component
 */
const View = ({ data }) => (
  <>
    <div
      className={`block html ${data.showFullWidth ?? 'full-width'} ${
        data.bgColor ?? 'bg-light'
      } py-5`}
    >
      <div
        className="container px-4"
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    </div>
  </>
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;
