/**
 * View icons block.
 * @module components/manage/Blocks/IconsBlocks/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import Body from './Body';
import ViewBlock from './Block/ViewBlock';
import { SingleSlideWrapper } from 'design-comuni-plone-theme/components/ItaliaTheme';

/**
 * View icons blocks class.
 * @class View
 * @extends Component
 */
const View = ({ data, block }) => {
  return (
    <div className="block video_gallery">
      <Body data={data} nItems={data.subblocks?.length}>
        {data.subblocks.map((subblock, subindex) => (
          <SingleSlideWrapper key={subindex} index={subindex}>
            <ViewBlock data={subblock} />
          </SingleSlideWrapper>
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
