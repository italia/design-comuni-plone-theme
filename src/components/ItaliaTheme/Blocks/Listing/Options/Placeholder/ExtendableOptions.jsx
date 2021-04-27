import React from 'react';
import PropTypes from 'prop-types';

/*
  Override this component in your project, to extend option for yout custom templates
*/

const ExtendableOptions = ({
  data,
  block,
  onChangeBlock,
  required = false,
}) => {
  return <></>;
};

ExtendableOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default ExtendableOptions;
