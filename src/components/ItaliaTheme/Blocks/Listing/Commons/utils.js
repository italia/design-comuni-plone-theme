import { useState, useEffect, useRef } from 'react';

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

export const useSlider = () => {
  const slider = useRef(null);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const focusNext = (currentSlide) => {
    if (!isSliderVisible) return;
    // Custom handling of focus as per Arter a11y audit and request
    const link = visibleSlideTitle(
      `a.slide-link[data-slide="${currentSlide}"]`,
    );
    if (!link || document.activeElement === link) return;
    // eslint-disable-next-line no-unused-expressions
    link.focus();
  };
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1, // 100% visibility threshold?
    };
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsSliderVisible(entry.isIntersecting);
    }, observerOptions);

    const sliderElement = slider.current && slider.current.innerSlider.list;

    if (sliderElement instanceof Element) {
      observer.observe(sliderElement);
    }

    return () => {
      if (sliderElement instanceof Element) {
        observer.unobserve(sliderElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slider.current]);

  return {
    slider,
    focusNext,
  };
};
