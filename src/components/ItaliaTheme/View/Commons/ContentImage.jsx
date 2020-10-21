import React from 'react';
import PropTypes from 'prop-types';
import { siteConfig } from '~/config';
import { WideImage } from '@italia/components/ItaliaTheme/View';
/**
 * ContentImage view component class.
 * @function ContentImage
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const ContentImage = ({ content, position }) => {
  const view =
    (content?.image || content?.image_caption) &&
    siteConfig.italiaThemeViewsConfig.imagePosition === position;

  return view ? (
    <WideImage
      title={content?.title}
      image={content?.image}
      caption={content?.image_caption}
      fullWidth={
        siteConfig.italiaThemeViewsConfig.imagePosition === 'afterHeader'
      }
    />
  ) : null;
};
export default ContentImage;

ContentImage.propTypes = {
  params: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.shape({
      download: PropTypes.string,
    }),
    caption: PropTypes.string,
    fullWidth: PropTypes.bool,
  }),
};
