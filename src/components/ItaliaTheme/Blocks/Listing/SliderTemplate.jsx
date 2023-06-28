import 'slick-carousel/slick/slick.css';
import 'design-comuni-plone-theme/components/slick-carousel/slick/slick-theme.css';
import { Col, Container, Row } from 'design-react-kit';
import {
  Icon,
  ListingImage,
  ListingLinkMore,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  focusNext,
  visibleSlideTitle,
} from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/utils';
import React, { useRef, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { UniversalLink } from '@plone/volto/components';
import cx from 'classnames';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

const messages = defineMessages({
  viewImage: {
    id: "Vedi l'immagine",
    defaultMessage: "Vedi l'immagine",
  },
  play: {
    id: 'Play slider',
    defaultMessage: 'Play',
  },
  pause: {
    id: 'Pause slider',
    defaultMessage: 'Metti in pausa',
  },
  precedente: {
    id: 'precedente',
    defaultMessage: 'Precedente',
  },
  successivo: {
    id: 'successivo',
    defaultMessage: 'Successivo',
  },
  dots: {
    id: 'dots',
    defaultMessage: 'Navigazione elementi slider',
  },
  slideDot: {
    id: 'slideDot',
    defaultMessage: 'Vai alla slide {index}',
  },
});

function NextArrow(props) {
  // Custom handling of focus as per Arter a11y audit and request
  const { className, style, onClick, currentSlide, intl } = props;
  const handleClick = (options) => {
    onClick(options, false);
  };

  const handleKeyDown = async (event) => {
    // Tab n/p
    if (event.key === 'Tab' && event.shiftKey) {
      event.preventDefault();
      event.stopPropagation();
      focusNext(currentSlide);
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      await onClick(event);
    }
  };
  return (
    <button
      className={className}
      style={{ ...style }}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      title={intl.formatMessage(messages.successivo)}
      aria-label={intl.formatMessage(messages.successivo)}
    >
      <Icon icon="chevron-right" key="chevron-right" />
      <span class="sr-only">{intl.formatMessage(messages.successivo)}</span>
    </button>
  );
}

function PrevArrow(props) {
  // Custom handling of focus as per Arter a11y audit and request
  const { className, style, onClick, currentSlide, intl } = props;

  const handleKeyDown = async (event) => {
    // Tab n/p
    if (event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault();
      event.stopPropagation();
      focusNext(currentSlide);
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      await onClick(event);
    }
  };
  return (
    <button
      className={className}
      style={{ ...style }}
      onClick={onClick}
      tabIndex={0}
      title={intl.formatMessage(messages.precedente)}
      aria-label={intl.formatMessage(messages.precedente)}
      onKeyDown={handleKeyDown}
    >
      <Icon icon="chevron-left" key="chevron-left-prev" />
      <span class="sr-only">{intl.formatMessage(messages.precedente)}</span>
    </button>
  );
}

const SliderTemplate = ({
  items,
  title,
  isEditMode,
  show_block_bg,
  linkTitle,
  linkHref,
  slidesToShow = '1',
  full_width = false,
  show_image_title = true,
  show_dots = true,
  autoplay = false,
  autoplay_speed = 2, //seconds
  reactSlick,
}) => {
  const intl = useIntl();
  const [userAutoplay, setUserAutoplay] = useState(autoplay);
  const nSlidesToShow = parseInt(slidesToShow);
  const Slider = reactSlick.default;
  const slider = useRef(null);

  const toggleAutoplay = () => {
    if (!slider?.current) return;
    if (userAutoplay) {
      setUserAutoplay(false);
      slider.current.slickPause();
    } else {
      setUserAutoplay(true);
      slider.current.slickPlay();
    }
  };

  const handleKeyDown = (event) => {
    // Tab n/p
    // Custom handling of focus as per Arter a11y audit and request
    if (event.key === 'Tab') {
      event.preventDefault();
      event.stopPropagation();
      const currentSlide = parseInt(event.target.dataset.slide);
      if (event.shiftKey) {
        if (
          nSlidesToShow > 1 &&
          visibleSlideTitle(`a.slide-link[data-slide="${currentSlide - 1}"]`)
        ) {
          focusNext(currentSlide - 1);
        } else {
          const prevArrow = document.querySelector('.slick-arrow.slick-prev');
          prevArrow.focus();
        }
      } else {
        if (
          nSlidesToShow > 1 &&
          visibleSlideTitle(`a.slide-link[data-slide="${currentSlide + 1}"]`)
        ) {
          focusNext(currentSlide + 1);
        } else {
          const nextArrow = document.querySelector('.slick-arrow.slick-next');
          nextArrow.focus();
        }
      }
    }
  };
  const handleDotKeyDown = (event, index, originalOnClick) => {
    // Custom handling of focus as per Arter a11y audit and request
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.stopPropagation();
      originalOnClick(event);
    }
  };

  const renderCustomDots = (props) => {
    // Custom handling of focus as per Arter a11y audit and request
    return (
      <ul
        className="slick-dots"
        aria-label={intl.formatMessage(messages.dots)}
        title={intl.formatMessage(messages.dots)}
      >
        {props.map((item, index) => {
          const El = item.type;
          const children = item.props.children;
          // Justified assumption: children is an Object and not an Array here
          const Child =
            children.type ||
            function () {
              return null;
            };
          return (
            <El
              className={`${item.props.className} slick-dot`}
              tabIndex={0}
              title={intl.formatMessage(messages.slideDot, {
                index: index + 1,
              })}
              onKeyDown={(event) =>
                handleDotKeyDown(event, index, children.props.onClick)
              }
            >
              <Child
                {...children.props}
                tabIndex={-1}
                style={{ padding: 0 }}
                title={intl.formatMessage(messages.slideDot, {
                  index: index + 1,
                })}
                aria-label={intl.formatMessage(messages.slideDot, {
                  index: index + 1,
                })}
              />
            </El>
          );
        })}
      </ul>
    );
  };

  const settings = {
    dots: show_dots,
    infinite: true,
    autoplay: autoplay,
    speed: 500,
    slidesToShow: nSlidesToShow,
    slidesToScroll: nSlidesToShow,
    autoplaySpeed: autoplay_speed * 1000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    swipe: true,
    swipeToSlide: true,
    focusOnSelect: true,
    draggable: true,
    accessibility: true,
    // Custom handling of focus as per Arter a11y audit and request
    nextArrow: <NextArrow intl={intl} />,
    prevArrow: <PrevArrow intl={intl} />,
    appendDots: renderCustomDots,
    //
    afterChange: focusNext,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  //const getCaption = (item) => item.description ?? item.rights ?? null;
  return (
    <div
      className={cx(`sliderTemplate slidesToShow-${nSlidesToShow || 1}`, {
        'no-margin': full_width,
      })}
    >
      <Container className="px-4">
        {title && (
          <Row>
            <Col>
              <h2 className="mb-4">{title}</h2>
            </Col>
          </Row>
        )}
        <div
          className={cx('slider-container', {
            'px-4 px-md-0': !full_width,
            'full-width': full_width,
          })}
        >
          <div className="it-carousel-all it-card-bg">
            {items?.length > nSlidesToShow && (
              <div className="play-pause-wrapper">
                <button
                  onClick={() => toggleAutoplay()}
                  title={
                    userAutoplay
                      ? intl.formatMessage(messages.pause)
                      : intl.formatMessage(messages.play)
                  }
                >
                  <Icon
                    key={userAutoplay ? 'pause' : 'play'}
                    icon={userAutoplay ? 'pause' : 'play'}
                  />
                  <span>{userAutoplay ? 'pause' : 'play'}</span>
                </button>
              </div>
            )}

            <Slider {...settings} ref={slider}>
              {items.map((item, index) => {
                const image = ListingImage({
                  item,
                  loading: index === 0 ? 'eager' : 'lazy',
                  maxSize: 1600,
                  critical: true,
                });
                //if (!image) return null;
                return (
                  <div
                    className="it-single-slide-wrapper"
                    key={item['@id'] + index}
                    data-slide={index}
                  >
                    <div className="slide-wrapper">
                      {image ? (
                        <figure className="img-wrapper">{image}</figure>
                      ) : (
                        <div className="img-placeholder"></div>
                      )}
                      {show_image_title && (
                        <div className="slide-title">
                          <UniversalLink
                            item={item}
                            title={intl.formatMessage(messages.viewImage)}
                            tabIndex={0}
                            onKeyDown={handleKeyDown}
                            className="slide-link"
                            data-slide={index}
                          >
                            {full_width ? (
                              <Container>
                                {item.title}{' '}
                                <Icon icon="arrow-right" key="arrow-right-fw" />
                              </Container>
                            ) : (
                              <>
                                {item.title}{' '}
                                <Icon icon="arrow-right" key="arrow-right" />
                              </>
                            )}
                          </UniversalLink>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <ListingLinkMore title={linkTitle} href={linkHref} className="my-4" />
      </Container>
    </div>
  );
};

SliderTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default injectLazyLibs(['reactSlick'])(SliderTemplate);
