import { settings } from '~/config';

export const GET_EVENTSEARCH_RESULTS = 'GET_EVENTSEARCH_RESULTS';

/**
 * Get getEventSearch results.
 * @function getEventSearch
 * @param {Object} data Data.
 * @returns {Object} Get getEventSearch results action.
 */
export function getEventSearchResults(path, data, subrequest, page) {
  return {
    type: GET_EVENTSEARCH_RESULTS,
    subrequest,
    request: {
      op: 'post',
      path: `${path}/@events-search`,
      data: {
        ...data,
        ...(!data.b_size && {
          b_size: settings.defaultPageSize,
        }),
        ...(page && {
          b_start: data.b_size
            ? data.b_size * (page - 1)
            : settings.defaultPageSize * (page - 1),
        }),
        query: data?.query,
      },
    },
  };
}
