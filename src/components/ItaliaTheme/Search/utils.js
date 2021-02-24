import mapValues from 'lodash/mapValues';
import moment from 'moment';
import qs from 'query-string';
import { flattenToAppURL } from '@plone/volto/helpers';

const defaultOptions = {
  activeContent: false,
  dateStart: undefined,
  dateEnd: undefined,
};

// A group is checked if at least one filter is checked
const isGroupChecked = (group) => {
  return Object.keys(group.items || {}).reduce(
    (checked, filterId) => checked || group.items[filterId].value,
    false,
  );
};

// A group is indeterminate if at least one of its filters is checked, but not all of them
const isGroupIndeterminate = (group, groupIsChecked) =>
  groupIsChecked &&
  Object.keys(group.items).reduce(
    (indet, filterId) => indet || !group.items[filterId].value,
    false,
  );

// Given a filters group, set all filters to the given state
const updateGroupCheckedStatus = (group, checked) =>
  mapValues(group.items, (filter) => ({
    ...filter,
    value: checked,
  }));

const setSectionFilterChecked = (groupId, filterId, checked, setSections) => {
  setSections((prevSections) => ({
    ...prevSections,
    [groupId]: {
      ...prevSections[groupId],
      items: {
        ...prevSections[groupId].items,
        [filterId]: {
          ...prevSections[groupId].items[filterId],
          value: checked,
        },
      },
    },
  }));
};

const setGroupChecked = (groupId, checked, setSections) => {
  setSections((prevSections) => ({
    ...prevSections,
    [groupId]: {
      ...prevSections[groupId],
      items: updateGroupCheckedStatus(prevSections[groupId], checked),
    },
  }));
};

const parseFetchedSections = (fetchedSections, location) => {
  const qsSections = qs.parse(location?.search ?? '')['path.query'] ?? [];

  const pathname = location?.pathname?.length ? location.pathname : '/';
  const sectionsConfig = fetchedSections?.filter((rootConfig) =>
    pathname.match(new RegExp(rootConfig.rootPath)),
  );

  const sections =
    sectionsConfig.length > 0 ? sectionsConfig[0].items || [] : [];

  return Object.keys(sections).reduce((acc, sec) => {
    let id = sections[sec].id;
    let sectionItems = sections[sec].items;
    acc[id] = {
      path: flattenToAppURL(sections[sec]['@id']),
      title: sections[sec].title,
      items:
        sectionItems &&
        sectionItems.reduce((itemsAcc, subSec) => {
          let subSectionUrl = flattenToAppURL(subSec['@id']);
          itemsAcc[subSectionUrl] = {
            value: qsSections.indexOf(subSectionUrl) > -1,
            label: subSec.title,
          };

          return itemsAcc;
        }, {}),
    };

    return acc;
  }, {});
};

const parseFetchedTopics = (topics, location) => {
  const qsTopics = qs.parse(location?.search ?? '')?.tassonomia_argomenti ?? [];

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

// const parseCustomPath = (location) => {
//   const qsOptions = qs.parse(location?.search ?? '');
//   const customPath = null;
//   if (qsOptions['custom_path']) {
//     customPath = qsOptions['custom_path'];
//   }
//   return customPath;
// };

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
    const sec =
      sections[secKey].items &&
      Object.keys(sections[secKey].items).reduce((acc, section) => {
        if (sections[secKey].items[section].value) return [...acc, section];
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

  let pathQuery = null;
  if (activeSections.length > 0) {
    pathQuery = { 'path.query': activeSections };
  } else if (customPath?.length > 0) {
    pathQuery = { 'path.query': customPath };
  }

  let text = searchableText ? { SearchableText: searchableText } : null;

  return (
    '/search?' +
    qs.stringify(
      {
        ...(text ?? {}),
        ...(pathQuery ?? {}),
        tassonomia_argomenti: activeTopics,
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
  setSectionFilterChecked,
  setGroupChecked,
};
