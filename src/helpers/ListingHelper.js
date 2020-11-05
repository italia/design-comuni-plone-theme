import React from 'react';
import { When } from '@plone/volto/components/theme/View/EventDatesInfo';
import { useIntl, defineMessages } from 'react-intl';
import moment from 'moment';
import 'moment/min/locales';

const messages = defineMessages({
  from: {
    id: 'from',
    defaultMessage: 'dal',
  },
  to: {
    id: 'to',
    defaultMessage: 'al',
  },
});

export const getCalendarDate = (item) => {
  const intl = useIntl();
  const effective = item.effective && (
    <span>{moment(item.effective).format('ll')}</span>
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
