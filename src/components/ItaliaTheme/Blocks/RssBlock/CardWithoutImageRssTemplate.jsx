import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { CardCategory } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { getViewDate } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/RssBlock/utils';

const messages = defineMessages({
  readMore: { id: 'rss_read_more', defaultMessage: 'Read more' },
  noResults: {
    id: 'rss_no_results',
    defaultMessage: 'No results from RSS feed.',
  },
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});

const CardWithoutImageRssTemplate = ({
  items = [],
  isEditMode,
  data = {},
  //moment: Moment,
}) => {
  const intl = useIntl();
  const titleID = data?.title ? data.title.replace(/[^A-Z0-9]+/gi, '_') : '';
  const colLg = 12 / (data.cards_per_row ?? 4);

  return (
    <div className={cx('', { 'public-ui': isEditMode })} aria-live="polite">
      {items?.length > 0 ? (
        <>
          {data.title && (
            <Row>
              <Col>
                <h2 className="mb-4 mt-5" id={titleID}>
                  {data.title}
                </h2>
              </Col>
            </Row>
          )}
          <Row>
            {items.map((item, index) => (
              <Col lg={colLg} className="mb-3" key={index}>
                <Card noWrapper={false} tag="div" className="card-bg">
                  <CardBody tag="div">
                    <CardCategory
                      iconName="it-rss"
                      date={
                        !data.hide_date &&
                        (item.pubDate || item.date) &&
                        getViewDate(item.pubDate || item.date, intl.locale)
                      }
                    >
                      {!data.hide_categories &&
                        item?.categories
                          ?.map((cat) =>
                            typeof cat === 'string' ? cat : JSON.stringify(cat),
                          )
                          .join(', ')}
                    </CardCategory>
                    <CardTitle tag="h3" className="mb-3">
                      <UniversalLink href={item?.url} title={item.title}>
                        {item.title}
                      </UniversalLink>
                    </CardTitle>
                    {item?.source?.length > 0 && (
                      <div className="source-title">
                        <span className="source">{item.source}</span>
                      </div>
                    )}
                    {data.show_description && (
                      <CardText tag="p">
                        {item.contentSnippet}
                      </CardText>
                    )}
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
          {data.linkMore && data.linkMoreTitle && (
            <div className="link-button text-center my-4">
              <UniversalLink
                href={flattenToAppURL(data.linkMore)}
                className="btn btn-tertiary"
              >
                {data.linkMoreTitle || intl.formatMessage(messages.view_all)}
              </UniversalLink>
            </div>
          )}
        </>
      ) : data.feed ? (
        <div className="no-rss-feed-results" aria-live="polite">
          {intl.formatMessage(messages.noResults)}
        </div>
      ) : null}
    </div>
  );
};

CardWithoutImageRssTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
export default CardWithoutImageRssTemplate;
