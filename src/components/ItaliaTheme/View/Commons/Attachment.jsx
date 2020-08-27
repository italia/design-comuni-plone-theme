import { defineMessages, useIntl } from 'react-intl';

import React from 'react';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Icon } from 'design-react-kit/dist/design-react-kit';
import {
  Card,
  CardBody,
  CardTitle,
} from 'design-react-kit/dist/design-react-kit';
import PropTypes from 'prop-types';

const messages = defineMessages({
  attachment: {
    id: 'attachment',
    defaultMessage: 'Allegato',
  },
});

const Attachment = ({ title, description, download_url }) => {
  const intl = useIntl();
  return (
    <Card
      className="card card-teaser shadow p-4 mt-3 rounded attachment"
      noWrapper={true}
      tag="div"
    >
      <CardBody tag="div">
        <CardTitle tag="h5">
          <Icon
            icon="it-clip"
            padding={true}
            alt={intl.formatMessage(messages.attachment)}
            title={intl.formatMessage(messages.attachment)}
          />
          <a href={flattenToAppURL(download_url)}>{title}</a>
        </CardTitle>
        {description && <p>{description}</p>}
      </CardBody>
    </Card>
  );
};
Attachment.propTypes = {
  title: PropTypes.string,
  download_url: PropTypes.string,
};

export default Attachment;
