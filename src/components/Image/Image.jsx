import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import { getImageAttributes } from '@plone/volto/helpers/Image/Image';

/**
 * Image component
 * @param {object | string} image - Plone image as object or url
 * @param {string} imageField - (default: image) image field for scales URL
 * @param {string} alt - Alternative text for image
 * @param {string} className - CSS class attribute
 * @param {string} containerClassName - CSS class attribute for picture element
 * @param {string} floated - float left or right
 * @param {string} responsive - if the image is responsive
 * @param {string} size - (css class) actual width: thumb, small, medium or large
 * @param {string} role - img role attribute
 * @param {boolean} critical - if critical, do not lazy load the image
 * @param {number} maxSize - maximum size to render
 * @param {boolean} useOriginal - whether to render original size
 */
const Image = ({
  image,
  imageField = 'image',
  alt = '',
  className,
  containerClassName,
  floated,
  size,
  responsive = true,
  role = 'img',
  critical = false,
  maxSize,
  minSize = 0,
  useOriginal = false,
  sizes = '100vw',
  ...imageProps
}) => {
  const { src, srcSet, width, height, aspectRatio } = getImageAttributes(
    image,
    {
      imageField,
      maxSize,
      useOriginal,
      minSize,
    },
  );
  const imageRef = useRef();
  const [actualSrcSet, setActualSrcSet] = useState(
    critical && srcSet ? srcSet.join(', ') : null,
  );
  // TODO: serve a qualcuno questo?
  const imageHasLoaded = imageRef?.current?.complete;

  //picture classname
  let pictureClassName = `volto-image${
    containerClassName ? ` ${containerClassName}` : ''
  }`;
  if (floated) {
    pictureClassName = `${pictureClassName} floated ${floated}`;
  }
  if (size) {
    pictureClassName = `${pictureClassName} ${size}`;
  }

  if (responsive) {
    pictureClassName = `${pictureClassName} responsive`;
  }

  //intersection observer
  useEffect(() => {
    const applySrcSet = () => {
      setActualSrcSet(srcSet.join(', '));
    };

    if (srcSet && !critical) {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !actualSrcSet) {
                applySrcSet();
                if (imageRef.current instanceof Element) {
                  observer.unobserve(imageRef.current);
                }
              }
            });
          },
          { threshold: [0], rootMargin: '100px' },
        );
        observer.observe(imageRef.current);
      } else {
        applySrcSet();
      }
    }
  }, [imageHasLoaded, srcSet, actualSrcSet, critical]);

  return (
    <>
      <picture className={pictureClassName}>
        {actualSrcSet?.length > 0 && (
          <source srcSet={actualSrcSet} sizes={sizes} />
        )}
        <img
          src={src}
          alt={alt}
          className={className}
          role={role}
          // removed because this is for the placeholder. Lazy loading is made using intersectionObserver
          // loading={critical ? 'eager' : 'lazy'}
          width={width}
          height={height}
          style={aspectRatio ? { aspectRatio } : null}
          {...imageProps}
          ref={imageRef}
        />
      </picture>
      {!critical && (
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <img
                src="${src}"
                ${srcSet?.length && `srcset="${srcSet.join(', ')}"`}
                alt="${alt}"
                class="${className || ''}"
                role="${role}"
                ${width ? `width="${width}` : ''}
                ${height ? `height="${height}` : ''}
                loading="lazy"
            `,
          }}
        />
      )}
    </>
  );
};

Image.propTypes = {
  imageField: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  floated: PropTypes.oneOf(['left', 'right']),
  size: PropTypes.string,
  role: PropTypes.string,
  critical: PropTypes.bool,
  maxSize: PropTypes.number,
  useOriginal: PropTypes.bool,
};

Image.defaultProps = {
  imageField: 'image',
  alt: '',
  role: 'img',
  critical: false,
  useOriginal: false,
};

export default Image;
