/**
 * EventoView view component.
 * @module components/theme/View/EventoView
 */

import React, { useState, createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  Attachments,
  Gallery,
  Events,
  WideImage,
  SideMenu,
  HelpBox,
  PageHeader,
  RichTextArticle,
  Metadata,
  OfficeCard,
  GenericCard,
  Dates,
  TextOrBlocks,
  EventLocations,
  Sponsors,
  RelatedItems,
  RichText,
  EventoPlaceholderAfterContent,
} from '@italia/components/ItaliaTheme/View';

import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  Icon,
  Chip,
  ChipLabel,
  Card,
  CardBody,
  CardTitle,
} from 'design-react-kit/dist/design-react-kit';

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
  parteciperanno: {
    id: 'parteciperanno',
    defaultMessage: 'Parteciperanno:',
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
    defaultMessage: 'Patrocinato da:',
  },
  event_url: {
    id: 'event_url',
    defaultMessage: "Url dell'evento",
  },
  event_destinatari: {
    id: 'event_destinatari',
    defaultMessage: "L'evento è di interesse per:",
  },
  event_web_site: {
    id: 'event_web_site',
    defaultMessage: "Sito web dell'evento:",
  },
  strutture_politiche: {
    id: 'event_strutture_politiche',
    defaultMessage: 'Strutture politiche coinvolte',
  },
  supported_by: {
    id: 'supported_by',
    defaultMessage: 'Con il supporto di:',
  },
  telefono: {
    id: 'telefono',
    defaultMessage: 'Tel',
  },
  email: {
    id: 'email',
    defaultMessage: 'E-mail',
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
  const text = <TextOrBlocks content={content} location={location} />;
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
          <h5 className="mt-4 supported-by">Con il supporto di:</h5>
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
          imageinheader={false}
          imageinheader_field={null}
          showdates={true}
          showtopics={true}
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
            ref={documentBody}
            className="col-lg-8 it-page-sections-container"
          >
            {/* COS'è */}
            <RichTextArticle
              tag_id={'text-body'}
              title={intl.formatMessage(messages.cos_e)}
              show_title={false}
            >
              {text}

              <Gallery content={content} folder_name={'multimedia'} />

              {content?.descrizione_destinatari?.data?.replace(
                /(<([^>]+)>)/g,
                '',
              ) && (
                <div className="mb-5">
                  <RichText
                    title_size="h6"
                    title={intl.formatMessage(messages.event_destinatari)}
                    content={content?.descrizione_destinatari.data}
                  />
                </div>
              )}

              {content?.persone_amministrazione?.length > 0 && (
                <>
                  <h6 className="text-serif font-weight-bold">
                    {intl.formatMessage(messages.parteciperanno)}
                  </h6>
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
                        <Link to={flattenToAppURL(item['@id'])}>
                          {item.title}
                        </Link>
                      </ChipLabel>
                    </Chip>
                  ))}
                </>
              )}
            </RichTextArticle>

            {/* LUOGHI */}
            {content?.luoghi_correlati?.length > 0 ? (
              <RichTextArticle
                tag_id="luoghi"
                title={intl.formatMessage(messages.luoghi)}
              >
                <EventLocations
                  locations={content?.luoghi_correlati}
                  show_icon={true}
                />
              </RichTextArticle>
            ) : content?.street > 0 ||
              (content?.geolocation?.latitude &&
                content?.geolocation?.longitude) ||
              content?.zip_code ||
              content?.city ||
              content?.quartiere ||
              content?.circoscrizione ||
              content?.country ? (
              <RichTextArticle
                tag_id="luoghi"
                title={intl.formatMessage(messages.luoghi)}
              >
                <EventLocations
                  locations={[content]}
                  show_icon={true}
                  load={false}
                  details_link={false}
                />
              </RichTextArticle>
            ) : null}

            {/* DATE E ORARI */}
            <RichTextArticle
              tag_id="date-e-orari"
              title={intl.formatMessage(messages.date_e_orari)}
            >
              <Dates content={content} />

              <RichText content={content?.orari?.data} />
            </RichTextArticle>

            {/* COSTI */}
            <RichTextArticle
              content={content?.prezzo?.data}
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
            {(content?.organizzato_da_esterno?.data?.replace(/(<([^>]+)>)/g, '')
              .length > 0 ||
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
                    <h6 className="text-serif font-weight-bold">
                      {intl.formatMessage(messages.event_web_site)}
                    </h6>
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
                {content?.organizzato_da_esterno?.data?.replace(
                  /(<([^>]+)>)/g,
                  '',
                ) ? (
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
                        <RichText
                          content={content.organizzato_da_esterno.data}
                        />
                        {content?.telefono && (
                          <p className="card-text mt-3">
                            {intl.formatMessage(messages.telefono)}:{' '}
                            <a href={`tel:${content.telefono}`}>
                              {content.telefono}
                            </a>
                          </p>
                        )}
                        {content?.reperibilita && (
                          <p className="card-text mt-3">
                            {content?.reperibilita?.replace(/(<([^>]+)>)/g, '')}
                          </p>
                        )}
                        {content?.email && (
                          <p className="card-text mt-3">
                            {intl.formatMessage(messages.email)}:{' '}
                            <a href={`mailto:${content.email}`}>
                              {content.email}
                            </a>
                          </p>
                        )}
                      </CardBody>
                    </Card>
                  </div>
                ) : null}

                {/* ---contatti interno */}
                {content?.organizzato_da_interno?.length > 0 && (
                  <div className="mb-5">
                    <h6 className="text-serif font-weight-bold">
                      {intl.formatMessage(messages.contatti_interni)}:
                    </h6>
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
                        {content?.contatto_reperibilita && (
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
              {content?.ulteriori_informazioni?.data?.replace(
                /(<([^>]+)>)/g,
                '',
              ) !== '' ||
              content?.event_url ||
              content?.patrocinato_da ||
              content?.strutture_politiche.length > 0 ||
              content?.items?.some((e) => e.id === 'sponsor_evento') ? (
                <>
                  {content?.ulteriori_informazioni?.data?.replace(
                    /(<([^>]+)>)/g,
                    '',
                  ) && <HelpBox text={content?.ulteriori_informazioni} />}

                  {content?.event_url && (
                    <div className="mt-4">
                      <strong>{intl.formatMessage(messages.event_url)}:</strong>{' '}
                      <a href={content.event_url} rel="noopener noreferer">
                        {content.event_url}
                      </a>
                    </div>
                  )}

                  {content?.patrocinato_da && (
                    <div className="mt-4">
                      <strong>
                        {intl.formatMessage(messages.patrocinato_da)}
                      </strong>
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
                      <strong>
                        {intl.formatMessage(messages.strutture_politiche)}:
                      </strong>
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
              ) : null}
            </Metadata>
          </section>
        </div>
      </div>
      <EventoPlaceholderAfterContent />
      <RelatedItems content={content} />
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
