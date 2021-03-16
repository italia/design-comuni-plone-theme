/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
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
  const [autoplay, setAutoplay] = useState(false);

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
    autoplay: autoplay,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    // appendDots: (dots) => (
    //   <div>

    //     <ul style={{ margin: '0px' }}> {dots} </ul>
    //   </div>
    // ),
  };

  const getCaption = (item) => item.description ?? item.rights ?? null;

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
                onClick={() => setAutoplay(!autoplay)}
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
            <Slider {...settings}>
              {items.map((item) => (
                <div className="it-single-slide-wrapper" key={item['@id']}>
                  <UniversalLink
                    item={item}
                    openLinkInNewTab={true}
                    title={intl.formatMessage(messages.viewImage)}
                  >
                    <figure className="img-wrapper">
                      {item.image && (
                        <Image
                          className="img-fluid"
                          image={item.image}
                          alt=""
                          aria-hidden="true"
                        />
                      )}
                      {getCaption(item) && (
                        <figcaption>{getCaption(item)}</figcaption>
                      )}
                    </figure>
                  </UniversalLink>
                </div>
              ))}
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
