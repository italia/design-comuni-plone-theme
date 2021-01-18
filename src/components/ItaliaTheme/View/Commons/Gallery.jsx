import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { searchContent, resetSearchContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { contentFolderHasItems } from '@italia/helpers';
import EmbeddedVideo from './EmbeddedVideo';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';
import Image from '@plone/volto/components/theme/Image/Image';

const messages = defineMessages({
  gallery: {
    id: 'gallery',
    defaultMessage: 'Galleria immagini',
  },
});

/**
 * Gallery view component class.
 * @function Gallery
 * @params {object} content Content object.
 * @params {string} folder name where to find images.
 * @returns {string} Markup of the component.
 */
const Gallery = ({
  content,
  folder_name,
  title,
  title_type = 'h4',
  title_video,
  className,
}) => {
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
  const video_settings = {
    ...settings,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const intl = useIntl();
  const url = `${flattenToAppURL(content['@id'])}/${folder_name}`;
  const searchResults = useSelector((state) => state.search.subrequests);
  const dispatch = useDispatch();

  const hasChildren = contentFolderHasItems(content, folder_name);

  useEffect(() => {
    if (hasChildren) {
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
  }, [dispatch, folder_name, hasChildren, url]);

  const multimedia = searchResults?.[folder_name]?.items || [];
  let images = multimedia.filter((item) => item['@type'] === 'Image');
  let videos = multimedia.filter((item) => item['@type'] === 'Link');
  let gallery_title = title || intl.formatMessage(messages.gallery);

  return !hasChildren ? null : (
    <>
      {images?.length > 0 ? (
        <div
          className={`it-carousel-wrapper it-carousel-landscape-abstract-three-cols ${className}`}
        >
          <div className="slider-container">
            <div className="it-header-block">
              <div className="it-header-block-title">
                {title_type === 'h4' && <h4 id="galleria">{gallery_title}</h4>}
                {title_type === 'h5' && <h5 id="galleria">{gallery_title}</h5>}
              </div>
            </div>
            <div className="it-carousel-all it-card-bg">
              <Slider {...settings}>
                {images.map((item, i) => (
                  <div className="it-single-slide-wrapper" key={item['@id']}>
                    <figure>
                      <Image
                        image={item.image}
                        alt={item.title}
                        className="img-fluid"
                      />
                      <figcaption className="figure-caption mt-2">
                        {item.title}
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      ) : null}

      {videos?.length > 0 ? (
        <div className="it-carousel-wrapper it-carousel-landscape-abstract-three-cols">
          <div className="slider-container">
            {title_video && (
              <div className="it-header-block">
                <div className="it-header-block-title">
                  {title_type === 'h4' && <h4 id="galleria">{title_video}</h4>}
                  {title_type === 'h5' && <h5 id="galleria">{title_video}</h5>}
                </div>
              </div>
            )}
            <div className="it-carousel-all it-card-bg">
              <Slider {...video_settings}>
                {videos.map((item, i) => (
                  <div className="it-single-slide-wrapper" key={item['@id']}>
                    <EmbeddedVideo
                      title={item.title}
                      key={item['@id'] || i}
                      id={item['@id'] || i}
                      video_url={item?.remoteUrl || item}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Gallery;

Gallery.propTypes = {
  content: PropTypes.object,
  folder_name: PropTypes.string,
};
