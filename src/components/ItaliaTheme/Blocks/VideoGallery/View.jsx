/**
 * View icons block.
 * @module components/manage/Blocks/IconsBlocks/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import Body from './Body';
import ViewBlock from './Block/ViewBlock';

/**
 * View icons blocks class.
 * @class View
 * @extends Component
 */
const View = ({ data, block }) => {
  return (
    <div className="block video_gallery">
      <Body data={data}>
        {data.subblocks.map((subblock, subindex) => (
          <div className="it-single-slide-wrapper" key={subindex}>
            <ViewBlock data={subblock} />
          </div>
        ))}
      </Body>
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
