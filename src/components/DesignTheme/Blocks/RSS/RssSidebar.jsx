import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';
import { defineMessages, injectIntl } from 'react-intl';
import { TextWidget } from '@plone/volto/components';
import { compose } from 'redux';
import aheadSVG from '@plone/volto/icons/ahead.svg';
import { Button } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';
import RssSyle from './RssStyle';

const messages = defineMessages({
  selectRssOptions: {
    id: 'selectRSSOptions',
    defaultMessage: 'Seleziona le opzioni',
  },
  RssFeed: {
    id: 'RssFeed',
    defaultMessage: 'RSS Feed',
  },
  setrss: {
    id: 'setrss',
    defaultMessage: 'Imposta il feed',
  },
  RssFeedItemNumber: {
    id: 'RssFeedItemNumber',
    defaultMessage: 'Numero di elementi da mostrare',
  },
});

const RssSidebar = ({ data, block, onChangeBlock, required = false, intl }) => {
  const [feed, setFeed] = useState(data.feed || '');
  const [feedItemNumber, setFeedItemNumber] = useState(
    data.feedItemNumber || 10,
  );
  return (
    <Segment.Group raised>
      <Segment>
        <header className="header pulled">
          <h2>{intl.formatMessage(messages.selectRssOptions)}</h2>
        </header>
        <TextWidget
          id="RssFeed"
          title={intl.formatMessage(messages.RssFeed)}
          required={true}
          value={feed}
          onChange={(name, value) => {
            setFeed(value);
          }}
        />
        <TextWidget
          id="RssFeedItemNumber"
          title={intl.formatMessage(messages.RssFeedItemNumber)}
          required={true}
          value={feedItemNumber}
          onChange={(name, value) => {
            setFeedItemNumber(value);
          }}
        />
        <RssSyle data={data} block={block} onChangeBlock={onChangeBlock} />
      </Segment>
      <Segment className="actions" clearing>
        <Button
          basic
          primary
          floated="right"
          type="submit"
          id="rss-form-submit"
          aria-label={intl.formatMessage(messages.setrss)}
          title={intl.formatMessage(messages.setrss)}
          onClick={(name, value) => {
            onChangeBlock(block, {
              ...data,
              feed: feed,
              feedItemNumber: feedItemNumber,
            });
          }}
        >
          <Icon className="circled" name={aheadSVG} size="30px" />
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default compose(injectIntl)(RssSidebar);
