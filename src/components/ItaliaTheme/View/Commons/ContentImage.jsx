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
    (content?.image || content?.foto_persona) &&
    config.settings.italiaThemeViewsConfig.imagePosition === position;
  const fullWidth =
    config.settings.italiaThemeViewsConfig.imagePosition === 'afterHeader';
  const field_name = content.image ? 'image' : 'foto_persona';

  return view ? (
    <div className="content-image">
      <WideImage
        title={content.title}
        image={content}
        fieldName={field_name}
        caption={content.image_caption}
        sizes={fullWidth ? '100vw' : '(max-width: 768px) 90vw, 800px'}
        fullWidth={fullWidth}
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
