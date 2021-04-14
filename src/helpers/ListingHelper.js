import React from 'react';
import { Link } from 'react-router-dom';
import { useIntl, defineMessages } from 'react-intl';

import { flattenToAppURL } from '@plone/volto/helpers';
import { When } from '@plone/volto/components/theme/View/EventDatesInfo';
import { viewDate } from '@italia/helpers';

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

export const getCalendarDate = (item) => {
  const intl = Intl();
  const effective = item.effective && (
    <span>{viewDate(intl.locale, item.effective, 'll')}</span>
  );

  switch (item['@type']) {
    case 'Event':
      return (
        <When
          start={item.start}
          end={item.end}
          whole_day={item.whole_day}
          open_end={item.open_end}
          start_label={intl.formatMessage(messages.from)}
          end_label={intl.formatMessage(messages.to)}
          start_date_format={'DD MMM YYYY'}
          end_date_format={'DD MMM YYYY'}
          show_time={false}
        />
      );
    case 'News Item':
      return effective;
    default:
      return null;
  }
};

export const getEventRecurrenceMore = (item, isEditMode) => {
  const intl = Intl();
  if (item['@type'] === 'Event') {
    if (item.recurrence) {
      return (
        <Link
          to={!isEditMode ? flattenToAppURL(item['@id']) : '#'}
          className="event-recurrences-more"
        >
          {intl.formatMessage(messages.event_recurrence_label)}
        </Link>
      );
    }
  }
  return null;
};
