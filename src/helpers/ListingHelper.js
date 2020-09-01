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

export const getDateComponent = (start, end, whole_day, open_end, type) => {
  const intl = useIntl();

  return type === 'Event' ?
            <When
              start={start}
              end={end}
              whole_day={whole_day}
              open_end={open_end}
              start_label={' '}
              end_label={'-'}
              start_date_format={'DD MMM'}
              end_date_format={'DD MMM'}
            />
          :
            <When
              start={start}
              whole_day={false}
              open_end={true}
              start_label={intl.formatMessage(messages.from)}
              end_label={intl.formatMessage(messages.to)}
              start_date_format={'DD MMM'}
              end_date_format={'DD MMM'} 
            />
}
