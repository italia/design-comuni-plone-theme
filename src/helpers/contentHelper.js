import { UniversalLink } from '@plone/volto/components';

export const contentFolderHasItems = (content, folder_name) => {
  const has_items =
    content?.items.some((e) => e.id === folder_name) &&
    content?.items.filter((i) => i.id === folder_name)?.[0]?.has_children;
  return has_items;
};

export const renderPDCItemValue = (pdcValue) => {
  switch (pdcValue?.pdc_type) {
    case 'url':
    case 'account':
    case 'linkedin':
    case 'twitter':
      return (
        <UniversalLink href={`${pdcValue?.pdc_value}`}>
          {pdcValue?.pdc_value}
        </UniversalLink>
      );
    case 'telefono':
      return (
        <a
          href={`tel:${pdcValue?.pdc_value}`}
          target="_blank"
          rel="noopener noreferrer"
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
        >
          {pdcValue?.pdc_value}
        </a>
      );
    default:
      return pdcValue?.pdc_value;
  }
};
