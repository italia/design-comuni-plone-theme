import moment from 'moment/min/moment-with-locales';

export const viewDate = (locale, value, format) => {
  //  Used to set a server timezone or UTC as default
  moment.updateLocale(locale, moment.localeData(locale)._config); // copy locale to moment-timezone
  let datetime = null;

  if (value) {
    // check if datetime has timezone, otherwise assumes it's UTC
    datetime = value.match(/T(.)*(-|\+|Z)/g)
      ? // Since we assume UTC everywhere, then transform to local (momentjs default)
        moment(value)
      : value.match(/T(.)/g)
      ? moment(`${value}Z`) // This might happen in old Plone versions dates
      : moment(value); //This when date is like '2021-05-05'
  }

  if (format && datetime) {
    return datetime.format(format);
  }
  return datetime;
};
