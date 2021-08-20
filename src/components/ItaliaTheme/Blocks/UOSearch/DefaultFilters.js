import { useSelector } from 'react-redux';
import moment from 'moment/min/moment-with-locales';
import { useIntl, defineMessages } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  TextFilter,
  SelectFilter,
} from '@italia/components/ItaliaTheme/Blocks/Common/SearchFilters';

const messages = defineMessages({
  text_filter: {
    id: 'searchBlock_text_filter',
    defaultMessage: 'Filtro di testo',
  },
  venue_filter: {
    id: 'searchBlock_venue_filter',
    defaultMessage: 'Filtro per luoghi',
  },
  uo_type_filter: {
    id: 'searchBlock_uo_type_filter',
    defaultMessage: 'Filtro per tipologia',
  },
  venues: {
    id: 'venues',
    defaultMessage: 'Luoghi',
  },
  uo_type: {
    id: 'uo_type',
    defaultMessage: 'Tipologia',
  },
  search_keyword: {
    id: 'uo_search_keyword',
    defaultMessage: 'Cerca una struttura',
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
    venue_filter: {
      label: intl.formatMessage(messages.venue_filter),
      type: 'venue_filter',
      widget: {
        component: SelectFilter,
        props: {
          value: null,
          options: {
            dispatch: {
              path: subsite ? flattenToAppURL(subsite['@id']) : '/',
              portal_types: ['Venue'],
              fullobjects: 0,
              b_size: 10000,
              subrequests_name: 'uo_venues',
            },
            placeholder: intl.formatMessage(messages.venues),
          },
        },
      },
      query: (value, query) => {
        if (value?.value) {
          query.push({
            i: 'uo_location',
            o: 'plone.app.querystring.operation.selection.any',
            v: value.value,
          });
        }
      },
    },
    uo_type_filter: {
      label: intl.formatMessage(messages.uo_type_filter),
      type: 'uo_type_filter',
      widget: {
        component: SelectFilter,
        props: {
          value: null,
          options: {
            vocabulary:
              'design.plone.vocabularies.tipologie_unita_organizzativa',
            placeholder: intl.formatMessage(messages.uo_type),
          },
        },
      },
      query: (value, query) => {
        if (value?.value) {
          query.push({
            i: 'tipologia_organizzazione',
            o: 'plone.app.querystring.operation.selection.any',
            v: value.value,
          });
        }
      },
    },
  };
};

export default DefaultFilters;
