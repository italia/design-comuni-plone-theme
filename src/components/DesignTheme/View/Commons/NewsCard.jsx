import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getContent, resetContent } from '@plone/volto/actions';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
/**
 * NewsCard view component class.
 * @function Location
 * @params {object} location: object.
 * @returns {string} Markup of the component.
 */
const NewsCard = ({ item, showimage, content }) => {
  const key = 'news' + item['@id'];
  const url = flattenToAppURL(item['@id']);
  const locationContent = useSelector(state => state.content.subrequests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContent(url, null, key));
    return () => dispatch(resetContent(key));
  }, [dispatch, item, url, key]);
  let news_fo = null;
  if (key in locationContent) {
    news_fo = locationContent[key].data;
  }
  return news_fo ? (
    <div className="newscard card card-teaser shadow p-4 mt-3 rounded border">
      <div className="card-body">
        <div className="header text-uppercase"></div>
        <div class="category-top">
          {news_fo.tipologia_notizia.title}{' '}
          {news_fo.effective ? (
            <span className="data">
              {moment(news_fo.effective).format('DD MMM Y')}
            </span>
          ) : null}{' '}
        </div>
        <h5 className="card-title big-heading">
          <Link to={flattenToAppURL(news_fo['@id'])}>{news_fo.title}</Link>
        </h5>
        <div className="card-text">{news_fo.description}</div>
      </div>
    </div>
  ) : null;
};

export default NewsCard;
