export function getItemsByPath(items, pathname) {
  let rootPathConfig = null;
  const itemsByPath = items?.reduce((acc, val) => {
    if (val.rootPath === '/') {
      rootPathConfig = val;
      return acc;
    }
    return { ...acc, [val.rootPath]: val };
  }, {});
  const matchingPaths = Object.keys(itemsByPath)
    .filter((path) => pathname.startsWith(path))
    .sort((a, b) => {
      return a.length < b.length;
    });

  if (matchingPaths.length > 0) return itemsByPath[matchingPaths[0]].items;
  else if (rootPathConfig) return rootPathConfig.items;
  else return [];
}
