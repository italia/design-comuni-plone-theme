export const getViewDate = (date, moment) => {
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
