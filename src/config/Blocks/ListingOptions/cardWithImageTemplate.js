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

  pos = imageCardTemplateOptions(schema, formData, intl, pos);

  return pos;
};

/*questa funzione è riutilizzabile.
Serve per fare in modo che le opzioni relative alla visualizzazione di ogni singola card,
si possano riutilizzare in altre variations del blocco listing, dove appunto viene riutilizzato il componente di visualizzazione dell'elemento.
Ad esempio, è stato usato anche nella variazione 'slider' per poter mostrare gli elementi con aspetto 'Card con immagine'.*/
export const imageCardTemplateOptions = (
  schema,
  formData,
  intl,
  position,
  hide_fields = [], //array of string
) => {
  let pos = position;
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
    ].filter((f) => hide_fields.indexOf(f) < 0),
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
