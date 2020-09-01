import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/min/locales';
import { useIntl, defineMessages } from 'react-intl';

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

export const CardCalendar = ({start, end}) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  if (moment(start).format('DD/MM/YYYY') === moment(end).format('DD/MM/YYYY')) {
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

CardCalendar.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default CardCalendar;
