export const getCategory = (item, show_type, show_section, props) => {
  let cat = [];

  if (item) {
    if (show_section) {
      cat.push(item.parent?.title);
    }
    if (show_type) {
      cat.push(item.design_italia_meta_type);
    }
  }

  if (cat.length > 0) {
    return cat.join(' - ');
  }
  return null;
};
