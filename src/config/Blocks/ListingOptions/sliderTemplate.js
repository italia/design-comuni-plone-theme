import { defineMessages } from 'react-intl';

import { addSchemaField } from 'design-comuni-plone-theme/config/Blocks/ListingOptions';

const messages = defineMessages({
  show_full_width: {
    id: 'show_full_width',
    defaultMessage: 'A tutta larghezza',
  },
  slidesToShow: {
    id: 'slidesToShow',
    defaultMessage: 'N° slide da mostrare',
  },
  show_image_title: {
    id: 'show_image_title',
    defaultMessage: "Mostra il titolo dell'immagine",
  },
  show_dots: {
    id: 'show_dots',
    defaultMessage: 'Mostra i puntini di scorrimento',
  },
  autoplay: {
    id: 'autoplay',
    defaultMessage: 'Autoplay',
  },
  autoplay_speed: {
    id: 'autoplay_speed',
    defaultMessage: 'Velocità autoplay',
  },
  autoplay_speed_description: {
    id: 'autoplay_speed_description',
    defaultMessage: 'La velocità di autoplay deve essere espressa in secondi.',
  },
});

export const addSliderTemplateOptions = (
  schema,
  formData,
  intl,
  position = 1,
) => {
  let pos = position;

  addSchemaField(
    schema,
    'full_width',
    intl.formatMessage(messages.show_full_width),
    null,
    { type: 'boolean' },
    pos,
  );
  pos++;

  addSchemaField(
    schema,
    'show_image_title',
    intl.formatMessage(messages.show_image_title),
    null,
    { type: 'boolean', default: true },
    pos,
  );
  pos++;

  addSchemaField(
    schema,
    'show_dots',
    intl.formatMessage(messages.show_dots),
    null,
    { type: 'boolean', default: true },
    pos,
  );
  pos++;

  addSchemaField(
    schema,
    'autoplay',
    intl.formatMessage(messages.autoplay),
    null,
    { type: 'boolean', default: false },
    pos,
  );
  pos++;

  addSchemaField(
    schema,
    'autoplay_speed',
    intl.formatMessage(messages.autoplay_speed),
    intl.formatMessage(messages.autoplay_speed_description),
    { type: 'number', default: 2 },
    pos,
  );
  pos++;

  pos = addSchemaField(
    schema,
    'slidesToShow',
    intl.formatMessage(messages.slidesToShow),
    null,
    { type: 'number', default: 1 },
    pos,
  );
  return pos;
};
