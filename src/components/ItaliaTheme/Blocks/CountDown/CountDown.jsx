import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { viewDate } from 'design-comuni-plone-theme/helpers';

const messages = defineMessages({
  days: {
    id: 'countdown_days',
    defaultMessage: 'giorni',
  },
  hours: {
    id: 'countdown_hours',
    defaultMessage: 'ore',
  },
  minutes: {
    id: 'countdown_minutes',
    defaultMessage: 'minuti',
  },
  seconds: {
    id: 'countdown_seconds',
    defaultMessage: 'secondi',
  },
  expired: {
    id: 'countdown_expired',
    defaultMessage: 'Scaduto il',
  },
});

const calculateTimeLeft = (end, intl) => {
  const endDate = viewDate(intl.locale, end);
  let difference = +endDate - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: {
        value: Math.floor(difference / (1000 * 60 * 60 * 24)),
        label: intl.formatMessage(messages.days),
      },
      hours: {
        value: Math.floor((difference / (1000 * 60 * 60)) % 24),
        label: intl.formatMessage(messages.hours),
      },
      minutes: {
        value: Math.floor((difference / 1000 / 60) % 60),
        label: intl.formatMessage(messages.minutes),
      },
      seconds: {
        value: Math.floor((difference / 1000) % 60),
        label: intl.formatMessage(messages.seconds),
      },
    };
  }

  return timeLeft;
};

const CountDown = ({
  end,
  showHours = true,
  showMinutes = true,
  showSeconds = true,
}) => {
  const intl = useIntl();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(end, intl));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(end, intl));
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, i) => {
    if (
      !timeLeft[interval].value &&
      (timerComponents?.length === 0 || i === Object.keys(timeLeft) - 1)
    ) {
      return;
    }
    if (
      (interval === 'hours' && !showHours) ||
      (interval === 'minutes' && !showMinutes) ||
      (interval === 'seconds' && !showSeconds)
    ) {
      return;
    }
    timerComponents.push(
      <div className={'interval ' + interval} key={'interval ' + interval}>
        <div className="number">
          {(interval === 'minutes' || interval === 'seconds') &&
          timeLeft[interval].value < 10
            ? '0'
            : ''}
          {timeLeft[interval].value}
        </div>
        <span className="label">{timeLeft[interval].label}</span>
      </div>,
    );
  });

  return (
    <div className="count-down-timer">
      {timerComponents.length ? (
        timerComponents
      ) : (
        <div className="expired">
          {intl.formatMessage(messages.expired)}{' '}
          {viewDate(intl.locale, end, 'DD/MM/YYYY HH:mm')}
        </div>
      )}
    </div>
  );
};

export default CountDown;
