import 'slick-carousel/slick/slick.css';
import 'design-comuni-plone-theme/components/slick-carousel/slick/slick-theme.css';

import { Col, Container, Row } from 'design-react-kit';
import {
  ListingImage,
  ListingLinkMore,
  NextArrow,
  PrevArrow,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import React, { useRef, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';

import DefaultImageSVG from '@plone/volto/components/manage/Blocks/Listing/default-image.svg';
import { GalleryPreview } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import PropTypes from 'prop-types';
import { UniversalLink } from '@plone/volto/components';
import cx from 'classnames';
import { flattenToAppURL } from '@plone/volto/helpers';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

const messages = defineMessages({
  viewImage: {
    id: "Vedi l'immagine",
    defaultMessage: "Vedi l'immagine",
  },
  viewPreview: {
    id: 'gallery_viewPreview',
    defaultMessage: "Vedi l'anteprima di",
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

const PhotogalleryTemplate = ({
  items,
  title,
  isEditMode,
  show_block_bg,
  show_image_popup,
  linkAlign,
  linkTitle,
  linkHref,
  reactSlick,
  titleLine,
  linkmore_id_lighthouse,
}) => {
  const intl = useIntl();
  const slider = useRef(null);
  const [autoplay, setAutoplay] = useState(false);
  const [viewImageIndex, setViewImageIndex] = useState(null);
  const Slider = reactSlick.default;

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
    autoplay: autoplay,
    speed: 500,
    slidesToShow: items.length < 3 ? items.length : 3,
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
          slidesToShow: items.length < 3 ? items.length : 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: items.length < 2 ? items.length : 2,
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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
            <Icon
              key={autoplay ? 'pause' : 'play'}
              icon={autoplay ? 'pause' : 'play'}
            />
          </button>
        </div>
        <ul className="slick-dots" style={{ margin: '0px' }}>
          {dots}
        </ul>
      </div>
    ),
  };

  const getCaption = (item) => item.description ?? item.rights ?? null;

  const figure = (image, item) => (
    <figure className="img-wrapper">
      {image ? <>{image}</> : <img src={DefaultImageSVG} alt="" />}
      {getCaption(item) && <figcaption>{getCaption(item)}</figcaption>}
    </figure>
  );

  return (
    <div className="photogallery">
      <Container className="px-4">
        {title && (
          <Row>
            <Col>
              <h2 className={cx('mb-4', { 'title-bottom-line': titleLine })}>
                {title}
              </h2>
            </Col>
          </Row>
        )}
        <div className="slider-container px-4 px-md-0">
          <div className="it-carousel-all it-card-bg">
            <Slider {...settings} ref={slider}>
              {items.map((item, i) => {
                const image = ListingImage({ item });

                return (
                  <div
                    className={cx('it-single-slide-wrapper', {
                      'single-slide': items.length === 1,
                    })}
                    key={item['@id']}
                  >
                    {!show_image_popup ? (
                      <UniversalLink
                        item={item}
                        openLinkInNewTab={true}
                        title={intl.formatMessage(messages.viewImage)}
                      >
                        {figure(image, item)}
                      </UniversalLink>
                    ) : (
                      <a
                        href={
                          item?.image?.scales
                            ? flattenToAppURL(item.image.scales.large.download)
                            : '#'
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setViewImageIndex(i);
                        }}
                        onKeyDown={(e) => {
                          if (e.keyCode === 13) {
                            e.preventDefault();
                            e.stopPropagation();
                            setViewImageIndex(i);
                          }
                        }}
                        aria-label={`${intl.formatMessage(
                          messages.viewPreview,
                        )} ${item.title}`}
                      >
                        {figure(image, item)}
                      </a>
                    )}
                  </div>
                );
              })}
            </Slider>

            {viewImageIndex !== null ? (
              <GalleryPreview
                id={`image-gallery-custom`}
                viewIndex={viewImageIndex}
                setViewIndex={setViewImageIndex}
                items={items}
              />
            ) : null}
          </div>
        </div>
        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-4"
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </Container>
    </div>
  );
};

PhotogalleryTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default injectLazyLibs(['reactSlick'])(PhotogalleryTemplate);
