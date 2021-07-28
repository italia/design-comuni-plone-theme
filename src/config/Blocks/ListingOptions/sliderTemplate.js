import { defineMessages } from 'react-intl';

import { addSchemaField } from '@italia/config/Blocks/ListingOptions';

const messages = defineMessages({
  slidesToShow: {
    id: 'slidesToShow',
    defaultMessage: 'N° slide da mostrare',
  },
});

export const addSliderTemplateOptions = (
  schema,
  formData,
  intl,
  position = 0,
) => {
  let pos = position;

  pos = addSchemaField(
    schema,
    'slidesToShow',
    intl.formatMessage(messages.slidesToShow),
    null,
    { type: 'number', default: 1 },
    pos,
  );
  return pos;
};
