import React from 'react';
import PropTypes from 'prop-types';

const EmbeddedVideo = ({ video_url, title, id }) => {
  /* Needed to fix error:
    "Refused to display 'https://www.youtube.com/watch?v=ID&feature=youtu.be'
    in a frame because it set 'X-Frame-Options' to 'sameorigin'."

    It seems youtube /watch endpoint refuses this format for embedded videos.
    Need to reformat url to /embed endpoint
  */
  const video_id = video_url.split('/').splice(-1);
  return video_url ? (
    <div
      key={id}
      className="embed-responsive embed-responsive-16by9 my4"
      id={`embedded-video-${id}`}
    >
      <iframe
        className="embed-responsive-item"
        title={title || `YouTube Video ${id}`}
        allowFullScreen
        src={`https://youtube.com/embed/${video_id}`}
      ></iframe>
    </div>
  ) : null;
};

EmbeddedVideo.propTypes = {
  video_url: PropTypes.string.isRequired,
  title: PropTypes.string,
  id: PropTypes.any,
};

export default EmbeddedVideo;
