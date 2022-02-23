import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import { contentFolderHasItems } from '@italia/helpers';
import {
  RichTextArticle,
  richTextHasContent,
  Gallery,
  CuredBy,
} from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  descrizione: {
    id: 'documento_descrizione',
    defaultMessage: 'Descrizione',
  },
  autori: {
    id: 'documento_autori',
    defaultMessage: 'Autori',
  },
  licenza_distribuzione: {
    id: 'documento_licenza_distribuzione',
    defaultMessage: 'Licenza di distribuzione',
  },
});

const DocumentoDescrizione = ({ content }) => {
  const intl = useIntl();

  return richTextHasContent(content.descrizione_estesa) ||
    contentFolderHasItems(content, 'multimedia') ||
    content.autori?.length > 0 ||
    content.licenza_distribuzione?.length > 0 ? (
    <RichTextArticle
      tag_id={'text-body'}
      title={intl.formatMessage(messages.descrizione)}
      show_title={true}
      content={content.descrizione_estesa}
    >
      {contentFolderHasItems(content, 'multimedia') && (
        <Gallery
          content={content}
          folder_name={'multimedia'}
          className="mt-5"
        />
      )}

      {content.autori?.length > 0 && (
        <CuredBy
          people={content.autori}
          title={intl.formatMessage(messages.autori)}
        />
      )}

      {content.licenza_distribuzione?.length > 0 && (
        <div className="mt-5">
          <h4>{intl.formatMessage(messages.licenza_distribuzione)}</h4>
          <p>{content.licenza_distribuzione}</p>
        </div>
      )}
    </RichTextArticle>
  ) : (
    <></>
  );
};

export default DocumentoDescrizione;
