import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { searchContent } from '@plone/volto/actions';
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

  // mi prendo il path sotto cui cercare
  const url = flattenToAppURL(content['@id']) + '/' + folder_name;
  // useSelector will extract subrequest from the state. Il will contain
  // the query results
  const searchResults = useSelector(state => state.search.subrequests);

  // Obtain dispatcher so i will able to dispatch the action
  const dispatch = useDispatch();
  //use effect to perform operation after the component did mount/update and
  // unmount
  React.useEffect(() => {
    // only if we have the folder
    if (content?.items.some(e => e.id === folder_name)) {
      // dispatch the action
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
    return () => {};
  }, [dispatch, content, url, folder_name]);

  const multimedia =
    (searchResults &&
      searchResults[folder_name] &&
      searchResults[folder_name].items) ||
    [];

  return (
    <>
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
            {multimedia
              .filter(item => item['@type'] === 'Image')
              .map((item, i) => (
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
      <article id="video" className="it-page-section anchor-offset mt-5">
        {multimedia
          .filter(item => item['@type'] === 'Link')
          .map((item, i) => (
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
    </>
  );
};
export default Gallery;
