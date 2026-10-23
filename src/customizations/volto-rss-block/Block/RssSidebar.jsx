// CUSTOMIZATION:
// - added hide_date checkbox to hide the date in the card 
// - added show_description checkbox to show the description in the card
// - added cards_per_row select to choose 3 or 4 cards per row
// - added hide_categories checkbox to hide the categories in the card

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Segment, Accordion, Button } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import {
  TextWidget,
  CheckboxWidget,
  SelectWidget,
  Icon,
} from '@plone/volto/components';
import NumberWidget from '@plone/volto/components/manage/Widgets/NumberWidget';
import UrlWidget from '@plone/volto/components/manage/Widgets/UrlWidget';
import upSVG from '@plone/volto/icons/up-key.svg';
import downSVG from '@plone/volto/icons/down-key.svg';
import deleteSVG from '@plone/volto/icons/delete.svg';
import RssStyle from 'volto-rss-block/Block/RssStyle';
import 'volto-rss-block/Block/sidebar.css';

const messages = defineMessages({
  RssFeed: {
    id: 'RssFeed',
    defaultMessage: 'RSS Feed',
  },
  title: {
    id: 'title',
    defaultMessage: 'Title',
  },
  feed: {
    id: 'Feed',
    defaultMessage: 'Feed',
  },
  RssFeedURL: {
    id: 'RssFeed Url',
    defaultMessage: 'RSS Feed URL',
  },
  RssFeedUrlDescription: {
    id: 'RssFeed Url description',
    defaultMessage: 'To see the set feed, you need to save the content.',
  },
  RssFeedSource: {
    id: 'RssFeed Source',
    defaultMessage: 'RSS Feed Source name',
  },

  setrss: {
    id: 'setrss',
    defaultMessage: 'Set RSS feed',
  },
  limit: {
    id: 'RssLimit',
    defaultMessage: 'Maximum items to show',
  },
  hide_date: {
    id: 'rss_hide_date',
    defaultMessage: 'Nascondi data nella card',
  },
  hide_categories: {
    id: 'rss_hide_categories',
    defaultMessage: 'Nascondi categorie nella card',
  },
  show_description: {
    id: 'rss_show_description',
    defaultMessage: 'Mostra descrizione nella card',
  },
  cards_per_row: {
    id: 'rss_cards_per_row',
    defaultMessage: 'Card per riga',
  },
  linkMore: {
    id: 'linkMore',
    defaultMessage: 'Link more',
  },
  linkHref: {
    id: 'linkHref',
    defaultMessage: 'Link more href',
  },
  linkMoreTitle: {
    id: 'linkMoreTitle',
    defaultMessage: 'Title for link more',
  },
  addFeed: {
    id: 'RSSFeedAdd',
    defaultMessage: 'Add feed',
  },
});

const defaultFeedConfig = {};

const AccordionIcon = ({ active }) => (
  <>
    {active ? (
      <Icon name={upSVG} size="20px" />
    ) : (
      <Icon name={downSVG} size="20px" />
    )}
  </>
);

const RssSidebar = ({ data, block, onChangeBlock, required = false }) => {
  const intl = useIntl();
  const [activeAccIndex, setActiveAccIndex] = useState(0);

  useEffect(() => {
    if (!data.limit || !data.feeds) {
      let newData = { ...data };
      newData.limit = data.limit ?? 10;
      newData.feeds = data.feeds ?? [{}];
      onChangeBlock(block, {
        ...newData,
      });
    }
  }, []);

  function handleAccClick(e, titleProps) {
    const { index } = titleProps;
    const newIndex = activeAccIndex === index ? -1 : index;

    setActiveAccIndex(newIndex);
  }

  const deleteFeed = (data, index) => {
    let feeds = [...data.feeds];
    feeds.splice(index, 1);
    onChangeBlock(block, {
      ...data,
      feeds: [...feeds],
    });
  };
  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>{intl.formatMessage(messages.RssFeed)}</h2>
      </header>

      <Segment>
        <TextWidget
          id="title"
          title={intl.formatMessage(messages.title)}
          required={false}
          value={data.title}
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              [name]: value,
            });
          }}
        />
        <RssStyle data={data} block={block} onChangeBlock={onChangeBlock} />
        <NumberWidget
          className="rss-widget"
          id="limit"
          title={intl.formatMessage(messages.limit)}
          required={true}
          value={data.limit}
          defaultValue={10}
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              [name]: value > -1 ? parseInt(value) : null,
            });
          }}
        />
        <CheckboxWidget
          id="hide_date"
          title={intl.formatMessage(messages.hide_date)}
          value={data.hide_date ? data.hide_date : false}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
        />
        <CheckboxWidget
          id="hide_categories"
          title={intl.formatMessage(messages.hide_categories)}
          value={data.hide_categories ? data.hide_categories : false}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
        />
        <CheckboxWidget
          id="show_description"
          title={intl.formatMessage(messages.show_description)}
          value={data.show_description ? data.show_description : false}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
        />
        <SelectWidget
          id="cards_per_row"
          className="rss-widget"
          title={intl.formatMessage(messages.cards_per_row)}
          required={false}
          noValueOption={false}
          intl={intl}
          value={`${data.cards_per_row ?? 4}`}
          onChange={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: Number(value),
            });
          }}
          choices={[
            ['3', '3'],
            ['4', '4'],
          ]}
        />
        <div className="add-feedconf-button">
          <Button
            primary
            onClick={() => {
              let newFeeds = [...data.feeds];
              newFeeds.push(defaultFeedConfig);
              onChangeBlock(block, {
                ...data,
                feeds: newFeeds,
              });
              handleAccClick(null, { index: newFeeds.length - 1 });
            }}
          >
            {intl.formatMessage(messages.addFeed)}
          </Button>
        </div>

        <Accordion fluid styled className="form">
          {data.feeds?.map((feed, index) => (
            <div key={index}>
              <Accordion.Title
                active={activeAccIndex === index}
                index={index}
                onClick={handleAccClick}
              >
                {intl.formatMessage(messages.feed)} {index + 1}{' '}
                {data.feeds[index].source
                  ? ' - ' + data.feeds[index].source
                  : ''}
                <div>
                  <Icon
                    name={deleteSVG}
                    onClick={() => {
                      deleteFeed(data, index);
                    }}
                    size="20px"
                  />

                  <AccordionIcon active={activeAccIndex === index} />
                </div>
              </Accordion.Title>
              <Accordion.Content active={activeAccIndex === index}>
                <TextWidget
                  id="url"
                  title={intl.formatMessage(messages.RssFeedURL)}
                  description={intl.formatMessage(
                    messages.RssFeedUrlDescription,
                  )}
                  required={true}
                  value={data.feeds[index].url || ''}
                  onChange={(name, value) => {
                    let newFeeds = [...data.feeds];
                    newFeeds[index][name] = value;

                    onChangeBlock(block, {
                      ...data,
                      feeds: newFeeds,
                    });
                  }}
                />
                <TextWidget
                  id="source"
                  title={intl.formatMessage(messages.RssFeedSource)}
                  required={false}
                  value={data.feeds[index].source || ''}
                  onChange={(name, value) => {
                    let newFeeds = [...data.feeds];
                    newFeeds[index][name] = value;

                    onChangeBlock(block, {
                      ...data,
                      feeds: newFeeds,
                    });
                  }}
                />
              </Accordion.Content>
            </div>
          ))}
        </Accordion>
      </Segment>

      {/* LINK MORE */}

      <Accordion fluid styled className="form rss-linkmore">
        <Accordion.Title active={true} index={0} onClick={() => {}}>
          {intl.formatMessage(messages.linkMore)}
        </Accordion.Title>
        <Accordion.Content active={true}>
          <TextWidget
            id="linkMoreTitle"
            title={intl.formatMessage(messages.linkMoreTitle)}
            required={false}
            value={data.linkMoreTitle || ''}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />

          <UrlWidget
            id="linkMore"
            title={intl.formatMessage(messages.linkHref)}
            required={false}
            value={data.linkMore}
            onChange={(name, value) => {
              onChangeBlock(block, {
                ...data,
                [name]: value,
              });
            }}
          />
        </Accordion.Content>
      </Accordion>
    </Segment.Group>
  );
};

RssSidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default RssSidebar;
