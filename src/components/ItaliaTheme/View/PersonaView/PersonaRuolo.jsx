import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichTextSection,
  RichText,
  // OfficeCard,
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

  // Not shown in wireframes, somehow
  // const strutture = useMemo(() => {
  //   return incarichiData?.incarichiAttivi?.reduce((acc, val) => {
  //     if (val?.responsabile_struttura?.length > 0)
  //       return [...acc, ...val.responsabile_struttura];
  //     return acc;
  //   }, []);
  // }, [incarichiData]);
  // const uffici = useMemo(() => {
  //   return incarichiData?.incarichiAttivi?.reduce((acc, val) => {
  //     if (val?.unita_organizzativa?.length > 0)
  //       return [...acc, ...val.unita_organizzativa];
  //     return acc;
  //   }, []);
  // }, [incarichiData]);

  return content?.incarichi_persona?.length > 0 ? (
    <>
      {content.incarichi_persona.slice(0, 1).map((inc) => (
        <>
          <RichTextSection
            tag_id="incarico"
            title={intl.formatMessage(messages.ruolo)}
          >
            <div className="font-serif">{inc.title}</div>
          </RichTextSection>
          <RichTextSection
            tag_id="tipologia_incarico"
            title={intl.formatMessage(messages.tipologia_incarico)}
          >
            <div className="font-serif">{inc.tipologia_incarico.title}</div>
          </RichTextSection>
          {richTextHasContent(inc.compensi) && (
            <RichTextSection
              tag_id="compensi"
              title={intl.formatMessage(messages.compensi)}
              content={inc.compensi}
            />
          )}
          <RichTextSection
            tag_id="data_insediamento"
            title={intl.formatMessage(messages.data_insediamento)}
          >
            <div className="font-serif">
              {viewDate(intl.locale, inc.data_inizio_incarico, 'DD-MM-Y')}
            </div>
          </RichTextSection>
        </>
      ))}
      {/* {incarichiData?.incarichiInattivi?.map((inc) => (
        <p key={inc['@id']}>
          <strong>
            {intl.formatMessage(messages.data_conclusione_incarico, {
              incarico: inc.title,
            })}
            :
          </strong>{' '}
          {viewDate(intl.locale, inc?.data_conclusione_incarico, 'DD-MM-Y')}
        </p>
      ))} */}
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
      {richTextHasContent(content?.biografia) > 0 && (
        <div className="mb-5 mt-3">
          <RichText
            title_size="h5"
            title={intl.formatMessage(messages.biografia)}
            content={content.biografia}
          />
        </div>
      )}

      {contentFolderHasItems(content, 'foto-e-attivita-politica') && (
        <Gallery
          content={content}
          folder_name="foto-e-attivita-politica"
          title={intl.formatMessage(messages.foto_attivita_politica)}
          title_type="h5"
        />
      )}
      {/* Not shown in wireframes, somehow */}
      {/* {uffici.length > 0 && (
        <div className="mb-5 mt-3">
          <h4>{intl.formatMessage(messages.organizzazione_riferimento)}</h4>
          <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
            {uffici.map((item, i) => (
              <OfficeCard key={item['@id']} office={item} />
            ))}
          </div>
        </div>
      )}

      {strutture.length > 0 && (
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
  ) : null;
};

export default PersonaRuolo;
