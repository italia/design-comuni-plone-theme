import { defineMessages } from 'react-intl';

import { addSchemaField } from 'design-comuni-plone-theme/config/Blocks/ListingOptions';

const messages = defineMessages({
  show_map_full_width: {
    id: 'show_map_full_width',
    defaultMessage: 'Mostra la mappa a tutta larghezza',
  },
  map_size: {
    id: 'Dimensione della mappa',
    defaultMessage: 'Dimensione della mappa',
  },
  map_size_small: {
    id: 'map_size_small',
    defaultMessage: 'Piccola',
  },
  map_size_medium: {
    id: 'map_size_medium',
    defaultMessage: 'Media',
  },
  map_size_large: {
    id: 'map_size_large',
    defaultMessage: 'Grande',
  },
});

export const addMapTemplateOptions = (schema, formData, intl, position = 1) => {
  let pos = position;

  addSchemaField(
    schema,
    'show_map_full_width',
    intl.formatMessage(messages.show_map_full_width),
    null,
    { type: 'boolean' },
    pos,
  );
  pos++;

  addSchemaField(
    schema,
    'map_size',
    intl.formatMessage(messages.map_size),
    null,
    {
      choices: [
        ['small', intl.formatMessage(messages.map_size_small)],
        ['medium', intl.formatMessage(messages.map_size_medium)],
        ['large', intl.formatMessage(messages.map_size_large)],
      ],
      default: 'medium',
    },
    pos,
  );
  return pos;
};
