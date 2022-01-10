import React from 'react';
import PropTypes from 'prop-types';
import { ConditionalEmbed } from 'volto-gdpr-privacy';

const EmbeddedVideo = ({ video_url, title, id }) => {
  /* Needed to fix error:
    "Refused to display 'https://www.youtube.com/watch?v=ID&feature=youtu.be'
    in a frame because it set 'X-Frame-Options' to 'sameorigin'."

    It seems youtube /watch endpoint refuses this format for embedded videos.
    Need to reformat url to /embed endpoint
  */
  const video_id = video_url.split('/').splice(-1);
  const src = `https://youtube.com/embed/${video_id}`;
  return video_url ? (
    <div
      key={id}
      className="embed-responsive embed-responsive-16by9 my4"
      id={`embedded-video-${id}`}
    >
      <ConditionalEmbed url={src} key={'embedvideo' + id}>
        <iframe
          loading="lazy"
          className="embed-responsive-item"
          title={title || `YouTube Video ${id}`}
          allowFullScreen
          src={src}
        ></iframe>
      </ConditionalEmbed>
    </div>
  ) : null;
};

EmbeddedVideo.propTypes = {
  video_url: PropTypes.string.isRequired,
  title: PropTypes.string,
  id: PropTypes.any,
};

export default EmbeddedVideo;
