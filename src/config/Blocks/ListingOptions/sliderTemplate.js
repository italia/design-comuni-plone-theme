import { defineMessages } from 'react-intl';

import { addSchemaField } from 'design-comuni-plone-theme/config/Blocks/ListingOptions';
import { simpleCardTemplateOptions_appearance_default } from 'design-comuni-plone-theme/config/Blocks/ListingOptions/simpleCardTemplate';
import { imageCardTemplateOptions } from 'design-comuni-plone-theme/config/Blocks/ListingOptions/cardWithImageTemplate';

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
  appearance: {
    id: 'Aspetto',
    defaultMessage: 'Aspetto',
  },
  slider_listing_appearance_description: {
    id: 'slider_listing_appearance_description',
    defaultMessage:
      "Qui puoi selezionare, per il template 'Slider', un aspetto diverso da quello di default per gli elementi mostrati nello slider.",
  },
  slider_listing_appearance_simplecard: {
    id: 'slider_listing_appearance_simplecard',
    defaultMessage: 'Card semplice',
  },
  slider_listing_appearance_imagecard: {
    id: 'slider_listing_appearance_imagecard',
    defaultMessage: 'Card con immagine',
  },
});

export const SliderTemplateAppearance_SIMPLECARD = 'simple_card';
export const SliderTemplateAppearance_IMAGECARD = 'image_card';

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

  addSchemaField(
    schema,
    'slidesToShow',
    intl.formatMessage(messages.slidesToShow),
    null,
    { type: 'number', default: 1 },
    pos,
  );
  pos++;
  //appearance options

  let choices = [
    [
      SliderTemplateAppearance_SIMPLECARD,
      intl.formatMessage(messages.slider_listing_appearance_simplecard),
    ],
    [
      SliderTemplateAppearance_IMAGECARD,
      intl.formatMessage(messages.slider_listing_appearance_imagecard),
    ],
  ];

  addSchemaField(
    schema,
    'slide_appearance',
    intl.formatMessage(messages.appearance),
    intl.formatMessage(messages.slider_listing_appearance_description),
    {
      choices,
    },
    pos,
  );
  pos++;

  if (formData.slide_appearance === SliderTemplateAppearance_SIMPLECARD) {
    simpleCardTemplateOptions_appearance_default(schema, formData, intl, pos, [
      'show_path_filters',
    ]);
    pos++;
  } else if (formData.slide_appearance === SliderTemplateAppearance_IMAGECARD) {
    imageCardTemplateOptions(schema, formData, intl, pos, ['set_four_columns']);
    pos++;
  } else {
    addSchemaField(
      schema,
      'show_image_title',
      intl.formatMessage(messages.show_image_title),
      null,
      { type: 'boolean', default: true },
      pos,
    );
    pos++;
  }
  return pos;
};
