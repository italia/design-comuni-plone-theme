import { defineMessages } from 'react-intl';
import {
  addSchemaField,
  addDefaultAdditionalOptions,
} from 'design-comuni-plone-theme/config/Blocks/ListingOptions';

import config from '@plone/volto/registry';

const messages = defineMessages({
  title: {
    id: 'Titolo',
    defaultMessage: 'Titolo',
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
  titleLine: {
    id: 'titleLine',
    defaultMessage: 'Mostra la linea sotto il titolo',
  },
});

/** DEFAULT **/

const addDefaultOptions = (schema, formData = {}, intl, position = 0) => {
  let listing_items_colors =
    config.blocks.blocksConfig.listing?.listing_items_colors || [];
  let listing_bg_colors =
    config.blocks.blocksConfig.listing?.listing_bg_colors || [];
  const fieldset =
    schema?.id === 'search' ? 'listingTemplateOptions' : 'default';
  let pos = position;
  if (fieldset === 'default') {
    addSchemaField(
      schema,
      'title',
      intl.formatMessage(messages.title),
      null,
      null,
      pos,
      fieldset,
    );
    pos++;
  }

  if (formData.title) {
    addSchemaField(
      schema,
      'titleLine',
      intl.formatMessage(messages.titleLine),
      null,
      { type: 'boolean' },
      pos,
      fieldset,
    );
    pos++;
  }

  if (listing_items_colors.length > 0) {
    addSchemaField(
      schema,
      'items_color',
      intl.formatMessage(messages.items_color),
      null,
      { widget: 'color_list', intl: intl, colors: listing_items_colors },
      pos,
      fieldset,
    );
    pos++;
  }
  if (fieldset !== 'listingTemplateOptions') {
    addSchemaField(
      schema,
      'show_block_bg',
      intl.formatMessage(messages.show_block_bg),
      null,
      { type: 'boolean' },
      pos,
      fieldset,
    );
    pos++;
  }

  if (listing_bg_colors.length > 0) {
    addSchemaField(
      schema,
      'bg_color',
      intl.formatMessage(messages.bg_color),
      null,
      { widget: 'color_list', intl: intl, colors: listing_bg_colors },
      pos,
      fieldset,
    );
    pos++;
  }

  pos = addDefaultAdditionalOptions(schema, formData, intl, pos);

  return pos;
};

export default addDefaultOptions;
