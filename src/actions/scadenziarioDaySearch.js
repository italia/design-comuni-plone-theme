import { settings } from '~/config';

export const GET_SCADENZIARIO_DAY_RESULTS = 'GET_SCADENZIARIO_DAY_RESULTS';

/**
 * Get querystring results.
 * @function getQueryStringResults
 * @param {Object} data Data.
 * @returns {Object} Get querystringsearch results action.
 */
export function getScadenziarioDayResults(path, data, subrequest, page) {
  return {
    type: GET_SCADENZIARIO_DAY_RESULTS,
    subrequest,
    request: {
      op: 'post',
      path: `${path}/@scadenziario-day`,
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
