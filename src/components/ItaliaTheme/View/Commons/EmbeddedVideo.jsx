import React from 'react';
import PropTypes from 'prop-types';
import { ConditionalEmbed } from 'volto-gdpr-privacy';
import { Embed } from 'semantic-ui-react';
import { FontAwesomeIcon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { defineMessages, injectIntl, useIntl } from 'react-intl';

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
  embedVideo: {
    id: 'embedVideo',
    defaultMessage: 'YouTube Video {id}',
  },
});

const EmbeddedVideo = ({ video_url, title, id }) => {
  const intl = useIntl();
  /* Needed to fix error:
    "Refused to display 'https://www.youtube.com/watch?v=ID&feature=youtu.be'
    in a frame because it set 'X-Frame-Options' to 'sameorigin'."

    It seems youtube /watch endpoint refuses this format for embedded videos.
    Need to reformat url to /embed endpoint
  */
  const video_id = video_url.match(/.be\//)
    ? video_url.match(/^.*\.be\/(.*)/)?.[1]
    : video_url.match(/^.*\?v=(.*)$/)?.[1];

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
    placeholder: 'https://img.youtube.com/vi/' + video_id + '/sddefault.jpg',
    tabIndex: 0,
    onKeyPress: onKeyDown,
    ref: ref,
    'aria-label': intl.formatMessage(messages.loadVideo),
  };

  return video_url ? (
    <div key={id} className="embedded-video my4" id={`embedded-video-${id}`}>
      <ConditionalEmbed url={video_url} key={'embedvideo' + id}>
        <Embed
          id={video_id}
          title={
            title || intl.formatMessage(messages.embedVideo, { id: `${id}` })
          }
          source="youtube"
          {...embedSettings}
        />
      </ConditionalEmbed>
    </div>
  ) : null;
};

EmbeddedVideo.propTypes = {
  video_url: PropTypes.string.isRequired,
  title: PropTypes.string,
  id: PropTypes.any,
};

export default injectIntl(EmbeddedVideo);
