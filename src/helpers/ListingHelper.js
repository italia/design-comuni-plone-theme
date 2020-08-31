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
  hours: {
    id: 'hours',
    defaultMessage: 'ore',
  }
});

export const getDateComponent = (start, end, whole_day, open_end, type) => {
  const intl = useIntl();

  return type === 'Event' ?
            <When
              start={start}
              end={end}
              whole_day={whole_day}
              open_end={open_end}
              start_label={intl.formatMessage(messages.hours)}
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

export const getCalendarCard = (start, end) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  if (moment(start).format('DD/MM/AAAA') === moment(end).format('DD/MM/AAAA')){
    return ( 
      <div className="card-calendar d-flex flex-column justify-content-center">
        <span className="card-date">
          {moment(start).format('D')}
        </span>
        <span className="card-day">
          {moment(end).format('MMMM')}
        </span>
      </div>
    )
  } else {
    return (
      <div className="custom-calendar-card">
        <div className="card-calendar d-flex flex-column justify-content-center">
          <span className="card-date d-flex justify-content-center align-items-baseline">
            <div className="date-label">{intl.formatMessage(messages.from)}</div>
            <span className="date">{moment(start).format('DD/MM')}</span>
          </span>
          <span className="card-date d-flex justify-content-center align-items-baseline">
            <div className="date-label">{intl.formatMessage(messages.to)}</div>
            <span className="date">{moment(end).format('DD/MM')}</span>
          </span>
        </div>
      </div>
    )
  }
}