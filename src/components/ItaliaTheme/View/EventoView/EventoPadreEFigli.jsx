import React from 'react';
import PropTypes from 'prop-types';

import { Events } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const EventoPadreEFigli = ({ content }) => {
  const isChildEvent = content?.parent['@type'] === 'Event';

  const events_path = isChildEvent
    ? content?.parent['@id']?.split('/').splice(-1)[0]
    : content?.['@id'].split('/').splice(-1)[0];

  return content ? (
    <Events
      content={content}
      show_image={true}
      title={null}
      folder_name={events_path}
      isChild={isChildEvent}
    />
  ) : (
    <></>
  );
};

EventoPadreEFigli.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoPadreEFigli;
