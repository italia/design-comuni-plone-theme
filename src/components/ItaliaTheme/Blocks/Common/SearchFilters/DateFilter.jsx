import React, { useState, useEffect } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { DateRangePicker } from 'react-dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const messages = defineMessages({
  eventSearchStartDate: {
    id: 'search_startDate',
    defaultMessage: 'Data inizio',
  },
  eventSearchEndDate: {
    id: 'search_endDate',
    defaultMessage: 'Data fine',
  },
});

const DateFilter = (props) => {
  const intl = useIntl();
  const [focusedDateInput, setFocusedDateInput] = useState(null);
  const { value, id, onChange } = props;

  let isMobile = false;
  if (__CLIENT__) isMobile = window && window.innerWidth < 992;

  useEffect(() => {
    let startDateInput = document.getElementById('start-date-filter');

    if (startDateInput) {
      let removeStartDateListener = startDateInput.addEventListener(
        'keydown',
        (e) => {
          if (e.key === 'Tab' && e.shiftKey) setFocusedDateInput(null);
        },
      );

      if (removeStartDateListener) return () => removeStartDateListener();
    }
  }, []);

  useEffect(() => {
    let endDateInput = document.getElementById('end-date-filter');

    if (endDateInput) {
      let removeEndDateListener = endDateInput.addEventListener(
        'keydown',
        (e) => {
          if (e.key === 'Tab' && !e.shiftKey) setFocusedDateInput(null);
        },
      );

      if (removeEndDateListener) return () => removeEndDateListener();
    }
  }, []);

  return (
    <div className="mr-lg-3 my-2 my-lg-1 filter-wrapper date-filter">
      <DateRangePicker
        {...props}
        startDate={value?.startDate || props.defaultStart}
        startDateId="start-date-filter"
        startDatePlaceholderText={
          props.startLabel ?? intl.formatMessage(messages.eventSearchStartDate)
        }
        endDate={value?.endDate || props.defaultEnd}
        endDateId="end-date-filter"
        endDatePlaceholderText={
          props.endLabel ?? intl.formatMessage(messages.eventSearchEndDate)
        }
        onDatesChange={({ startDate, endDate }) => {
          let start = startDate || props.defaultStart;
          let end = endDate || props.defaultEnd;
          onChange(id, { start, end });
        }}
        noBorder={true}
        numberOfMonths={isMobile ? 1 : 2}
        minimumNights={0}
        focusedInput={focusedDateInput}
        onFocusChange={(focusedInput) => setFocusedDateInput(focusedInput)}
        displayFormat="DD/MM/YYYY"
        hideKeyboardShortcutsPanel={true}
        showClearDates
      />
    </div>
  );
};

export default DateFilter;
