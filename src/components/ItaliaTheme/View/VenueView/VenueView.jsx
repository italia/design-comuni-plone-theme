/**
 * VenueView view component.
 * @module components/theme/View/VenueView
 */

import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from 'design-react-kit/dist/design-react-kit';
import { Icon } from '@italia/components/ItaliaTheme';
import {
  SideMenu,
  PageHeader,
  ContentImage,
  RichTextArticle,
  RelatedItems,
  RelatedArticles,
  RichText,
  HelpBox,
  Gallery,
  GenericCard,
  Metadata,
  VenuePlaceholderAfterContent,
  RelatedItemInEvidence,
  richTextHasContent,
} from '@italia/components/ItaliaTheme/View';
import { contentFolderHasItems } from '@italia/helpers';
import { OSMMap } from '@italia/addons/volto-venue';
import ContactLink from '@italia/components/ItaliaTheme/View/Commons/ContactLink';

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
    defaultMessage: 'Telefono',
  },
  riferimento_fax_luogo: {
    id: 'riferimento_fax_luogo',
    defaultMessage: 'Fax',
  },
  riferimento_mail_luogo: {
    id: 'riferimento_mail_luogo',
    defaultMessage: 'E-mail',
  },
  riferimento_pec_luogo: {
    id: 'riferimento_pec_luogo',
    defaultMessage: 'PEC',
  },
  riferimento_web: {
    id: 'riferimento_web',
    defaultMessage: 'Web',
  },
  struttura_responsabile: {
    id: 'struttura_responsabile',
    defaultMessage: 'Struttura responsabile',
  },
  contatti: {
    id: 'contatti',
    defaultMessage: 'Contatti',
  },
  related_items: {
    id: 'related_items',
    defaultMessage: 'Contenuti correlati',
  },
  riferimento_telefonico_struttura: {
    id: 'riferimento_telefonico_struttura',
    defaultMessage: 'Telefono',
  },
  riferimento_fax_struttura: {
    id: 'riferimento_fax_struttura',
    defaultMessage: 'Fax',
  },
  riferimento_mail_struttura: {
    id: 'riferimento_mail_struttura',
    defaultMessage: 'E-mail',
  },
  riferimento_pec_struttura: {
    id: 'pec',
    defaultMessage: 'PEC',
  },
  video: {
    id: 'Video',
    defaultMessage: 'Video',
  },
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
    if (
      content.nome_alternativo &&
      !content.title?.includes(content.nome_alternativo)
    ) {
      content.subtitle = content.nome_alternativo;
    }
  });

  return (
    <>
      <div className="container px-4 my-4 luogo-view">
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
            className="col-lg-8 it-page-sections-container"
            ref={documentBody}
          >
            {/* HEADER IMAGE */}
            <ContentImage content={content} position="documentBody" />
            {/* DESCRIZIONE */}
            {(richTextHasContent(content?.descrizione_completa) ||
              richTextHasContent(content.elementi_di_interesse) ||
              contentFolderHasItems(content, 'multimedia')) && (
              <RichTextArticle
                tag_id={'description'}
                title={intl.formatMessage(messages.descrizione)}
              >
                {/* DESCRIZIONE COMPLETA */}
                <RichText content={content.descrizione_completa} />
                {/* ELEMENTI DI INTERESSE */}
                {richTextHasContent(content.elementi_di_interesse) && (
                  <div className="mb-5 mt-3">
                    <RichText
                      title={`${intl.formatMessage(
                        messages.elementi_di_interesse,
                      )}:`}
                      content={content.elementi_di_interesse}
                    />
                  </div>
                )}
                {/*GALLERIA DI IMMAGINI*/}
                <Gallery
                  content={content}
                  folder_name={'multimedia'}
                  title_video={intl.formatMessage(messages.video)}
                  title_type="h5"
                />
              </RichTextArticle>
            )}
            {/* SERVIZI CORRELATI */}
            {content?.venue_services?.length > 0 && (
              <RelatedArticles
                id="venue_services"
                items={content.venue_services}
                title={intl.formatMessage(messages.related_services)}
              />
            )}
            {/* MODALITA DI ACCESSO */}
            {richTextHasContent(content?.modalita_accesso) && (
              <RichTextArticle
                content={content.modalita_accesso}
                tag_id={'modalita-accesso'}
                title={intl.formatMessage(messages.modalita_accesso)}
              />
            )}

            {/* MAPPA */}
            {((content.geolocation?.latitude &&
              content.geolocation?.longitude) ||
              content.street ||
              content.zip_code ||
              content.city ||
              content.country ||
              content.circoscrizione ||
              content.quartiere ||
              richTextHasContent(content.notes)) && (
              <RichTextArticle
                tag_id="dove"
                title={intl.formatMessage(messages.dove)}
              >
                <Card className="card card-teaser shadow mt-3 rounded mb-4">
                  <Icon icon={'it-pin'} />
                  <CardBody>
                    <CardTitle>
                      <h5 className="card-title">{content.title}</h5>
                    </CardTitle>
                    <CardText>
                      <p>
                        {[content.street, content.city]
                          .filter((v) => v !== null)
                          .join(' - ')}
                        {(content.street || content.city) &&
                          (content.zip_code || content.country) && <br />}

                        {[content.zip_code, content.country?.title]
                          .filter((v) => v !== null)
                          .join(' - ')}
                      </p>
                    </CardText>
                  </CardBody>
                </Card>
                {__CLIENT__ &&
                  content.geolocation?.latitude &&
                  content.geolocation?.longitude && (
                    <OSMMap
                      markers={[
                        {
                          latitude: content.geolocation.latitude,
                          longitude: content.geolocation.longitude,
                          title: content.title,
                        },
                      ]}
                    />
                  )}
                {content.circoscrizione && (
                  <div className="circoscrizione">
                    <h5 className="mt-3">
                      {intl.formatMessage(messages.circoscrizione)}:
                    </h5>
                    <div className="text-serif">{content.circoscrizione}</div>
                  </div>
                )}
                {content.quartiere && (
                  <div className="quartiere">
                    <h5 className="mt-3">
                      {intl.formatMessage(messages.quartiere)}:
                    </h5>
                    <div className="text-serif">{content.quartiere}</div>
                  </div>
                )}
                {richTextHasContent(content.notes) && (
                  <div className="mt-5">
                    <RichText content={content.notes} />
                  </div>
                )}
              </RichTextArticle>
            )}
            {/* ORARIO AL PUBBLICO */}
            {richTextHasContent(content.orario_pubblico) && (
              <RichTextArticle
                content={content.orario_pubblico}
                tag_id={'orario-per-pubblico'}
                title={intl.formatMessage(messages.orario_pubblico)}
              />
            )}
            {/* CONTATTI */}
            {(content?.telefono ||
              content?.email ||
              content?.pec ||
              content?.web ||
              content?.struttura_responsabile_correlati?.length > 0 ||
              richTextHasContent(content?.struttura_responsabile) ||
              content?.riferimento_telefonico_struttura ||
              content?.riferimento_fax_struttura ||
              content?.riferimento_mail_struttura ||
              content?.riferimento_pec_struttura) && (
              <RichTextArticle
                tag_id="contatti"
                title={intl.formatMessage(messages.contatti)}
              >
                {/* CONTATTI LUOGO */}
                {(content?.telefono ||
                  content?.email ||
                  content?.fax ||
                  content?.pec ||
                  content?.web) && (
                  <Card
                    className="card card-teaser rounded shadow mt-3 mb-3"
                    noWrapper={true}
                    tag="div"
                  >
                    <CardTitle tag="h5">
                      <Icon icon="it-telephone" padding={true} />
                    </CardTitle>
                    <CardBody tag="div" className={'card-body pr-3'}>
                      {content.telefono && (
                        <p className="card-text mt-3">
                          {intl.formatMessage(
                            messages.riferimento_telefonico_luogo,
                          )}
                          : <ContactLink tel={content.telefono} label={false} />
                        </p>
                      )}

                      {content.fax && (
                        <p className="card-text mt-3">
                          {intl.formatMessage(messages.riferimento_fax_luogo)}
                          : <ContactLink fax={content.fax} label={false} />
                        </p>
                      )}

                      {content.email && (
                        <p className="card-text mt-3">
                          {intl.formatMessage(messages.riferimento_mail_luogo)}:{' '}
                          <ContactLink email={content.email} label={false} />
                        </p>
                      )}

                      {content.pec && (
                        <p className="card-text mt-3">
                          {intl.formatMessage(messages.riferimento_pec_luogo)}:{' '}
                          <ContactLink email={content.pec} label={false} />
                        </p>
                      )}

                      {content.web && (
                        <p className="card-text mt-3">
                          {intl.formatMessage(messages.riferimento_web)}:{' '}
                          <a
                            href={
                              content.web.match(/^(http:\/\/|https:\/\/)/gm)
                                ? content.web
                                : `http://${content.web}`
                            }
                          >
                            {content.web}
                          </a>
                        </p>
                      )}
                    </CardBody>
                  </Card>
                )}

                {/*
              STRUTTURE RESPONSABILI
              Se è presente una struttura_responsabile_correlati metto quella altrimenti metto una card con i campi singoli, se presenti
            */}
                {(content?.struttura_responsabile_correlati?.length > 0 ||
                  richTextHasContent(content?.struttura_responsabile) ||
                  content?.riferimento_telefonico_struttura ||
                  content?.riferimento_fax_struttura ||
                  content?.riferimento_mail_struttura ||
                  content?.riferimento_pec_struttura) && (
                  <div className="mt-5 mb-5">
                    <h5>
                      {intl.formatMessage(messages.struttura_responsabile)}
                    </h5>

                    {content.struttura_responsabile_correlati?.length > 0 ? (
                      //STRUTTURE RESPONSABILI CORRELATE
                      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                        {content?.struttura_responsabile_correlati?.map(
                          (item, i) => (
                            <GenericCard key={item['@id']} item={item} />
                          ),
                        )}
                      </div>
                    ) : (
                      //STRUTTURA RESPONSABILE
                      <>
                        {(richTextHasContent(content.struttura_responsabile) ||
                          content.riferimento_telefonico_struttura ||
                          content.riferimento_fax_struttura ||
                          content.riferimento_mail_struttura ||
                          content.riferimento_pec_struttura) && (
                          <Card className="genericcard card card-teaser shadow p-4 mt-3 rounded">
                            <CardBody>
                              {richTextHasContent(
                                content.struttura_responsabile,
                              ) && (
                                <CardTitle>
                                  <h5 className="card-title">
                                    <RichText
                                      content={content.struttura_responsabile}
                                    />
                                  </h5>
                                </CardTitle>
                              )}
                              <CardText>
                                {content.riferimento_telefonico_struttura && (
                                  <div>
                                    <span className="font-weight-semibold">
                                      {intl.formatMessage(
                                        messages.riferimento_telefonico_struttura,
                                      )}
                                      :
                                    </span>{' '}
                                    <ContactLink
                                      tel={
                                        content.riferimento_telefonico_struttura
                                      }
                                      label={false}
                                    />
                                  </div>
                                )}
                                {content.riferimento_fax_struttura && (
                                  <div className="mt-2">
                                    <span className="font-weight-semibold">
                                      {intl.formatMessage(
                                        messages.riferimento_fax_struttura,
                                      )}
                                      :
                                    </span>{' '}
                                    <ContactLink
                                      tel={content.riferimento_fax_struttura}
                                      label={false}
                                    />
                                  </div>
                                )}
                                {content.riferimento_mail_struttura && (
                                  <div className="mt-2">
                                    <span className="font-weight-semibold">
                                      {intl.formatMessage(
                                        messages.riferimento_mail_struttura,
                                      )}
                                      :
                                    </span>{' '}
                                    <ContactLink
                                      email={content.riferimento_mail_struttura}
                                      label={false}
                                    />
                                  </div>
                                )}
                                {content.riferimento_pec_struttura && (
                                  <div className="mt-2">
                                    <span className="font-weight-semibold">
                                      {intl.formatMessage(
                                        messages.riferimento_pec_struttura,
                                      )}
                                      :
                                    </span>{' '}
                                    <ContactLink
                                      email={content.riferimento_pec_struttura}
                                      label={false}
                                    />
                                  </div>
                                )}
                              </CardText>
                            </CardBody>
                          </Card>
                        )}
                      </>
                    )}
                  </div>
                )}
              </RichTextArticle>
            )}
            {/* ULTERIORI INFORMAZIONI */}
            <Metadata content={content}>
              {(richTextHasContent(content?.ulteriori_informazioni) ||
                content.sede_di?.length > 0) && (
                <>
                  {/* SEDE DI */}
                  {content.sede_di?.length > 0 && (
                    <div className="mb-5">
                      <RelatedArticles
                        title_size={'h5'}
                        items={content.sede_di}
                        title={intl.formatMessage(messages.sede_di)}
                        noMargin
                      />
                    </div>
                  )}

                  {/* HELP BOX - ULTERIORI INFORMAZIONI */}
                  {richTextHasContent(content?.ulteriori_informazioni) && (
                    <HelpBox text={content?.ulteriori_informazioni} />
                  )}
                </>
              )}
            </Metadata>
          </section>
        </div>
      </div>
      <VenuePlaceholderAfterContent content={content} />
      <RelatedItems
        list={[
          ...(content.relatedItems ?? []),
          ...(content.related_news ?? []),
        ]}
      />
      <RelatedItemInEvidence content={content} />
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
