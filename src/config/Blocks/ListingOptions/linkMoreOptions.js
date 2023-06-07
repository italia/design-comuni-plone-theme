import { defineMessages } from 'react-intl';
import { addSchemaField } from 'design-comuni-plone-theme/config/Blocks/ListingOptions';

const messages = defineMessages({
  id_lighthouse: {
    id: 'ID Lighthouse',
    defaultMessage: 'ID Lighthouse',
  },
  id_lighthouse_description: {
    id: 'ID Lighthouse Help Description',
    defaultMessage:
      'Identificativo di servizio a solo uso interno, utilizzato per le verifiche AgID inerenti al PNRR.',
  },
});

const addLinkMoreOptions = (schema, formData, intl, position = 2) => {
  let pos = position;
  if (schema.fieldsets.some((f) => f.id === 'linkmore')) {
    addSchemaField(
      schema,
      'linkmore_id_lighthouse',
      intl.formatMessage(messages.id_lighthouse),
      intl.formatMessage(messages.id_lighthouse_description),
      {
        choices: [
          ['live-button-events', 'live-button-events'],
          ['live-button-locations', 'live-button-locations'],
        ],
      },
      pos,
      'linkmore',
    );
    pos++;
  }

  return pos;
};

export default addLinkMoreOptions;
