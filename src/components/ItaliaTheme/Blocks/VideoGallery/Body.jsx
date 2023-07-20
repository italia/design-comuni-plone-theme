/**
 * Body video gallery block.
 * @module components/ItaliaTheme/Blocks/VideoGallery/Body
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'design-react-kit';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { UniversalLink } from '@plone/volto/components';

/**
 * View Video Gallery body class
 * @class Body
 * @extends Component
 */
const Body = ({ data, children, nItems = 0, reactSlick }) => {
  const Slider = reactSlick.default;

  const settings = {
    dots: true,
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
    <div className="full-width py-5">
      <Container className="px-md-4">
        {data?.title && <h2>{data.title}</h2>}
        {(data?.channel_link || data?.channel_link_title) && (
          <div className="channel">
            <Icon color="primary" icon="it-youtube" className="me-2" />
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
