import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Card, CardBody, CardTitle } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

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
      <Icon
        icon="it-clip"
        alt={intl.formatMessage(messages.attachment)}
        title={intl.formatMessage(messages.attachment)}
      />
      <CardBody tag="div">
        <CardTitle tag="h5">
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
