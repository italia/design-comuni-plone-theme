import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import { flattenToAppURL } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

const ListingImage = ({
  item = {},
  loading = 'lazy',
  showDefault = false,
  className = 'listing-image',
  responsive = true,
  sizes = '(max-width:320px) 200px, (max-width:425px) 300px, (max-width:768px) 400px, 300px',
  ...imageProps
}) => {
  const Image = config.getComponent({ name: 'Image' }).component;
  // photogallery needs to check for null image
  // https://stackoverflow.com/questions/33136399/is-there-a-way-to-tell-if-reactelement-renders-null
  const image = Image({ 
    item, 
    'aria-hidden': true, 
    alt: '', 
    role: 'presentation', 
    className, 
    loading, 
    title: item.title, 
    responsive, 
    sizes, 
    ...imageProps });

  if (image === null) return showDefault ? <img src={DefaultImageSVG} alt="" /> : null;

  return image;
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
