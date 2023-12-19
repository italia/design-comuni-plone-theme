/**
 * ViewBlock.
 * @module components/manage/Blocks/Text/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Embed } from 'semantic-ui-react';
import {
  isInternalURL,
  getParentUrl,
  flattenToAppURL,
} from '@plone/volto/helpers';
import { ConditionalEmbed } from 'volto-gdpr-privacy';
import { FontAwesomeIcon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { useIntl, defineMessages } from 'react-intl';
import config from '@plone/volto/registry';

const messages = defineMessages({
  loadVideo: {
    id: 'loadVideo',
    defaultMessage:
      'Premi Invio per caricare il video, poi premi Tab per navigare sul video.',
  },
  downloadPlayVideo: {
    id: 'downloadPlayVideo',
    defaultMessage: 'Download and Play video',
  },
});
/**
 * ViewBlock class.
 * @class ViewBlock
 * @extends Component
 */
const ViewBlock = ({ data, index, isEditMode = false }) => {
  const intl = useIntl();
  let placeholder = data.preview_image
    ? isInternalURL(data.preview_image)
      ? `${flattenToAppURL(data.preview_image)}/@@images/image`
      : data.preview_image
    : null;

  if (!placeholder && data.url) {
    if (data.url.match('youtu')) {
      //load video preview image from youtube

      const videoID = data.url.match(/.be\//)
        ? data.url.match(/^.*\.be\/(.*)/)?.[1]
        : data.url.match(/^.*\?v=(.*)$/)?.[1];
      placeholder = 'https://img.youtube.com/vi/' + videoID + '/hqdefault.jpg';
    } else if (data.url.match('vimeo')) {
      const videoID = data.url.match(/^.*\.com\/(.*)/)[1];
      placeholder = 'https://vumbnail.com/' + videoID + '.jpg';
    }
  }

  const ref = React.createRef();
  const onKeyDown = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      //Enter
      ref.current.handleClick();
    }
  };

  const embedSettings = {
    icon: (
      <div
        className="icon-play"
        role="button"
        tabIndex={0}
        title={intl.formatMessage(messages.downloadPlayVideo)}
      >
        <FontAwesomeIcon icon={['fas', 'play']} />
      </div>
    ),
    defaultActive: false,
    autoplay: false,
    aspectRatio: '16:9',
    placeholder: placeholder,
    tabIndex: 0,
    onKeyPress: onKeyDown,
    ref: ref,
    'aria-label': intl.formatMessage(messages.loadVideo),
  };

  return data?.url ? (
    <div className="video-wrapper">
      <ConditionalEmbed url={!isEditMode ? data.url : null}>
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
                    ? data.url.match(/^.*\.be\/(.*)/)?.[1]
                    : data.url.match(/^.*\?v=(.*)$/)?.[1]
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
                ) : data.allowExternals ? (
                  <Embed url={data.url} {...embedSettings} />
                ) : (
                  <div className="invalidVideoFormat" />
                )}
              </>
            )}
          </>
        )}
      </ConditionalEmbed>
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
