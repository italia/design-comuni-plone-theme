import React from 'react';
import PropTypes from 'prop-types';

import { useIntl, defineMessages } from 'react-intl';
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
});

export const CardCalendar = ({ start, end }) => {
  const intl = useIntl();

  const _start = viewDate(intl.locale, start);
  const _end = viewDate(intl.locale, end);

  if (_start.isSame(_end, 'day')) {
    return (
      <div className="card-calendar d-flex flex-column justify-content-center">
        <span className="card-date">{_start.format('D')}</span>
        <span className="card-day">{_end.format('MMMM')}</span>
      </div>
    );
  } else {
    return (
      <div className="custom-calendar-card">
        <div className="card-calendar d-flex flex-column justify-content-center">
          <span className="card-date d-flex justify-content-center align-items-baseline">
            <div className="date-label mr-1">
              {intl.formatMessage(messages.from)}
            </div>
            <span className="date">{_start.format('DD/MM')}</span>
          </span>
          <span className="card-date d-flex justify-content-center align-items-baseline">
            <div className="date-label mr-1">
              {intl.formatMessage(messages.to)}
            </div>
            <span className="date">{_end.format('DD/MM')}</span>
          </span>
        </div>
      </div>
    );
  }
};

CardCalendar.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default CardCalendar;
