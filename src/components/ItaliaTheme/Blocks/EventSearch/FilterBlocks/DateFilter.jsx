import React, { useState } from 'react'
import { useIntl, defineMessages } from 'react-intl';
import { DateRangePicker } from 'react-dates';
import moment from 'moment/min/moment-with-locales';
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

const DateFilter = ({value, filter, onChange}) => {
  const intl = useIntl();
  const [focusedDateInput, setFocusedDateInput] = useState(null);

	let isMobile = false;
	if (__CLIENT__) isMobile = window && window.innerWidth < 992;

	return (
		<div className="mr-3 my-1">
			<DateRangePicker 
				startDate={value?.startDate || moment().startOf('day')}
				startDateId="start-date-filter"
				startDatePlaceholderText={intl.formatMessage(
					messages.eventSearchStartDate,
				)}
				endDate={value?.endDate || moment().endOf('day')}
				endDateId="end-date-filter"
				endDatePlaceholderText={intl.formatMessage(
					messages.eventSearchEndDate,
				)}
				onDatesChange={({ startDate, endDate }) =>
					onChange(startDate, endDate, filter)
				}
				showClearDates
				numberOfMonths={isMobile ? 1 : 2}
				minimumNights={0}
				focusedInput={focusedDateInput}
				onFocusChange={(focusedInput) => setFocusedDateInput(focusedInput)}
				displayFormat="DD/MM/YYYY"
			/>
		</div>
	);
}

export default DateFilter;