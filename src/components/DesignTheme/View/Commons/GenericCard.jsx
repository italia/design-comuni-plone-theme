import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import moment from 'moment';
import { Image } from 'semantic-ui-react';

/**
 * NewsCard view component class.
 * @function Location
 * @params {object} location: object.
 * @returns {string} Markup of the component.
 */
const NewsCard = ({ item, showimage, image_field, content }) => {
  const key = 'generic_card_' + item['@id'];
  const url = flattenToAppURL(item['@id']);
  const locationContent = useSelector(state => state.content.subrequests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContent(url, null, key));
    return () => {};
  }, [dispatch, item, url, key]);
  let item_fo = null;
  if (key in locationContent) {
    item_fo = locationContent[key].data;
  }

  return item_fo ? (
    showimage && item_fo[image_field] ? (
      <div className="newscard card-img card card-teaser shadow p-4 mt-3 rounded border">
        <div className="img-responsive-wrapper">
          <div className="img-responsive img-responsive-panoramic">
            <figure className="img-wrapper">
              <Image
                src={flattenToAppURL(
                  item_fo[image_field].scales.preview.download,
                )}
                alt={item_fo.title}
                title={item_fo.title}
              />
            </figure>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <a href={item_fo['@id']}>{item_fo.title}</a>
          </h5>
          <div className="card-text">{item_fo.description}</div>
        </div>
      </div>
    ) : (
      <div className="newscard card card-teaser shadow p-4 mt-3 rounded border">
        <div className="card-body">
          <h5 className="card-title">
            <a href={item_fo['@id']}>{item_fo.title}</a>
          </h5>
          <div className="card-text">{item_fo.description}</div>
        </div>
      </div>
    )
  ) : null;
};

export default NewsCard;
