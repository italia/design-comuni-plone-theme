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
  OfficeCard,
  GenericCard,
  Metadata,
  NewsCard,
  WideImage,
  SmallVenue,
} from '@italia/components/ItaliaTheme/View';

import { LinkList, LinkListItem } from 'design-react-kit/dist/design-react-kit';
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
    defaultMessage: 'Destinatari del servizio',
  },
  chi_puo_presentare: {
    id: 'chi_puo_presentare',
    defaultMessage: 'Chi può presentare domanda',
  },
  copertura_geografica: {
    id: 'copertura_geografica',
    defaultMessage: 'Copertura geografica del servizio',
  },
  come_si_fa: {
    id: 'come_si_fa',
    defaultMessage: 'Come si ottiene il servizio',
  },
  cosa_si_ottiene: {
    id: 'cosa_si_ottiene',
    defaultMessage: 'Cosa si ottiene dal servizio',
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
  canale_fisico: {
    id: 'canale_fisico',
    defaultMessage: 'Canale fisico',
  },
  canale_fisico_prenotazione: {
    id: 'canale_fisico_prenotazione',
    defaultMessage: 'Link di prenotazione per il canale fisico',
  },
  fasi_scadenze: {
    id: 'fasi_scadenze',
    defaultMessage: 'Fasi e scadenze per la richiesta del servizio',
  },
  cosa_serve: {
    id: 'cosa_serve',
    defaultMessage: 'Cosa serve per effettuare la richiesta del servizio',
  },
  costi: {
    id: 'costi',
    defaultMessage: 'Costi per la richiesta del servizio',
  },
  vincoli: {
    id: 'vincoli',
    defaultMessage: 'Vincoli per la richiesta del servizio',
  },
  casi_particolari: {
    id: 'casi_particolari',
    defaultMessage:
      'Gestione di casi particolari per la richiesta del servizio',
  },
  ufficio_responsabile: {
    id: 'ufficio_responsabile',
    defaultMessage: 'Ufficio responsabile',
  },
  area: {
    id: 'area',
    defaultMessage: 'Area',
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
  sedi_e_luoghi: {
    id: 'sedi_e_luoghi',
    defaultMessage: 'Dove trovarci',
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
                title={''}
              />
            )}
            {content.descrizione_destinatari?.data && (
              <RichTextArticle
                content={content.descrizione_destinatari.data}
                tag_id={'text-descrizione_destinatari'}
                title={intl.formatMessage(messages.descrizione_destinatari)}
              />
            )}
            {content.chi_puo_presentare?.data && (
              <RichTextArticle
                content={content.chi_puo_presentare.data}
                tag_id={'text-chi_puo_presentare'}
                title={intl.formatMessage(messages.chi_puo_presentare)}
              />
            )}
            {content.copertura_geografica?.data && (
              <RichTextArticle
                content={content.copertura_geografica.data}
                tag_id={'text-copertura_geografica'}
                title={intl.formatMessage(messages.copertura_geografica)}
              />
            )}
            {content.come_si_fa?.data && (
              <RichTextArticle
                content={content.come_si_fa.data}
                tag_id={'text-come_si_fa'}
                title={intl.formatMessage(messages.come_si_fa)}
              />
            )}
            {content.cosa_si_ottiene?.data && (
              <RichTextArticle
                content={content.cosa_si_ottiene.data}
                tag_id={'text-cosa_si_ottiene'}
                title={intl.formatMessage(messages.cosa_si_ottiene)}
              />
            )}
            {content.procedure_collegate?.data && (
              <RichTextArticle
                content={content.procedure_collegate.data}
                tag_id={'text-procedure_collegate'}
                title={intl.formatMessage(messages.procedure_collegate)}
              />
            )}
            {(content.canale_digitale || content.autenticazione) && (
              <article
                id="canale_digitale"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-canale_digitale">
                  {intl.formatMessage(messages.canale_digitale)}
                </h4>
                {content.canale_digitale && (
                  <LinkList tag="div">
                    <LinkListItem tag="a" href={content.canale_digitale}>
                      <span>{content.canale_digitale}</span>
                    </LinkListItem>
                  </LinkList>
                )}

                {content.autenticazione?.data && (
                  <>
                    <strong>
                      {intl.formatMessage(messages.autenticazione)}
                    </strong>
                    <div
                      className="text-serif"
                      dangerouslySetInnerHTML={{
                        __html: content.autenticazione.data,
                      }}
                    />
                  </>
                )}
              </article>
            )}

            {(content.canale_fisico?.data ||
              content.canale_fisico_prenotazione) && (
              <RichTextArticle
                content={content.canale_fisico.data}
                tag_id={'text-fisico'}
                title={intl.formatMessage(messages.canale_fisico)}
              >
                {content.canale_fisico_prenotazione && (
                  <>
                    <strong>
                      {intl.formatMessage(messages.canale_fisico_prenotazione)}
                    </strong>
                    <LinkList tag="div">
                      <LinkListItem
                        tag="a"
                        href={content.canale_fisico_prenotazione}
                      >
                        <span>{content.canale_fisico_prenotazione}</span>
                      </LinkListItem>
                    </LinkList>
                  </>
                )}
              </RichTextArticle>
            )}

            {content.fasi_scadenze?.data && (
              <RichTextArticle
                content={content.fasi_scadenze.data}
                add_class="style_ol_list"
                tag_id={'text-fasi_scadenze'}
                title={intl.formatMessage(messages.fasi_scadenze)}
              />
            )}
            {content.cosa_serve?.data && (
              <RichTextArticle
                content={content.cosa_serve.data}
                tag_id={'text-cosa_serve'}
                title={intl.formatMessage(messages.cosa_serve)}
              />
            )}
            {content.costi?.data && (
              <RichTextArticle
                content={content.costi.data}
                tag_id={'text-costi'}
                title={intl.formatMessage(messages.costi)}
              />
            )}
            {content.vincoli?.data && (
              <RichTextArticle
                content={content.vincoli.data}
                tag_id={'text-vincoli'}
                title={intl.formatMessage(messages.vincoli)}
              />
            )}
            {content.casi_particolari?.data && (
              <RichTextArticle
                content={content.casi_particolari.data}
                tag_id={'text-casi_particolari'}
                title={intl.formatMessage(messages.casi_particolari)}
              />
            )}
            {content.ufficio_responsabile?.length > 0 ? (
              <article
                id="ufficio_responsabile"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-ufficio_responsabile">
                  {intl.formatMessage(messages.ufficio_responsabile)}
                </h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.ufficio_responsabile.map((item, i) => (
                    <OfficeCard key={item['@id']} office={item} />
                  ))}
                </div>
              </article>
            ) : null}
            {content.area?.length > 0 ? (
              <article id="area" className="it-page-section anchor-offset mt-5">
                <h4 id="header-area">{intl.formatMessage(messages.area)}</h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.area.map((item, i) => (
                    <OfficeCard key={item['@id']} office={item} />
                  ))}
                </div>
              </article>
            ) : null}
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
              <Card
                className="card card-teaser shadow p-0 mt-3 rounded border link-esterni"
                noWrapper={true}
                tag="div"
              >
                <CardBody tag="div">
                  <CardTitle tag="h4" className="p-4">
                    {intl.formatMessage(messages.link_siti_esterni)}
                  </CardTitle>
                  <div
                    className="text-serif p-4 pt-0"
                    dangerouslySetInnerHTML={{
                      __html: content.link_siti_esterni.data,
                    }}
                  />
                </CardBody>
              </Card>
            )}
            {content.box_aiuto?.data && (
              <RichTextArticle
                content={content.box_aiuto.data}
                tag_id={'text-box_aiuto'}
                title={intl.formatMessage(messages.box_aiuto)}
              />
            )}
            {content?.items?.some((e) => e.id === 'allegati') && (
              <Attachments content={content} folder_name={'allegati'} />
            )}
            {content?.items?.some((e) => e.id === 'modulistica') && (
              <Attachments
                content={content}
                folder_name={'modulistica'}
                folder_title={'Modulistica'}
              />
            )}
            {content.servizi_collegati?.length > 0 ? (
              <article
                id="servizi-items"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-servizi-items">
                  {intl.formatMessage(messages.servizi_collegati)}
                </h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.servizi_collegati.map((item, i) => (
                    <GenericCard
                      key={item['@id']}
                      item={item}
                      showimage={false}
                    />
                  ))}
                </div>
              </article>
            ) : null}
            {content.related_news?.length > 0 ? (
              <article
                id="related-news"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-related-news">
                  {intl.formatMessage(messages.related_news)}
                </h4>
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
              </article>
            ) : null}
            {content.relatedItems?.length > 0 ? (
              <article
                id="related-items"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-related-items">
                  {intl.formatMessage(messages.related_items)}
                </h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.relatedItems.map((item, i) => (
                    <GenericCard
                      key={item['@id']}
                      item={item}
                      showimage={false}
                    />
                  ))}
                </div>
              </article>
            ) : null}
            {content.sedi_e_luoghi?.length > 0 && (
              <article id="sedi" className="it-page-section anchor-offset mt-5">
                <h4 id="header-sedi">
                  {intl.formatMessage(messages.sedi_e_luoghi)}
                </h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.sedi_e_luoghi.map((item, i) => (
                    <SmallVenue key={item['@id']} venue={item} />
                  ))}
                </div>
              </article>
            )}
            <Metadata content={content} />
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
    canale_fisico_prenotazione: PropTypes.string,
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
