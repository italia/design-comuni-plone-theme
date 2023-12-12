import { defineMessages } from 'react-intl';
import { v4 as uuid } from 'uuid';

const messages = defineMessages({
  show_icon: {
    id: 'show_icon',
    defaultMessage: "Mostra l'icona",
  },
  hide_dates: {
    id: 'hide_dates',
    defaultMessage: 'Nascondi le date',
  },
  show_section: {
    id: 'show_section',
    defaultMessage: 'Mostra la sezione',
  },
  show_type: {
    id: 'show_type',
    defaultMessage: 'Mostra il tipo',
  },
  show_description: {
    id: 'show_description',
    defaultMessage: 'Mostra la descrizione',
  },
  show_detail_link: {
    id: 'show_detail_link',
    defaultMessage: 'Mostra il link al dettaglio',
  },
  detail_link_label: {
    id: 'detail_link_label',
    defaultMessage: 'Testo per il link al dettaglio',
  },
  show_block_bg: {
    id: 'Mostra lo sfondo del blocco',
    defaultMessage: 'Mostra lo sfondo del blocco',
  },
  show_path_filters: {
    id: 'Mostra i filtri per percorso',
    defaultMessage: 'Mostra i filtri per percorso',
  },
  path_filter_label: {
    id: 'Etichetta path filter',
    defaultMessage: 'Etichetta',
  },
  path_filter_path: {
    id: 'Percorso path filter',
    defaultMessage: 'Percorso',
  },
  path_filter_filter: {
    id: 'Path filter filtro',
    defaultMessage: 'Filtro',
  },
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

export const addSchemaField = (
  schema,
  field,
  title,
  description,
  properties = {},
  position = 0,
  fieldset = 'default',
) => {
  let fieldsetIndex = schema.fieldsets.findIndex((x) => x.id === fieldset);

  schema.fieldsets[fieldsetIndex] = {
    ...schema.fieldsets[fieldsetIndex],
  };
  // eslint-disable-next-line no-unused-expressions
  schema.fieldsets[fieldsetIndex]?.fields?.splice(position, 0, field);
  schema.properties[field] = { title, description, ...properties };
};

export const templatesOptions = (
  schema,
  formData,
  intl,
  fields,
  fieldsConfig,
  position = 0,
) => {
  let pos = position;

  const fieldset =
    schema.id === 'search' ? 'listingTemplateOptions' : undefined;
  fields.forEach((f) => {
    // Avoid duplicated fields when using templates in Search block
    if (schema.fieldsets?.some((fs) => fs?.fields?.some((fsf) => fsf === f)))
      return;
    const f_config = fieldsConfig?.[f] ?? {};
    if (f === 'show_detail_link') {
      addSchemaField(
        schema,
        f,
        f_config.label ?? intl.formatMessage(messages.show_detail_link),
        f_config.description ?? null,
        { type: 'boolean', default: f_config.default ?? true },
        pos,
        fieldset,
      );

      if (formData?.show_detail_link) {
        pos++;
        addSchemaField(
          schema,
          'detail_link_label',
          intl.formatMessage(messages.detail_link_label),
          null,
          null,
          pos,
          fieldset,
        );
      }
    } else if (f === 'show_path_filters') {
      addSchemaField(
        schema,
        'show_path_filters',
        f_config.label ?? intl.formatMessage(messages.show_path_filters),
        f_config.description ?? null,
        {
          widget: 'path_filters',
          default: f_config.default ?? true,
          formData: formData,
        },
        pos,
        fieldset,
      );
    } else {
      addSchemaField(
        schema,
        f,
        f_config.label ?? intl.formatMessage(messages[f]),
        f_config.description ?? null,
        { type: 'boolean', default: f_config.default ?? true },
        pos,
        fieldset,
      );
    }
    pos++;
  });

  return pos;
};

export const addLighthouseField = (schema, intl, position = 0) => {
  let pos = position;
  const fieldset =
    schema.id === 'search' ? 'listingTemplateOptions' : undefined;
  addSchemaField(
    schema,
    'id_lighthouse',
    intl.formatMessage(messages.id_lighthouse),
    intl.formatMessage(messages.id_lighthouse_description),
    {
      choices: [
        ['service-category-link', 'service-category-link'],
        ['topic-element', 'topic-element'],
        ['service-link', 'service-link'],
        ['management-category-link', 'management-category-link'],
        ['news-category-link', 'news-category-link'],
        ['custom-category-link', 'custom-category-link'],
        ['appointment-booking', 'appointment-booking'],
      ],
      /* default: 'medium', */
    },
    pos,
    fieldset,
  );
  pos++;

  return pos;
};

export const cloneBlock = (blockData) => {
  const blockID = uuid();
  const clonedData = { ...blockData, block: blockID };
  return [blockID, clonedData];
};
