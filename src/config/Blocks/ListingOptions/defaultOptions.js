import { defineMessages } from 'react-intl';
import { addSchemaField } from '@italia/config/Blocks/ListingOptions';

import config from '@plone/volto/registry';

const messages = defineMessages({
  center_cards: {
    id: 'Center block cards',
    defaultMessage: 'Centrare i card',
  },
  card_bg_color: {
    id: 'card_bg_color',
    defaultMessage: 'Colore di sfondo',
  },
});

/** DEFAULT **/

const addDefaultAdditionalOptions = (schema, formData, intl, position = 0) => {
  let pos = position;
  let listing_items_colors = [
    { name: 'red', label: 'Red' },
    { name: 'light-blue', label: 'Light blue' },
    { name: 'sidebar-background', label: 'Grey' },
  ];
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
  return pos;
};

export default addDefaultAdditionalOptions;
