/**
 * ViewBlock.
 * @module components/manage/Blocks/Text/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Embed } from 'semantic-ui-react';
import { isInternalURL, getParentUrl } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

/**
 * ViewBlock class.
 * @class ViewBlock
 * @extends Component
 */
const ViewBlock = ({ data, index }) => {
  const embedSettings = {
    icon: 'play',
    defaultActive: true,
    autoplay: false,
    aspectRatio: '16:9',
  };
  return data?.url ? (
    <div className="video-wrapper">
      {data.url.match('youtu') ? (
        <>
          {data.url.match('list') ? (
            <Embed
              url={`https://www.youtube.com/embed/videoseries?list=${
                data.url.match(/^.*\?list=(.*)$/)[1]
              }`}
              {...embedSettings}
            />
          ) : (
            <Embed
              id={
                data.url.match(/.be\//)
                  ? data.url.match(/^.*\.be\/(.*)/)[1]
                  : data.url.match(/^.*\?v=(.*)$/)[1]
              }
              source="youtube"
              {...embedSettings}
            />
          )}
        </>
      ) : (
        <>
          {data.url.match('vimeo') ? (
            <Embed
              id={data.url.match(/^.*\.com\/(.*)/)[1]}
              source="vimeo"
              {...embedSettings}
            />
          ) : (
            <>
              {data.url.match('.mp4') ? (
                // eslint-disable-next-line jsx-a11y/media-has-caption
                <video
                  src={
                    isInternalURL(
                      data.url.replace(
                        getParentUrl(config.settings.apiPath),
                        '',
                      ),
                    )
                      ? `${data.url}/@@download/file`
                      : data.url
                  }
                  controls
                  type="video/mp4"
                />
              ) : (
                <div className="invalidVideoFormat" />
              )}
            </>
          )}
        </>
      )}
    </div>
  ) : null;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
ViewBlock.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ViewBlock;
