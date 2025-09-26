export const GET_CONTACTS = 'GET_CONTACTS';

export function getContacts(url) {
  url = typeof url !== 'undefined' ? url : null;

  return {
    type: GET_CONTACTS,
    request: {
      op: 'get',
      path: `${url}/@contacts-block`,
    },
  };
}
