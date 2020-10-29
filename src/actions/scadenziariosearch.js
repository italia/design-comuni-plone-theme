import { settings } from '~/config';

export const GET_SCADENZIARIO_RESULTS = 'GET_SCADENZIARIO_RESULTS';

/**
 * Get querystring results.
 * @function getQueryStringResults
 * @param {Object} data Data.
 * @returns {Object} Get querystringsearch results action.
 */
export function getScadenziarioResults(path, data, subrequest, page) {
  // fixes https://github.com/plone/volto/issues/1059
  return {
    type: GET_SCADENZIARIO_RESULTS,
    subrequest,
    request: {
      op: 'post',
      path: `${path}/@scadenziario`,
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
