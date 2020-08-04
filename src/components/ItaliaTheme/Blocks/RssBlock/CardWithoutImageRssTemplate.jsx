import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import moment from 'moment';
import cx from 'classnames';

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardReadMore,
} from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  readMore: { id: 'rss_read_more', defaultMessage: 'Read more' },
  noResults: {
    id: 'rss_no_results',
    defaultMessage: 'No results from RSS feed.',
  },
});

const CardWithoutImageRssTemplate = ({ items = [], isEditMode }) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  return (
    <div className={cx('', { 'public-ui': isEditMode })}>
      <div className="row">
        {items?.length > 0 ? (
          items.map((item) => (
            <div className="col-12 col-lg-3 mb-3" key={item['@id']}>
              <Card noWrapper={false} tag="div">
                <CardBody tag="div">
                  <div className="category-top">
                    {item?.categories?.length > 0 && item.categories[0]._ ? (
                      <>
                        <span className="category">{item.categories[0]._}</span>
                        <span className="mx-1">&mdash;</span>
                      </>
                    ) : (
                      ''
                    )}
                    <span>{moment(item.pubDate).format('DD-MMM-Y')}</span>
                  </div>
                  <CardTitle className="big-heading" tag="h5">
                    {item.title}
                  </CardTitle>
                  <CardText tag="p" className="text-serif">
                    {item.contentSnippet}
                  </CardText>
                </CardBody>
                <CardReadMore
                  iconName="it-arrow-right"
                  className="ml-4"
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
    </div>
  );
};

CardWithoutImageRssTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default CardWithoutImageRssTemplate;
