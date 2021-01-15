import React, { useState } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import { DateRangePicker } from 'react-dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const messages = defineMessages({
  eventSearchStartDate: {
    id: 'event_search_startDate',
    defaultMessage: 'Data inizio',
  },
  eventSearchEndDate: {
    id: 'event_search_endDate',
    defaultMessage: 'Data fine',
  },
});

const DateFilter = (props) => {
  const intl = useIntl();
  const [focusedDateInput, setFocusedDateInput] = useState(null);
  const { value, id, onChange } = props;

  let isMobile = false;
  if (__CLIENT__) isMobile = window && window.innerWidth < 992;

  return (
    <div className="mr-lg-3 my-2 my-lg-1 filter-wrapper date-filter">
      <DateRangePicker
        {...props}
        startDate={value?.startDate || props.defaultStart}
        startDateId="start-date-filter"
        startDatePlaceholderText={intl.formatMessage(
          messages.eventSearchStartDate,
        )}
        endDate={value?.endDate || props.defaultEnd}
        endDateId="end-date-filter"
        endDatePlaceholderText={intl.formatMessage(messages.eventSearchEndDate)}
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
      />
    </div>
  );
};

export default DateFilter;
