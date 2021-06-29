import { defineMessages } from 'react-intl';

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
});

export const addSchemaField = (
  schema,
  field,
  title,
  description,
  properties = {},
  position = 0,
) => {
  const defaultFieldsetIndex = schema.fieldsets.findIndex(
    (x) => x.id === 'default',
  );

  schema.fieldsets[defaultFieldsetIndex] = {
    ...schema.fieldsets[defaultFieldsetIndex],
  };
  schema.fieldsets[defaultFieldsetIndex].fields.splice(position, 0, field);
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

  fields.forEach((f) => {
    const f_config = fieldsConfig?.[f] ?? {};
    if (f === 'show_detail_link') {
      addSchemaField(
        schema,
        f,
        f_config.label ?? intl.formatMessage(messages.show_detail_link),
        f_config.description ?? null,
        { type: 'boolean', default: f_config.default ?? true },
        pos,
      );

      if (formData.show_detail_link) {
        pos++;
        addSchemaField(
          schema,
          'detail_link_label',
          intl.formatMessage(messages.detail_link_label),
          null,
          null,
          pos,
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
      );
    } else {
      addSchemaField(
        schema,
        f,
        f_config.label ?? intl.formatMessage(messages[f]),
        f_config.description ?? null,
        { type: 'boolean', default: f_config.default ?? true },
        pos,
      );
    }
    pos++;
  });

  return pos;
};
