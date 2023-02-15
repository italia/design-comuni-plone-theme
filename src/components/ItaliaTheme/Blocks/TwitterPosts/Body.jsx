/**
 * TwitterPostsBody
 * @module components/ItaliaTheme/Blocks/TwitterPosts/Body
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { Container, Section } from 'design-react-kit';
import moment from 'moment';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { UniversalLink } from '@plone/volto/components';
import { getTwitterPosts } from 'design-comuni-plone-theme/actions';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import TwitterSkeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/TwitterPosts/Skeleton';

const messages = defineMessages({
  no_results: {
    id: 'twitter_posts_no_results',
    defaultMessage: "Non c'è nessun post da mostrare.",
  },
});

const getTwitterSliderSettings = (nItems) => {
  return {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: nItems < 4 ? nItems : 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: nItems < 3 ? nItems : 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: nItems < 2 ? nItems : 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
};

/**
 * Body TwitterPosts
 * @class TwitterPostsBody
 * @extends Component
 */
const Body = ({ data, isEditMode, reactSlick }) => {
  const intl = useIntl();
  moment.locale(intl.locale);
  const Slider = reactSlick.default;

  const dispatch = useDispatch();
  const request = useSelector((state) => state.twitterPosts);
  const authors = data.twitter_accounts?.split(',').filter((a) => a.length > 0);

  useEffect(() => {
    if (data.twitter_accounts?.length > 0) {
      dispatch(getTwitterPosts(authors));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.twitter_accounts]);

  const twitter_posts = request?.result || [];

  const content =
    twitter_posts?.length > 0 ? (
      <div className="py-4 px-4 px-md-0">
        {data.title && <h2>{data.title}</h2>}
        {authors?.length > 0 && (
          <div className="authors">
            <Icon icon="it-twitter" />{' '}
            {authors.map((author) => (
              <UniversalLink href={`https://twitter.com/${author}`}>
                @{author}
              </UniversalLink>
            ))}
          </div>
        )}

        <Slider {...getTwitterSliderSettings(twitter_posts.length)}>
          {twitter_posts.map((tweet, index) => (
            <div className="it-single-slide-wrapper" key={index}>
              <div className="tweet rounded">
                <div className="author">
                  <div className="user-infos">
                    <div className="user-name">
                      <UniversalLink
                        href={`https://twitter.com/${tweet.author.username}`}
                      >
                        {tweet.author.name}
                      </UniversalLink>
                    </div>
                    <div className="user-username pb-3">
                      <UniversalLink
                        href={`https://twitter.com/${tweet.author.username}`}
                      >
                        @{tweet.author.username}
                      </UniversalLink>
                    </div>
                  </div>
                </div>
                <div
                  className="tweet-text"
                  dangerouslySetInnerHTML={{
                    __html: tweet.text,
                  }}
                />
                <div className="date-time">
                  {moment(tweet.created_at)
                    .locale(intl.locale)
                    .format('HH:mm - DD MMM YYYY')}
                </div>
                <div className="numbers">
                  <div className="number reply" title="Replies">
                    <Icon icon="reply" />
                    {tweet.reply_count > 0 && tweet.reply_count}
                  </div>
                  <div className="number retweet" title="Retweets">
                    <Icon icon="retweet" />{' '}
                    {tweet.retweet_count > 0 && tweet.retweet_count}
                  </div>
                  <div className="number like" title="Likes">
                    <Icon icon="heart" />
                    {tweet.like_count > 0 && tweet.like_count}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    ) : isEditMode ? (
      intl.formatMessage(messages.no_results)
    ) : null;

  return request?.loadingResults ? (
    <TwitterSkeleton data={data} authors={authors} isEditMode={isEditMode} />
  ) : request.error ? (
    <div className="public-ui">
      <Section className="full-width">
        <Container className="p-2">
          <div className="pt-4 pb-4">
            <strong>Twitter Posts: </strong>
            {request.error?.response?.body?.error?.message}
          </div>
        </Container>
      </Section>
    </div>
  ) : content ? (
    <div className="public-ui">
      <Section className="full-width">
        <Container className="p-2">{content}</Container>
      </Section>
    </div>
  ) : null;
};

export default injectLazyLibs(['moment', 'reactSlick'])(Body);
