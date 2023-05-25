import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import cx from 'classnames';
import moment from 'moment';
import { useIntl } from 'react-intl';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

export const datesForDisplay = (
  start,
  end,
  start_date_format,
  end_date_format,
  start_time_format,
  end_time_format,
) => {
  const mStart = moment(start);
  const mEnd = moment(end);
  if (!mStart.isValid() || !mEnd.isValid()) {
    return null;
  }
  const sameDay = mStart.isSame(mEnd, 'day');
  const sameTime = mStart.isSame(mEnd, 'minute');
  const sameMonth = mStart.isSame(mEnd, 'month');
  const sameYear = mStart.isSame(mEnd, 'year');

  return {
    sameDay,
    sameTime,
    sameMonth,
    sameYear,
    startDate: mStart.format(start_date_format),
    startTime: mStart.format(start_time_format),
    endDate: mEnd.format(end_date_format),
    endTime: mEnd.format(end_time_format),
  };
};

export const When = ({
  start,
  end,
  start_date_format = 'll',
  end_date_format = 'll',
  start_time_format = 'LT',
  end_time_format = 'LT',
  whole_day,
  open_end,
  start_label,
  end_label,
  show_time = true,
}) => {
  const datesInfo = datesForDisplay(
    start,
    end,
    start_date_format,
    end_date_format,
    start_time_format,
    end_time_format,
  );

  if (!datesInfo) {
    // eslint-disable-next-line no-console
    console.warn('EventWhen: Received invalid start or end date.');
    return;
  }

  const getDate = () => {
    // Same dates
    if (datesInfo.sameDay && datesInfo.sameMonth && datesInfo.sameYear) {
      return (
        <>
          {whole_day && (
            <span className="start-date">{datesInfo.startDate}</span>
          )}
          {open_end && !whole_day && (
            <>
              <span className="start-date">{datesInfo.startDate}</span>
              {show_time && (
                <>
                  &nbsp;{start_label || 'from'}&nbsp;
                  <span className="start-time">{datesInfo.startTime}</span>
                </>
              )}
            </>
          )}
          {!(whole_day || open_end) && (
            <>
              <span className="start-date">{datesInfo.startDate}</span>
              {show_time && (
                <>
                  <span> </span>
                  <span className="start-time">{datesInfo.startTime}</span>
                  &nbsp;-&nbsp;
                  <span className="end-time">{datesInfo.endTime}</span>
                </>
              )}
            </>
          )}
        </>
      );
      // Same month and year
    } else if (datesInfo.sameMonth && datesInfo.sameYear) {
      return (
        <>
          {start_label || 'from'}&nbsp;
          <span className="start-date">{moment(start).format('DD')}</span>
          {!whole_day && show_time && (
            <>
              <span> </span>
              <span className="start-time">{datesInfo.startTime}</span>
            </>
          )}
          &nbsp;{end_label || 'to'}&nbsp;
          <span className="end-date">{moment(end).format('DD')}</span>
          {!whole_day && show_time && (
            <>
              <span> </span>
              <span className="start-time">{datesInfo.endTime}</span>
            </>
          )}
          <span> </span>
          <span className="end-date">{moment(end).format('MMM')}</span>
          <span> </span>
          <span className="end-date">{moment(end).format('YYYY')}</span>
        </>
      );
      // Same year
    } else if (datesInfo.sameYear) {
      return (
        <>
          {start_label || 'from'}&nbsp;
          <span className="start-date">{moment(start).format('DD MMM')}</span>
          {!whole_day && show_time && (
            <>
              <span> </span>
              <span className="start-time">{datesInfo.startTime}</span>
            </>
          )}
          &nbsp;{end_label || 'to'}&nbsp;
          <span className="end-date">{moment(end).format('DD MMM')}</span>
          {!whole_day && show_time && (
            <>
              <span> </span>
              <span className="start-time">{datesInfo.endTime}</span>
            </>
          )}
          <span> </span>
          <span className="end-date">{moment(end).format('YYYY')}</span>
        </>
      );
      // different dates
    } else {
      return (
        <>
          {start_label || 'from'}&nbsp;
          <span className="start d-inline-flex">
            <span className="start-date">{datesInfo.startDate}</span>
            {!whole_day && show_time && (
              <>
                {/* Plone has an optional word based on locale here */}
                <span> </span>
                <span className="start-time">{datesInfo.startTime}</span>
              </>
            )}
          </span>
          {!open_end && (
            <>
              &nbsp;{end_label || 'to'}&nbsp;
              <span className="end d-inline-flex">
                <span className="end-date">{datesInfo.endDate}</span>
                {!whole_day && show_time && (
                  <>
                    {/* Plone has an optional word based on locale here */}
                    <span> </span>
                    <span className="end-time">{datesInfo.endTime}</span>
                  </>
                )}
              </span>
            </>
          )}
        </>
      );
    }
  };

  return (
    <span
      className={cx('event-when', {
        'same-day': datesInfo.sameDay,
        'same-time': datesInfo.sameTime,
        'whole-day': whole_day,
        'open-end': open_end,
      })}
    >
      {getDate()}
    </span>
  );
};

When.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
  whole_day: PropTypes.bool,
  open_end: PropTypes.bool,
};

const _Recurrence = ({ recurrence, start, rrule }) => {
  const intl = useIntl();
  moment.locale(intl.locale);
  const rrulestr = rrule.rrulestr;
  const RRule = rrule.RRule;

  if (recurrence.indexOf('DTSTART') < 0) {
    var dtstart = RRule.optionsToString({
      dtstart: new Date(start),
    });
    recurrence = dtstart + '\n' + recurrence;
  }
  const rule = rrulestr(recurrence, { unfold: true, forceset: true });

  return (
    <List
      items={rule
        .all()
        .map((date) => datesForDisplay(date, null, null, null, null, null))
        .map((date) => date.startDate)}
    />
  );
};
export const Recurrence = injectLazyLibs(['moment', 'rrule'])(_Recurrence);

Recurrence.propTypes = {
  recurrence: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
};
