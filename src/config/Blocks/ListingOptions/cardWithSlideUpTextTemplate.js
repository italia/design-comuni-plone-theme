import { templatesOptions } from '@italia/config/Blocks/ListingOptions';

export const addCardWithSlideUpTextTemplateOptions = (
  schema,
  formData,
  intl,
  position = 0,
) => {
  let pos = position;

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
