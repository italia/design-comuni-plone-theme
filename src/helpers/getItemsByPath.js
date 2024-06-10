/**
 * Retrieves items based on a given pathname from a list of items with specified root paths.
 *
 * @param {Array} items - An array of objects where each object contains a `rootPath` and `items` property.
 * @param {string} pathname - The pathname to match against the root paths.
 * @param {boolean} [defaultRootPath=true] - A flag to determine if the root path ('/') items should be returned when no match is found.
 * @returns {Array} - The items corresponding to the matched root path or the root path if no match is found and defaultRootPath is true. Returns an empty array if no match is found and defaultRootPath is false.
 *
 * @example
 * // Sample items array
 * const items = [
 *   { rootPath: '/', items: ['homeItem1', 'homeItem2'] },
 *   { rootPath: '/about', items: ['aboutItem1'] },
 *   { rootPath: '/products', items: ['productItem1', 'productItem2'] },
 * ];
 *
 * getItemsByPath(items, '/about'); // returns ['aboutItem1']
 * getItemsByPath(items, '/products/item'); // returns ['productItem1', 'productItem2']
 * getItemsByPath(items, '/contact'); // returns ['homeItem1', 'homeItem2'] assuming defaultRootPath is true
 * getItemsByPath(items, '/contact', false); // returns []
 */

export function getItemsByPath(items, pathname, defaultRootPath = true) {
  let rootPathConfig = null;
  const itemsByPath = items?.reduce((acc, val) => {
    if (val.rootPath === '/') {
      rootPathConfig = val;
      return acc;
    }
    return { ...acc, [val.rootPath]: val };
  }, {});
  const matchingPaths = Object.keys(itemsByPath)
    .filter((path) => pathname === path || pathname.startsWith(`${path}/`))
    .sort((a, b) => {
      if (a.length > b.length) return -1;
      else if (a.length < b.length) return 1;
      else return 0;
    });

  if (matchingPaths.length > 0) return itemsByPath[matchingPaths[0]].items;
  else if (rootPathConfig && defaultRootPath) return rootPathConfig.items;
  else return [];
}
