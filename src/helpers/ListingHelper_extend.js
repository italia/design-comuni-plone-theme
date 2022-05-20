/*
Queto file contiene le estensioni per le funzioni presenti in ListingHelper.js, in modo da poter definire comportamenti diversi nel proprio progetto.
Sovrascrivere questo file nel progetto figlio ed implementare le proprie estensioni.*/

const getCalendarDate_extend = (item, moment) => {
  let date = null;
  return date;
};

const getEventRecurrenceMore_extend = (item, isEditMode) => {
  let ret = null;
  return ret;
};
export { getCalendarDate_extend, getEventRecurrenceMore_extend };
