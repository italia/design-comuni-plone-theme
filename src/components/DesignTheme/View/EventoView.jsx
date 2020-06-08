/**
 * EventoView view component.
 * @module components/theme/View/EventoView
 */

import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import { Attachments } from './Commons';
import { Gallery } from './Commons';
import { Events } from './Commons';
import { Locations } from './Commons';
import { WideImage } from './Commons';
import { SideMenu } from './Commons';
import { HelpBox } from './Commons';
import { PageHeader } from './Commons';
import { RichTextArticle } from './Commons';
import { Metadata } from './Commons';
import { Venue } from './Commons';
import { OfficeCard } from './Commons';
import { GenericCard } from './Commons';
import { Dates } from './Commons';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  Icon,
  Chip,
  ChipLabel,
  Card,
  CardBody,
  CardTitle,
  Button,
} from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  notizie_in_evidenza: {
    id: 'notizie_in_evidenza',
    defaultMessage: 'Notizie in evidenza',
  },
  related_items: {
    id: 'related_items',
    defaultMessage: 'Contenuti correlati',
  },
});

/**
 * EventoView view component class.
 * @function EventoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const EventoView = ({ content }) => {
  const intl = useIntl();
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
            <SideMenu />
          </aside>
          <section className="col-lg-8 it-page-sections-container">
            {content?.introduzione?.data && (
              <RichTextArticle
                content={content?.introduzione?.data}
                tag_id={'text-body'}
                title={'Introduzione'}
              />
            )}
            {content?.items.some(e => e.id === 'multimedia') && (
              <Gallery content={content} folder_name={'multimedia'} />
            )}
            {content?.descrizione_destinatari?.data && (
              <RichTextArticle
                content={content?.descrizione_destinatari?.data}
                tag_id={'text-body'}
                title={null}
              />
            )}
            {content?.persone_amministrazione?.length > 0 && (
              <div className="pt-3 pb-5" id="attending-vips">
                <h6 className="text-serif font-weight-bold">Parteciperanno:</h6>
                {content.persone_amministrazione.map((item, i) => (
                  <Chip
                    color="primary"
                    disabled={false}
                    large={false}
                    simple
                    tag="div"
                    key={item['@id']}
                  >
                    <ChipLabel tag="span">
                      <Link to={flattenToAppURL(item['@id'])}>
                        {item.title}
                      </Link>
                    </ChipLabel>
                  </Chip>
                ))}
              </div>
            )}
            {content?.items.some(e => e.id === 'documenti-allegati') && (
              <Attachments
                content={content}
                folder_name={'documenti-allegati'}
              />
            )}
            {content?.luogo_event?.length > 0 ? (
              <>
                <Locations locations={content?.luogo_event} show_icon={true} />
                {content?.luogo_event?.map(location => (
                  <Venue venue={location} key={location['@id']} />
                ))}
              </>
            ) : null}

            {content?.orari?.data.replace(/(<([^>]+)>)/g, '') && (
              <article className="it-page-section anchor-offset mt-5">
                <h4>Date e orari</h4>
                <Dates content={content} />
                <RichTextArticle
                  content={content?.orari?.data}
                  tag_id="date-e-orari"
                />
                <Button icon size="lg" tag="button" color="primary" outline>
                  <Icon
                    color="primary"
                    icon="it-plus-circle"
                    padding={false}
                    size=""
                  />
                  <a
                    // href={flattenToAppURL(`${content['@id']}/ics_view`)}
                    href="#"
                    rel="nofollow"
                  >
                    Aggiungi al caledario
                  </a>
                </Button>
              </article>
            )}

            {content?.prezzo?.data.replace(/(<([^>]+)>)/g, '') && (
              <RichTextArticle
                content={content?.prezzo?.data}
                tag_id="costi"
                title={'Costi'}
              />
            )}

            {content?.items.some(e => e.id === 'documenti') && (
              <Attachments
                content={content}
                folder_name={'documenti'}
                title={'Documenti'}
              />
            )}
            {content?.organizzato_da_esterno?.data.replace(
              /(<([^>]+)>)/g,
              '',
            ) ? (
              <>
                <h4>Contatti</h4>
                <Card
                  className="card card-teaser rounded shadow mt-3"
                  noWrapper={true}
                  tag="div"
                >
                  <CardTitle tag="h5">
                    <Icon icon="it-telephone" padding={true} />
                  </CardTitle>
                  <CardBody tag="div" className={'card-body pr-3'}>
                    <p className="card-text">
                      {content?.organizzato_da_esterno?.data.replace(
                        /(<([^>]+)>)/g,
                        '',
                      )}
                    </p>
                  </CardBody>
                </Card>
                <h5 className="mt-4">Con il supporto di:</h5>
                {content?.evento_supportato_da?.map(item => (
                  <OfficeCard
                    key={item['@id']}
                    office={item}
                    extended={true}
                    icon={'it-pa'}
                  />
                ))}
              </>
            ) : null}
            {content?.organizzato_da_interno?.length > 0 ? (
              <>
                {content?.evento_organizzato_da_interno?.map(item => (
                  <OfficeCard
                    key={item['@id']}
                    office={item}
                    extended={true}
                    icon={'it-telephone'}
                  />
                ))}
                <h5 className="mt-4">Con il supporto di:</h5>
                {content?.evento_supportato_da?.map(item => (
                  <OfficeCard
                    key={item['@id']}
                    office={item}
                    extended={true}
                    icon={'it-pa'}
                  />
                ))}
              </>
            ) : null}
            {content && (
              <Events content={content} show_image={true} title={null} />
            )}
            {content?.ulteriori_informazioni?.data.replace(
              /(<([^>]+)>)/g,
              '',
            ) && (
              <RichTextArticle
                content={content?.ulteriori_informazioni?.data}
                tag_id="additional-info"
                title={'Ulteriori informazioni'}
              />
            )}
            {content?.patrocinato_da && (
              <RichTextArticle
                content={content?.patrocinato_da}
                tag_id="patrocinio"
                title={'Patrocinato da:'}
              />
            )}
            {content?.sponsor?.data.replace(/(<([^>]+)>)/g, '') && (
              <RichTextArticle
                content={content?.sponsor?.data}
                tag_id="sponsor"
                title={'Sponsor:'}
              />
            )}
            {content?.box_aiuto?.data.replace(/(<([^>]+)>)/g, '') && (
              <HelpBox text={content?.box_aiuto} />
            )}
            {content?.relatedItems?.length > 0 ? (
              <article
                id="related-items"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.related_items)}</h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.relatedItems.map((item, i) => (
                    <GenericCard
                      index={item['@id']}
                      item={item}
                      showimage={false}
                    />
                  ))}
                </div>
              </article>
            ) : null}
            <Metadata content={content} />
          </section>
        </div>
      </div>
      <section id="contenuti-correlati"></section>
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
    contact_email: PropTypes.string,
    contact_phone: PropTypes.string,
    contact_name: PropTypes.string,
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
    introduzione: PropTypes.shape({
      data: PropTypes.string,
    }),
    descrizione_destinatari: PropTypes.shape({
      data: PropTypes.string,
    }),
    date_significative: PropTypes.shape({
      data: PropTypes.string,
    }),
    box_aiuto: PropTypes.shape({
      data: PropTypes.string,
    }),
    sponsor: PropTypes.shape({
      data: PropTypes.string,
    }),
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
    items: PropTypes.array,
    strutture_politiche: PropTypes.array,
    evento_supportato_da: PropTypes.array,
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
