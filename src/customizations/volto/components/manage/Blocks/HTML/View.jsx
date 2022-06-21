/**
 * View html block.
 * @module components/manage/Blocks/HTML/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
/**
 * View html block class.
 * @class View
 * @extends Component
 */
const View = ({ data }) => (
  <>
    <div
      className={cx('block html py-5', {
        'full-width': data.showFullWidth,
        'bg-light': data.bgColor,
      })}
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
