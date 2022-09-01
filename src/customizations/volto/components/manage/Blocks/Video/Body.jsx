/**
 * Body video block.
 * @module components/manage/Blocks/Video/Body
 *
 * Customizations:
 * - support external sources for preview image
 * - added ConditionalEmbed
 * - changed icon for preview with FontAwesome icon
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Embed, Message } from 'semantic-ui-react';
import cx from 'classnames';
import {
  isInternalURL,
  getParentUrl,
  flattenToAppURL,
} from '@plone/volto/helpers';
import { ConditionalEmbed } from 'volto-gdpr-privacy';
import { FontAwesomeIcon } from '@italia/components/ItaliaTheme';
import config from '@plone/volto/registry';

/**
 * Body video block class.
 * @class Body
 * @extends Component
 */
const Body = ({ data, isEditMode }) => {
  const allowsExternals =
    data.allowExternals !== undefined
      ? !!data.allowExternals
      : !!config.settings.videoAllowExternalsDefault;

  let placeholder = data.preview_image
    ? isInternalURL(data.preview_image)
      ? `${flattenToAppURL(data.preview_image)}/@@images/image`
      : data.preview_image
    : null;

  let videoID = null;
  let listID = null;

  if (data.url) {
    if (data.url.match('youtu')) {
      //load video preview image from youtube
      if (data.url.match('list')) {
        listID = data.url.match(/^.*\?list=|^.*&list=(.*)$/)[1];
        if (data.url.match('v=')) {
          videoID = data.url.match(/^.*\?v=(.*)&(.*)$/)?.[1] || null;
        }
      } else {
        videoID = data.url.match(/.be\//)
          ? data.url.match(/^.*\.be\/(.*)/)[1]
          : data.url.match(/^.*\?v=(.*)$/)[1];
      }
      if (!placeholder) {
        placeholder =
          'https://img.youtube.com/vi/' + videoID + '/sddefault.jpg';
      }
    } else if (data.url.match('vimeo')) {
      videoID = data.url.match(/^.*\.com\/(.*)/)[1];
      if (!placeholder) {
        placeholder = 'https://vumbnail.com/' + videoID + '.jpg';
      }
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
    placeholder: placeholder,
    icon: (
      <div
        className="icon-play"
        role="button"
        tabIndex={0}
        title="Load and Play video"
      >
        <FontAwesomeIcon icon={['fas', 'play']} />
      </div>
    ),
    defaultActive: false,
    autoplay: false,
    aspectRatio: '16:9',
    tabIndex: 0,
    onKeyPress: onKeyDown,
    ref: ref,
  };

  return (
    <>
      {data.url && (
        <div
          className={cx('video-inner', {
            'full-width': data.align === 'full',
          })}
        >
          <ConditionalEmbed url={data.url}>
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
                            ? `${data.url}${
                                data.url.indexOf('@@download/file') < 0
                                  ? '/@@download/file'
                                  : ''
                              }`
                            : data.url
                        }
                        controls
                        poster={placeholder}
                        type="video/mp4"
                      />
                    ) : data.url && allowsExternals ? (
                      // eslint-disable-next-line jsx-a11y/media-has-caption
                      <video
                        src={data.url}
                        controls
                        poster={placeholder}
                        type="video/mp4"
                      />
                    ) : isEditMode ? (
                      <div>
                        <Message>
                          <center>
                            <FormattedMessage
                              id="Please enter a valid URL by deleting the block and adding a new video block."
                              defaultMessage="Please enter a valid URL by deleting the block and adding a new video block."
                            />
                          </center>
                        </Message>
                      </div>
                    ) : (
                      <div className="invalidVideoFormat" />
                    )}
                  </>
                )}
              </>
            )}
          </ConditionalEmbed>
        </div>
      )}
    </>
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

export default Body;
