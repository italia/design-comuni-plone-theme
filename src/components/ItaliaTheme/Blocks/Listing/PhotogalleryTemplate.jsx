import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
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

const PhotogalleryTemplate = ({ items, title, isEditMode, show_block_bg }) => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
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
          </button>
        </div>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  const getCaption = (item) => item.description ?? item.rights ?? null;

  return (
    <div
      className={cx('photogallery', {
        'public-ui': isEditMode,
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
        <div className="slider-container px-4 px-md-0">
          <div className="it-carousel-all it-card-bg">
            <Slider {...settings} ref={slider}>
              {items.map((item) => {
                const image =
                  item.image || item.immagine_testata || item.foto_persona;
                return (
                  <div className="it-single-slide-wrapper" key={item['@id']}>
                    <UniversalLink
                      item={item}
                      openLinkInNewTab={true}
                      title={intl.formatMessage(messages.viewImage)}
                    >
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
                        {getCaption(item) && (
                          <figcaption>{getCaption(item)}</figcaption>
                        )}
                      </figure>
                    </UniversalLink>
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

PhotogalleryTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default PhotogalleryTemplate;
