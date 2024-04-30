import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  RichTextSection,
  Attachment,
  Attachments,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

import { contentFolderHasItems } from 'design-comuni-plone-theme/helpers';

const messages = defineMessages({
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

  altri_documenti_persona: {
    id: 'altri_documenti_persona',
    defaultMessage: 'Altri documenti',
  },
});

const PersonaDocumenti = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {(content.curriculum_vitae?.download ||
        contentFolderHasItems(content, 'curriculum-vitae')) && (
        <RichTextSection
          title={intl.formatMessage(messages.curriculum_vitae)}
          tag_id="documenti-cv"
        >
          {content.curriculum_vitae?.download && (
            <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
              <Attachment
                download_url={content.curriculum_vitae.download}
                title={content.curriculum_vitae.filename}
                item={content.curriculum_vitae}
              />
            </div>
          )}
          {contentFolderHasItems(content, 'curriculum-vitae') && (
            <Attachments
              content={content}
              folder_name={'curriculum-vitae'}
              as_section={false}
            />
          )}
        </RichTextSection>
      )}
      {contentFolderHasItems(content, 'compensi') && (
        <RichTextSection
          tag_id="documenti-compensi"
          title={intl.formatMessage(messages.compensi)}
        >
          <Attachments
            content={content}
            folder_name={'compensi'}
            // title={intl.formatMessage(messages.compensi)}
            as_section={false}
          />
        </RichTextSection>
      )}
      {contentFolderHasItems(content, 'importi-di-viaggio-e-o-servizi') && (
        <RichTextSection
          tag_id="documenti-importi"
          title={intl.formatMessage(messages.importi_di_viaggio_e_o_servizi)}
        >
          <Attachments
            content={content}
            folder_name={'importi-di-viaggio-e-o-servizi'}
            // title={intl.formatMessage(messages.importi_di_viaggio_e_o_servizi)}
            as_section={false}
          />
        </RichTextSection>
      )}
      {content.atto_nomina?.download && (
        <RichTextSection
          tag_id="documenti-atto-nomina"
          title={intl.formatMessage(messages.atto_nomina)}
        >
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
            <Attachment
              download_url={content.atto_nomina.download}
              title={content.atto_nomina.filename}
            />
          </div>
        </RichTextSection>
      )}
      {contentFolderHasItems(content, 'situazione-patrimoniale') && (
        <RichTextSection
          tag_id="documenti-situazione-patrimoniale"
          title={intl.formatMessage(messages.situazione_patrimoniale)}
        >
          <Attachments
            content={content}
            folder_name={'situazione-patrimoniale'}
            // title={intl.formatMessage(messages.situazione_patrimoniale)}
            as_section={false}
          />
        </RichTextSection>
      )}
      {contentFolderHasItems(content, 'dichiarazione-dei-redditi') && (
        <RichTextSection
          tag_id="documenti-dichiarazione-redditi"
          title={intl.formatMessage(messages.dichiarazione_dei_redditi)}
        >
          <Attachments
            content={content}
            folder_name={'dichiarazione-dei-redditi'}
            // title={intl.formatMessage(messages.dichiarazione_dei_redditi)}
            as_section={false}
          />
        </RichTextSection>
      )}
      {contentFolderHasItems(content, 'spese-elettorali') && (
        <RichTextSection
          tag_id="documenti-spese-elettorali"
          title={intl.formatMessage(messages.spese_elettorali)}
        >
          <Attachments
            content={content}
            folder_name={'spese-elettorali'}
            // title={intl.formatMessage(messages.spese_elettorali)}
            as_section={false}
          />
        </RichTextSection>
      )}
      {contentFolderHasItems(content, 'variazione-situazione-patrimoniale') && (
        <RichTextSection
          tag_id="documenti-variazione-situazione-patrimoniale"
          title={intl.formatMessage(
            messages.variazione_situazione_patrimoniale,
          )}
        >
          <Attachments
            content={content}
            folder_name={'variazione-situazione-patrimoniale'}
            // title={intl.formatMessage(
            //   messages.variazione_situazione_patrimoniale,
            // )}
            as_section={false}
          />
        </RichTextSection>
      )}
      {contentFolderHasItems(content, 'altre-cariche') && (
        <RichTextSection
          tag_id="documenti-altre-cariche"
          title={intl.formatMessage(messages.altre_cariche)}
        >
          <Attachments
            content={content}
            folder_name={'altre-cariche'}
            // title={intl.formatMessage(messages.altre_cariche)}
            as_section={false}
          />
        </RichTextSection>
      )}
      {contentFolderHasItems(content, 'altri-documenti') && (
        <RichTextSection
          tag_id="documenti-altri-documenti"
          title={intl.formatMessage(messages.altri_documenti_persona)}
        >
          <Attachments
            content={content}
            folder_name={'altri-documenti'}
            // title={intl.formatMessage(messages.altri_documenti_persona)}
            as_section={false}
          />
        </RichTextSection>
      )}

    </>
  );
};

export default PersonaDocumenti;
