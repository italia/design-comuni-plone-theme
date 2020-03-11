import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
import { injectIntl } from 'react-intl';
import Parser from 'rss-parser';
import moment from 'moment';
import { settings } from '@plone/volto/config';
import { blocks as customBlocks } from '@design/config';

const RssBody = ({ data, properties, intl, path, isEditMode }) => {
  const [feedItems, setFeedItems] = useState([]);
  moment.locale('it');
  useEffect(() => {
    let parser = new Parser();
    if (data?.feed?.length > 0) {
      let base_url = settings.apiPath;
      parser.parseURL(base_url + '/@get_rss_feed?feed=' + data.feed, function(
        err,
        feed,
      ) {
        if (err) throw err;
        setFeedItems(feed.items.slice(0, data?.feedItemNumber));
      });
    }
  }, [data]);

  const templateConfig = customBlocks.blocksConfig.RssBlock.templates;

  let templateName =
    data.template && !!templateConfig[data.template]
      ? data.template
      : 'default';

  const ListingBodyTemplate = templateConfig[templateName].template;

  return feedItems.length > 0 ? (
    <div className="row">
      {feedItems?.map((item, i) => (
        <>
          <ListingBodyTemplate key={i} item={item} />
        </>
      ))}
    </div>
  ) : (
    <div className="no-rss-feed-results" />
  );
};

RssBody.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  path: PropTypes.string.isRequired,
  isEditMode: PropTypes.bool,
};

export default injectIntl(RssBody);
