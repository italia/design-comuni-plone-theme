import { useSelector } from 'react-redux';
import moment from 'moment/min/moment-with-locales';
import { useIntl, defineMessages } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  TextFilter,
  SelectFilter,
  DateFilter,
} from '@italia/components/ItaliaTheme/Blocks/Common/SearchFilters';

const messages = defineMessages({
  text_filter: {
    id: 'searchBlock_text_filter',
    defaultMessage: 'Filtro di testo',
  },
  tipologia_filter: {
    id: 'searchBlock_tipologia_filter',
    defaultMessage: 'Filtro per tipologia',
  },
  tipologia: {
    id: 'sarchBandi_tipologia_placeholder',
    defaultMessage: 'Tipologia',
  },
  ente_filter: {
    id: 'searchBlock_ente_filter',
    defaultMessage: 'Filtro per Ente',
  },
  ente: {
    id: 'sarchBandi_ente_placeholder',
    defaultMessage: 'Ente',
  },
  ufficio_responsabile_filter: {
    id: 'searchBlock_ufficio_responsabile_filter',
    defaultMessage: 'Filtro per Ufficio responsabile',
  },
  ufficio_responsabile: {
    id: 'sarchBandi_ufficio_responsabile_placeholder',
    defaultMessage: 'Ufficio responsabile',
  },
  categoria_filter: {
    id: 'searchBlock_categoria_filter',
    defaultMessage: 'Filtro per Categoria',
  },
  categoria: {
    id: 'sarchBandi_categoria_placeholder',
    defaultMessage: 'Categoria',
  },
  scadenza_filter: {
    id: 'searchBlock_scadenza_filter',
    defaultMessage: 'Filtro per data di scadenza del bando',
  },
  search_keyword: {
    id: 'Cerca per parola chiave',
    defaultMessage: 'Cerca per parola chiave',
  },
});

const DefaultFilters = () => {
  const intl = useIntl();
  moment.locale(intl.locale);
  const subsite = useSelector((state) => state.subsite?.data);

  return {
    text_filter: {
      label: intl.formatMessage(messages.text_filter),
      type: 'text_filter',
      widget: {
        component: TextFilter,
        props: {
          value: '',
          placeholder: intl.formatMessage(messages.search_keyword),
        },
      },
      query: (value, query) => {
        if (value) {
          query.push({
            i: 'SearchableText',
            o: 'plone.app.querystring.operation.string.contains',
            v: value + '*',
          });
        }
      },
    },
    tipologia_filter: {
      label: intl.formatMessage(messages.tipologia_filter),
      type: 'tipologia_filter',
      widget: {
        component: SelectFilter,
        props: {
          value: null,
          options: {
            vocabulary: 'redturtle.bandi.tipologia.vocabulary',
            placeholder: intl.formatMessage(messages.tipologia),
          },
        },
      },
      query: (value, query) => {
        if (value?.value) {
          query.push({
            i: 'tipologia_bando',
            o: 'plone.app.querystring.operation.selection.any',
            v: value.value,
          });
        }
      },
    },
    ente_filter: {
      label: intl.formatMessage(messages.ente_filter),
      type: 'ente_filter',
      widget: {
        component: SelectFilter,
        props: {
          value: null,
          options: {
            vocabulary: 'redturtle.bandi.enti.vocabulary',
            placeholder: intl.formatMessage(messages.ente),
          },
        },
      },
      query: (value, query) => {
        if (value?.value) {
          query.push({
            i: 'ente_bando',
            o: 'plone.app.querystring.operation.selection.any',
            v: value.value,
          });
        }
      },
    },
    ufficio_responsabile_filter: {
      label: intl.formatMessage(messages.ufficio_responsabile_filter),
      type: 'ufficio_responsabile_filter',
      widget: {
        component: SelectFilter,
        props: {
          value: null,
          options: {
            dispatch: {
              path: subsite ? flattenToAppURL(subsite['@id']) : '/',
              portal_types: ['UnitaOrganizzativa'],
              fullobjects: 0,
              b_size: 10000,
              additionalParams: { bandiSearch: true },
              subrequests_name: 'search_bandi_ufficio_responsabile',
            },
            placeholder: intl.formatMessage(messages.ufficio_responsabile),
          },
        },
      },
      query: (value, query) => {
        if (value?.value) {
          query.push({
            i: 'ufficio_responsabile',
            o: 'plone.app.querystring.operation.selection.any',
            v: value.value,
          });
        }
      },
    },
    categoria_filter: {
      label: intl.formatMessage(messages.categoria_filter),
      type: 'categoria_filter',
      widget: {
        component: SelectFilter,
        props: {
          value: null,
          options: {
            vocabulary: 'plone.app.vocabularies.Keywords',
            placeholder: intl.formatMessage(messages.categoria_filter),
          },
        },
      },
      query: (value, query) => {
        if (value?.value) {
          query.push({
            i: 'subjects',
            o: 'plone.app.querystring.operation.selection.any',
            v: value.value,
          });
        }
      },
    },
    scadenza_filter: {
      label: intl.formatMessage(messages.scadenza_filter),
      type: 'scadenza_filter',
      widget: {
        component: DateFilter,
        props: {
          value: {
            startDate: moment().startOf('day'),
            endDate: moment().endOf('day'),
          },
          showClearDates: true,
          defaultStart: moment().startOf('day'),
          defaultEnd: moment().endOf('day'),
          isOutsideRange: () => false,
        },
      },

      reducer: (value, state) => {
        return {
          startDate: value.start ?? state.widget.props.defaultStart,
          endDate: value.end ?? state.widget.props.defaultEnd,
        };
      },
      query: (value, query) => {
        const date_fmt = 'YYYY-MM-DD HH:mm';

        if (value?.startDate && !value.endDate) {
          let start = value.startDate.startOf('day')?.format(date_fmt);
          query.push({
            i: 'scadenza_bando',
            o: 'plone.app.querystring.operation.date.largerThan', //plone.app.querystring.operation.date.largerThan
            v: start,
          });
        } else if (!value?.startDate && value?.endDate) {
          let end = value.endDate.endOf('day')?.format(date_fmt);
          query.push({
            i: 'scadenza_bando',
            o: 'plone.app.querystring.operation.date.lessThan', //plone.app.querystring.operation.date.lessThan
            v: end,
          });
        } else {
          let start = value.startDate.startOf('day')?.format(date_fmt);
          let end = value.endDate.endOf('day')?.format(date_fmt);
          query.push({
            i: 'scadenza_bando',
            o: 'plone.app.querystring.operation.date.between',
            v: [start, end],
          });
        }
      },
    },
  };
};

export default DefaultFilters;
