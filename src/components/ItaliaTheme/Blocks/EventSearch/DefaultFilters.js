import {
  DateFilter,
  SelectFilter,
  TextFilter,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Common/SearchFilters';
import { defineMessages, useIntl } from 'react-intl';

import { flattenToAppURL } from '@plone/volto/helpers';
import moment from 'moment';
import { useSelector } from 'react-redux';

const messages = defineMessages({
  text_filter: {
    id: 'searchBlock_text_filter',
    defaultMessage: 'Filtro di testo',
  },
  venue_filter: {
    id: 'searchBlock_venue_filter',
    defaultMessage: 'Filtro per luoghi',
  },
  date_filter: {
    id: 'searchBlock_date_filter',
    defaultMessage: 'Filtro per date',
  },
  venues: {
    id: 'venues',
    defaultMessage: 'Luoghi',
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
    venue_filter: {
      label: intl.formatMessage(messages.venue_filter),
      type: 'venue_filter',
      widget: {
        component: SelectFilter,
        props: {
          value: null,
          isSearchable: true,
          options: {
            dispatch: {
              path: subsite ? flattenToAppURL(subsite['@id']) : '/',
              portal_types: ['Venue'],
              fullobjects: 0,
              b_size: 10000,
              subrequests_name: 'venues',
              additionalParams: {
                sort_on: 'sortable_title',
                sort_order: 'ascending',
              },
            },
            placeholder: intl.formatMessage(messages.venues),
          },
        },
      },
      query: (value, query) => {
        if (value?.value) {
          query.push({
            i: 'event_location',
            o: 'plone.app.querystring.operation.selection.any',
            v: value.value,
          });
        }
      },
    },
    date_filter: {
      label: intl.formatMessage(messages.date_filter),
      type: 'date_filter',
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

        if (value?.startDate) {
          let start = value.startDate.startOf('day')?.format(date_fmt);
          query.push({
            i: 'start', //end
            o: 'plone.app.querystring.operation.date.largerThan', //plone.app.querystring.operation.date.largerThan
            v: start,
          });
        }
        if (value?.endDate) {
          let end = value.endDate.endOf('day')?.format(date_fmt);
          query.push({
            i: 'end', //start
            o: 'plone.app.querystring.operation.date.lessThan', //plone.app.querystring.operation.date.lessThan
            v: end,
          });
        }
      },
    },
  };
};

export default DefaultFilters;
