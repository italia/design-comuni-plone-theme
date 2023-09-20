/**
 * View title block.
 * @module components/manage/Blocks/Title/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';
import BodyWrapper from './BodyWrapper';

/**
 * View title block class.
 * @class View
 * @extends Component
 */

const TextCardView = ({ data, id }) => {
  return (
    <BodyWrapper data={data} inEditMode={false}>
      <Block data={data} inEditMode={false} block={{ id: id }} />
    </BodyWrapper>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
TextCardView.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TextCardView;
