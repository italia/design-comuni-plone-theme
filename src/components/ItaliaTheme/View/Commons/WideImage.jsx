import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import config from '@plone/volto/registry';

/**
 * WideImage view component class.
 * @function WideImage
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const WideImage = ({
  image,
  title,
  caption,
  fieldName,
  fullWidth = true,
  sizes,
}) => {
  const Image = config.getComponent({ name: 'Image' }).component;
  return (
    <div className={cx('row wide-image', { 'row-full-width my-3': fullWidth })}>
      <figure className="figure">
        {image && (
          <Image
            item={image}
            fieldName={fieldName}
            className={cx('', { 'full-width': fullWidth })}
            alt=""
            title={caption || title}
            critical
            loading="eager"
            sizes={sizes}
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
