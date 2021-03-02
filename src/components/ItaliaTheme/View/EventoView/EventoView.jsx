/**
 * EventoView view component.
 * @module components/theme/View/EventoView
 */

import React, { useState, createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';

import {
  Chip,
  ChipLabel,
  Card,
  CardBody,
  CardTitle,
} from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';

import { Icon } from '@italia/components/ItaliaTheme';
import {
  Attachments,
  Gallery,
  Events,
  ContentImage,
  SideMenu,
  HelpBox,
  PageHeader,
  RichTextArticle,
  Metadata,
  OfficeCard,
  GenericCard,
  Dates,
  Locations,
  Sponsors,
  RelatedItems,
  RichText,
  EventoPlaceholderAfterContent,
  ContactLink,
  RelatedItemInEvidence,
  richTextHasContent,
} from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  notizie_in_evidenza: {
    id: 'notizie_in_evidenza',
    defaultMessage: 'Notizie in evidenza',
  },
  event_ulteriori_informazioni: {
    id: 'event_ulteriori_informazioni',
    defaultMessage: "Ulteriori informazioni sull'evento",
  },
  date_e_orari: {
    id: 'date_e_orari',
    defaultMessage: 'Date e orari',
  },
  orari: {
    id: 'orari',
    defaultMessage: 'Orari',
  },
  parteciperanno: {
    id: 'parteciperanno',
    defaultMessage: 'Parteciperanno',
  },
  luoghi: {
    id: 'luogo',
    defaultMessage: 'Luogo',
  },
  contatti_interni: {
    id: 'contatti_interni',
    defaultMessage: 'Contatti interni',
  },
  contatti_esterni: {
    id: 'contatti_esterni',
    defaultMessage: 'Contatti esterni',
  },
  contatti: {
    id: 'Contatti',
    defaultMessage: 'Contatti',
  },
  ulteriori_informazioni: {
    id: 'ulteriori_informazioni',
    defaultMessage: "Box d'aiuto",
  },
  patrocinato_da: {
    id: 'patrocinato_da',
    defaultMessage: 'Patrocinato da',
  },
  event_url: {
    id: 'event_url',
    defaultMessage: "Url dell'evento",
  },
  event_destinatari: {
    id: 'event_destinatari',
    defaultMessage: "L'evento è di interesse per",
  },
  event_web_site: {
    id: 'event_web_site',
    defaultMessage: "Sito web dell'evento",
  },
  strutture_politiche: {
    id: 'event_strutture_politiche',
    defaultMessage: 'Strutture politiche coinvolte',
  },
  supported_by: {
    id: 'supported_by',
    defaultMessage: 'Con il supporto di',
  },
  costi: {
    id: 'event_costi',
    defaultMessage: 'Costi',
  },
  documenti: {
    id: 'event_documenti',
    defaultMessage: 'Documenti',
  },
  cos_e: {
    id: 'event_cos_e',
    defaultMessage: "Cos'è",
  },
});

/**
 * EventoView view component class.
 * @function EventoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const EventoView = ({ content, location }) => {
  const intl = useIntl();

  const isChildEvent = content?.parent['@type'] === 'Event';
  const events_path = isChildEvent
    ? content?.parent['@id']?.split('/').splice(-1)[0]
    : content?.['@id'].split('/').splice(-1)[0];
  let documentBody = createRef();
  const [sideMenuElements, setSideMenuElements] = useState(null);

  const getSupportatoDa = () => {
    return (
      content?.supportato_da?.length > 0 && (
        <>
          <h5 className="mt-4 supported-by">
            {intl.formatMessage(messages.supported_by)}
          </h5>
          {content?.supportato_da?.map((item) => (
            <OfficeCard
              key={item['@id']}
              office={item}
              extended={true}
              icon={'it-pa'}
            />
          ))}
        </>
      )
    );
  };

  useEffect(() => {
    if (documentBody.current) {
      if (__CLIENT__) {
        setSideMenuElements(documentBody.current);
      }
    }
  }, [documentBody]);

  return (
    <>
      <div className="container px-4 my-4 newsitem-view">
        <PageHeader
          content={content}
          readingtime={null}
          showreadingtime={true}
          showdates={true}
          showtopics={true}
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

            {/* COS'è */}
            <RichTextArticle
              tag_id={'text-body'}
              title={intl.formatMessage(messages.cos_e)}
              show_title={false}
              content={content.descrizione_estesa}
            >
              <Gallery content={content} folder_name={'multimedia'} />

              {richTextHasContent(content?.descrizione_destinatari) && (
                <div className="mb-5">
                  <RichText
                    title_size="h5"
                    title={intl.formatMessage(messages.event_destinatari)}
                    content={content?.descrizione_destinatari}
                  />
                </div>
              )}

              {content?.persone_amministrazione?.length > 0 && (
                <>
                  <h5>{intl.formatMessage(messages.parteciperanno)}</h5>
                  {content.persone_amministrazione.map((item, i) => (
                    <Chip
                      color="primary"
                      disabled={false}
                      large={false}
                      simple
                      tag="div"
                      key={item['@id']}
                      className="mr-2"
                    >
                      <ChipLabel tag="span">
                        <UniversalLink href={flattenToAppURL(item['@id'])}>
                          {item.title}
                        </UniversalLink>
                      </ChipLabel>
                    </Chip>
                  ))}
                </>
              )}
            </RichTextArticle>

            {/* LUOGHI */}
            {(content?.luoghi_correlati?.length > 0 ||
              content?.nome_sede > 0 ||
              content?.street > 0 ||
              (content?.geolocation?.latitude &&
                content?.geolocation?.longitude) ||
              content?.zip_code ||
              content?.city ||
              content?.quartiere ||
              content?.circoscrizione ||
              content?.country) && (
              <RichTextArticle
                tag_id="luoghi"
                title={intl.formatMessage(messages.luoghi)}
              >
                <Locations
                  content={content}
                  locations={content?.luoghi_correlati ?? []}
                  show_icon={true}
                />
              </RichTextArticle>
            )}

            {/* DATE E ORARI */}
            <RichTextArticle
              tag_id="date-e-orari"
              title={intl.formatMessage(messages.date_e_orari)}
            >
              <Dates content={content} />

              <RichText
                title={intl.formatMessage(messages.orari)}
                content={content?.orari}
              />
            </RichTextArticle>

            {/* COSTI */}
            <RichTextArticle
              content={content?.prezzo}
              tag_id="costi"
              title={intl.formatMessage(messages.costi)}
            />

            {/* DOCUMENTI */}
            <Attachments
              content={content}
              folder_name={'documenti'}
              title={intl.formatMessage(messages.documenti)}
            />

            {/* CONTATTI */}
            {(richTextHasContent(content?.organizzato_da_esterno) ||
              content?.organizzato_da_interno.length > 0 ||
              content?.supportato_da?.length > 0 ||
              content.web?.length > 0) && (
              <RichTextArticle
                tag_id="contatti"
                title={intl.formatMessage(messages.contatti)}
              >
                {/* ---web */}
                {content?.web?.length > 0 && (
                  <div className="mb-5 mt-3">
                    <h5>{intl.formatMessage(messages.event_web_site)}</h5>
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
                  </div>
                )}

                {/* ---organizzato da esterno */}
                {richTextHasContent(content?.organizzato_da_esterno) ? (
                  <div className="mb-5">
                    <Card
                      className="card card-teaser rounded shadow mt-3"
                      noWrapper={true}
                      tag="div"
                    >
                      <CardTitle tag="h5">
                        <Icon icon="it-telephone" padding={true} />
                      </CardTitle>
                      <CardBody tag="div" className={'card-body pr-3'}>
                        <RichText content={content.organizzato_da_esterno} />
                        {content?.telefono && (
                          <p className="card-text mt-3">
                            <ContactLink tel={content.telefono} label={true} />
                          </p>
                        )}
                        {content?.fax && (
                          <p className="card-text mt-3">
                            <ContactLink fax={content.fax} label={true} />
                          </p>
                        )}
                        {richTextHasContent(content?.reperibilita) && (
                          <p className="card-text mt-3">
                            {content?.reperibilita?.replace(/(<([^>]+)>)/g, '')}
                          </p>
                        )}
                        {content?.email && (
                          <p className="card-text mt-3">
                            <ContactLink email={content.email} label={true} />
                          </p>
                        )}
                      </CardBody>
                    </Card>
                  </div>
                ) : null}

                {/* ---contatti interno */}
                {content?.organizzato_da_interno?.length > 0 && (
                  <div className="mb-5">
                    <h5>{intl.formatMessage(messages.contatti_interni)}</h5>
                    {content?.organizzato_da_interno?.map((item, index) => (
                      <OfficeCard
                        margin_bottom={
                          index < content?.organizzato_da_interno?.length - 1
                        }
                        key={item['@id']}
                        office={item}
                        extended={true}
                        icon={'it-telephone'}
                      >
                        {richTextHasContent(content?.contatto_reperibilita) && (
                          <p className="card-text mt-3">
                            {content?.contatto_reperibilita?.replace(
                              /(<([^>]+)>)/g,
                              '',
                            )}
                          </p>
                        )}
                      </OfficeCard>
                    ))}
                  </div>
                )}

                {/* ---supportato da */}
                {getSupportatoDa()}
              </RichTextArticle>
            )}

            {/* EVENTS */}
            {content && (
              <Events
                content={content}
                show_image={true}
                title={null}
                folder_name={events_path}
                isChild={isChildEvent}
              />
            )}

            {/* ULTERIORI INFORMAZIONI */}
            <Metadata content={content}>
              {(richTextHasContent(content?.ulteriori_informazioni) ||
                content?.event_url ||
                content?.patrocinato_da ||
                content?.strutture_politiche.length > 0 ||
                content?.items?.some((e) => e.id === 'sponsor_evento')) && (
                <>
                  {richTextHasContent(content?.ulteriori_informazioni) && (
                    <HelpBox text={content?.ulteriori_informazioni} />
                  )}

                  {content?.event_url && (
                    <div className="mt-4">
                      <h5>{intl.formatMessage(messages.event_url)}</h5>
                      <UniversalLink href={content.event_url}>
                        {content.event_url}
                      </UniversalLink>
                    </div>
                  )}

                  {content?.patrocinato_da && (
                    <div className="mt-4">
                      <h5>{intl.formatMessage(messages.patrocinato_da)}</h5>
                      <RichText content={content?.patrocinato_da} />
                    </div>
                  )}

                  {content?.items?.some((e) => e.id === 'sponsor_evento') && (
                    <div className="mt-4">
                      <Sponsors
                        content={content}
                        folder_name={'sponsor_evento'}
                      />
                    </div>
                  )}

                  {content?.strutture_politiche.length > 0 && (
                    <div className="mt-4">
                      <h5>
                        {intl.formatMessage(messages.strutture_politiche)}
                      </h5>
                      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                        {content.strutture_politiche.map((item, i) => (
                          <GenericCard
                            key={i}
                            index={item['@id']}
                            item={item}
                            showimage={false}
                            showDescription={false}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-4"></div>
                </>
              )}
            </Metadata>
          </section>
        </div>
      </div>
      <EventoPlaceholderAfterContent content={content} />
      <RelatedItems content={content} />
      <RelatedItemInEvidence content={content} />
    </>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
EventoView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    effective: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,

    patrocinato_da: PropTypes.string,
    image: PropTypes.object,
    image_caption: PropTypes.string,
    orari: PropTypes.shape({
      data: PropTypes.string,
    }),
    prezzo: PropTypes.shape({
      data: PropTypes.string,
    }),
    organizzato_da_esterno: PropTypes.shape({
      data: PropTypes.string,
    }),

    descrizione_destinatari: PropTypes.shape({
      data: PropTypes.string,
    }),

    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
    sponsor: PropTypes.shape({
      data: PropTypes.string,
    }),
    items: PropTypes.array,
    strutture_politiche: PropTypes.array,
    supportato_da: PropTypes.array,
    organizzato_da_interno: PropTypes.array,
    persone_amministrazione: PropTypes.array,
    modified: PropTypes.string,
    luoghi_evento: PropTypes.array,
    related_news: PropTypes.array,
    tassonomia_argomenti: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default EventoView;
