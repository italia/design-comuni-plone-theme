import { defineMessages, useIntl } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';
import {
  richTextHasContent,
  RichTextSection,
  OfficeCard,
  Gallery,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import {
  contentFolderHasItems,
  viewDate,
} from 'design-comuni-plone-theme/helpers';

const messages = defineMessages({
  ruolo: {
    id: 'ruolo',
    defaultMessage: 'Incarico',
  },
  atto_nomina: {
    id: 'atto_nomina',
    defaultMessage: 'Atto di nomina',
  },
  organizzazione_riferimento: {
    id: 'organizzazione_riferimento',
    defaultMessage: 'Organizzazione',
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
  compensi: {
    id: 'compensi',
    defaultMessage: 'Compensi',
  },
  deleghe: {
    id: 'deleghe',
    defaultMessage: 'Deleghe',
  },
  tipologia_incarico: {
    id: 'tipologia_incarico',
    defaultMessage: 'Tipo di incarico',
  },
  data_insediamento: {
    id: 'data_insediamento',
    defaultMessage: 'Data di insediamento',
  },
  data_inizio_incarico: {
    id: 'data_inizio_incarico',
    defaultMessage: "Data di inizio dell'incarico",
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
    defaultMessage:
      "Ha fatto parte dell'organizzazione comunale come {incarico} fino al",
  },
});

const PersonaRuolo = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {content?.incarichi_persona?.length > 0 && (
        <>
          <RichTextSection
            tag_id="incarico"
            title={intl.formatMessage(messages.ruolo)}
          >
            {content?.incarichi_persona?.map((incarico) => (
              <div className="font-serif">
                <p>{incarico.title}</p>
                {incarico.atto_di_nomina && (
                  <UniversalLink href={incarico.atto_di_nomina}>
                    {intl.formatMessage(messages.atto_nomina)}
                  </UniversalLink>
                )}
              </div>
            ))}
          </RichTextSection>
          {content.incarichi_persona[0]?.tipologia_incarico?.title && (
            <RichTextSection
              tag_id="tipologia_incarico"
              title={intl.formatMessage(messages.tipologia_incarico)}
            >
              <div className="font-serif">
                {content.incarichi_persona[0].tipologia_incarico.title}
              </div>
            </RichTextSection>
          )}
          {richTextHasContent(content.incarichi_persona[0].compensi) && (
            <RichTextSection
              tag_id="compensi"
              title={intl.formatMessage(messages.compensi)}
              data={content.incarichi_persona[0].compensi}
            />
          )}
          <RichTextSection
            tag_id="data_insediamento"
            title={intl.formatMessage(messages.data_insediamento)}
          >
            <div className="font-serif">
              {viewDate(
                intl.locale,
                content.incarichi_persona[0].data_inizio_incarico,
                'DD MMMM Y',
              )}
            </div>
          </RichTextSection>
        </>
      )}
      {content.organizzazione_riferimento.length > 0 && (
        <RichTextSection
          tag_id="organization"
          title={intl.formatMessage(messages.organizzazione_riferimento)}
        >
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
            {content.organizzazione_riferimento.map((item, i) => (
              <OfficeCard key={item['@id']} office={item} size="big" />
            ))}
          </div>
        </RichTextSection>
      )}
      {richTextHasContent(content?.competenze) && (
        <RichTextSection
          tag_id="competenze"
          title={intl.formatMessage(messages.competenze)}
          data={content.competenze}
        />
      )}
      {richTextHasContent(content?.deleghe) && (
        <RichTextSection
          tag_id="deleghe"
          title={intl.formatMessage(messages.deleghe)}
          data={content.deleghe}
        />
      )}
      {richTextHasContent(content?.biografia) > 0 && (
        <RichTextSection
          tag_id="biografia"
          title={intl.formatMessage(messages.biografia)}
          data={content.biografia}
        />
      )}

      {contentFolderHasItems(content, 'foto-e-attivita-politica') && (
        <Gallery
          content={content}
          folder_name="foto-e-attivita-politica"
          title={intl.formatMessage(messages.foto_attivita_politica)}
          title_type="h3"
        />
      )}

      {/* {strutture.length > 0 && (
        <div className="mb-5 mt-3">
          <h5>{intl.formatMessage(messages.responsabile_di)}</h5>
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
            {strutture.map((item, i) => (
              <OfficeCard key={item['@id']} office={item} />
            ))}
          </div>
        </div>
      )} */}
    </>
  );
};

export default PersonaRuolo;
