import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { searchContent, resetSearchContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';

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
const Gallery = ({ content, folder_name }) => {
  const intl = useIntl();
  const url = flattenToAppURL(content['@id']) + '/' + folder_name;
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
                <h4 className="no_toc">
                  {' '}
                  {intl.formatMessage(messages.gallery)}
                </h4>
              </div>
            </div>
            <div className="it-carousel-all owl-carousel it-card-bg">
              {images.map((item, i) => (
                <div className="it-single-slide-wrapper" key={i}>
                  <figure>
                    <img
                      src={flattenToAppURL(item.image.scales.preview.download)}
                      alt={item.title}
                      className="img-fluid"
                    ></img>
                    <figcaption className="figure-caption mt-2">
                      {item.title}
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </article>
      ) : null}
      {videos.length > 0 ? (
        <article id="video" className="it-page-section anchor-offset mt-5">
          {videos.map((item, i) => (
            <div
              key={i}
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
