/**
 * TwitterPostsSkeleton
 * @module components/ItaliaTheme/Blocks/TwitterPosts/Skeleton
 */

import React from 'react';
import { Container, Row } from 'design-react-kit';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

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
 * Skeleton TwitterPosts
 * @class TwitterPostsSkeleton
 * @extends Component
 */
const Skeleton = ({ data, authors, isEditMode, reactSlick }) => {
  const Slider = reactSlick.default;
  return (
    <Row className="row-full-width">
      <Container className="p-2">
        <div className="skeleton-template">
          <div className="py-4 px-4 px-md-0">
            {data.title && <h2>{data.title}</h2>}
            <div className="authors"></div>
            <Slider {...twitter_slider_settings}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div className="it-single-slide-wrapper tweet rounded" key={i}>
                  <div className="author">
                    <figure className="img-skeleton"></figure>
                    <div className="user-infos">
                      <div className="user-name"></div>
                      <div className="user-username"></div>
                    </div>
                  </div>
                  <div className="tweet-text"></div>
                  <div className="date-time"></div>
                  <div className="numbers">
                    <div className="number reply"></div>
                    <div className="number retweet"></div>
                    <div className="number like"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </Row>
  );
};

export default injectLazyLibs(['reactSlick'])(Skeleton);
