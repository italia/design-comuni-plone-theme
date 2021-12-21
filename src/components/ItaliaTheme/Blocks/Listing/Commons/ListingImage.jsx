import React from 'react';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import Image from '@plone/volto/components/theme/Image/Image';
import { getImageAttributes } from '@plone/volto/helpers';

const ListingImage = ({
  item,
  showDefault = false,
  useOriginal = false,
  maxSize = 400,
  className = 'listing-image',
  loading,
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
        alt=""
        role="presentation"
        imageField={item.image_field}
        useOriginal={useOriginal}
        loading={loading}
        maxSize={maxSize}
      />
    );
  }
};

export const getListingImageBackground = (item, useOriginal) => {
  return item.image_field
    ? getImageAttributes(item['@id'], {
        imageField: item.image_field,
        useOriginal,
      })?.src
    : null;
};
export default ListingImage;
