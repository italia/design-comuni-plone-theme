import React from 'react';
import PropTypes from 'prop-types';

import { Metadata } from '@italia/components/ItaliaTheme/View';

const NewsItemMetadata = ({ content }) => {
  return <Metadata content={content} />;
};

NewsItemMetadata.propTypes = {
  content: PropTypes.object.isRequired,
};

export default NewsItemMetadata;
