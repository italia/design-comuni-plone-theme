import { defineMessages } from 'react-intl';
import { addSchemaField } from '@italia/config/Blocks/ListingOptions';

import config from '@plone/volto/registry';

const messages = defineMessages({
  title: {
    id: 'Titolo',
    defaultMessage: 'Titolo',
  },
  center_cards: {
    id: 'Center block cards',
    defaultMessage: 'Centrare i card',
  },
  card_bg_color: {
    id: 'card_bg_color',
    defaultMessage: 'Colore di sfondo',
  },
  show_block_bg: {
    id: 'Mostra lo sfondo del blocco',
    defaultMessage: 'Mostra lo sfondo del blocco',
  },
  show_block_bg: {
    id: 'Mostra lo sfondo del blocco',
    defaultMessage: 'Mostra lo sfondo del blocco',
  },
  items_color: {
    id: 'listing_items_color',
    defaultMessage: "Colore dell'elemento",
  },
  bg_color: {
    id: 'block_bg_color',
    defaultMessage: 'Colore di sfondo',
  },
});

/** DEFAULT **/

const addDefaultOptions = (schema, formData, intl, position = 0) => {
  let listing_items_colors =
    config.blocks.blocksConfig?.listing?.listing_items_colors || [];
  let listing_bg_colors =
    config.blocks.blocksConfig?.listing?.listing_bg_colors || [];

  let pos = position;

  addSchemaField(
    schema,
    'title',
    intl.formatMessage(messages.title),
    null,
    null,
    pos,
  );
  pos++;

  if (listing_items_colors.length > 0) {
    addSchemaField(
      schema,
      'items_color',
      intl.formatMessage(messages.items_color),
      null,
      { widget: 'color_list', intl: intl, colors: listing_items_colors },
      pos,
    );
    pos++;
  }

  if (
    formData.variation === 'simpleCard' ||
    formData.variation === 'completeBlockLinksTemplate' ||
    formData.variation === 'cardWithImageTemplate' ||
    formData.variation === 'ribbonCardTemplate' ||
    formData.variation === 'smallBlockLinksTemplate' ||
    formData.variation === 'bandiInEvidenceTemplate'
  ) {
    addSchemaField(
      schema,
      'center_cards',
      intl.formatMessage(messages.center_cards),
      null,
      { type: 'boolean', default: false },
      pos,
    );
    pos++;
  }

  addSchemaField(
    schema,
    'show_block_bg',
    intl.formatMessage(messages.show_block_bg),
    null,
    { type: 'boolean' },
    pos,
  );
  pos++;

  if (listing_bg_colors.length > 0) {
    addSchemaField(
      schema,
      'bg_color',
      intl.formatMessage(messages.bg_color),
      null,
      { widget: 'color_list', intl: intl, colors: listing_bg_colors },
      pos,
    );
    pos++;
  }

  /* if (formData.variation === 'simpleCard') {
    addSchemaField(
      schema,
      'card_bg_color',
      intl.formatMessage(messages.card_bg_color),
      null,
      { widget: 'color_list', intl: intl, colors: listing_items_colors },
      pos,
    );
  } */
  pos = addDefaultAdditionalOptions(schema, formData, intl, pos);

  return pos;
};

export default addDefaultOptions;
