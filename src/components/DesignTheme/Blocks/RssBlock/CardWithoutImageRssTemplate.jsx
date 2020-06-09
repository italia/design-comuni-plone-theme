import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import moment from 'moment';

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardCategory,
  CardReadMore,
} from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  readMore: { id: 'rss_read_more', defaultMessage: 'Read more' },
  noResults: {
    id: 'rss_no_results',
    defaultMessage: 'No results from RSS feed.',
  },
});

const CardWithoutImageRssTemplate = ({ items = [] }) => {
  const intl = useIntl();

  return (
    <div className="row">
      {items?.length > 0 ? (
        items.map(item => (
          <div className="col-12 col-lg-3">
            <Card noWrapper={false} tag="div">
              <CardBody tag="div">
                <CardCategory date={moment(item.pubDate).format('DD-MMM-Y')}>
                  {item.categories?.length > 0 ? item.categories[0]._ : ''}
                </CardCategory>
                <CardTitle className="big-heading" tag="h5">
                  {item.title}
                </CardTitle>
                <CardText tag="p" className="text-serif">
                  {item.contentSnippet}
                </CardText>
              </CardBody>
              <CardReadMore
                iconName="it-arrow-right"
                tag="a"
                href={item?.link}
                text={intl.formatMessage(messages.readMore)}
              />
            </Card>
          </div>
        ))
      ) : (
        <div className="no-rss-feed-results">
          {intl.formatMessage(messages.noResults)}
        </div>
      )}
    </div>
  );
};

CardWithoutImageRssTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default CardWithoutImageRssTemplate;
