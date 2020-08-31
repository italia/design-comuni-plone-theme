/**
 * NewsItemView view component.
 * @module components/theme/View/NewsItemView
 */

import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  SideMenu,
  PageHeader,
  WideImage,
  RichTextArticle,
  RelatedNewsArticles,
  RelatedArticles,
  RichTextArticles,
} from '@italia/components/ItaliaTheme/View';
import {
  Icon,
} from 'design-react-kit/dist/design-react-kit';
import { OSMMap } from '@italia/addons/volto-venue';
import {
  Card,
  CardBody,
  CardTitle,
  CardText
} from 'design-react-kit/dist/design-react-kit';
const messages = defineMessages({
  descrizione: {
    id: 'descrizione',
    defaultMessage: 'Descrizione',
  },
  modalita_accesso: {
    id: 'modalita_accesso',
    defaultMessage: 'Modalità di accesso',
  },
  quartiere: {
    id: 'quartiere',
    defaultMessage: 'Quartiere',
  },
  circoscrizione: {
    id: 'circoscrizione',
    defaultMessage: 'Circoscrizione',
  },
  dove: {
    id: 'dove',
    defaultMessage: 'Dove',
  },
  elementi_di_interesse: {
    id: 'elementi_di_interesse',
    defaultMessage: 'Elementi di interesse',
  },
  orario_pubblico: {
    id: 'orario_pubblico',
    defaultMessage: 'Orari di apertura',
  },
  related_services: {
    id: 'related_services',
    defaultMessage: 'Servizi',
  },
  sede_di: {
    id: 'sede_di',
    defaultMessage: 'Sede di',
  },
  uo_related_news: {
    id: 'uo_related_news',
    defaultMessage: 'Notizie in evidenza',
  },
  ulteriori_informazioni: {
    id: 'ulteriori_informazioni',
    defaultMessage: 'Ulteriori informazioni',
  },
  riferimento_telefonico_luogo: {
    id: 'riferimento_telefonico_luogo',
    defaultMessage: 'Riferimento telefonico',
  },
  riferimento_mail_luogo: {
    id: 'riferimento_mail_luogo',
    defaultMessage: 'Riferimento e-mail',
  },
  struttura_responsabile_correlati: {
    id: 'struttura_responsabile_correlati',
    defaultMessage: 'Struttura responsabile',
  },
  riferimento_web: {
    id: 'riferimento_web',
    defaultMessage: 'Riferimento web',
  },
  contatti: {
    id: 'contatti',
    defaultMessage: 'Contatti',
  },
  related_items: {
    id: 'related_items',
    defaultMessage: 'Contenuti correlati',
  }
});

/**
 * VenueView view component class.
 * @function VenueView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const VenueView = ({ content }) => {
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

  useEffect(() => {
    if(content.nome_alternativo && !content.title?.includes(content.nome_alternativo)){
      content.title += ` (${content.nome_alternativo})`;
    }
  })

  return (
    <>
      <div className="container px-4 my-4 luogo-view">
        <PageHeader
          content={content}
          readingtime={null}
          showreadingtime={false}
          imageinheader={true}
          imageinheader_field={'foto_persona'}
          showdates={false}
          showtassonomiaargomenti={true}
        />
          {(content?.image || content?.image_caption) && (
            <WideImage
              title={content?.title}
              image={content?.image}
              caption={content?.image_caption}
            />
          )}
        <div className="row border-top row-column-border row-column-menu-left">
          <aside className="col-lg-4">
            {__CLIENT__ && <SideMenu data={sideMenuElements} />}
          </aside>
          <section
            className="col-lg-8 it-page-sections-container"
            ref={documentBody}
          >
            {/* DESCRIZIONE COMPLETA */}
            {content.descrizione_completa && (
              <RichTextArticle
                content={content.descrizione_completa.data}
                tag_id={'description'}
                title={intl.formatMessage(messages.descrizione)}
              />
            )}

            {/* ELEMENTI DI INTERESSE */}
            {content.elementi_di_interesse && (
              <RichTextArticle
                content={content?.elementi_di_interesse?.data}
                tag_id={'elementi-di-interesse'}
                title={intl.formatMessage(messages.elementi_di_interesse)}
              />
            )}

            {/* MODALITA DI ACCESSO */}
            {content.modalita_accesso && (
              <RichTextArticle
                content={content?.modalita_accesso?.data}
                tag_id={'modalita-accesso'}
                title={intl.formatMessage(messages.modalita_accesso)}
              />
            )}

            {/* MAPPA */}
            {content.geolocation && (
              <article
                id="luoghi"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-luoghi">
                  {intl.formatMessage(messages.dove)}
                </h4>
                 <Card className="card card-teaser shadow mt-3 rounded mb-4">
                  <Icon icon={'it-pin'} />
                  <CardBody>
                    <CardTitle>
                      <h5 className="card-title">{content.title}</h5>
                    </CardTitle>
                    <CardText>
                      <p>{`${content.street || ''} - ${content.zip_code || ''} ${content.city} ${content.country.title}`}</p>
                    </CardText>
                  </CardBody>
                </Card>
                { __CLIENT__ && content?.geolocation?.latitude && content?.geolocation?.longitude &&
                  <OSMMap position={[content?.geolocation?.latitude, content?.geolocation?.longitude]} />
                }
                <h6 className="mt-3">{intl.formatMessage(messages.circoscrizione)}</h6>
                <div>
                  {content?.circoscrizione}
                </div>

                <h6 className="mt-3">{intl.formatMessage(messages.quartiere)}</h6>
                <div>
                  {content?.quartiere}
                </div>
              </article>
            )}

            {/* ORARIO AL PUBBLICO */}
            {content.orario_pubblico && (
              <RichTextArticle
                content={content?.orario_pubblico?.data}
                tag_id={'orario-per-pubblico'}
                title={intl.formatMessage(messages.orario_pubblico)}
              />
            )}

            {/* SERVIZI CORRELATI */}
            {content.venue_services?.length > 0 && (
              <RelatedArticles
                id="venue_services"
                items={content.venue_services}
                title={intl.formatMessage(messages.related_services)}
              />
            )}

            {/* NEWS CORRELATE */}
            {content.related_news?.length > 0 && (
              <RelatedNewsArticles 
                news={content.related_news}
                title={intl.formatMessage(messages.related_items)}
              />
            )}

            {/* 
              STRUTTURE RESPONSABILI 
              Se è presente una struttura_responsabile_correlati metto quella altrimenti metto una card con i campi singoli, se presenti
            */}
            {content.struttura_responsabile_correlati?.length > 0 ? 
              <RelatedArticles
                id="struttura_responsabile_correlati"
                items={content.struttura_responsabile_correlati}
                title={intl.formatMessage(messages.struttura_responsabile_correlati)}
              />
            :
              (content.struttura_responsabile?.data?.replace(/(<([^>]+)>)/g, '') !== '' ||
               content.riferimento_telefonico_struttura || content.riferimento_mail_struttura) &&
              <article
                id='struttura_responsabile'
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id={`header-struttura_responsabile`}>
                  {intl.formatMessage(messages.struttura_responsabile_correlati)}
                </h4>
                <Card className="genericcard card card-teaser shadow p-4 mt-3 rounded border">
                  <CardBody>
                    <CardTitle>
                      <h5 className="card-title no-toc">
                        <div
                          className='text-serif'
                          dangerouslySetInnerHTML={{ __html: content.struttura_responsabile?.data }}
                        />
                      </h5>
                    </CardTitle>
                    <CardText>
                      <div>
                        <span className="font-weight-semibold">Telefono:</span>  <a href={`tel:${content.riferimento_telefonico_struttura}`}>{content.riferimento_telefonico_struttura}</a>
                      </div>
                      <div className="mt-2">
                        <span className="font-weight-semibold">Mail:</span> <a href={`mailto:${content.riferimento_mail_struttura}`}>{content.riferimento_mail_struttura}</a>
                      </div>
                    </CardText>
                  </CardBody>
                </Card>
              </article>
            }

            {/* Contatti */}
            <RichTextArticles 
              contents={[
                {
                  title: intl.formatMessage(messages.riferimento_telefonico_luogo),
                  text: content?.riferimento_telefonico_luogo
                },
                {
                  title: intl.formatMessage(messages.riferimento_mail_luogo),
                  text: content?.riferimento_mail_luogo
                },
                {
                  title: intl.formatMessage(messages.riferimento_web),
                  text: content?.riferimento_web
                },
              ]}
              tag_id={'contatti'}
              title={intl.formatMessage(messages.contatti)}
            />

            {/* ULTERIORI INFORMAZIONI */}
            {content.ulteriori_informazioni && (
              <RichTextArticle
                content={content?.ulteriori_informazioni?.data}
                tag_id={'ulteriori_informazion'}
                title={intl.formatMessage(messages.ulteriori_informazioni)}
              />
            )}
          </section>
        </div>
      </div>
    </>
  );
};

VenueView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    orario_pubblico: PropTypes.object,
    elementi_di_interesse: PropTypes.object,
    circoscrizione: PropTypes.string,
    quartiere: PropTypes.string,
    modalita_accesso: PropTypes.object,
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};

export default VenueView;
