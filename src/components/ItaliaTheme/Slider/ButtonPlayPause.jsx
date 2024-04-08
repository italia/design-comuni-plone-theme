import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
const messages = defineMessages({
  play: {
    id: 'Play slider',
    defaultMessage: 'Seleziona per riprodurre lo slider',
  },
  pause: {
    id: 'Pause slider',
    defaultMessage: 'Seleziona per mettere in pausa lo slider',
  },
});
const ButtonPlayPause = ({ onClick, autoplay, showLabel = true, children }) => {
  const intl = useIntl();

  return (
    <div className="play-pause-wrapper">
      <button
        onClick={onClick}
        title={
          autoplay
            ? intl.formatMessage(messages.pause)
            : intl.formatMessage(messages.play)
        }
        aria-label={
          autoplay
            ? intl.formatMessage(messages.pause)
            : intl.formatMessage(messages.play)
        }
        tabIndex={0}
      >
        <Icon
          key={autoplay ? 'pause' : 'play'}
          icon={autoplay ? 'pause' : 'play'}
          title={
            autoplay
              ? intl.formatMessage(messages.pause)
              : intl.formatMessage(messages.play)
          }
        />
        {showLabel && <span>{autoplay ? 'pause' : 'play'}</span>}
      </button>
    </div>
  );
};

export default ButtonPlayPause;
