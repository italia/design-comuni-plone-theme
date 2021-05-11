/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';
import Slider from 'react-slick';
import { UniversalLink } from '@plone/volto/components';
import Image from '@plone/volto/components/theme/Image/Image';
import { Icon } from '@italia/components/ItaliaTheme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const SliderTemplate = ({ items, title, isEditMode, show_block_bg }) => {
  const intl = useIntl();
  const slider = useRef(null);
  const [autoplay, setAutoplay] = useState(false);

  const toggleAutoplay = () => {
    if (!slider?.current) return;
    if (autoplay) {
      setAutoplay(false);
      slider.current.slickPause();
    } else {
      setAutoplay(true);
      slider.current.slickPlay();
    }
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <Icon icon="chevron-right" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style }} onClick={onClick}>
        <Icon icon="chevron-left" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
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
  };

  //const getCaption = (item) => item.description ?? item.rights ?? null;

  return (
    <div className="sliderTemplate">
      <Container className="px-4">
        {title && (
          <Row>
            <Col>
              <h2 className="mb-4">{title}</h2>
            </Col>
          </Row>
        )}
        <div className="slider-container px-4 px-md-0">
          <div className="it-carousel-all it-card-bg">
            <div className="play-pause-wrapper">
              <button
                onClick={() => toggleAutoplay()}
                title={
                  autoplay
                    ? intl.formatMessage(messages.pause)
                    : intl.formatMessage(messages.play)
                }
              >
                <Icon icon={autoplay ? 'pause' : 'play'} />
                <span>{autoplay ? 'pause' : 'play'}</span>
              </button>
            </div>
            <Slider {...settings} ref={slider}>
              {items.map((item) => {
                const image =
                  item.image || item.immagine_testata || item.foto_persona;

                return (
                  <div className="it-single-slide-wrapper" key={item['@id']}>
                    <div className="slide-wrapper">
                      <figure className="img-wrapper">
                        {image && (
                          <Image
                            className="img-fluid"
                            image={image}
                            alt=""
                            aria-hidden="true"
                            loading="eager"
                            useOriginal={false}
                          />
                        )}
                        {/* {getCaption(item) && (
                        <figcaption>{getCaption(item)}</figcaption>
                      )} */}
                      </figure>
                      <UniversalLink
                        item={item}
                        title={intl.formatMessage(messages.viewImage)}
                      >
                        <div className="slide-title">
                          {item.title} <Icon icon="arrow-right" />
                        </div>
                      </UniversalLink>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

SliderTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default SliderTemplate;
