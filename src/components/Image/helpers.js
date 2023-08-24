import { flattenToAppURL, isInternalURL } from '@plone/volto/helpers';

import config from '@plone/volto/registry';

const getImageIsFromBrain = (imageDownloadUrl) => {
  if (typeof imageDownloadUrl !== 'string') return false;
  // Old check against itemUrl truthyness isn't valid anymore.
  // All brains have item[@id], need to check if image.download
  // starts with @@images
  return imageDownloadUrl.startsWith('@@images');
};

const getImageType = (image) => {
  let imageType = 'external';
  if (image['content-type'] === 'image/svg+xml') {
    imageType = 'svg';
  } else if (
    Object.prototype.toString.call(image) === '[object Object]' &&
    image.scales &&
    Object.keys(image.scales).length > 0
  ) {
    imageType = 'imageObject';
  } else if (typeof image === 'string' && isInternalURL(image)) {
    imageType = 'internalUrl';
  }
  return imageType;
};

const DEFAULT_MAX_SIZE = 10000;

/**
 * Get src-set list from image. **Important:** read options parameter in order to propertly generate image srcs
 * @param {object | string} image - Image content object or url
 * @param {object} options Object with the following properties: itemUrl, imageField, maxSize, useOriginal, minSize. Set `itemUrl` to the item `@id` property if the image is from a brain object, otherwise leave it undefined
 * @returns {object} image attributes with src and srcset to be used to render the given image
 */
export const getImageAttributes = (
  image,
  {
    itemUrl,
    imageField = 'image',
    maxSize = DEFAULT_MAX_SIZE,
    useOriginal = false,
    minSize = 0,
  } = {},
) => {
  // Brain objects have scale urls that start with @@images
  // while regular content objects have scales with full urls (i.e. https://.../@@images/...)
  let itemPath = flattenToAppURL(itemUrl ?? '');
  if (itemPath.slice(-1) !== '/') itemPath = `${itemPath}/`;
  const isFromBrain = getImageIsFromBrain(image?.download ?? image);

  const imageScales = config.settings.imageScales;

  const minScale = Object.keys(imageScales).reduce((minScale, scale) => {
    if (!minScale || imageScales[scale] < imageScales[minScale]) {
      if (minSize > 0 && minSize > imageScales[scale]) {
        return minScale;
      }
      return scale;
    }
    return minScale;
  }, null);

  const attrs = {};
  const imageType = getImageType(image);

  switch (imageType) {
    case 'svg':
      attrs.src = flattenToAppURL(image.download);
      break;

    // Scales object from Plone restapi
    // ideal use of Plone images
    case 'imageObject':
      const sortedScales = Object.values(image.scales)
        .filter((scale) => scale.width <= maxSize)
        .filter(
          (scale, index, array) =>
            index ===
            array.findIndex((foundItem) => foundItem.width === scale.width),
        ) // avoid duplicates if image is small and original is smaller than scale
        .sort((a, b) => {
          if (a.width > b.width) return 1;
          else if (a.width < b.width) return -1;
          else return 0;
        });

      const scale = sortedScales[0];
      attrs.src = `${scale?.download ?? image.download}`;
      if (isFromBrain) attrs.src = `${itemPath}${attrs.src}`;
      attrs.src = flattenToAppURL(attrs.src);

      attrs.aspectRatio = Math.round((image.width / image.height) * 100) / 100;
      attrs.width = image.width;
      attrs.height = image.height;

      if (maxSize !== DEFAULT_MAX_SIZE && sortedScales.length > 0) {
        const maxScale = sortedScales[sortedScales.length - 1];
        attrs.width = maxScale.width;
        attrs.height = maxScale.height;
      }

      attrs.srcSet = sortedScales.map((scale) => {
        let src = `${scale.download} ${scale.width}w`;
        if (isFromBrain) src = `${itemPath}${src}`;
        return flattenToAppURL(src);
      });

      if (useOriginal || sortedScales?.length === 0) {
        let originalSrc = `${image.download} ${image.width}w`;
        if (isFromBrain) originalSrc = `${itemPath}${originalSrc}`;
        attrs.srcSet = attrs.srcSet.concat(flattenToAppURL(originalSrc));
      }
      break;

    // Internal URL
    case 'internalUrl':
      let baseUrl = `@@images/${imageField}`;
      if (isFromBrain) baseUrl = `${itemPath}${baseUrl}`;
      else baseUrl = `${image.split('/@@images')[0]}/${baseUrl}`;
      baseUrl = flattenToAppURL(baseUrl);

      attrs.src = `${baseUrl}/${minScale}`;

      attrs.srcSet = Object.keys(imageScales)
        .sort((a, b) => {
          if (imageScales[a] > imageScales[b]) return 1;
          else if (imageScales[a] < imageScales[b]) return -1;
          else return 0;
        })
        .reduce((srcSet, scale) => {
          if (imageScales[scale] <= maxSize) {
            return [...srcSet, `${baseUrl}/${scale} ${imageScales[scale]}w`];
          } else return srcSet;
        }, []);

      if (useOriginal) attrs.srcSet = attrs.srcSet.concat(`${baseUrl} 1900w`); // expect that is for desktop screens, I don't have actual size
      break;

    // External URL or other element
    default:
      attrs.src = typeof image === 'string' ? image : null;
      break;
  }
  return attrs;
};
