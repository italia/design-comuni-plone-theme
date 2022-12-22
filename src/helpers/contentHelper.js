export const contentFolderHasItems = (content, folder_name) => {
  const has_items =
    content?.items.some((e) => e.id === folder_name) &&
    content?.items.filter((i) => i.id === folder_name)?.[0]?.has_children;
  return has_items;
};

export const renderPDCItemValue = (pdcValue) => {
  switch (pdcValue?.pdc_type) {
    case 'web':
    case 'social':
      return (
        <a
          href={pdcValue?.pdc_value ?? '#'}
          _target="blank"
          noopener
          noreferrer
        >
          {pdcValue?.pdc_value}
        </a>
      );
    case 'phone':
      return (
        <a
          href={`tel:${pdcValue?.pdc_value}` ?? '#'}
          _target="blank"
          noopener
          noreferrer
        >
          {pdcValue?.pdc_value}
        </a>
      );
    case 'email':
    case 'pec':
      return (
        <a
          href={`mailto:${pdcValue?.pdc_value}` ?? '#'}
          _target="blank"
          noopener
          noreferrer
        >
          {pdcValue?.pdc_value}
        </a>
      );
    default:
      return pdcValue?.pdc_value;
  }
};
