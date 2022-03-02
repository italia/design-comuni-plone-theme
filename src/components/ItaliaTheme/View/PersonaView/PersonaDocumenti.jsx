import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextArticle,
  Attachment,
  Attachments,
} from '@italia/components/ItaliaTheme/View';

import { contentFolderHasItems } from '@italia/helpers';

const messages = defineMessages({
  documenti: {
    id: 'documenti',
    defaultMessage: 'Documenti',
  },
  curriculum_vitae: {
    id: 'curriculum_vitae',
    defaultMessage: 'Curriculum vitae',
  },
  compensi: {
    id: 'compensi',
    defaultMessage: 'Compensi',
  },
  importi_di_viaggio_e_o_servizi: {
    id: 'importi_di_viaggio_e_o_servizi',
    defaultMessage: 'Importi di viaggio e/o servizi',
  },
  altre_cariche: {
    id: 'altre_cariche',
    defaultMessage: 'Altre cariche',
  },
  atto_nomina: {
    id: 'atto_nomina',
    defaultMessage: 'Atto di nomina',
  },
  situazione_patrimoniale: {
    id: 'situazione_patrimoniale',
    defaultMessage: 'Situazione patrimoniale',
  },

  dichiarazione_dei_redditi: {
    id: 'dichiarazione_dei_redditi',
    defaultMessage: 'Dichiarazione dei redditi',
  },

  spese_elettorali: {
    id: 'spese_elettorali',
    defaultMessage: 'Spese elettorali',
  },
  variazione_situazione_patrimoniale: {
    id: 'variazione_situazione_patrimoniale',
    defaultMessage: 'Variazione situazione patrimoniale',
  },
});

const PersonaDocumenti = ({ content }) => {
  const intl = useIntl();

  const showSection =
    content?.curriculum_vitae?.download ||
    contentFolderHasItems(content, 'curriculum-vitae') ||
    contentFolderHasItems(content, 'compensi') ||
    contentFolderHasItems(content, 'importi-di-viaggio-e-o-servizi') ||
    contentFolderHasItems(content, 'altre-cariche') ||
    content.atto_nomina?.download ||
    contentFolderHasItems(content, 'situazione-patrimoniale') ||
    contentFolderHasItems(content, 'dichiarazione-dei-redditi') ||
    contentFolderHasItems(content, 'spese-elettorali') ||
    contentFolderHasItems(content, 'variazione-situazione-patrimoniale');

  return showSection ? (
    <RichTextArticle
      title={intl.formatMessage(messages.documenti)}
      tag_id="documenti"
    >
      {(content.curriculum_vitae?.download ||
        contentFolderHasItems(content, 'curriculum-vitae')) && (
        <div className="mb-5 mt-3">
          <h5>{intl.formatMessage(messages.curriculum_vitae)}</h5>
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
            {content.curriculum_vitae?.download && (
              <Attachment
                download_url={content.curriculum_vitae.download}
                title={content.curriculum_vitae.filename}
                item={content.curriculum_vitae}
              />
            )}
          </div>
          {contentFolderHasItems(content, 'curriculum-vitae') && (
            <Attachments
              content={content}
              folder_name={'curriculum-vitae'}
              as_article={false}
            />
          )}
        </div>
      )}

      <Attachments
        content={content}
        folder_name={'compensi'}
        title={intl.formatMessage(messages.compensi)}
        as_article={false}
      />

      <Attachments
        content={content}
        folder_name={'importi-di-viaggio-e-o-servizi'}
        title={intl.formatMessage(messages.importi_di_viaggio_e_o_servizi)}
        as_article={false}
      />

      <Attachments
        content={content}
        folder_name={'altre-cariche'}
        title={intl.formatMessage(messages.altre_cariche)}
        as_article={false}
      />

      {content.atto_nomina?.download && (
        <div className="mb-5 mt-3">
          <h5>{intl.formatMessage(messages.atto_nomina)}</h5>
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
            <Attachment
              download_url={content.atto_nomina.download}
              title={content.atto_nomina.filename}
            />
          </div>
        </div>
      )}

      <Attachments
        content={content}
        folder_name={'situazione-patrimoniale'}
        title={intl.formatMessage(messages.situazione_patrimoniale)}
        as_article={false}
      />

      <Attachments
        content={content}
        folder_name={'dichiarazione-dei-redditi'}
        title={intl.formatMessage(messages.dichiarazione_dei_redditi)}
        as_article={false}
      />

      <Attachments
        content={content}
        folder_name={'spese-elettorali'}
        title={intl.formatMessage(messages.spese_elettorali)}
        as_article={false}
      />

      <Attachments
        content={content}
        folder_name={'variazione-situazione-patrimoniale'}
        title={intl.formatMessage(messages.variazione_situazione_patrimoniale)}
        as_article={false}
      />
    </RichTextArticle>
  ) : (
    <></>
  );
};

export default PersonaDocumenti;
