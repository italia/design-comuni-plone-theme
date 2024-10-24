/**
 * Body video block.
 * @module components/manage/Blocks/Video/Body
 *
 * Customizations:
 * - support external sources for preview image
 * - added ConditionalEmbed
 * - changed icon for preview with FontAwesome icon
 * - overhauled url checking, it would break on correct links and allow incorrect ones
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Embed, Message } from 'semantic-ui-react';
import cx from 'classnames';
import { isInternalURL, getParentUrl } from '@plone/volto/helpers';
import { videoUrlHelper } from 'design-comuni-plone-theme/helpers';
import { ConditionalEmbed } from 'volto-gdpr-privacy';
import { FontAwesomeIcon } from 'design-comuni-plone-theme/components/ItaliaTheme';
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

  let apiPath = config.settings.apiPath;
  if (!apiPath.endsWith('/')) {
    apiPath += '/';
  }

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
                            data.url.replace(getParentUrl(apiPath), ''),
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
