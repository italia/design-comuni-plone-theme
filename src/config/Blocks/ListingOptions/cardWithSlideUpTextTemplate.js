import { defineMessages } from 'react-intl';

import { templatesOptions } from '@italia/config/Blocks/ListingOptions';

const messages = defineMessages({
  always_show_image: {
    id: 'always_show_image',
    defaultMessage: "Mostra l'immagine per tutti gli elementi",
  },
});

export const addCardWithSlideUpTextTemplateOption = (
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
    [
      'always_show_image',
      'show_section',
      'show_type',
      'hide_dates',
      'show_description',
    ],
    {
      always_show_image: {
        default: true,
        label: intl.formatMessage(messages.always_show_image),
      },
      show_section: { default: false },
      hide_dates: { default: false },
    },
    pos,
  );
  return pos;
};
