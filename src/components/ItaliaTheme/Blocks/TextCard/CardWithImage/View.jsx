import React from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from './BodyWrapper';

import Block from './Block';

const TextCardWithImageView = ({ data, id }) => {
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
TextCardWithImageView.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
};

export default TextCardWithImageView;
