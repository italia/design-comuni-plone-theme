import {
  templatesOptions,
  addDefaultOptions,
  addSchemaField,
} from 'design-comuni-plone-theme/config/Blocks/ListingOptions';

import { addLighthouseField } from 'design-comuni-plone-theme/config/Blocks/ListingOptions/utils';

export const addCompleteBlockLinksTemplateOptions = (
  schema,
  formData,
  intl,
  position = 0,
) => {
  let pos = position;
  let listing_items_colors = [
    { name: 'transparent', label: 'Trasparente' },
    { name: 'primary', label: 'Primario' },
    { name: 'secondary', label: 'Secondario' },
  ];

  pos = addLighthouseField(schema, intl, pos);

  pos = addDefaultOptions(schema, formData, intl, pos);

  pos = addSchemaField(
    schema,
    'bg_card_color',
    'Sfondo card colore',
    null,
    { widget: 'color_list', intl: intl, colors: listing_items_colors },
    pos,
  );

  pos = templatesOptions(
    schema,
    formData,
    intl,
    ['show_description'],
    null,
    pos,
  );
  return pos;
};
