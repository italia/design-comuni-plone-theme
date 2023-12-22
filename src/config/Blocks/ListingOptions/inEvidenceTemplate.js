import { defineMessages } from 'react-intl';

import {
  templatesOptions,
  addDefaultOptions,
} from 'design-comuni-plone-theme/config/Blocks/ListingOptions';

import { addLighthouseField } from 'design-comuni-plone-theme/config/Blocks/ListingOptions/utils';

const messages = defineMessages({
  show_topics: {
    id: 'show_topics',
    defaultMessage: 'Mostra gli argomenti',
  },
});

export const addInEvidenceTemplateOptions = (
  schema,
  formData,
  intl,
  position = 1,
) => {
  let pos = position;

  pos = addLighthouseField(schema, intl, pos);

  pos = addDefaultOptions(schema, formData, intl, pos);

  pos = templatesOptions(
    schema,
    formData,
    intl,
    [
      'show_icon',
      'show_section',
      'show_type',
      'hide_dates',
      'show_description',
      'show_topics',
    ],
    {
      hide_dates: { default: false },
      show_section: { default: false },
      show_topics: { label: intl.formatMessage(messages.show_topics) },
    },
    pos,
  );
  return pos;
};
