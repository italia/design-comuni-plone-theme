import { defineMessages } from 'react-intl';

import { templatesOptions } from 'design-comuni-plone-theme/config/Blocks/ListingOptions';

const messages = defineMessages({
  show_pdf_preview: {
    id: 'show_pdf_preview',
    defaultMessage: 'Mostra i PDF in anteprima',
  },
  show_pdf_desc: {
    id: 'show_pdf_desc',
    defaultMessage:
      "Permette di aprire l'anteprima di tutti i PDF di questo elenco in una tab separata altrimenti vengono scaricati.",
  },
});

export const addAttachmentCardTemplateOptions = (
  schema,
  formData,
  intl,
  position = 1,
) => {
  let pos = position;

  pos = templatesOptions(
    schema,
    formData,
    intl,
    ['show_pdf_preview'],
    {
      show_pdf_preview: {
        default: false,
        label: intl.formatMessage(messages.show_pdf_preview),
        description: intl.formatMessage(messages.show_pdf_desc),
      },
    },
    pos,
  );
  return pos;
};
