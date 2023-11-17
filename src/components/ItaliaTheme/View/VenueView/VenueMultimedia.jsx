import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Gallery } from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { contentFolderHasItems } from 'design-comuni-plone-theme/helpers';

const messages = defineMessages({
  video: {
    id: 'Video',
    defaultMessage: 'Video',
  },
});

const VenueMultimedia = ({ content }) => {
  const intl = useIntl();
  return contentFolderHasItems(content, 'multimedia') ? (
    <Gallery
      content={content}
      folder_name={'multimedia'}
      title_video={intl.formatMessage(messages.video)}
      title_type="h5"
    />
  ) : null;
};

export default VenueMultimedia;
