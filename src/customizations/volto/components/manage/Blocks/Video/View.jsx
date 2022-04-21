/**
 * View video block.
 * @module components/manage/Blocks/Video/View
 *
 * Customizations:
 * - support external sources for preview image
 * - added ConditionalEmbed
 * - add default previewImage from youtube or vimeo if not selected in sidebar
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Embed } from 'semantic-ui-react';
import cx from 'classnames';
import {
  isInternalURL,
  getParentUrl,
  flattenToAppURL,
} from '@plone/volto/helpers';
import { ConditionalEmbed } from 'volto-gdpr-privacy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import config from '@plone/volto/registry';

/**
 * View video block class.
 * @class View
 * @extends Component
 */
const View = ({ data }) => {
  const allowsExternals =
    data.allowExternals !== undefined
      ? !!data.allowExternals
      : !!config.settings.videoAllowExternalsDefault;

  let placeholder = data.preview_image
    ? isInternalURL(data.preview_image)
      ? `${flattenToAppURL(data.preview_image)}/@@images/image`
      : data.preview_image
    : null;

  if (!placeholder && data.url) {
    if (data.url.match('youtu')) {
      if (!placeholder) {
        //load video preview image from youtube
        const videoID = data.url
          .match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)
          .pop();
        placeholder =
          'https://img.youtube.com/vi/' + videoID + '/sddefault.jpg';
      }
    } else if (data.url.match('vimeo')) {
      const videoID = data.url.match(/^.*\.com\/(.*)/)[1];
      placeholder = 'https://vumbnail.com/' + videoID + '.jpg';
    }
  }

  const ref = React.createRef();
  const onKeyDown = (e) => {
    if (e.nativeEvent.keyCode === 13) {
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
        title="Download and Play video"
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
    <div
      className={cx(
        'block video align',
        {
          center: !Boolean(data.align),
        },
        data.align,
      )}
    >
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
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;
