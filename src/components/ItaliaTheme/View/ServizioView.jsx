/**
 * NewsItemView view component.
 * @module components/theme/View/NewsItemView
 */

import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  Attachments,
  SideMenu,
  PageHeader,
  RichTextArticle,
  RichText,
  OfficeCard,
  GenericCard,
  Metadata,
  NewsCard,
  WideImage,
  SmallVenue,
  HelpBox,
} from '@italia/components/ItaliaTheme/View';

import {
  LinkList,
  LinkListItem,
  Icon,
} from 'design-react-kit/dist/design-react-kit';
import {
  Card,
  CardBody,
  CardTitle,
} from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  service_not_active: {
    id: 'service_not_active',
    defaultMessage: 'Il servizio non è attivo',
  },
  descrizione_estesa: {
    id: 'descrizione_estesa',
    defaultMessage: 'Descrizione estesa',
  },
  descrizione_destinatari: {
    id: 'descrizione_destinatari',
    defaultMessage: 'A chi si rivolge',
  },
  accedere_al_servizio: {
    id: 'accedere_al_servizio',
    defaultMessage: 'Accedere al servizio',
  },
  chi_puo_presentare: {
    id: 'chi_puo_presentare',
    defaultMessage: 'Chi può presentare',
  },
  copertura_geografica: {
    id: 'copertura_geografica',
    defaultMessage: 'Copertura geografica del servizio',
  },
  come_si_fa: {
    id: 'come_si_fa',
    defaultMessage: 'Come si fa',
  },
  cosa_si_ottiene: {
    id: 'cosa_si_ottiene',
    defaultMessage: 'Cosa si ottiene',
  },
  procedure_collegate: {
    id: 'procedure_collegate',
    defaultMessage: "Procedure collegate all'esito",
  },
  canale_digitale: {
    id: 'canale_digitale',
    defaultMessage: 'Canale digitale',
  },
  autenticazione: {
    id: 'autenticazione',
    defaultMessage: 'Metodi di autenticazione al servizio',
  },
  dove_rivolgersi: {
    id: 'dove_rivolgersi',
    defaultMessage: 'Dove rivolgersi',
  },
  fasi_scadenze: {
    id: 'fasi_scadenze',
    defaultMessage: 'Tempi e scadenze',
  },
  cosa_serve: {
    id: 'cosa_serve',
    defaultMessage: 'Cosa serve',
  },
  costi_e_vincoli: {
    id: 'costi_e_vincoli',
    defaultMessage: 'Costi e vincoli',
  },
  costi: {
    id: 'costi',
    defaultMessage: 'Costi',
  },
  vincoli: {
    id: 'vincoli',
    defaultMessage: 'Vincoli',
  },
  casi_particolari: {
    id: 'casi_particolari',
    defaultMessage: 'Casi particolari',
  },
  contatti: {
    id: 'contatti',
    defaultMessage: 'Contatti',
  },

  link_siti_esterni: {
    id: 'link_siti_esterni',
    defaultMessage: 'Link utili',
  },
  altri_documenti: {
    id: 'altri_documenti',
    defaultMessage: 'Documenti correlati',
  },
  box_aiuto: {
    id: 'box_aiuto',
    defaultMessage: 'Ulteriori informazioni',
  },
  related_news: {
    id: 'related_news',
    defaultMessage: 'Notizie collegate',
  },
  related_items: {
    id: 'related_items',
    defaultMessage: 'Contenuti correlati',
  },
  servizi_collegati: {
    id: 'servizi_collegati',
    defaultMessage: 'Servizi collegati',
  },

  modulistica: {
    id: 'modulistica',
    defaultMessage: 'Modulistica',
  },
});

/**
 * PersonaView view component class.
 * @function PersonaView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const ServizioView = ({ content }) => {
  const intl = useIntl();
  let documentBody = createRef();
  const [sideMenuElements, setSideMenuElements] = useState(null);

  useEffect(() => {
    if (documentBody.current) {
      if (__CLIENT__) {
        setSideMenuElements(documentBody.current);
      }
    }
  }, [documentBody]);

  return (
    <>
      <div className="container px-4 my-4 servizio-view">
        <PageHeader
          content={content}
          readingtime={null}
          showreadingtime={false}
          imageinheader={true}
          imageinheader_field={'foto_persona'}
          showdates={false}
          showtassonomiaargomenti={true}
        />
        {(content.image || content.image_caption) && (
          <WideImage
            title={content.title}
            image={content.image}
            caption={content.image_caption}
          />
        )}
        <div className="row border-top row-column-border row-column-menu-left">
          <aside className="col-lg-4">
            <SideMenu data={sideMenuElements} />
          </aside>
          <section
            className="col-lg-8 it-page-sections-container"
            ref={documentBody}
          >
            {content.stato_servizio && content.motivo_stato_servizio?.data && (
              <RichTextArticle
                content={content.motivo_stato_servizio.data}
                tag_id={'text-motivo-stato-servizio'}
                title={intl.formatMessage(messages.service_not_active)}
              />
            )}
            {content.descrizione_estesa?.data && (
              <RichTextArticle
                content={content.descrizione_estesa.data}
                tag_id={'text-body'}
                title="Cos'è"
                show_title={false}
              />
            )}
            {(content.descrizione_destinatari?.data ||
              content.chi_puo_presentare ||
              content.copertura_geografica?.data) && (
              <RichTextArticle
                content={content.descrizione_destinatari?.data}
                tag_id={'text-descrizione_destinatari'}
                title={intl.formatMessage(messages.descrizione_destinatari)}
              >
                {content.chi_puo_presentare?.data && (
                  <RichText
                    title={intl.formatMessage(messages.chi_puo_presentare)}
                    title_size="h5"
                    content={content.chi_puo_presentare.data}
                  />
                )}

                {content.copertura_geografica?.data && (
                  <RichText
                    title={intl.formatMessage(messages.copertura_geografica)}
                    title_size="h5"
                    content={content.copertura_geografica.data}
                  />
                )}
              </RichTextArticle>
            )}

            {(content.come_si_fa?.data ||
              content.cosa_si_ottiene?.data ||
              content.procedure_collegate?.data ||
              content.canale_digitale?.data ||
              content.autenticazione ||
              content.canale_fisico?.data ||
              content.canale_fisico_prenotazione?.data ||
              content.sedi_e_luoghi?.length > 0) && (
              <RichTextArticle
                title={intl.formatMessage(messages.accedere_al_servizio)}
                tag_id="accedere_al_servizio"
              >
                {content.come_si_fa?.data && (
                  <RichText
                    content={content.come_si_fa.data}
                    title={intl.formatMessage(messages.come_si_fa)}
                  />
                )}

                {content.cosa_si_ottiene?.data && (
                  <RichText
                    content={content.cosa_si_ottiene.data}
                    title={intl.formatMessage(messages.cosa_si_ottiene)}
                  />
                )}

                {content.procedure_collegate?.data && (
                  <RichText
                    content={content.procedure_collegate.data}
                    title={intl.formatMessage(messages.procedure_collegate)}
                  />
                )}

                {(content.canale_digitale?.data || content.autenticazione) && (
                  <div className="mt-4">
                    {content.canale_digitale?.data && (
                      <>
                        <h5>{intl.formatMessage(messages.canale_digitale)}</h5>
                        <div
                          className="text-serif"
                          dangerouslySetInnerHTML={{
                            __html: content.canale_digitale.data,
                          }}
                        />
                      </>
                    )}

                    {content.autenticazione?.data && (
                      <RichText
                        title={intl.formatMessage(messages.autenticazione)}
                        title_size="h6"
                        content={content.copertura_geografica.data}
                      />
                    )}
                  </div>
                )}

                {(content.canale_fisico?.data ||
                  content.canale_fisico_prenotazione?.data ||
                  content.sedi_e_luoghi?.length > 0) && (
                  <RichText
                    content={content.canale_fisico.data}
                    title={intl.formatMessage(messages.dove_rivolgersi)}
                  >
                    {content.canale_fisico_prenotazione?.data && (
                      <RichText
                        content={content.canale_fisico_prenotazione.data}
                      />
                    )}

                    {content.sedi_e_luoghi?.length > 0 && (
                      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                        {content.sedi_e_luoghi.map((item, i) => (
                          <SmallVenue key={item['@id']} venue={item} />
                        ))}
                      </div>
                    )}
                  </RichText>
                )}
              </RichTextArticle>
            )}

            {content.cosa_serve?.data && (
              <RichTextArticle
                tag_id={'text-cosa_serve'}
                title={intl.formatMessage(messages.cosa_serve)}
              >
                <HelpBox text={content.cosa_serve} />
              </RichTextArticle>
            )}
            {(content.costi?.data || content.vincoli?.data) && (
              <>
                <RichTextArticle
                  tag_id={'costi-e-vincoli'}
                  title={intl.formatMessage(messages.costi_e_vincoli)}
                >
                  {content.costi?.data && (
                    <RichText
                      title={intl.formatMessage(messages.costi)}
                      title_size="h6"
                      content={content.costi.data}
                    />
                  )}
                  {content.vincoli?.data && (
                    <RichText
                      title={intl.formatMessage(messages.vincoli)}
                      title_size="h6"
                      content={content.vincoli.data}
                    />
                  )}
                </RichTextArticle>
              </>
            )}
            {content.fasi_scadenze?.data && (
              <RichTextArticle
                content={content.fasi_scadenze.data}
                add_class="style_ol_list"
                tag_id={'text-fasi_scadenze'}
                title={intl.formatMessage(messages.fasi_scadenze)}
              />
            )}
            {content.casi_particolari?.data && (
              <RichTextArticle
                content={content.casi_particolari.data}
                tag_id={'text-casi_particolari'}
                title={intl.formatMessage(messages.casi_particolari)}
              />
            )}
            {(content.ufficio_responsabile?.length > 0 ||
              content.area.length > 0) && (
              <RichTextArticle
                tag_id="contatti"
                title={intl.formatMessage(messages.contatti)}
              >
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.ufficio_responsabile?.length > 0 && (
                    <>
                      {content.ufficio_responsabile.map((item, i) => (
                        <OfficeCard key={item['@id']} office={item} />
                      ))}
                    </>
                  )}
                  {content.area?.length > 0 && (
                    <>
                      {content.area.map((item, i) => (
                        <OfficeCard key={item['@id']} office={item} />
                      ))}
                    </>
                  )}
                </div>
              </RichTextArticle>
            )}
            {content.altri_documenti?.length > 0 ? (
              <article
                id="altri_documenti-items"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-altri_documenti-items">
                  {intl.formatMessage(messages.altri_documenti)}
                </h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.altri_documenti.map((item, i) => (
                    <GenericCard
                      show_icon={'it-files'}
                      key={item['@id']}
                      item={item}
                      showimage={false}
                    />
                  ))}
                </div>
              </article>
            ) : null}
            {content.link_siti_esterni?.data && (
              <article
                id="link-esterni"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-link-esterni">
                  {intl.formatMessage(messages.link_siti_esterni)}
                </h4>
                <Card
                  className="card card-teaser shadow p-0 mt-3 rounded link-esterni"
                  noWrapper={true}
                  tag="div"
                >
                  <CardBody tag="div">
                    <div
                      className="text-serif p-4 pt-0"
                      dangerouslySetInnerHTML={{
                        __html: content.link_siti_esterni.data,
                      }}
                    />
                  </CardBody>
                </Card>
              </article>
            )}
            {content?.items?.some((e) => e.id === 'allegati') && (
              <Attachments content={content} folder_name={'allegati'} />
            )}
            {content?.items?.some((e) => e.id === 'modulistica') && (
              <Attachments
                content={content}
                folder_name={'modulistica'}
                title={intl.formatMessage(messages.modulistica)}
              />
            )}
            {(content.servizi_collegati?.length > 0 ||
              /*content.related_news?.length > 0 ||*/
              content.relatedItems?.length > 0) && (
              <RichTextArticle
                tag_id="correlati"
                title={intl.formatMessage(messages.related_items)}
              >
                {content.servizi_collegati?.length > 0 && (
                  <div className="mb-4">
                    <h6>{intl.formatMessage(messages.servizi_collegati)}</h6>
                    <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                      {content.servizi_collegati.map((item, i) => (
                        <GenericCard
                          key={item['@id']}
                          item={item}
                          showimage={false}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* {content.related_news?.length > 0 && (
                  <div className="mb-4">
                    <h6>{intl.formatMessage(messages.related_news)}</h6>
                    <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                      {content.related_news.map((item, i) => (
                        <NewsCard
                          key={item['@id']}
                          id={item['@id']}
                          title={item.title}
                          description={item.description}
                          effective={item.effective}
                          typology={item.typology}
                        />
                      ))}
                    </div>
                  </div>
                )} */}
                {content.relatedItems?.length > 0 && (
                  <div className="mb-4">
                    <h6>{intl.formatMessage(messages.related_items)}</h6>
                    <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                      {content.relatedItems.map((item, i) => (
                        <GenericCard
                          key={item['@id']}
                          item={item}
                          showimage={false}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </RichTextArticle>
            )}
            <Metadata content={content}>
              {content.box_aiuto?.data?.replace(/(<([^>]+)>)/g, '') && (
                <HelpBox text={content.box_aiuto} />
              )}
            </Metadata>
          </section>
        </div>
      </div>
    </>
  );
};

ServizioView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    tassonomia_argomenti: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
    stato_servizio: PropTypes.bool,
    motivo_stato_servizio: PropTypes.shape({
      data: PropTypes.string,
    }),
    descrizione_estesa: PropTypes.shape({
      data: PropTypes.string,
    }),
    descrizione_destinatari: PropTypes.shape({
      data: PropTypes.string,
    }),
    chi_puo_presentare: PropTypes.shape({
      data: PropTypes.string,
    }),
    copertura_geografica: PropTypes.shape({
      data: PropTypes.string,
    }),
    come_si_fa: PropTypes.shape({
      data: PropTypes.string,
    }),
    cosa_si_ottiene: PropTypes.shape({
      data: PropTypes.string,
    }),
    procedure_collegate: PropTypes.shape({
      data: PropTypes.string,
    }),
    canale_digitale: PropTypes.string,
    autenticazione: PropTypes.shape({
      data: PropTypes.string,
    }),
    canale_fisico: PropTypes.shape({
      data: PropTypes.string,
    }),
    canale_fisico_prenotazione: PropTypes.shape({
      data: PropTypes.string,
    }),
    cosa_serve: PropTypes.shape({
      data: PropTypes.string,
    }),
    costi: PropTypes.shape({
      data: PropTypes.string,
    }),
    vincoli: PropTypes.shape({
      data: PropTypes.string,
    }),
    fasi_scadenze: PropTypes.shape({
      data: PropTypes.string,
    }),
    casi_particolari: PropTypes.shape({
      data: PropTypes.string,
    }),
    ufficio_responsabile: PropTypes.array.isRequired,
    area: PropTypes.array.isRequired,
    link_siti_esterni: PropTypes.shape({
      data: PropTypes.string,
    }),
    box_aiuto: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};

export default ServizioView;
