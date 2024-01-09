/**
 * ViewBlock.
 * @module components/manage/Blocks/Text/View
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Embed } from 'semantic-ui-react';
import { isInternalURL, getParentUrl } from '@plone/volto/helpers';
import { ConditionalEmbed } from 'volto-gdpr-privacy';
import { FontAwesomeIcon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { videoUrlHelper } from 'design-comuni-plone-theme/helpers';
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

  let placeholder = null;
  let videoID = null;
  let listID = null;

  if (data.url) {
    const [computedID, computedPlaceholder] = videoUrlHelper(
      data.url,
      data?.preview_image,
    );
    if (computedID) {
      videoID = computedID;
    }
    if (computedPlaceholder) {
      placeholder = computedPlaceholder;
    }

    if (data.url.match('list')) {
      const matches = data.url.match(/^.*\?list=(.*)|^.*&list=(.*)$/);
      listID = matches[1] || matches[2];

      let thumbnailID = null;
      if (data.url.match(/\?v=(.*)&list/)) {
        thumbnailID = data.url.match(/^.*\?v=(.*)&list(.*)/)[1];
      }
      if (data.url.match(/\?v=(.*)\?list/)) {
        thumbnailID = data.url.match(/^.*\?v=(.*)\?list(.*)/)[1];
      }
      placeholder =
        'https://img.youtube.com/vi/' + thumbnailID + '/hqdefault.jpg';
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
                url={`https://www.youtube.com/embed/videoseries?list=${listID}`}
                {...embedSettings}
              />
            ) : (
              <Embed id={videoID} source="youtube" {...embedSettings} />
            )}
          </>
        ) : (
          <>
            {data.url.match('vimeo') ? (
              <Embed id={videoID} source="vimeo" {...embedSettings} />
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
