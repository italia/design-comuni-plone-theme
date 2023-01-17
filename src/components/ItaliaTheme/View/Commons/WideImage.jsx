import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Image from '@plone/volto/components/theme/Image/Image';

/**
 * WideImage view component class.
 * @function WideImage
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const WideImage = ({ itemUrl, image, title, caption, fullWidth = true }) => {
  return (
    <div className={cx('row wide-image', { 'row-full-width my-3': fullWidth })}>
      <figure className="figure">
        {image && (
          <Image
            itemUrl={itemUrl}
            image={image}
            className={cx('', { 'full-width': fullWidth })}
            alt={caption || title}
            title={caption || title}
            critical
            loading="eager"
            key={image?.download}
          />
        )}
        {caption && (
          <figcaption className="figure-caption text-center pt-3">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
};
export default WideImage;

WideImage.propTypes = {
  itemUrl: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.shape({
    download: PropTypes.string,
  }),
  caption: PropTypes.string,
  fullWidth: PropTypes.bool,
};
