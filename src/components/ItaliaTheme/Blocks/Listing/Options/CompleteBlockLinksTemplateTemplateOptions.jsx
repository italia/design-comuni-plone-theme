/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';

import TemplatesOptions from '@italia/components/ItaliaTheme/Blocks/Listing/Options/TemplatesOptions';

const CardWithImageTemplateOptions = (props) => {
  //const { data, block, onChangeBlock } = props;

  return (
    <>
      <TemplatesOptions fields={['show_description']} {...props} />
    </>
  );
};

CardWithImageTemplateOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default CardWithImageTemplateOptions;
