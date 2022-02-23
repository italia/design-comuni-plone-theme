import React from 'react';
import PropTypes from 'prop-types';

import { TextOrBlocks } from '@italia/components/ItaliaTheme/View';

const ModuloText = ({ content }) => {
  return <TextOrBlocks content={content} />;
};

ModuloText.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ModuloText;
