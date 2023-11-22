import mapValues from 'lodash/mapValues';
import moment from 'moment';
import qs from 'query-string';
import { flattenToAppURL } from '@plone/volto/helpers';
import config from '@plone/volto/registry';
import { getItemsByPath } from 'design-comuni-plone-theme/helpers';

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

const parseFetchedSections = (fetchedSections, location, subsite) => {
  const qsSections = qs.parse(location?.search ?? '')['path.query'] ?? [];

  const pathname = location?.pathname?.length ? location.pathname : '/';

  const sections = getItemsByPath(fetchedSections, pathname, !subsite);

  return Object.keys(sections).reduce((acc, sec) => {
    let id = sections[sec].id;
    let sectionItems = sections[sec].items;
    if (sectionItems) {
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
    }

    return acc;
  }, {});
};

const parseFetchedTopics = (topics, location) => {
  const qsTopics = qs.parse(location?.search ?? '')?.tassonomia_argomenti ?? [];

  return topics.reduce((acc, topic) => {
    acc[flattenToAppURL(topic['@id'])] = {
      value: qsTopics.indexOf(topic.title) > -1,
      label: topic.title,
    };

    return acc;
  }, {});
};

const parseFetchedPortalTypes = (portalTypes, defaultExcludedCT, location) => {
  const qsCTs = qs.parse(location?.search ?? '')?.['portal_type'] ?? [];

  return portalTypes.reduce((acc, ct) => {
    acc[ct.id] = {
      value: qsCTs.includes(ct.id) || !defaultExcludedCT.includes(ct.id),
      label: ct.label,
      defaultChecked: !defaultExcludedCT.includes(ct.id),
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
//   let customPath = null;
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
  portalTypes,
  sortOn = {},
  currentPage,
  customPath,
  subsite,
  currentLang,
  getObject = false,
) => {
  let baseUrl = subsite
    ? flattenToAppURL(subsite['@id'])
    : config.settings.isMultilingual
      ? '/' + currentLang
      : '';
  const b_start = currentPage
    ? (currentPage - 1) * config.settings.defaultPageSize
    : 0;
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
  } else if (baseUrl?.length > 0) {
    pathQuery = {
      'path.query': baseUrl,
    };
  }

  const activePortalTypes = Object.keys(portalTypes).reduce((acc, ct) => {
    if (portalTypes[ct].value) return [...acc, ct];
    return acc;
  }, []);
  let portal_type =
    activePortalTypes?.length > 0 ? { portal_type: activePortalTypes } : null;

  let text = searchableText ? { SearchableText: searchableText } : null;

  baseUrl += '/search';

  if (getObject) {
    let obj = {
      ...(text ?? {}),
      ...(pathQuery ?? {}),
      tassonomia_argomenti: activeTopics,
      ...optionsQuery,
      ...sortOn,
      ...portal_type,
      skipNull: true,
      b_start: b_start,
      use_site_search_settings: true,
    };

    return obj;
  }

  return (
    baseUrl +
    '?' +
    qs.stringify(
      {
        ...(text ?? {}),
        ...(pathQuery ?? {}),
        tassonomia_argomenti: activeTopics,
        ...optionsQuery,
        ...sortOn,
        ...portal_type,
      },
      { skipNull: true },
    ) +
    (b_start > 0 ? `&b_start=${b_start}` : '')
  );
};

const utils = {
  defaultOptions,
  isGroupChecked,
  isGroupIndeterminate,
  updateGroupCheckedStatus,
  parseFetchedSections,
  parseFetchedTopics,
  parseFetchedPortalTypes,
  parseFetchedOptions,
  getSearchParamsURL,
  setSectionFilterChecked,
  setGroupChecked,
};

export default utils;
