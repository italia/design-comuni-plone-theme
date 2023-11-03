import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  Attachments,
  Attachment,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { contentFolderHasItems } from 'design-comuni-plone-theme/helpers';
import { Row } from 'design-react-kit';

const messages = defineMessages({
  documenti: {
    id: 'uo_documenti',
    defaultMessage: 'Allegati',
  },
});

const UODocuments = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {(contentFolderHasItems(content, 'allegati') ||
        content.documenti_pubblici?.length > 0) && (
        <section id="allegati" className="it-page-section anchor-offset mb-5">
          <h2 className="mb-3 h4" id="header-allegati">
            {intl.formatMessage(messages.documenti)}
          </h2>
          <Attachments
            content={content}
            folder_name={'allegati'}
            as_section={false}
          />

          <Row className="card-wrapper card-teaser-wrapper documenti-pubblici">
            {content?.documenti_pubblici?.map((dp, i) => (
              <Attachment {...dp} download_url={dp?.['@id']} key={dp['@id']} />
            ))}
          </Row>
        </section>
      )}
    </>
  );
};

export default UODocuments;
