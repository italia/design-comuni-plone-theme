import moment from 'moment';
export const getViewDate = (date, locale) => {
  if (locale) {
    moment.locale(locale);
  }

  let d = date;

  try {
    let m = moment(date);
    if (m.isValid()) {
      d = m.format('DD-MMM-Y');
    } else {
    }
  } catch (e) {}

  return d;
};
