import { useRef, useEffect } from 'react';
import {
  NextArrow,
  PrevArrow,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

export const useSlider = (userAutoplay, setUserAutoplay, block_id) => {
  const slider = useRef(null);
  const sliderContainer = document.getElementById('outside-slider-' + block_id);
  const sliderElementSelector = `#slider_${block_id}`;
  const sliderElement = document.querySelector(sliderElementSelector);
  const onIntersection = (entries, opt) => {
    entries.forEach((entry) =>
      entry.target.classList.toggle('visible', entry.isIntersecting),
    );
  };
  const observer = new IntersectionObserver(onIntersection, {
    root: null,
    threshold: 0.5,
  });

  const setAutoplay = (a) => {
    setUserAutoplay(a);
    slider.current.slickPause(a);
  };

  if (sliderContainer) observer.observe(sliderContainer);
  useEffect(() => {
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const focusSlide = (slideIndex) => {
    if (!sliderElement) return;
    const sliderIsVisible = sliderContainer?.classList?.contains('visible');

    if (!sliderIsVisible) {
      setAutoplay(false);
      return;
    }

    const slide = document.querySelector(
      `${sliderElementSelector} .slick-slide[data-index="${slideIndex}"] .it-single-slide-wrapper`,
    );

    if (userAutoplay && !slide) return;

    if (!slide || document.activeElement === slide) {
      return;
    }

    //se c'è l'autoplay e non ho il focus sullo, non faccio il focus sulle slide per non perdere il focus sull'elemento della pagina su cui sono e che sta fuori dallo slider.
    const focusedSliderElement = Array.from(
      document.querySelectorAll(sliderElementSelector),
    ).some((node) => node.contains(document.activeElement));

    if (focusedSliderElement) {
      slide.focus();
    }
  };

  const visibleSlide = (selector) => {
    // Needed to deal with react-slick duplicating a lot of slides
    // when used in infinite mode. It's an useless and counterproductive
    // thing to do on their part, there are multiple issues opened.
    // The lib is not actually mantained so...

    return Array.from(document.querySelectorAll(selector)).find((e) => {
      const slick_slide = e.closest('.slick-slide');
      return !slick_slide.classList.contains('slick-cloned');
    });
  };

  const SliderNextArrow = (props) => {
    // Custom handling of focus for a11y
    const { className, style, onClick, currentSlide } = props;
    const handleClick = (options) => {
      onClick(options, false);
    };
    const handleKeyboardUsers = (e) => {
      if (e.key === 'Tab' && e.shiftKey) {
        e.stopPropagation();
        e.preventDefault();
        setAutoplay(false);
        const slide = visibleSlide(
          `${sliderElementSelector} .slick-slide[data-index="${currentSlide}"]`,
        );
        slide && slide.focus();
      }
    };

    return (
      <NextArrow
        className={className}
        style={{ ...style }}
        onClick={handleClick}
        onKeyDown={handleKeyboardUsers}
        id={'sliderNextArrow_' + block_id}
      />
    );
  };

  const SliderPrevArrow = (props) => {
    // Custom handling of focus for a11y
    const { className, style, onClick, currentSlide, slideCount } = props;
    const handleClick = (options) => {
      onClick(options, false);
    };
    const handleKeyboardUsers = (e) => {
      if (e.key === 'Tab' && !e.shiftKey) {
        e.stopPropagation();
        e.preventDefault();

        setAutoplay(false);

        if (currentSlide < slideCount) {
          const slide = visibleSlide(
            `${sliderElementSelector} .slick-slide[data-index="${currentSlide}"]`,
          );

          slide && slide.focus();
        }
      }
    };
    return (
      <PrevArrow
        className={className}
        style={{ ...style }}
        onClick={handleClick}
        onKeyDown={handleKeyboardUsers}
        id={'sliderPrevArrow_' + block_id}
      />
    );
  };

  const handleSlideKeydown = (index, prevIndex, nextIndex) => (e) => {
    const { key, shiftKey } = e;

    setAutoplay(false);

    if (key === 'Tab') {
      const slide_selector = `#slider_${block_id} .slick-slide[data-index="${index}"]`;

      const focusableSlideElements = document.querySelectorAll(
        `${slide_selector} a, ${slide_selector} button, ${slide_selector} [tabindex="0"]`,
      );
      const isFirstSlideFocusableElement =
        e.target === focusableSlideElements[0];
      const isLastSlideFocusableElement =
        e.target === focusableSlideElements[focusableSlideElements.length - 1];

      if (
        (isFirstSlideFocusableElement && shiftKey) ||
        (isLastSlideFocusableElement && !shiftKey)
      ) {
        e.preventDefault();
        e.stopPropagation();
        //shift+tab ed è il primo elemento focusabile nella slide, oppure tab ed è l'ultimo elemento focusabile nella slide
        //go to next/prev slide or to next/prev button.
      } else {
        return; //continue doing default bhv of Tab key, to focus next focusable element inside slide.
      }

      if (shiftKey) {
        if (prevIndex != null) {
          slider.current.slickGoTo(prevIndex);
        } else {
          document.getElementById('sliderPrevArrow_' + block_id).focus();
        }
      } else {
        if (nextIndex != null) {
          slider.current.slickGoTo(nextIndex);
        } else {
          document.getElementById('sliderNextArrow_' + block_id).focus();
        }
      }
    }

    if (key === 'ArrowRight') {
      if (nextIndex != null) {
        e.preventDefault();
        e.stopPropagation();
        slider.current.slickGoTo(nextIndex);
      }
    }
    if (key === 'ArrowLeft') {
      if (prevIndex != null) {
        e.preventDefault();
        e.stopPropagation();
        slider.current.slickGoTo(prevIndex);
      }
    }
  };

  return {
    slider,
    focusSlide,
    visibleSlide,
    SliderNextArrow,
    SliderPrevArrow,
    handleSlideKeydown,
  };
};
