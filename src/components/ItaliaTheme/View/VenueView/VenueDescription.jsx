import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextArticle,
  RichText,
  Gallery,
  richTextHasContent,
} from '@italia/components/ItaliaTheme/View';
import { contentFolderHasItems } from '@italia/helpers';

const messages = defineMessages({
  descrizione: {
    id: 'descrizione',
    defaultMessage: 'Descrizione',
  },
  elementi_di_interesse: {
    id: 'elementi_di_interesse',
    defaultMessage: 'Elementi di interesse',
  },
  video: {
    id: 'Video',
    defaultMessage: 'Video',
  },
});

const VenueDescription = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content?.descrizione_completa) ||
    richTextHasContent(content.elementi_di_interesse) ||
    contentFolderHasItems(content, 'multimedia') ? (
    <RichTextArticle
      tag_id={'description'}
      title={intl.formatMessage(messages.descrizione)}
    >
      {/* DESCRIZIONE COMPLETA */}
      <RichText content={content.descrizione_completa} />
      {/* ELEMENTI DI INTERESSE */}
      {richTextHasContent(content.elementi_di_interesse) && (
        <div className="mb-5 mt-3">
          <RichText
            title={`${intl.formatMessage(messages.elementi_di_interesse)}:`}
            content={content.elementi_di_interesse}
          />
        </div>
      )}
      {/*GALLERIA DI IMMAGINI*/}
      <Gallery
        content={content}
        folder_name={'multimedia'}
        title_video={intl.formatMessage(messages.video)}
        title_type="h5"
      />
    </RichTextArticle>
  ) : (
    <></>
  );
};

export default VenueDescription;
