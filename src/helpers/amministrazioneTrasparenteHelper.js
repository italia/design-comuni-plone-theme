import { flattenToAppURL } from '@plone/volto/helpers';
import { defineMessages } from 'react-intl';

const messages = defineMessages({
  nominativo: {
    id: 'nominativo',
    defaultMessage: 'nominativo',
  },
  incarico: {
    id: 'incarico',
    defaultMessage: 'incarico',
  },
  area: {
    id: 'area',
    defaultMessage: 'area',
  },

  titolo: {
    id: 'titolo',
    defaultMessage: 'titolo',
  },
  descrizione: {
    id: 'descrizione',
    defaultMessage: 'descrizione',
  },
  termine: {
    id: 'termine',
    defaultMessage: 'termine',
  },
  unita_operativa: {
    id: 'unita_operativa',
    defaultMessage: 'unità operativa',
  },
});

export const getTableRowData = (items, intl, currentLocation) => {
  if (!items || items.length === 0) {
    return [];
  }

  let tableData = {};
  const type = items[0]['@type'];
  switch (type) {
    case 'Persona':
      tableData.headers = [
        intl.formatMessage(messages.nominativo),
        intl.formatMessage(messages.incarico),
        intl.formatMessage(messages.area),
      ];

      tableData.body = items.map((item) => {
        return [
          {
            type: 'link',
            class: 'text-decoration-none fw-bold',
            text: item.title,
            link: flattenToAppURL(item['@id']),
          },
          {
            type: 'text',
            text: item.ruolo.title,
          },
          {
            type: 'link',
            class: 'text-decoration-none',
            text: item.organizzazione_riferimento[0]?.title,
            link: flattenToAppURL(
              item.organizzazione_riferimento[0].hasOwnProperty('@id')
                ? item.organizzazione_riferimento[0]['@id']
                : '',
            ),
          },
        ];
      });
      break;
    case 'Servizio':
      tableData.headers = [
        intl.formatMessage(messages.titolo),
        intl.formatMessage(messages.descrizione),
        intl.formatMessage(messages.termine),
        intl.formatMessage(messages.unita_operativa),
      ];

      tableData.body = items.map((item) => {
        return [
          {
            type: 'link',
            class: 'text-decoration-none fw-bold',
            text: item.title,
            link: flattenToAppURL(
              `${currentLocation}/dettaglio-procedimento?uid=${item.UID}`,
            ),
          },
          {
            type: 'text',
            text: item.description,
          },
          {
            type: 'richtext',
            text: item.tempi_e_scadenze?.data,
          },
          {
            type: 'link',
            class: 'text-decoration-none',
            text:
              item.ufficio_responsabile?.length > 0 &&
              item.ufficio_responsabile[0]?.title,
            link:
              item.ufficio_responsabile?.length > 0 &&
              flattenToAppURL(
                item.ufficio_responsabile[0].hasOwnProperty('@id')
                  ? item.ufficio_responsabile[0]['@id']
                  : '',
              ),
          },
        ];
      });
      break;
    default:
      break;
  }

  return tableData;
};
