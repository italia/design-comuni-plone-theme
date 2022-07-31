import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import Image from '@plone/volto/components/theme/Image/Image';
import React from 'react';
import { getImageAttributes } from '@plone/volto/helpers';

/**
 * ListingImage component
 * @param {object | string} image - Plone image as object or url
 * @param {boolean} showDefault - (default: False) whether to render a placeholder, if image_field is not setted (?)
 * @param {string} className - (default 'listing-image') CSS class attribute
 * @param {object} imageProps - others prop to pass to Image component
 */
const ListingImage = ({
  item,
  showDefault = false,
  className = 'listing-image',
  ...imageProps
}) => {
  if (!item.image_field) {
    if (showDefault) {
      return <img src={DefaultImageSVG} alt="" />;
    }
    return null;
  } else {
    return (
      <Image
        className={className}
        image={item.image}
        aria-hidden="true"
        alt={item.title}
        title={item.title}
        role="presentation"
        {...imageProps}
      />
    );
  }
};

export const getListingImageBackground = (item, size) => {
  let url = null;
  if (item.image_field) {
    url = getImageAttributes(item['@id'], {
      imageField: item.image_field,
    })?.src;

    if (size) {
      url = url.replace('/listing', '/' + size);
    }
  }

  return url;
};
export default ListingImage;
