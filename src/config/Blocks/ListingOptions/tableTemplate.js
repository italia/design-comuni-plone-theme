import { defineMessages } from 'react-intl';
import cloneDeep from 'lodash/cloneDeep';

import { addSchemaField } from 'design-comuni-plone-theme/config/Blocks/ListingOptions';

const messages = defineMessages({
  columns: {
    id: 'table_variation_columns',
    defaultMessage: 'Colonne della tabella',
  },
  alternate_rows: {
    id: 'table_variation_alternate_rows',
    defaultMessage: 'Colore delle righe alternato',
  },
  column: {
    id: 'table_variaton_column',
    defaultMessage: 'Colonna',
  },
  ct: { id: 'table_variaton_ct', defaultMessage: 'Tipo di contenuto' },
  field: { id: 'table_variaton_field', defaultMessage: 'Campo' },
  title: {
    id: 'table_variaton_title',
    defaultMessage: 'Titolo',
  },
  title_description: {
    id: 'table_variaton_title_description',
    defaultMessage:
      'Titolo della colonna. Se vuoi, puoi modificare il titolo di default.',
  },
  //sortable: { id: 'table_variaton_sortable', defaultMessage: 'Ordinabile' },
});

const ColumnSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.column),
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['ct' /*'field', 'title', 'sortable'*/], //questi campi commentati vengono aggiunti solo quando è valorizzato il campo ct
    },
  ],
  properties: {
    ct: {
      title: intl.formatMessage(messages.ct),
      vocabulary: {
        '@id': 'plone.app.vocabularies.ReallyUserFriendlyTypes',
      },
    },
    field: {
      title: intl.formatMessage(messages.field),
      widget: 'ct_fields',
    },
    title: {
      title: intl.formatMessage(messages.title),
      description: intl.formatMessage(messages.title_description),
      widget: 'ct_title_column',
    },
    // sortable: {
    //   title: intl.formatMessage(messages.sortable),
    //   type: 'boolean',
    // },
  },
});

export const addTableTemplateOptions = (
  schema,
  formData,
  intl,
  position = 1,
) => {
  let pos = position;

  addSchemaField(
    schema,
    'alternate_rows',
    intl.formatMessage(messages.alternate_rows),
    null,
    { type: 'boolean', default: true },
    pos,
  );
  pos++;

  addSchemaField(
    schema,
    'columns',
    intl.formatMessage(messages.columns),
    null,
    {
      widget: 'object_list',
      schema: ColumnSchema({ intl }),
      schemaExtender: (schema, data, intl) => {
        const mutated = cloneDeep(schema);
        if (data.ct) {
          mutated.fieldsets[0].fields.push('field', 'title' /*, 'sortable'*/);
          mutated.properties.field.ct = data.ct;
        }
        return mutated;
      },
    },
    pos,
  );
  pos++;

  return pos;
};
