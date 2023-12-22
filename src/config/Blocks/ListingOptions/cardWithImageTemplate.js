import { defineMessages } from 'react-intl';

import {
  templatesOptions,
  addDefaultOptions,
} from 'design-comuni-plone-theme/config/Blocks/ListingOptions';

import { addLighthouseField } from 'design-comuni-plone-theme/config/Blocks/ListingOptions/utils';

const messages = defineMessages({
  always_show_image: {
    id: 'always_show_image',
    defaultMessage: "Mostra l'immagine per tutti gli elementi",
  },
  natural_image_size: {
    id: 'natural_image_size',
    defineMessages: "Non alterare le dimensioni naturali dell'immagine",
  },
  show_topics: {
    id: 'show_topics',
    defaultMessage: 'Mostra gli argomenti',
  },
  set_four_columns: {
    id: 'set_four_columns',
    defaultMessage: 'Disponi su 4 colonne',
  },
});

export const addCardWithImageTemplateOptions = (
  schema,
  formData,
  intl,
  position = 1,
) => {
  let pos = position;

  pos = addLighthouseField(schema, intl, pos);

  pos = addDefaultOptions(schema, formData, intl, pos);

  pos = templatesOptions(
    schema,
    formData,
    intl,
    [
      'always_show_image',
      'natural_image_size',
      'set_four_columns',
      'show_icon',
      'show_section',
      'show_type',
      'hide_dates',
      'show_description',
      'show_topics',
    ],
    {
      always_show_image: {
        default: false,
        label: intl.formatMessage(messages.always_show_image),
      },
      natural_image_size: {
        default: false,
        label: intl.formatMessage(messages.natural_image_size),
      },
      set_four_columns: {
        default: false,
        label: intl.formatMessage(messages.set_four_columns),
      },
      show_section: { default: false },
      hide_dates: { default: false },
      show_topics: { label: intl.formatMessage(messages.show_topics) },
    },
    pos,
  );

  return pos;
};
