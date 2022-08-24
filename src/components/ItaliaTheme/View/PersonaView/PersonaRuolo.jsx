import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

import {
  richTextHasContent,
  RichTextArticle,
  RichText,
  OfficeCard,
  Gallery,
} from '@italia/components/ItaliaTheme/View';
import { contentFolderHasItems, viewDate } from '@italia/helpers';

const messages = defineMessages({
  ruolo: {
    id: 'ruolo',
    defaultMessage: 'Ruolo',
  },
  organizzazione_riferimento: {
    id: 'organizzazione_riferimento',
    defaultMessage: 'Organizzazione di riferimento',
  },
  responsabile_di: {
    id: 'responsabile_di',
    defaultMessage: 'Responsabile di',
  },
  assessore_di: {
    id: 'assessore_di',
    defaultMessage: 'Assessore di',
  },
  competenze: {
    id: 'competenze',
    defaultMessage: 'Competenze',
  },
  deleghe: {
    id: 'deleghe',
    defaultMessage: 'Deleghe',
  },
  tipologia_persona: {
    id: 'tipologia_persona',
    defaultMessage: 'Tipologia di persona',
  },
  data_insediamento: {
    id: 'data_insediamento',
    defaultMessage: 'Data di insediamento',
  },
  biografia: {
    id: 'biografia',
    defaultMessage: 'Biografia',
  },
  foto_attivita_politica: {
    id: 'foto_attivita_politica',
    defaultMessage: "Foto dell'attività politica",
  },
  data_conclusione_incarico: {
    id: 'data_conclusione_incarico',
    defaultMessage: "Ha fatto parte dell'organizzazione comunale fino al",
  },
});

const PersonaRuolo = ({ content }) => {
  const intl = useIntl();

  const showSection =
    content.ruolo?.token ||
    content?.data_conclusione_incarico ||
    (!content?.data_conclusione_incarico &&
      (content?.organizzazione_riferimento?.length > 0 ||
        content?.responsabile_di?.length > 0 ||
        content?.assessore_di?.length > 0 ||
        richTextHasContent(content?.competenze) ||
        richTextHasContent(content?.deleghe) ||
        content?.tipologia_persona ||
        content?.data_insediamento ||
        richTextHasContent(content?.biografia) ||
        contentFolderHasItems(content, 'foto-e-attivita-politica')));

  return showSection ? (
    <RichTextArticle tag_id="ruolo" title={intl.formatMessage(messages.ruolo)}>
      {content?.ruolo?.token?.length > 0 && (
        <div className="mb-5">{content.ruolo.title}</div>
      )}
      {!content?.data_conclusione_incarico && (
        <>
          {content?.organizzazione_riferimento?.length > 0 && (
            <div className="mb-5 mt-3">
              <h4>{intl.formatMessage(messages.organizzazione_riferimento)}</h4>
              <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                {content?.organizzazione_riferimento?.map((item, i) => (
                  <OfficeCard key={item['@id']} office={item} />
                ))}
              </div>
            </div>
          )}

          {content?.responsabile_di?.length > 0 && (
            <div className="mb-5 mt-3">
              <h5>{intl.formatMessage(messages.responsabile_di)}</h5>
              <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                {content?.responsabile_di?.map((item, i) => (
                  <OfficeCard key={item['@id']} office={item} />
                ))}
              </div>
            </div>
          )}

          {content?.assessore_di?.length > 0 && (
            <div className="mb-5 mt-3">
              <h5>{intl.formatMessage(messages.assessore_di)}</h5>
              <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                {content?.assessore_di?.map((item, i) => (
                  <OfficeCard key={item['@id']} office={item} />
                ))}
              </div>
            </div>
          )}

          {richTextHasContent(content?.competenze) && (
            <div className="mb-5 mt-3">
              <RichText
                title_size="h5"
                title={intl.formatMessage(messages.competenze)}
                content={content.competenze}
              />
            </div>
          )}

          {richTextHasContent(content?.deleghe) && (
            <div className="mb-5 mt-3">
              <RichText
                title_size="h5"
                title={intl.formatMessage(messages.deleghe)}
                content={content.deleghe}
              />
            </div>
          )}

          {content?.tipologia_persona && (
            <div className="mb-5 mt-3">
              <h5>{intl.formatMessage(messages.tipologia_persona)}</h5>
              {content?.tipologia_persona?.title}
            </div>
          )}

          {content?.data_insediamento && (
            <div className="mb-5 mt-3">
              <h5>{intl.formatMessage(messages.data_insediamento)}</h5>
              {viewDate(intl.locale, content?.data_insediamento, 'DD-MM-Y')}
            </div>
          )}

          {richTextHasContent(content?.biografia) > 0 && (
            <div className="mb-5 mt-3">
              <RichText
                title_size="h5"
                title={intl.formatMessage(messages.biografia)}
                content={content.biografia}
              />
            </div>
          )}

          <Gallery
            content={content}
            folder_name="foto-e-attivita-politica"
            title={intl.formatMessage(messages.foto_attivita_politica)}
            title_type="h5"
          />
        </>
      )}
      {content?.data_conclusione_incarico && (
        <p>
          <strong>
            {intl.formatMessage(messages.data_conclusione_incarico)}:
          </strong>{' '}
          {viewDate(intl.locale, content?.data_conclusione_incarico, 'DD-MM-Y')}
        </p>
      )}
    </RichTextArticle>
  ) : (
    <></>
  );
};

export default PersonaRuolo;
