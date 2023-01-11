import React from 'react';
import PropTypes from 'prop-types';

import { Gallery } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const NewsItemGallery = ({ content }) => {
  return <Gallery content={content} folder_name={'multimedia'} />;
};

NewsItemGallery.propTypes = {
  content: PropTypes.object.isRequired,
};

export default NewsItemGallery;
