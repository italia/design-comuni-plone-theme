import React, { useEffect, useMemo } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  richTextHasContent,
  RichTextArticle,
  RichText,
  // OfficeCard,
  Gallery,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import {
  contentFolderHasItems,
  viewDate,
} from 'design-comuni-plone-theme/helpers';
import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { useDispatch, useSelector } from 'react-redux';

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
  tipologia_persona: {
    id: 'tipologia_persona',
    defaultMessage: 'Tipologia di persona',
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

// TODO: rework this when taxonomies available and official wireframes
// appear in the wild. Internal previews show no understanding of their
// own guidelines (i.e. incarichi multipli)
const PersonaRuolo = ({ content }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const fetchedIncarichi = useSelector((state) => state.content.subrequests);
  const incarichi = content?.incarichi?.map((incarico) => {
    let url = flattenToAppURL(incarico['@id']);
    return {
      key: `incarico${url}`,
      url: url,
    };
  });

  useEffect(() => {
    incarichi.forEach((incarico) => {
      if (
        !fetchedIncarichi?.[incarico.key]?.loading &&
        !fetchedIncarichi?.[incarico.key]?.loaded
      ) {
        dispatch(getContent(incarico.url, null, incarico.key));
      }
    });

    return () =>
      incarichi.forEach((incarico) => {
        dispatch(resetContent(incarico.key));
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, content?.incarichi]);

  const incarichiData = useMemo(() => {
    return incarichi.reduce(
      (acc, val) => {
        const incarico = fetchedIncarichi?.[val.key]?.data;
        if (incarico) {
          if (incarico?.data_conclusione_incarico) {
            return {
              ...acc,
              incarichiInattivi: [...acc.incarichiInattivi, incarico],
            };
          } else
            return {
              ...acc,
              incarichiAttivi: [...acc.incarichiAttivi, incarico],
            };
        }
        return acc;
      },
      {
        incarichiAttivi: [],
        incarichiInattivi: [],
      },
    );
  }, [fetchedIncarichi, incarichi]);
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

  return (
    <>
      <RichTextArticle
        tag_id="incarico"
        title={intl.formatMessage(messages.ruolo)}
      >
        <div className="mb-5">
          {incarichiData?.incarichiAttivi?.map((inc) => (
            /* TODO: usare tassonomia quando disponibile
              definire per bene come li vogliamo visualizzare,
              non vale piu' la vecchia visualizzazione
          */
            <div>
              {inc.title}
              <p>
                <strong>
                  {intl.formatMessage(messages.data_insediamento)}
                  {': '}
                </strong>
                {viewDate(intl.locale, inc?.data_inizio_incarico, 'DD-MM-Y')}
              </p>
              {inc?.data_insediamento && (
                <p>
                  <strong>
                    {intl.formatMessage(messages.data_insediamento)}
                    {': '}
                  </strong>
                  {viewDate(intl.locale, inc?.data_insediamento, 'DD-MM-Y')}
                </p>
              )}
            </div>
          ))}
          {incarichiData?.incarichiInattivi?.map((inc) => (
            <p>
              <strong>
                {intl.formatMessage(messages.data_conclusione_incarico, {
                  incarico: inc.title,
                })}
                :
              </strong>{' '}
              {viewDate(intl.locale, inc?.data_conclusione_incarico, 'DD-MM-Y')}
            </p>
          ))}
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
        </div>
      </RichTextArticle>
      <RichTextArticle
        tag_id="compensi"
        title={intl.formatMessage(messages.compensi)}
      >
        {incarichiData?.incarichiAttivi?.map((inc) => (
          <RichText title_size="h5" title={''} content={inc.compensi} />
        ))}
      </RichTextArticle>
      <RichTextArticle
        tag_id="data_insediamento"
        title={intl.formatMessage(messages.data_insediamento)}
      >
        {incarichiData?.incarichiAttivi?.length === 1 &&
          viewDate(
            intl.locale,
            incarichiData?.incarichiAttivi?.[0]?.data_inizio_incarico,
            'DD-MM-Y',
          )}
      </RichTextArticle>
      {/* {content?.tipologia_persona && (
        <div className="mb-5 mt-3">
          <h5>{intl.formatMessage(messages.tipologia_persona)}</h5>
          {content?.tipologia_persona?.title}
        </div>
      )} */}
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
    </>
  );
};

export default PersonaRuolo;
