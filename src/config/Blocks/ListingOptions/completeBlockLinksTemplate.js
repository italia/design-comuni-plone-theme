import {
  templatesOptions,
  addDefaultOptions,
} from '@italia/config/Blocks/ListingOptions';

import { addLighthouseField } from '@italia/config/Blocks/ListingOptions/utils';

export const addCompleteBlockLinksTemplateOptions = (
  schema,
  formData,
  intl,
  position = 0,
) => {
  let pos = position;

  pos = addLighthouseField(schema, intl, pos);

  pos = addDefaultOptions(schema, formData, intl, pos);

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
