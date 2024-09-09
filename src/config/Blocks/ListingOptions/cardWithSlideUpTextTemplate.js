import {
  templatesOptions,
  addDefaultOptions,
} from 'design-comuni-plone-theme/config/Blocks/ListingOptions';

import { addLighthouseField } from 'design-comuni-plone-theme/config/Blocks/ListingOptions/utils';

export const addCardWithSlideUpTextTemplateOptions = (
  schema,
  formData,
  intl,
  position = 1,
) => {
  let pos = position;

  // hidden to avoid use of lighthouse on this block
  // which creates problems with asseverazione
  // 1. clients instructed not to use this variation when data-element is needed
  // 2. planned intervention to change structure of variation to allow use of
  //    data element without wrapping entire card in link
  // pos = addLighthouseField(schema, intl, pos);

  pos = addDefaultOptions(schema, formData, intl, pos);

  pos = templatesOptions(
    schema,
    formData,
    intl,
    ['show_section', 'show_type', 'hide_dates', 'show_description'],
    {
      show_section: { default: false },
      hide_dates: { default: false },
    },
    pos,
  );
  return pos;
};
