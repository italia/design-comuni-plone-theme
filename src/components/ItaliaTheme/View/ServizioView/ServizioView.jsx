/**
 * ServizioView view component.
 * @module components/theme/View/ServizioView
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
  richTextHasContent,
  OfficeCard,
  GenericCard,
  Metadata,
  ContentImage,
  SmallVenue,
  HelpBox,
  ServizioPlaceholderAfterContent,
  RelatedItemInEvidence,
} from '@italia/components/ItaliaTheme/View';

import { Card, CardBody } from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  service_not_active: {
    id: 'service_not_active',
    defaultMessage: 'Il servizio non è attivo',
  },
  descrizione_estesa: {
    id: 'descrizione_estesa',
    defaultMessage: 'Descrizione estesa',
  },
  a_chi_si_rivolge: {
    id: 'a_chi_si_rivolge',
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
  tempi_e_scadenze: {
    id: 'tempi_e_scadenze',
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
 * ServizioView view component class.
 * @function ServizioView
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
          showdates={false}
          showtassonomiaargomenti={true}
        />
        {/* HEADER IMAGE */}
        <ContentImage content={content} position="afterHeader" />

        <div className="row border-top row-column-border row-column-menu-left">
          <aside className="col-lg-4 ">
            <SideMenu data={sideMenuElements} />
          </aside>
          <section
            className="col-lg-8 it-page-sections-container"
            ref={documentBody}
          >
            {/* HEADER IMAGE */}
            <ContentImage content={content} position="documentBody" />
            {/* STATO DEL SERVIZIO */}
            {content.stato_servizio &&
              richTextHasContent(content.motivo_stato_servizio) && (
                <RichTextArticle
                  content={content.motivo_stato_servizio}
                  field="motivo_stato_servizio"
                  tag_id={'text-motivo-stato-servizio'}
                  title={intl.formatMessage(messages.service_not_active)}
                />
              )}
            {/* TEXT BODY */}
            <RichTextArticle
              content={content.descrizione_estesa}
              tag_id={'text-body'}
              field="cos_e"
              title="Cos'è"
              show_title={false}
            />

            {/* A CHI SI RIVOLGE */}
            {(richTextHasContent(content.a_chi_si_rivolge) ||
              richTextHasContent(content.chi_puo_presentare) ||
              richTextHasContent(content.copertura_geografica)) && (
              <RichTextArticle
                content={content.a_chi_si_rivolge}
                tag_id={'text-a_chi_si_rivolge'}
                field="a_chi_si_rivolge,chi_puo_presentare,copertura_geografica"
                title={intl.formatMessage(messages.a_chi_si_rivolge)}
              >
                <RichText
                  title={intl.formatMessage(messages.chi_puo_presentare)}
                  title_size="h5"
                  content={content.chi_puo_presentare}
                />

                <RichText
                  title={intl.formatMessage(messages.copertura_geografica)}
                  title_size="h5"
                  content={content.copertura_geografica}
                />
              </RichTextArticle>
            )}

            {/* ACCEDERE AL SERVIZIO */}
            {(richTextHasContent(content.come_si_fa) ||
              richTextHasContent(content.cosa_si_ottiene) ||
              richTextHasContent(content.procedure_collegate) ||
              richTextHasContent(content.canale_digitale) ||
              richTextHasContent(content.autenticazione) ||
              richTextHasContent(content.prenota_appuntamento) ||
              content.dove_rivolgersi?.length > 0 ||
              richTextHasContent(content.dove_rivolgersi_extra)) && (
              <RichTextArticle
                title={intl.formatMessage(messages.accedere_al_servizio)}
                tag_id="accedere_al_servizio"
              >
                <RichText
                  content={content.come_si_fa}
                  title={intl.formatMessage(messages.come_si_fa)}
                />

                <RichText
                  content={content.cosa_si_ottiene}
                  title={intl.formatMessage(messages.cosa_si_ottiene)}
                />

                <RichText
                  content={content.procedure_collegate}
                  title={intl.formatMessage(messages.procedure_collegate)}
                />

                <RichText
                  content={content.canale_digitale}
                  title={intl.formatMessage(messages.canale_digitale)}
                />

                {!richTextHasContent(content.canale_digitale) &&
                  richTextHasContent(content.autenticazione) && (
                    <h5 className="mt-4">
                      {intl.formatMessage(messages.canale_digitale)}
                    </h5>
                  )}

                <RichText
                  content={content.autenticazione}
                  title={intl.formatMessage(messages.autenticazione)}
                  title_size="h6"
                />

                {(content.dove_rivolgersi?.length > 0 ||
                  richTextHasContent(content.dove_rivolgersi_extra) ||
                  richTextHasContent(content.prenota_appuntamento)) && (
                  <RichText
                    title={intl.formatMessage(messages.dove_rivolgersi)}
                  >
                    <RichText content={content.prenota_appuntamento} />

                    {content.dove_rivolgersi?.length > 0 && (
                      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                        {content.dove_rivolgersi.map((item, i) => (
                          <SmallVenue key={item['@id']} venue={item} />
                        ))}
                      </div>
                    )}

                    <RichText content={content.dove_rivolgersi_extra} />
                  </RichText>
                )}
              </RichTextArticle>
            )}
            {/* COSA SERVE */}
            {richTextHasContent(content.cosa_serve) && (
              <RichTextArticle
                tag_id={'text-cosa_serve'}
                title={intl.formatMessage(messages.cosa_serve)}
                field="cosa_serve"
              >
                <HelpBox text={content.cosa_serve} />
              </RichTextArticle>
            )}

            {/* COSTI E VINCOLI */}
            {(richTextHasContent(content.costi) ||
              richTextHasContent(content.vincoli)) && (
              <>
                <RichTextArticle
                  tag_id={'costi-e-vincoli'}
                  title={intl.formatMessage(messages.costi_e_vincoli)}
                >
                  <RichText
                    title={intl.formatMessage(messages.costi)}
                    content={content.costi}
                  />

                  <RichText
                    title={intl.formatMessage(messages.vincoli)}
                    content={content.vincoli}
                  />
                </RichTextArticle>
              </>
            )}

            {/* TEMPI E SCADENZE */}
            <RichTextArticle
              content={content.tempi_e_scadenze}
              add_class="style_ol_list"
              tag_id={'text-tempi_e_scadenze'}
              title={intl.formatMessage(messages.tempi_e_scadenze)}
            />

            {/* CASI PARTICOLARI */}
            <RichTextArticle
              content={content.casi_particolari}
              tag_id={'text-casi_particolari'}
              title={intl.formatMessage(messages.casi_particolari)}
            />

            {/* CONTATTI */}
            {(content.ufficio_responsabile?.length > 0 ||
              content.area.length > 0) && (
              <RichTextArticle
                tag_id="contatti"
                title={intl.formatMessage(messages.contatti)}
                field="ufficio_responsabile,area"
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

            {/* ALTRI DOCUMENTI */}
            {content.altri_documenti?.length > 0 && (
              <RichTextArticle
                tag_id="altri_documenti_items"
                title={intl.formatMessage(messages.altri_documenti)}
              >
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
              </RichTextArticle>
            )}

            {/* SITI ESTERNI */}
            {richTextHasContent(content.link_siti_esterni) && (
              <RichTextArticle
                tag_id="link-esterni"
                title={intl.formatMessage(messages.link_siti_esterni)}
              >
                <Card
                  className="card card-teaser shadow p-0 mt-3 rounded link-esterni"
                  noWrapper={true}
                  tag="div"
                >
                  <CardBody tag="div">
                    <RichText
                      add_class="p-4 pt-0"
                      content={content.link_siti_esterni}
                    />
                  </CardBody>
                </Card>
              </RichTextArticle>
            )}

            {/* ALLEGATI */}
            <Attachments content={content} folder_name={'allegati'} />

            {/* MODULISTICA */}
            <Attachments
              content={content}
              folder_name={'modulistica'}
              title={intl.formatMessage(messages.modulistica)}
            />

            {/* CORRELATI */}
            {(content.servizi_collegati?.length > 0 ||
              /*content.related_news?.length > 0 ||*/
              content.relatedItems?.length > 0) && (
              <RichTextArticle
                tag_id="correlati"
                title={intl.formatMessage(messages.related_items)}
              >
                {content.servizi_collegati?.length > 0 && (
                  <div className="mb-4">
                    {/* <h5>{intl.formatMessage(messages.servizi_collegati)}</h5> */}
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
                    <h5>{intl.formatMessage(messages.related_news)}</h5>
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
                    {/* <h5>{intl.formatMessage(messages.related_items)}</h5> */}

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

            {/* ULTERIORI INFORMAZIONI */}
            <Metadata content={content}>
              {richTextHasContent(content.ulteriori_informazioni) && (
                <HelpBox text={content.ulteriori_informazioni} />
              )}
            </Metadata>
          </section>
        </div>
      </div>
      <ServizioPlaceholderAfterContent content={content} />
      <RelatedItemInEvidence content={content} />
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
    a_chi_si_rivolge: PropTypes.shape({
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
    canale_digitale: PropTypes.shape({
      data: PropTypes.string,
    }),
    autenticazione: PropTypes.shape({
      data: PropTypes.string,
    }),
    dove_rivolgersi_extra: PropTypes.shape({
      data: PropTypes.string,
    }),
    prenota_appuntamento: PropTypes.shape({
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
    tempi_e_scadenze: PropTypes.shape({
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
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
  }),
};

export default ServizioView;
