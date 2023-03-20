import { addLighthouseFieldLinkMore } from 'design-comuni-plone-theme/config/Blocks/ListingOptions/utils';

/** DEFAULT **/

const addDefaultAdditionalOptions = (schema, formData, intl, position = 0) => {
  let pos = position;
  pos = addLighthouseFieldLinkMore(schema, intl, pos);
  return pos;
};

export default addDefaultAdditionalOptions;
