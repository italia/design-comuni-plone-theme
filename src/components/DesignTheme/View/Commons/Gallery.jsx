import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { searchContent, resetSearchContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';

const messages = defineMessages({
  gallery: {
    id: 'gallery',
    defaultMessage: 'Galleria di immagini',
  },
});

/**
 * Gallery view component class.
 * @function Gallery
 * @params {object} content Content object.
 * @params {string} folder name where to find images.
 * @returns {string} Markup of the component.
 */
const Gallery = ({ content, folder_name }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const intl = useIntl();
  const url = `${flattenToAppURL(content['@id'])}/${folder_name}`;
  const searchResults = useSelector(state => state.search.subrequests);
  const dispatch = useDispatch();
  useEffect(() => {
    if (content?.items.some(e => e.id === folder_name)) {
      dispatch(
        searchContent(
          url,
          {
            'path.depth': 1,
            sort_on: 'getObjPositionInParent',
            metadata_fields: '_all',
            fullobjects: 1,
          },
          folder_name,
        ),
      );
    }
    return () => {
      dispatch(resetSearchContent(folder_name));
    };
  }, [dispatch, content, url, folder_name]);

  const multimedia = searchResults?.[folder_name]?.items || [];
  let images = multimedia.filter(item => item['@type'] === 'Image');
  let videos = multimedia.filter(item => item['@type'] === 'Link');
  return (
    <>
      {images.length > 0 ? (
        <article id="gallery" className="it-page-section anchor-offset mt-5">
          <div className="it-carousel-wrapper it-carousel-landscape-abstract-three-cols">
            <div className="it-header-block">
              <div className="it-header-block-title">
                <h4 id="header-gallery" className="no-toc">
                  {intl.formatMessage(messages.gallery)}
                </h4>
              </div>
            </div>
            <div className="it-carousel-all it-card-bg">
              <Slider {...settings}>
                {images.map((item, i) => (
                  <div className="it-single-slide-wrapper" key={item['@id']}>
                    <figure>
                      <img
                        src={flattenToAppURL(
                          item.image.scales.gallery.download,
                        )}
                        alt={item.title}
                        className="img-fluid"
                      ></img>
                      <figcaption className="figure-caption mt-2">
                        {item.title}
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </article>
      ) : null}
      {videos.length > 0 ? (
        <article id="video" className="it-page-section anchor-offset mt-5">
          {videos.map((item, i) => (
            <div
              key={item['@id']}
              className="embed-responsive embed-responsive-16by9 my-4"
            >
              <iframe
                className="embed-responsive-item"
                title={item.title}
                src={item.remoteUrl}
                allowFullScreen=""
              ></iframe>
            </div>
          ))}
        </article>
      ) : null}
    </>
  );
};
export default Gallery;

Gallery.propTypes = {
  content: PropTypes.object,
  folder_name: PropTypes.string,
};
