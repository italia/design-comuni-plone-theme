/*
 * Photogallery
 */
import 'slick-carousel/slick/slick.css';
import 'design-comuni-plone-theme/components/slick-carousel/slick/slick-theme.css';

import React, { useRef, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'design-react-kit';

import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import {
  ListingImage,
  ListingLinkMore,
  NextArrow,
  PrevArrow,
  SingleSlideWrapper,
  CarouselWrapper,
  ButtonPlayPause,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import { GalleryPreview } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  viewImage: {
    id: "Vedi l'immagine",
    defaultMessage: "Vedi l'immagine",
  },
  viewPreview: {
    id: 'gallery_viewPreview',
    defaultMessage: "Vedi l'anteprima di",
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
        <ButtonPlayPause
          onClick={toggleAutoplay}
          autoplay={autoplay}
          showLabel={false}
        />

        <ul className="slick-dots" style={{ margin: '0px' }}>
          {dots}
        </ul>
      </div>
    ),
  };

  const getCaption = (item) => item.description ?? item.rights ?? null;

  const figure = (image, item) => {
    return (
      <figure className="img-wrapper volto-image responsive">
        {image}
        {getCaption(item) && <figcaption>{getCaption(item)}</figcaption>}
      </figure>
    );
  };

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
          <CarouselWrapper className="it-card-bg">
            <Slider {...settings} ref={slider}>
              {items.map((item, i) => {
                const image = ListingImage({
                  item,
                  sizes: `(max-width:600px) 450px, (max-width:1024px) ${
                    items.length < 2 ? '1000' : '500'
                  }px, ${
                    items.length === 1
                      ? '1300'
                      : items.length === 2
                      ? '650'
                      : '450'
                  }px`,
                  noWrapLink: true,
                });
                return (
                  <SingleSlideWrapper
                    className={cx('', {
                      'single-slide': items.length === 1,
                    })}
                    key={item['@id']}
                    index={i}
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
                  </SingleSlideWrapper>
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
          </CarouselWrapper>
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
