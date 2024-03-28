/**
 * Body video gallery block.
 * @module components/ItaliaTheme/Blocks/VideoGallery/Body
 */

import React from 'react';
import PropTypes from 'prop-types';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { useIntl, defineMessages } from 'react-intl';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { FontAwesomeIcon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Button, Container } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';

/**
 * View Video Gallery body class
 * @class Body
 * @extends Component
 */

const messages = defineMessages({
  videogallery_next_arrow: {
    id: 'videogallery_next_arrow',
    defaultMessage: 'Prossimo video',
  },
  videogallery_prev_arrow: {
    id: 'videogallery_prev_arrow',
    defaultMessage: 'Video precedente',
  },
});

const Body = ({ data, children, nItems = 0, reactSlick }) => {
  const intl = useIntl();

  const NextArrow = (props) => {
    const { onClick, className } = props;
    return (
      <Button
        outline
        color={'unset'}
        className={className}
        onClick={onClick}
        aria-label={intl.formatMessage(messages.videogallery_next_arrow)}
      >
        <FontAwesomeIcon icon={['fas', 'chevron-right']} />
      </Button>
    );
  };
  const PrevArrow = (props) => {
    const { onClick, className } = props;
    return (
      <Button
        outline
        color={'unset'}
        className={className}
        onClick={onClick}
        aria-label={intl.formatMessage(messages.videogallery_prev_arrow)}
      >
        <FontAwesomeIcon icon={['fas', 'chevron-left']} />
      </Button>
    );
  };

  const Slider = reactSlick.default;

  const settings = {
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: nItems < 3 ? nItems : 3,
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

  return (
    <div className="full-width">
      <Container className="px-md-4">
        {data?.title && <h2>{data.title}</h2>}
        {(data?.channel_link || data?.channel_link_title) && (
          <div className="channel">
            <Icon
              color="primary"
              icon="it-youtube"
              className="me-2"
              title="YouTube"
            />
            {data.channel_link ? (
              <UniversalLink
                href={data.channel_link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {data.channel_link_title || data.channel_link}
              </UniversalLink>
            ) : (
              <span>{data.channel_link_title}</span>
            )}
          </div>
        )}

        <div className="slider-container">
          <div className="it-carousel-all">
            <Slider {...settings}>{children}</Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Body.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default injectLazyLibs(['reactSlick'])(Body);
