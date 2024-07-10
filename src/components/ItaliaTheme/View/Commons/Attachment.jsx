import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Card, CardBody, CardTitle } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import Icon from 'design-comuni-plone-theme/components/ItaliaTheme/Icons/Icon';

const messages = defineMessages({
  attachment: {
    id: 'attachment',
    defaultMessage: 'Allegato',
  },
});

const Attachment = ({ title, description, download_url, item = {} }) => {
  const intl = useIntl();
  let _item = { ...item };
  if (item['@type'] === 'File') {
    _item = item.file;
  }
  if (item['@type'] === 'Image') {
    _item = item.image;
  }
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
        <CardTitle className="h5">
          <UniversalLink
            item={{
              ..._item,
              '@id': download_url,
            }}
            title={title}
            aria-label={title}
          >
            {title}
          </UniversalLink>
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
