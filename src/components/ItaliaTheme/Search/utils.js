import mapValues from 'lodash/mapValues';
import moment from 'moment';
import qs from 'query-string';

const defaultOptions = {
  activeContent: false,
  dateStart: undefined,
  dateEnd: undefined,
};

// A group is checked if at least one filter is checked
const isGroupChecked = (group) =>
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
  mapValues(group, (filter) => ({
    ...filter,
    value: checked,
  }));

const parseFetchedSections = (sections, location) => {
  const qsSections = qs.parse(location?.search ?? '')['path.query'] ?? [];

  return Object.keys(sections).reduce((acc, sec) => {
    acc[sec] = sections[sec].items.reduce((itemsAcc, subSec) => {
      itemsAcc[subSec.path] = {
        value: qsSections.indexOf(subSec.path) > -1,
        label: subSec.title,
      };

      return itemsAcc;
    }, {});

    return acc;
  }, {});
};

const parseFetchedTopics = (topics, location) => {
  const qsTopics = qs.parse(location?.search ?? '')?.Subject ?? [];

  return topics.reduce((acc, topic) => {
    acc[topic.path] = {
      value: qsTopics.indexOf(topic.title) > -1,
      label: topic.title,
    };

    return acc;
  }, {});
};

const parseFetchedOptions = (options, location) => {
  const qsOptions = qs.parse(location?.search ?? '');
  const opts = JSON.parse(JSON.stringify(options));

  if (
    qsOptions['effective.range'] &&
    qsOptions['effective.range'] === 'min:max'
  ) {
    opts.dateStart = qsOptions['effective.query:list:date'][0] ?? null;
    opts.dateEnd = qsOptions['effective.query:list:date'][1] ?? null;
  } else if (
    qsOptions['effective.range'] &&
    qsOptions['effective.range'] === 'min'
  ) {
    opts.dateStart = qsOptions['effective.query:list:date'] ?? null;
  } else if (
    qsOptions['effective.range'] &&
    qsOptions['effective.range'] === 'max'
  ) {
    opts.dateEnd = qsOptions['effective.query:list:date'] ?? null;
  }

  if (
    qsOptions['expires.range'] &&
    qsOptions['expires.range'] === 'min' &&
    qsOptions['expires.query:list:date']
  ) {
    opts.activeContent = true;
  }

  return opts;
};

const parseCustomPath = (location) => {
  const qsOptions = qs.parse(location?.search ?? '');
  const customPath = null;
  if (qsOptions['custom_path']) {
    customPath = qsOptions['custom_path'];
  }
  return customPath;
};

const getSearchParamsURL = (
  searchableText,
  sections,
  topics,
  options,
  sortOn = {},
  currentPage,
  customPath,
) => {
  const activeSections = Object.keys(sections).reduce((secAcc, secKey) => {
    const sec = Object.keys(sections[secKey]).reduce((acc, section) => {
      if (sections[secKey][section].value) return [...acc, section];
      return acc;
    }, []);

    if (sec?.length > 0) return [...secAcc, ...sec];
    return secAcc;
  }, []);

  const activeTopics = Object.keys(topics).reduce((acc, topic) => {
    if (topics[topic].value) return [...acc, topics[topic].label];
    return acc;
  }, []);

  const optionsQuery = {};
  if (options.activeContent) {
    optionsQuery['expires.range'] = 'min';
    optionsQuery['expires.query:list:date'] = moment().format('YYYY/MM/DD');
  }
  if (options.dateStart && options.dateEnd) {
    optionsQuery['effective.range'] = 'min:max';
    optionsQuery['effective.query:list:date'] = [
      options.dateStart,
      options.dateEnd,
    ];
  } else if (options.dateStart && !options.dateEnd) {
    optionsQuery['effective.range'] = 'min';
    optionsQuery['effective.query:list:date'] = options.dateStart;
  } else if (!options.dateStart && options.dateEnd) {
    optionsQuery['effective.range'] = 'max';
    optionsQuery['effective.query:list:date'] = options.dateEnd;
  }

  return (
    '/search?' +
    qs.stringify(
      {
        SearchableText: searchableText,
        'path.query': activeSections.length > 0 ? activeSections : customPath,
        Subject: activeTopics,
        ...optionsQuery,
        ...sortOn,
      },
      { skipNull: true },
    ) +
    (currentPage && currentPage > 0 ? `&b_start=${currentPage}` : '')
  );
};

export default {
  defaultOptions,
  isGroupChecked,
  isGroupIndeterminate,
  updateGroupCheckedStatus,
  parseFetchedSections,
  parseFetchedTopics,
  parseFetchedOptions,
  getSearchParamsURL,
};
