import 'slick-carousel/slick/slick.css';
import 'design-comuni-plone-theme/components/slick-carousel/slick/slick-theme.css';

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { resetSearchContent, searchContent } from '@plone/volto/actions';
import { useDispatch, useSelector } from 'react-redux';

import EmbeddedVideo from './EmbeddedVideo';
import { GalleryPreview } from 'design-comuni-plone-theme/components/ItaliaTheme';
import Image from '@plone/volto/components/theme/Image/Image';
import PropTypes from 'prop-types';
import { contentFolderHasItems } from 'design-comuni-plone-theme/helpers';
import { flattenToAppURL } from '@plone/volto/helpers';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

const messages = defineMessages({
  gallery: {
    id: 'gallery',
    defaultMessage: 'Galleria immagini',
  },
  viewPreview: {
    id: 'gallery_viewPreview',
    defaultMessage: "Vedi l'anteprima di",
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
  id = '',
  title,
  title_type = 'h3',
  title_id = 'galleria',
  title_video,
  className = '',
  reactSlick,
}) => {
  const Slider = reactSlick.default;
  const getSettings = (nItems, slideToScroll) => {
    return {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: nItems < 3 ? nItems : 3,
      slidesToScroll: slideToScroll ?? 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: nItems < 3 ? nItems : 3,
            slidesToScroll: nItems < 3 ? nItems : slideToScroll ?? 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: slideToScroll < 2 ? slideToScroll : 2,
            slidesToScroll: nItems < 2 ? nItems : slideToScroll ?? 2,
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
  };

  const intl = useIntl();
  const [viewImageIndex, setViewImageIndex] = useState(null);

  const video_settings = {
    ...getSettings(1, 1),
  };

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
          },
          folder_name,
        ),
      );
    }
    return () => {
      dispatch(resetSearchContent(folder_name));
    };
  }, [url]);

  const multimedia = searchResults?.[folder_name]?.items || [];
  let images = multimedia.filter((item) => item['@type'] === 'Image');
  let videos = multimedia.filter((item) => item['@type'] === 'Link');
  let gallery_title = title || intl.formatMessage(messages.gallery);

  return !hasChildren ? null : (
    <>
      {images?.length > 0 ? (
        <div
          className={`it-carousel-wrapper it-carousel-landscape-abstract-three-cols ${className}`}
          id={id}
        >
          <div className="slider-container">
            <div className="it-header-block">
              <div className="it-header-block-title">
                {title_type === 'h2' && (
                  <h2 id={title_id} className="mb-3 h4">
                    {gallery_title}
                  </h2>
                )}
                {title_type === 'h3' && (
                  <h3 id={title_id} className="h5">
                    {gallery_title}
                  </h3>
                )}
                {title_type === 'h4' && <h4 id={title_id}>{gallery_title}</h4>}
                {title_type === 'h5' && <h5 id={title_id}>{gallery_title}</h5>}
              </div>
            </div>
            <div className="it-carousel-all it-card-bg">
              <Slider {...getSettings(images.length)}>
                {images.map((item, i) => (
                  <div className="it-single-slide-wrapper" key={item['@id']}>
                    <figure>
                      <a
                        href={flattenToAppURL(item.image.scales.large.download)}
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
                        <Image
                          itemUrl={item['@id']}
                          image={
                            item.image_scales?.[item.image_field]?.[0] ||
                            item['@id']
                          }
                          alt={item.title}
                          className="img-fluid"
                        />
                      </a>
                      <figcaption className="figure-caption mt-2">
                        {item.title}
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </Slider>

              <GalleryPreview
                id={`image-gallery-${folder_name}`}
                viewIndex={viewImageIndex}
                setViewIndex={setViewImageIndex}
                items={images}
              />
            </div>
          </div>
        </div>
      ) : null}

      {videos?.length > 0 ? (
        <div
          className={`it-carousel-wrapper it-carousel-landscape-abstract-three-cols ${className}`}
        >
          <div className="slider-container">
            {title_video && (
              <div className="it-header-block">
                <div className="it-header-block-title">
                  {title_type === 'h2' && (
                    <h2 className="h4" id={title_id}>
                      {title_video}
                    </h2>
                  )}
                  {title_type === 'h3' && (
                    <h3 className="h5" id={title_id}>
                      {title_video}
                    </h3>
                  )}
                  {title_type === 'h4' && <h4 id={title_id}>{title_video}</h4>}
                  {title_type === 'h5' && <h5 id={title_id}>{title_video}</h5>}
                </div>
              </div>
            )}
            <div className="it-carousel-all it-card-bg">
              <Slider {...video_settings}>
                {videos.map((item, i) => (
                  <div className="it-single-slide-wrapper" key={item['@id']}>
                    <EmbeddedVideo
                      title={item.title}
                      key={item['@id'] ?? i}
                      id={item['@id'] ?? i}
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
export default injectLazyLibs(['reactSlick'])(Gallery);

Gallery.propTypes = {
  content: PropTypes.object,
  folder_name: PropTypes.string,
};
