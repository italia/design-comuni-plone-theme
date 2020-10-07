export const contentFolderHasItems = (content, folder_name) => {
  const has_items =
    content?.items.some((e) => e.id === folder_name) &&
    content?.items.filter((i) => i.id === folder_name)?.[0]?.items_total > 0;
  return has_items;
};
