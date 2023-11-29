import moment from 'moment';
export const viewDate = (locale, value, format) => {
  //  Used to set a server timezone or UTC as default
  moment.updateLocale(locale, moment.localeData(locale)._config); // copy locale to moment-timezone
  let datetime = null;

  if (value) {
    if (typeof value == 'string') {
      // check if datetime has timezone, otherwise assumes it's UTC
      datetime = value.match(/T(.)*(-|\+|Z)/g)
        ? // Since we assume UTC everywhere, then transform to local (momentjs default)
          moment(value)
        : value.match(/T(.)/g)
          ? moment(`${value}Z`) // This might happen in old Plone versions dates
          : moment(value); //This when date is like '2021-05-05'
    } else {
      datetime = moment(value);
    }
  }

  if (format && datetime) {
    return datetime.format(format);
  }
  return datetime;
};

export const getRealStartAndEndWithRecurrence = (
  locale,
  value,
  recurrence,
  rrulestr,
  intl,
) => {
  if (!rrulestr || !recurrence) return null;
  const rruleSet = rrulestr(recurrence, {
    compatible: true,
    forceset: true,
  });
  const recurrenceresults = rruleSet.all();
  return {
    recurrenceStart: viewDate(intl.locale, recurrenceresults?.[0]),
    recurrenceEnd: viewDate(
      intl.locale,
      recurrenceresults?.[recurrenceresults?.length - 1],
    ),
  };
};
