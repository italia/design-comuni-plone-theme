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
    .filter((path) => pathname.startsWith(path))
    .sort((a, b) => {
      if (a.length > b.length) return -1;
      else if (a.length < b.length) return 1;
      else return 0;
    });

  if (matchingPaths.length > 0) return itemsByPath[matchingPaths[0]].items;
  else if (rootPathConfig && defaultRootPath) return rootPathConfig.items;
  else return [];
}
