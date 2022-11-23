import React from 'react';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import Image from '@plone/volto/components/theme/Image/Image';
import { getImageAttributes } from '@plone/volto/helpers/Image/Image';

const ListingImage = ({
  item,
  showDefault = false,
  useOriginal = false,
  maxSize,
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
        image={item['@id']}
        aria-hidden="true"
        alt={item.title}
        title={item.title}
        role="presentation"
        imageField={item.image_field}
        useOriginal={useOriginal}
        maxSize={maxSize}
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
