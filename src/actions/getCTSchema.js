export const GET_CT_SCHEMA = 'GET_CT_SCHEMA';

export function getCTSchema(type, url) {
  url = typeof url !== 'undefined' ? url : '';
  return {
    type: GET_CT_SCHEMA,
    subrequest: type,
    request: {
      op: 'get',
      path: `${url}/@types/${type}`,
    },
  };
}
