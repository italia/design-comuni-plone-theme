import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { NewsCard } from '@italia/components/ItaliaTheme/View';
import PropTypes from 'prop-types';
/**
 * RelatedNews view component class.
 * @function Location
 * @params {object} location: object.
 * @returns {string} Markup of the component.
 */
const RelatedNews = ({ item, showimage, content }) => {
  const key = `news${item['@id']}`;
  const url = flattenToAppURL(item['@id']);
  const locationContent = useSelector((state) => state.content.subrequests);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContent(url, null, key));
    return () => dispatch(resetContent(key));
  }, [dispatch, item, url, key]);
  const news_fo = locationContent[key]?.data;
  return news_fo ? (
    <NewsCard
      title={news_fo.title}
      typology={news_fo.tipologia_notizia.title}
      effective={news_fo.effective}
      description={news_fo.description}
      id={news_fo['@id']}
    />
  ) : null;
};

RelatedNews.propTypes = {
  content: PropTypes.object,
  showimage: PropTypes.bool,
  item: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    description: PropTypes.string,
    review_state: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default RelatedNews;
