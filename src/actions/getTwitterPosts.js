/**
 * TwitterPosts action
 * @module src/actions/getTwitterPosts
 *
 * https://github.com/RedTurtle/design.plone.policy/blob/master/README.rst#twitter-feed
 */
export const GET_TWITTER_POSTS = 'GET_TWITTER_POSTS';

/**
 * Get getTwitterPosts filters.
 * @function getTwitterPosts
 * @returns {Object} Get getTwitterPosts filters action.
 */
export function getTwitterPosts(authors) {
  let authors_req = '';
  if (authors?.length > 0) {
    authors_req = authors.join('&authors=');
    authors_req = '?authors=' + authors_req;
  }

  return {
    type: GET_TWITTER_POSTS,
    request: {
      op: 'get',
      path: `/@twitter-feed${authors_req}`,
    },
  };
}
