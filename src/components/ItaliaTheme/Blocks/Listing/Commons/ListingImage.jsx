import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import Image from '@plone/volto/components/theme/Image/Image';
import { flattenToAppURL } from '@plone/volto/helpers';

const ListingImage = ({
  item = {},
  showDefault = false,
  useOriginal = false,
  maxSize,
  className = 'listing-image',
  ...imageProps
}) => {
  if (!item.image_field || !item.image_scales?.[item.image_field]?.[0]) {
    if (showDefault) {
      return <img src={DefaultImageSVG} alt="" />;
    }
    return null;
  } else {
    return (
      <Image
        className={className}
        itemUrl={item['@id']}
        image={item.image_scales?.[item.image_field]?.[0] || item['@id']}
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

export const getListingImageBackground = (item = {}, size = 'listing') => {
  let url = null;
  if (item.image_field) {
    url =
      item.image_scales?.[item.image_field]?.[0]?.[size] ||
      `${flattenToAppURL(item['@id'])}/@@images/${item.image_field}/${size}`;
  }

  return url;
};
export default ListingImage;
