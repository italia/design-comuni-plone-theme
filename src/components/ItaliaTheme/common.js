const getItemIcon = (item) => {
  const type_icons = {
    Servizio: 'it-settings',
    UnitaOrganizzativa: 'it-pa',
    Documento: 'it-file',
  };
  let icon = type_icons[item['@type']] || 'it-pa'; //default-icon

  if (item['@type'] === 'Pagina Argomento') {
    icon = item.icon ? item.icon : icon;
  }

  return icon;
};

export default getItemIcon;
