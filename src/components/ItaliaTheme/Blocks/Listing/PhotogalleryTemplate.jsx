import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotogalleryTemplate = ({ items, title, isEditMode, show_block_bg }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
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
  };

  return (
    <div
      className={cx('photogallery', {
        'public-ui': isEditMode,
      })}
    >
      <div className="full-width">
        <Container className="px-4">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}
          <div className="slider-container">
            <div className="it-carousel-all it-card-bg">
              <Slider {...settings}>
                {items.map((item, i) => (
                  <div className="it-single-slide-wrapper" key={item['@id']}>
                    <figure className="img-wrapper">
                      {item.image && (
                        <img
                          src={flattenToAppURL(
                            item?.image?.scales?.preview?.download,
                          )}
                          alt={item.title}
                          className="img-fluid"
                        ></img>
                      )}
                    </figure>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </Container>
      </div>
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
