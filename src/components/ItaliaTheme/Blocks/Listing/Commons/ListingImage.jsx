import { UniversalLink } from '@plone/volto/components';
import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import { flattenToAppURL } from '@plone/volto/helpers';
import { contentHasImage } from 'design-comuni-plone-theme/helpers';
import config from '@plone/volto/registry';

const ListingImageWrapper = ({ children, item, noWrapLink }) => {
  return noWrapLink ? (
    children
  ) : (
    <UniversalLink item={item} className="img-wrapper">
      {children}
    </UniversalLink>
  );
};

const ListingImage = ({
  item = {},
  loading = 'lazy',
  showDefault = false,
  className = 'listing-image',
  responsive = true,
  showTitleAttr = true,
  sizes = '(max-width:320px) 200px, (max-width:425px) 300px, (max-width:767px) 500px, 410px',
  noWrapLink = false,
  ...imageProps
}) => {
  if (!contentHasImage(item) && !imageProps?.image_field) {
    if (showDefault) {
      return (
        <ListingImageWrapper item={item} noWrapLink={noWrapLink}>
          <img
            src={DefaultImageSVG}
            alt=""
            sizes={sizes}
            aria-hidden={true}
            role="presentation"
            className="listing-image responsive"
            style={{
              minHeight: 'unset',
              height: '100%',
            }}
          />
        </ListingImageWrapper>
      );
    } else return null;
  }
  const Image = config.getComponent({ name: 'Image' }).component;
  let commonImageProps = {
    item,
    'aria-hidden': imageProps.alt || item.title ? false : true,
    alt: imageProps.alt ?? item.title ?? '',
    role: imageProps.alt || item.title ? '' : 'presentation',
    className,
    loading,
    responsive,
    sizes,
    ...imageProps,
  };
  if (showTitleAttr)
    commonImageProps = { ...commonImageProps, title: item.title };

  return (
    <ListingImageWrapper item={item} noWrapLink={noWrapLink}>
      <Image {...commonImageProps} />
    </ListingImageWrapper>
  );
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
