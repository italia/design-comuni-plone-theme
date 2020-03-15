import { defineMessages, useIntl } from 'react-intl';

import React from 'react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Icon } from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  attachment: {
    id: 'attachment',
    defaultMessage: 'Allegato',
  },
});

const Attachment = ({ title, download_url }) => {
  const intl = useIntl();
  return (
    <div className="card card-teaser shadow p-4 mt-3 rounded border">
      <Icon
        className={undefined}
        color=""
        icon="it-clip"
        padding={false}
        size=""
        alt={intl.formatMessage(messages.attachment)}
        title={intl.formatMessage(messages.attachment)}
      />
      <div className="card-body">
        <h5 className="card-title">
          <a href={flattenToAppURL(download_url)}>{title}</a>
        </h5>
      </div>
    </div>
  );
};

export default Attachment;
