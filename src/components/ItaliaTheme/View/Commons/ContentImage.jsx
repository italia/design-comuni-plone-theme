import React from 'react';
import PropTypes from 'prop-types';
import { WideImage } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import config from '@plone/volto/registry';

/**
 * ContentImage view component class.
 * @function ContentImage
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const ContentImage = ({ content, position }) => {
  const view =
    (content?.image || content?.image_caption) &&
    config.settings.italiaThemeViewsConfig.imagePosition === position;

  return view ? (
    <div className="content-image">
      <WideImage
        title={content.title}
        image={content.image}
        caption={content.image_caption}
        fullWidth={
          config.settings.italiaThemeViewsConfig.imagePosition === 'afterHeader'
        }
      />
    </div>
  ) : null;
};
export default ContentImage;

ContentImage.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.object,
    image_caption: PropTypes.string,
  }),
  position: PropTypes.string,
};
