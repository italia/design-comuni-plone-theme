import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import { contentFolderHasItems } from 'design-comuni-plone-theme/helpers';
import {
  RichTextArticle,
  richTextHasContent,
  Gallery,
  CuredBy,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  descrizione: {
    id: 'documento_descrizione',
    defaultMessage: 'Descrizione',
  },
  autori: {
    id: 'documento_autori',
    defaultMessage: 'Autori',
  },
  identificativo: {
    id: 'identificativo',
    defaultMessage: 'Identificativo del documento',
  },
  licenza_distribuzione: {
    id: 'documento_licenza_distribuzione',
    defaultMessage: 'Licenza di distribuzione',
  },
  tipologia_documento: {
    id: 'documento_tipologia_documento',
    defaultMessage: 'Tipo di documento',
  },
  tipologia_documenti_albopretorio: {
    id: 'documento_tipologia_documenti_albopretorio',
    defaultMessage: 'Tipo di documento albo pretorio',
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
      {content.identificativo && (
        <div className="mt-5">
          <h4>{intl.formatMessage(messages.identificativo)}</h4>
          <p className="font-serif">{content.identificativo}</p>
        </div>
      )}
      {(content.licenza_distribuzione?.length > 0 ||
        content.tipologia_licenze.title) && (
        <div className="mt-5">
          <h4>{intl.formatMessage(messages.licenza_distribuzione)}</h4>
          {content.licenza_distribuzione?.length > 0 && (
            <p className="font-serif">{content.licenza_distribuzione}</p>
          )}
          {content.tipologia_licenze.title && (
            <p className="font-serif">{content.tipologia_licenze.title}</p>
          )}
        </div>
      )}
      {content.tipologia_documento?.length > 0 && (
        <div className="mt-5">
          <h4>{intl.formatMessage(messages.tipologia_documento)}</h4>
          {content.tipologia_documento.map((tipo) => (
            <p key={tipo.token} className="font-serif">
              {tipo.title}
            </p>
          ))}
        </div>
      )}
      {content.tipologia_documenti_albopretorio.title && (
        <div className="mt-5">
          <h4>
            {intl.formatMessage(messages.tipologia_documenti_albopretorio)}
          </h4>
          <p className="font-serif">
            {content.tipologia_documenti_albopretorio.title}
          </p>
        </div>
      )}
    </RichTextArticle>
  ) : (
    <></>
  );
};

export default DocumentoDescrizione;
