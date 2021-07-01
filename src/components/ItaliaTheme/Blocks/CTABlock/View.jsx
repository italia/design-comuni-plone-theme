import React from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from './BodyWrapper';

import Block from './Block';

const View = ({ data }) => (
  <BodyWrapper inEditMode={false}>
    <Block data={data} inEditMode={false} />
  </BodyWrapper>
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
