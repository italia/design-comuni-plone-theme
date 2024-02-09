import { UniversalLink } from '@plone/volto/components';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  url: {
    id: 'url',
    defaultMessage: 'Sito web',
  },
  account: {
    id: 'account',
    defaultMessage: 'Account',
  },
  linkedin: {
    id: 'linkedin',
    defaultMessage: 'LinkedIn',
  },
  twitter: {
    id: 'twitter',
    defaultMessage: 'Twitter',
  },
  telefono: {
    id: 'telefono',
    defaultMessage: 'Numero di telefono',
  },
  email: {
    id: 'email',
    defaultMessage: 'Email',
  },
  pec: {
    id: 'pec',
    defaultMessage: 'PEC',
  },
  social: {
    id: 'social',
    defaultMessage: 'Social',
  },
  fax: {
    id: 'fax',
    defaultMessage: 'Fax',
  },
  whatsapp: {
    id: 'whatsapp',
    defaultMessage: 'Whatsapp',
  },
  telegram: {
    id: 'telegram',
    defaultMessage: 'Telegram',
  },
  skype: {
    id: 'skype',
    defaultMessage: 'Skype',
  },
});

export const contentFolderHasItems = (content, folder_name) => {
  const has_items =
    content?.items.some((e) => e.id === folder_name) &&
    content?.items.filter((i) => i.id === folder_name)?.[0]?.has_children;
  return has_items;
};

export const renderPDCItemValue = (pdcValue, intl) => {
  switch (pdcValue?.pdc_type) {
    case 'url':
    case 'account':
    case 'linkedin':
    case 'twitter':
      return (
        <UniversalLink
          href={`${pdcValue?.pdc_value}`}
          aria-label={`${intl.formatMessage(messages[pdcValue.pdc_type])}: ${
            pdcValue?.pdc_value ?? ''
          }`}
        >
          {pdcValue?.pdc_value}
        </UniversalLink>
      );
    case 'telefono':
      return (
        <a
          href={`tel:${pdcValue?.pdc_value}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[pdcValue.pdc_type])}: ${
            pdcValue?.pdc_value ?? ''
          }`}
        >
          {pdcValue?.pdc_value}
        </a>
      );
    case 'whatsapp':
      return (
        <a
          href={`https://wa.me/${pdcValue?.pdc_value.replace(/\D/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[pdcValue.pdc_type])}: ${
            pdcValue?.pdc_value ?? ''
          }`}
        >
          {pdcValue?.pdc_value}
        </a>
      );
    case 'telegram':
      // telegram must be username not phone number
      return (
        <a
          href={`https://t.me/${pdcValue?.pdc_value}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[pdcValue.pdc_type])}: ${
            pdcValue?.pdc_value ?? ''
          }`}
        >
          {pdcValue?.pdc_value}
        </a>
      );
    case 'skype':
      // skype must be: unknown, should we use their js resources?
      // and then GDPR?
      // https://learn.microsoft.com/en-us/skype-sdk/skypeuris/skypeuritutorial_webpages?redirectedfrom=MSDN
      return (
        <a
          href={`skype:${pdcValue?.pdc_value}?call`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[pdcValue.pdc_type])}: ${
            pdcValue?.pdc_value ?? ''
          }`}
        >
          {pdcValue?.pdc_value}
        </a>
      );
    case 'email':
    case 'pec':
      return (
        <a
          href={`mailto:${pdcValue?.pdc_value}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${intl.formatMessage(messages[pdcValue.pdc_type])}: ${
            pdcValue?.pdc_value ?? ''
          }`}
        >
          {pdcValue?.pdc_value}
        </a>
      );
    default:
      return pdcValue?.pdc_value;
  }
};
