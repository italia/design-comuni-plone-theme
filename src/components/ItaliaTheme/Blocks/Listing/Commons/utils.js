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

export const visibleSlideTitle = (selector) => {
  // Needed to deal with react-slick duplicating a lot of slides
  // when used in infinite mode. It's an useless and counterproductive
  // thing to do on their part, there are multiple issues opened.
  // The lib is not actually mantained so...
  return Array.from(document.querySelectorAll(selector)).find((e) => {
    const rect = e.getBoundingClientRect();
    return rect.left >= 0 && rect.right <= window.innerWidth;
  });
};
export const focusNext = (currentSlide) => {
  // Custom handling of focus as per Arter a11y audit and request
  const link = visibleSlideTitle(`a.slide-link[data-slide="${currentSlide}"]`);
  if (!link || document.activeElement === link) return;
  // eslint-disable-next-line no-unused-expressions
  link.focus();
};
