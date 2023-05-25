import React from 'react';
import { Link } from 'react-router-dom';
import { useIntl, defineMessages } from 'react-intl';

import { flattenToAppURL } from '@plone/volto/helpers';
import { When } from '@plone/volto/components/theme/View/EventDatesInfo';
import {
  viewDate,
  getRealStartAndEndWithRecurrence,
} from 'design-comuni-plone-theme/helpers';
import {
  getCalendarDate_extend,
  getEventRecurrenceMore_extend,
} from 'design-comuni-plone-theme/helpers/ListingHelper_extend';

const messages = defineMessages({
  from: {
    id: 'from',
    defaultMessage: 'dal',
  },
  to: {
    id: 'to',
    defaultMessage: 'al',
  },
  event_recurrence_label: {
    id: 'listing_event_recurrence_label',
    defaultMessage: 'Questo evento ha più date: vedi tutte',
  },
});

const Intl = () => {
  const intl = useIntl();
  return intl;
};

export const getCalendarDate = (item, rrulestr) => {
  const intl = Intl();
  const effective = item.effective && (
    <span>{viewDate(intl.locale, item.effective, 'll')}</span>
  );

  let ret = null;
  switch (item['@type']) {
    case 'Event':
      let realStart = item.start;
      let realEnd = item.end;
      if (item.recurrence) {
        const _start = item.start && viewDate(intl.locale, item.start);
        const recurrenceDates = getRealStartAndEndWithRecurrence(
          intl.locale,
          _start,
          item.recurrence,
          rrulestr,
          intl,
        );
        realStart = recurrenceDates.recurrenceStart;
        realEnd = recurrenceDates.recurrenceEnd;
      }
      ret = (
        <When
          start={realStart}
          end={realEnd}
          whole_day={item.whole_day}
          open_end={item.open_end}
          start_label={intl.formatMessage(messages.from)}
          end_label={intl.formatMessage(messages.to)}
          start_date_format={'DD MMM YYYY'}
          end_date_format={'DD MMM YYYY'}
          show_time={false}
        />
      );
      break;
    case 'News Item':
      ret = effective;
      break;
    default:
      ret = null;
  }

  const custom_ret = getCalendarDate_extend(item);

  return custom_ret || ret;
};

export const getEventRecurrenceMore = (item, isEditMode) => {
  const intl = Intl();
  let ret = null;
  if (item['@type'] === 'Event') {
    if (item.recurrence) {
      ret = (
        <Link
          to={!isEditMode ? flattenToAppURL(item['@id']) : '#'}
          className="event-recurrences-more"
        >
          {intl.formatMessage(messages.event_recurrence_label)}
        </Link>
      );
    }
  }
  const custom_ret = getEventRecurrenceMore_extend(item, isEditMode);
  return custom_ret || ret;
};
