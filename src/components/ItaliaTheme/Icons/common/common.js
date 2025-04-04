import getItemIcon_extend from 'design-comuni-plone-theme/components/ItaliaTheme/Icons/common/common_extend';

const type_icons = {
  Servizio: 'it-settings',
  UnitaOrganizzativa: 'it-pa',
  Documento: 'it-file',
  'News Item': 'it-note',
  Event: 'it-calendar',
};
const getItemIcon = (item) => {
  if (!item) return;
  let icon = item['@type'] ? type_icons[item['@type']] || 'it-pa' : 'it-pa'; //default-icon

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
