/**
 * TwitterPostsBody
 * @module components/ItaliaTheme/Blocks/TwitterPosts/Body
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import Slider from 'react-slick';
import moment from 'moment';
import { Container, Row } from 'design-react-kit/dist/design-react-kit';
import { getTwitterPosts } from '@italia/actions';
import { Icon } from '@italia/components/ItaliaTheme';
import TwitterSkeleton from '@italia/components/ItaliaTheme/Blocks/TwitterPosts/Skeleton';

const messages = defineMessages({
  no_results: {
    id: 'twitter_posts_no_results',
    defaultMessage: "Non c'è nessun post da mostrare.",
  },
});

const twitter_slider_settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
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

/**
 * Body TwitterPosts
 * @class TwitterPostsBody
 * @extends Component
 */
const Body = ({ data, isEditMode }) => {
  const intl = useIntl();
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
              <a
                href={`https://twitter.com/${author}`}
                target="_blank"
                rel="noopener noreferrer"
                key={author}
              >
                @{author}
              </a>
            ))}
          </div>
        )}

        <Slider {...twitter_slider_settings}>
          {twitter_posts.map((tweet, index) => (
            <div className="it-single-slide-wrapper" key={index}>
              <div className="tweet rounded">
                <div className="author">
                  <figure>
                    <img
                      src={tweet.author.profile_image_url}
                      alt={tweet.author.name}
                      aria-hidden="true"
                      className="rounded-circle"
                      loading="lazy"
                    />
                  </figure>
                  <div className="user-infos">
                    <div className="user-name">{tweet.author.name}</div>
                    <div className="user-username">
                      @{tweet.author.username}
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

  return request.loadingResults ? (
    <TwitterSkeleton data={data} authors={authors} isEditMode={isEditMode} />
  ) : request.error ? (
    <Row className="row-full-width">
      <Container className="p-2">
        <div className="pt-4 pb-4">
          <strong>Twitter Posts: </strong>
          {request.error?.response?.body?.error?.message}
        </div>
      </Container>
    </Row>
  ) : content ? (
    <Row className="row-full-width">
      <Container className="p-2">{content}</Container>
    </Row>
  ) : null;
};

export default Body;
