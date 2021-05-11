/**
 * UOView view component.
 * @module components/theme/View/UOView
 */

import React, { createRef, useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import PropTypes from 'prop-types';
import {
  Attachments,
  Locations,
  GenericCard,
  HelpBox,
  Metadata,
  OfficeCard,
  PageHeader,
  RelatedArticles,
  RelatedItems,
  SideMenu,
  ContentImage,
  UOPlaceholderAfterContent,
  RichText,
  RelatedItemInEvidence,
  richTextHasContent,
} from '@italia/components/ItaliaTheme/View';

import { Chip, ChipLabel } from 'design-react-kit/dist/design-react-kit';
import ContactLink from '../Commons/ContactLink';

const messages = defineMessages({
  cosa_fa: {
    id: 'cosa_fa',
    defaultMessage: 'Cosa fa',
  },
  competenze: {
    id: 'competenze',
    defaultMessage: 'Competenze',
  },
  struttura: {
    id: 'struttura',
    defaultMessage: 'Struttura',
  },
  tipologia_organizzazione: {
    id: 'tipologia_organizzazione',
    defaultMessage: 'Tipologia organizzazione',
  },
  legami_altre_strutture: {
    id: 'legami_altre_strutture',
    defaultMessage: 'Servizi o uffici di riferimento',
  },
  assessore_riferimento: {
    id: 'assessore_riferimento',
    defaultMessage: 'Assessore di riferimento',
  },
  responsabile: {
    id: 'responsabile',
    defaultMessage: 'Responsabile',
  },
  persone_struttura: {
    id: 'persone_struttura',
    defaultMessage: 'Persone',
  },
  uo_related_news: {
    id: 'uo_related_news',
    defaultMessage: 'Notizie in evidenza',
  },
  servizi_offerti: {
    id: 'servizi_offerti',
    defaultMessage: 'Servizi',
  },
  contatti: {
    id: 'contatti',
    defaultMessage: 'Contatti',
  },
  related_items: {
    id: 'related_items',
    defaultMessage: 'Contenuti correlati',
  },
  orario_pubblico: {
    id: 'orario_pubblico',
    defaultMessage: 'Orario per il pubblico',
  },
  email_sede: {
    id: 'email_sede',
    defaultMessage: 'E-mail',
  },
  pec_sede: {
    id: 'pec_sede',
    defaultMessage: 'PEC',
  },
  telefono_sede: {
    id: 'telefono_sede',
    defaultMessage: 'Telefono',
  },
  fax_sede: {
    id: 'fax_sede',
    defaultMessage: 'Fax',
  },
  website: {
    id: 'website',
    defaultMessage: 'Sito web',
  },
  altre_sedi: {
    id: 'uo_altre_sedi',
    defaultMessage: 'Altre sedi',
  },
  documenti: {
    id: 'uo_documenti',
    defaultMessage: 'Documenti',
  },
});

/**
 * UOView view component class.
 * @function UOView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const UOView = ({ content }) => {
  const intl = useIntl();
  let documentBody = createRef();
  const [sideMenuElements, setSideMenuElements] = useState(null);

  useEffect(() => {
    if (documentBody.current && __CLIENT__) {
      setSideMenuElements(documentBody.current);
    }
  }, [documentBody]);

  return (
    <>
      <div className="container px-4 my-4 uo-view">
        <PageHeader
          content={content}
          readingtime={null}
          showreadingtime={false}
          showdates={false}
          showtassonomiaargomenti={true}
        />
        {/* HEADER IMAGE */}
        <ContentImage content={content} position="afterHeader" />

        <div className="row border-top row-column-border row-column-menu-left">
          <aside className="col-lg-4">
            {__CLIENT__ && <SideMenu data={sideMenuElements} />}
          </aside>
          <section
            ref={documentBody}
            className="col-lg-8 it-page-sections-container"
          >
            {/* HEADER IMAGE */}
            <ContentImage content={content} position="documentBody" />

            {/*** COSA FA ***/}
            {richTextHasContent(content?.competenze) && (
              <article
                id="cosa-fa"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-cosa-fa" className="mb-3">
                  {intl.formatMessage(messages.cosa_fa)}
                </h4>
                <div className="mb-5 mt-3">
                  {/* <h5>{intl.formatMessage(messages.competenze)}</h5> //rimosso il titolo 'competenze' perchè è l'unico sottotitolo di 'cosa fa' e ci sarebbero sempre due titoli, un po inutili*/}
                  <RichText content={content.competenze} />
                </div>
              </article>
            )}

            {/*** STRUTTURA ***/}
            {(content?.legami_con_altre_strutture?.length > 0 ||
              content?.responsabile?.length > 0 ||
              content?.tipologia_organizzazione ||
              content?.assessore_riferimento?.length > 0) && (
              <article
                id="struttura"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-struttura" className="mb-3">
                  {intl.formatMessage(messages.struttura)}
                </h4>
                {content.legami_con_altre_strutture?.length > 0 && (
                  <div className="mb-5 mt-3">
                    <h5>
                      {intl.formatMessage(messages.legami_altre_strutture)}
                    </h5>
                    <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal mb-3">
                      {content.legami_con_altre_strutture.map((item, _i) => (
                        <OfficeCard key={item['@id']} office={item} />
                      ))}
                    </div>
                  </div>
                )}
                {content.responsabile?.length > 0 && (
                  <div className="mb-5 mt-3">
                    <h5>{intl.formatMessage(messages.responsabile)}</h5>
                    {content.responsabile.map((item, i) => (
                      <Link
                        to={flattenToAppURL(item['@id'])}
                        key={item['@id']}
                        title={item.title}
                        className="text-decoration-none  mr-2"
                      >
                        <Chip
                          color="primary"
                          disabled={false}
                          large={false}
                          simple
                          tag="div"
                        >
                          <ChipLabel tag="span">{item.title}</ChipLabel>
                        </Chip>
                      </Link>
                    ))}
                  </div>
                )}
                {content.tipologia_organizzazione?.title && (
                  <div className="mb-5 mt-3">
                    <h5>
                      {intl.formatMessage(messages.tipologia_organizzazione)}
                    </h5>
                    <p className="text-serif">
                      {content.tipologia_organizzazione.title}
                    </p>
                  </div>
                )}
                {content.assessore_riferimento?.length > 0 && (
                  <div className="mb-5 mt-3">
                    <h5>
                      {intl.formatMessage(messages.assessore_riferimento)}
                    </h5>
                    {content.assessore_riferimento.map((item, _i) => (
                      <Link
                        to={flattenToAppURL(item['@id'])}
                        key={item['@id']}
                        title={item.title}
                        className="text-decoration-none mr-2"
                      >
                        <Chip
                          color="primary"
                          disabled={false}
                          large={false}
                          simple
                          tag="div"
                        >
                          <ChipLabel tag="span">{item.title}</ChipLabel>
                        </Chip>
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            )}

            {/*** PERSONE ***/}
            {content?.persone_struttura?.length > 0 && (
              <article
                id="persone-struttura"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-persone-struttura">
                  {intl.formatMessage(messages.persone_struttura)}
                </h4>
                {content.persone_struttura.map((item, _i) => (
                  <Link
                    to={flattenToAppURL(item['@id'])}
                    key={item['@id']}
                    title={item.title}
                    className="text-decoration-none mr-2"
                  >
                    <Chip
                      color="primary"
                      disabled={false}
                      large={false}
                      simple
                      tag="div"
                    >
                      <ChipLabel tag="span">{item.title}</ChipLabel>
                    </Chip>
                  </Link>
                ))}
              </article>
            )}

            {/*** SERVIZI ***/}
            {content?.servizi_offerti?.length > 0 && (
              <RelatedArticles
                id="related-services"
                items={content.servizi_offerti}
                title={intl.formatMessage(messages.servizi_offerti)}
              />
            )}

            {/*** CONTATTI ***/}
            {(content?.sede?.length > 0 ||
              content?.sedi_secondarie?.length > 0 ||
              richTextHasContent(content?.contact_info) ||
              content?.geolocation?.latitude > 0 ||
              content?.geolocation?.longitude > 0 ||
              content?.nome_sede?.length > 0 ||
              content?.street?.length > 0 ||
              content?.city?.length > 0 ||
              content?.zip_code?.length > 0 ||
              richTextHasContent(content?.orario_pubblico) ||
              content?.telefono?.length > 0 ||
              content?.fax?.length > 0 ||
              content?.web?.length > 0 ||
              content?.email?.length > 0 ||
              content?.pec?.length > 0) && (
              <article
                id="contatti"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-contatti" className="mb-3">
                  {intl.formatMessage(messages.contatti)}
                </h4>

                {(content.geolocation?.latitude > 0 ||
                  content?.geolocation?.longitude > 0 ||
                  content?.sede?.length > 0 ||
                  content?.nome_sede?.length > 0 ||
                  content?.street?.length > 0 ||
                  content?.city?.length > 0 ||
                  content?.zip_code?.length > 0 ||
                  content?.quartiere?.length > 0 ||
                  content?.circoscrizione?.length > 0) && (
                  <div className="mb-5 mt-3">
                    <Locations
                      content={content}
                      locations={content.sede ?? []}
                      load={true}
                      details_link={false}
                    />
                  </div>
                )}
                {richTextHasContent(content.contact_info) && (
                  <div className="mb-5 mt-3">
                    <RichText content={content.contact_info} />
                  </div>
                )}
                {richTextHasContent(content.orario_pubblico) && (
                  <div className="mb-5 mt-3">
                    <h5>{intl.formatMessage(messages.orario_pubblico)}</h5>
                    <RichText content={content.orario_pubblico} />
                  </div>
                )}
                <dl className="contatti-list">
                  {content.telefono && (
                    <div className="text-serif contatti">
                      <dt>{intl.formatMessage(messages.telefono_sede)}: </dt>
                      <dd>
                        <ContactLink tel={content.telefono} label={false} />
                      </dd>
                    </div>
                  )}

                  {content.fax && (
                    <div className="text-serif contatti">
                      <dt>{intl.formatMessage(messages.fax_sede)}: </dt>
                      <dd>
                        <ContactLink tel={content.fax} label={false} />
                      </dd>
                    </div>
                  )}

                  {content.email && (
                    <div className="text-serif contatti">
                      <dt>{intl.formatMessage(messages.email_sede)}: </dt>
                      <dd>
                        <ContactLink email={content.email} label={false} />
                      </dd>
                    </div>
                  )}
                  {content.pec && (
                    <div className="text-serif contatti">
                      <dt>{intl.formatMessage(messages.pec_sede)}: </dt>
                      <dd>
                        <ContactLink email={content.pec} label={false} />
                      </dd>
                    </div>
                  )}
                  {content.web && (
                    <div className="text-serif contatti">
                      <dt>{intl.formatMessage(messages.website)}: </dt>
                      <dd>
                        <a
                          href={
                            content.web.match(/^(http:\/\/|https:\/\/)/gm)
                              ? content.web
                              : `http://${content.web}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {content.web}
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>
                {content.sedi_secondarie?.length > 0 && (
                  <div className="mb-5 mt-5">
                    <h5>{intl.formatMessage(messages.altre_sedi)}</h5>
                    <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                      {content.sedi_secondarie.map((item, _i) => (
                        <GenericCard
                          key={item['@id']}
                          item={item}
                          showimage={false}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </article>
            )}

            {/* DOCUMENTI */}
            <Attachments
              title={intl.formatMessage(messages.documenti)}
              content={content}
              folder_name={'allegati'}
            />

            {/* ULTERIORI INFORMAZIONI */}
            <Metadata content={content} showTags={false}>
              {richTextHasContent(content?.ulteriori_informazioni) && (
                <HelpBox text={content.ulteriori_informazioni} />
              )}
            </Metadata>
          </section>
        </div>
      </div>
      <UOPlaceholderAfterContent content={content} />
      <RelatedItems content={content} list={content?.related_news ?? []} />
      <RelatedItemInEvidence content={content} />
    </>
  );
};

UOView.propTypes = {
  content: PropTypes.shape({
    assessore_riferimento: PropTypes.array,
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
    competenze: PropTypes.shape({
      data: PropTypes.string,
    }),
    description: PropTypes.string,
    geolocation: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
    immagine: PropTypes.shape({
      download: PropTypes.string,
    }),
    legami_con_altre_strutture: PropTypes.array,
    related_news: PropTypes.array,
    persone_struttura: PropTypes.array,
    responsabile: PropTypes.array,
    sedi: PropTypes.array,
    contact_info: PropTypes.shape({
      data: PropTypes.string,
    }),
    servizi_offerti: PropTypes.array,
    tassonomia_argomenti: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
    tipologia_organizzazione: PropTypes.shape({
      title: PropTypes.string,
      token: PropTypes.string,
    }).isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default UOView;
