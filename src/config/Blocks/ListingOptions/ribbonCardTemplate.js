import { defineMessages } from 'react-intl';

import {
  templatesOptions,
  addDefaultOptions,
} from 'design-comuni-plone-theme/config/Blocks/ListingOptions';

import { addLighthouseField } from 'design-comuni-plone-theme/config/Blocks/ListingOptions/utils';

const messages = defineMessages({
  show_only_first_ribbon: {
    id: 'show_only_first_ribbon',
    defaultMessage: 'Mostra il nastro solo sulla prima card',
  },
});

export const addRibbonCardTemplateOptions = (
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
      'show_only_first_ribbon',
      'show_icon',
      'show_section',
      'show_type',
      'hide_dates',
      'show_description',
      'show_detail_link',
    ],
    {
      show_only_first_ribbon: {
        default: false,
        label: intl.formatMessage(messages.show_only_first_ribbon),
      },
      hide_dates: { default: false },
      show_detail_link: { default: false },
      show_type: { default: false },
    },
    pos,
  );
  return pos;
};
