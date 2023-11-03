/**
 * EventoView view component.
 * @module components/theme/View/EventoView
 */

import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import {
  ContentImage,
  PageHeader,
  RelatedItems,
  EventoPlaceholderAfterContent,
  EventoPlaceholderAfterRelatedItems,
  EventoCosE,
  EventoLuoghi,
  EventoDateOrari,
  EventoCosti,
  EventoDocumenti,
  EventoContatti,
  EventoPadreEFigli,
  EventoUlterioriInformazioni,
  RelatedItemInEvidence,
  SkipToMainContent,
  ContentTypeViewSections,
  EventoSponsors,
  useSideMenu,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

export const EventoViewSectionsOrder = [
  {
    /* HEADER IMAGE */

    component: ContentImage,
    props: { position: 'documentBody' },
  },
  { /* COS'è */ component: EventoCosE },
  { /* LUOGHI */ component: EventoLuoghi },
  { /* DATE E ORARI */ component: EventoDateOrari },
  { /* COSTI */ component: EventoCosti },
  { /* DOCUMENTI */ component: EventoDocumenti },
  { /* CONTATTI */ component: EventoContatti },
  { /* EVENTS */ component: EventoPadreEFigli },
  { /* SPONSORS */ component: EventoSponsors },
  { /* ULTERIORI INFORMAZIONI */ component: EventoUlterioriInformazioni },
];

/**
 * EventoView view component class.
 * @function EventoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const EventoView = ({ content, location }) => {
  let documentBody = createRef();
  const { sideMenuElements, SideMenu } = useSideMenu(content, documentBody);

  return (
    <>
      <div className="container px-4 my-4 evento-view">
        <SkipToMainContent />
        <PageHeader
          content={content}
          readingtime={null}
          showreadingtime={true}
          showdates={true}
          showtassonomiaargomenti={true}
        />

        {/* HEADER IMAGE */}
        <ContentImage content={content} position="afterHeader" />

        <div className="row row-column-border border-light row-column-menu-left">
          <aside className="col-lg-4">
            {__CLIENT__ && (
              <SideMenu data={sideMenuElements} content_uid={content?.UID} />
            )}
          </aside>
          <section
            ref={documentBody}
            id="main-content-section"
            className="col-lg-8 it-page-sections-container border-light"
          >
            {/* SEZIONI */}
            <ContentTypeViewSections
              content={content}
              defaultSections={EventoViewSectionsOrder}
            />
          </section>
        </div>
      </div>
      <EventoPlaceholderAfterContent content={content} />
      <RelatedItems content={content} />
      <RelatedItemInEvidence content={content} />
      <EventoPlaceholderAfterRelatedItems content={content} />
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
    patrocinato_da: PropTypes.shape({
      'content-type': PropTypes.string,
      data: PropTypes.string,
      encoding: PropTypes.string,
    }),
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
