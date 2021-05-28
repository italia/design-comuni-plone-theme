import { defineMessages } from 'react-intl';

import { templatesOptions } from '@italia/config/Blocks/ListingOptions';

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
  position = 0,
) => {
  let pos = position;

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
