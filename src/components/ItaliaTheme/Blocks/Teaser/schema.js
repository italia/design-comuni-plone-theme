import { defineMessages } from 'react-intl';

const messages = defineMessages({
  News: {
    id: 'Content in evidence',
    defaultMessage: 'Contenuto in primo piano',
  },
  LinkToTitle: {
    id: 'Linkto title',
    defaultMessage: 'Testo per il link ad altro',
  },
  LinkMore: {
    id: 'LinkMore',
    defaultMessage: 'Link ad altro',
  },
  natural_image_size: {
    id: 'natural_image_size',
    defineMessages: "Non alterare le dimensioni naturali dell'immagine",
  },
  show_section: {
    id: 'show_section',
    defaultMessage: 'Mostra la sezione',
  },
  show_type: {
    id: 'show_type',
    defaultMessage: 'Mostra il tipo',
  },
  show_date: {
    id: 'show_date',
    defaultMessage: 'Mostra la data',
  },
  bg_color: {
    id: 'bg_color',
    defaultMessage: 'Colore di sfondo',
  },
  color_primary: {
    id: 'color_primary',
    defaultMessage: 'Primario',
  },
  color_secondary: {
    id: 'color_primary',
    defaultMessage: 'Primario',
  },
  color_transparent: {
    id: 'color_transparent',
    defaultMessage: 'Trasparente',
  },
  LinkTo: {
    id: 'Link to',
    defaultMessage: 'Link a',
  },
});

// Extra metadata for our Teaser block implementation
const ITALIA_TEASER_QUERY_METADATA = [
  'effective',
  'parent',
  'design_italia_meta_type',
  'icona',
  'tassonomia_argomenti',
];

const italiaTeaserSchemaEnhancer = ({ schema, FormData, intl }) => {
  schema.fieldsets = schema.fieldsets.reduce((acc, curr) => {
    if (curr.id === 'styling')
      return [
        ...acc,
        {
          ...curr,
          fields: [
            ...curr.fields,
            'natural_image_size',
            'bg_color',
            'show_type',
            'show_section',
            'show_date',
          ],
        },
      ];
    else if (curr.id === 'default')
      return [
        ...acc,
        {
          ...curr,
          fields: curr.fields.filter(
            (f) => !['head_title', 'description'].includes(f),
          ),
        },
      ];
    return [...acc, curr];
  }, []);
  schema.fieldsets.push({
    id: 'linkMore',
    title: intl.formatMessage(messages.LinkMore),
    fields: ['moreTitle', 'moreHref'],
  });

  schema.properties = {
    ...schema.properties,
    href: {
      ...schema.properties.href,
      selectedItemAttrs: [
        // Teaser defaults
        'Title',
        'head_title',
        'Description',
        'hasPreviewImage',
        'image_field',
        'image_scales',
        '@type',
        ...ITALIA_TEASER_QUERY_METADATA,
      ],
      allowExternals: false,
      widgetOptions: {
        pattern_options: { maximumSelectionSize: 1 },
      },
    },
    natural_image_size: {
      id: 'natural_image_size',
      title: intl.formatMessage(messages.natural_image_size),
      type: 'boolean',
    },
    bg_color: {
      title: intl.formatMessage(messages.bg_color),
      widget: 'color_list',
      id: 'bg_color',
      colors: [
        {
          name: 'transparent',
          label: intl.formatMessage(messages.color_transparent),
        },
        { name: 'primary', label: intl.formatMessage(messages.color_primary) },
        {
          name: 'secondary',
          label: intl.formatMessage(messages.color_secondary),
        },
      ],
    },
    show_type: {
      id: 'show_type',
      title: intl.formatMessage(messages.show_type),
      type: 'boolean',
    },
    show_section: {
      id: 'show_section',
      title: intl.formatMessage(messages.show_section),
      type: 'boolean',
    },
    show_date: {
      id: 'show_date',
      title: intl.formatMessage(messages.show_date),
      type: 'boolean',
    },
    moreTitle: {
      id: 'moreTitle',
      title: intl.formatMessage(messages.LinkToTitle),
    },
    moreHref: {
      id: 'moreHref',
      title: intl.formatMessage(messages.LinkTo),
      widget: 'object_browser',
      mode: 'link',
      widgetOptions: {
        pattern_options: { maximumSelectionSize: 1 },
      },
      selectedItemAttrs: [],
      allowExternals: true,
    },
  };
  schema.properties.styles.schema.properties.align = {
    ...schema.properties.styles.schema.properties.align,
    actions: ['left', 'right'],
    default: 'right',
  };
  delete schema.properties.head_title;
  return schema;
};

export { italiaTeaserSchemaEnhancer };
