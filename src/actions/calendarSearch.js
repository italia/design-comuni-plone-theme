import config from '@plone/volto/registry';

export const GET_CALENDAR_RESULTS = 'GET_CALENDAR_RESULTS';

/**
 * Get querystring results.
 * @function getQueryStringResults
 * @param {Object} data Data.
 * @returns {Object} Get querystringsearch results action.
 */
export function getCalendarResults(path, data, subrequest, page) {
  // fixes https://github.com/plone/volto/issues/1059
  return {
    type: GET_CALENDAR_RESULTS,
    subrequest,
    request: {
      op: 'post',
      path: `${path}/@scadenziario`,
      data: {
        ...data,
        ...(!data.b_size && {
          b_size: config.settings.defaultPageSize,
        }),
        ...(page && {
          b_start: data.b_size
            ? data.b_size * (page - 1)
            : config.settings.defaultPageSize * (page - 1),
        }),
        query: data?.query,
      },
    },
  };
}
