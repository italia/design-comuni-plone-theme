import getItemIcon_extend from 'design-comuni-plone-theme/components/ItaliaTheme/Icons/common/common_extend';

const getItemIcon = (item) => {
  const type_icons = {
    Servizio: 'it-settings',
    UnitaOrganizzativa: 'it-pa',
    Documento: 'it-file',
    'News Item': 'it-note',
    Event: 'it-calendar',
  };
  let icon = type_icons[item['@type']] || 'it-pa'; //default-icon

  if (item['@type'] === 'Pagina Argomento') {
    icon = item.icona ? item.icona : icon;
  }

  if (item['@type'] === 'News Item') {
    if (
      item.design_italia_meta_type === 'Avvisi' ||
      item.design_italia_meta_type === 'Avviso'
    ) {
      icon = 'exclamation-triangle';
    }

    if (
      // io-comune-v2
      item.design_italia_meta_type === 'Comunicati stampa' ||
      item.design_italia_meta_type === 'Comunicato stampa' ||
      // io-comune-v3
      item.design_italia_meta_type === 'Comunicato (stampa)'
    ) {
      icon = 'it-note';
    }
  }

  let custom_icon = getItemIcon_extend(item);

  return custom_icon || icon;
};

export default getItemIcon;
