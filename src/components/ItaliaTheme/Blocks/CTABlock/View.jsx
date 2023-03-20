import React from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CTABlock/BodyWrapper';

import Block from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/CTABlock/Block';

const View = ({ data }) => {
  return (
    <BodyWrapper inEditMode={false}>
      <Block data={data} inEditMode={false} />
    </BodyWrapper>
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
