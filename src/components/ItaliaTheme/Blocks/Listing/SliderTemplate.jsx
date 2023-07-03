import 'slick-carousel/slick/slick.css';
import 'design-comuni-plone-theme/components/slick-carousel/slick/slick-theme.css';

import { Col, Container, Row } from 'design-react-kit/dist/design-react-kit';
import {
  Icon,
  ListingImage,
  ListingLinkMore,
  NextArrow,
  PrevArrow,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
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
});

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
  const slider = useRef(null);
  const [userAutoplay, setUserAutoplay] = useState(autoplay);
  const nSlidesToShow = parseInt(slidesToShow);
  const Slider = reactSlick.default;

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
                  >
                    <div className="slide-wrapper">
                      {image ? (
                        <figure className="img-wrapper">{image}</figure>
                      ) : (
                        <div className="img-placeholder"></div>
                      )}
                      {show_image_title && (
                        <UniversalLink
                          item={item}
                          title={intl.formatMessage(messages.viewImage)}
                        >
                          <div className="slide-title">
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
                          </div>
                        </UniversalLink>
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
