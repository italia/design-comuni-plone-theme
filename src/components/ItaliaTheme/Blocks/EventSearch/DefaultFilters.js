import { useSelector } from 'react-redux';
import moment from 'moment/min/moment-with-locales';
import { useIntl, defineMessages } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  TextFilter,
  SelectFilter,
  DateFilter,
} from '@italia/components/ItaliaTheme/Blocks/EventSearch/Filters';

const messages = defineMessages({
  text_filter: {
    id: 'searchEventsBlock_text_filter',
    defaultMessage: 'Filtro di testo',
  },
  venue_filter: {
    id: 'searchEventsBlock_venue_filter',
    defaultMessage: 'Filtro per luoghi',
  },
  date_filter: {
    id: 'searchEventsBlock_date_filter',
    defaultMessage: 'Filtro per date',
  },
  venues: {
    id: 'venues',
    defaultMessage: 'Luoghi',
  },
});

const DefaultFilters = (dispatchFilter) => {
  const intl = useIntl();
  moment.locale(intl.locale);
  const subsite = useSelector((state) => state.subsite?.data);

  return {
    text_filter: {
      label: intl.formatMessage(messages.text_filter),
      widget: {
        component: TextFilter,
        value: '',
        onChange: (data, id) => {
          if (dispatchFilter) {
            dispatchFilter({
              filter: id,
              value: data ?? '',
            });
          }
        },
      },
    },
    venue_filter: {
      label: intl.formatMessage(messages.venue_filter),
      widget: {
        component: SelectFilter,
        value: null,
        options: {
          dispatch: {
            path: subsite ? flattenToAppURL(subsite['@id']) : '/',
            portal_types: ['Venue'],
            fullobjects: 0,
            b_size: 10000,
            subrequests_name: 'venues',
          },
          placeholder: intl.formatMessage(messages.venues),
        },
        onChange: (data, id) => {
          if (dispatchFilter) {
            dispatchFilter({
              filter: id,
              value: data,
            });
          }
        },
      },
    },
    date_filter: {
      label: intl.formatMessage(messages.date_filter),
      widget: {
        component: DateFilter,
        value: {
          startDate: moment().startOf('day'),
          endDate: moment().endOf('day'),
        },
        onChange: (startDate, endDate, id) => {
          if (dispatchFilter) {
            dispatchFilter({
              filter: id,
              value: { startDate, endDate },
            });
          }
        },
      },
    },
  };
};

export default DefaultFilters;
