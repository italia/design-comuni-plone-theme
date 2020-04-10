import mapValues from 'lodash/mapValues';

const defaultOptions = {
  activeContent: false,
  dateStart: undefined,
  dateEnd: undefined,
};

// A group is checked if at least one filter is checked
const isGroupChecked = group =>
  Object.keys(group).reduce(
    (checked, filterId) => checked || group[filterId].value,
    false,
  );

// A group is indeterminate if at least one of its filters is checked, but not all of them
const isGroupIndeterminate = (group, groupIsChecked) =>
  groupIsChecked &&
  Object.keys(group).reduce(
    (indet, filterId) => indet || !group[filterId].value,
    false,
  );

// Given a filters group, set all filters to the given state
const updateGroupCheckedStatus = (group, checked) =>
  mapValues(group, filter => ({
    ...filter,
    value: checked,
  }));

export default {
  defaultOptions,
  isGroupChecked,
  isGroupIndeterminate,
  updateGroupCheckedStatus,
};
