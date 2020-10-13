import React from 'react';
import { flattenToAppURL } from '@plone/volto/helpers';
import PropTypes from 'prop-types';
import cx from 'classnames';

/**
 * WideImage view component class.
 * @function WideImage
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const WideImage = ({ image, title, caption, fullWidth = true }) => {
  return (
    <div className={cx('row wide-image', { 'row-full-width my-3': fullWidth })}>
      <figure className="figure">
        {image && (
          <img
            src={flattenToAppURL(image.download)}
            className={cx('', { 'full-width': fullWidth })}
            alt={caption || title}
            title={caption || title}
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
  params: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.shape({
      download: PropTypes.string,
    }),
    caption: PropTypes.string,
    fullWidth: PropTypes.bool,
  }),
};
