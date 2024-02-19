/**
 * BandoVies view component.
 * @module components/theme/View/BandoView
 */

import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import {
  PageHeader,
  RelatedItems,
  BandoPlaceholderAfterContent,
  BandoPlaceholderAfterRelatedItems,
  BandoText,
  BandoUfficioResponsabile,
  BandoAreaResponsabile,
  BandoServizi,
  BandoDate,
  BandoApprofondimenti,
  BandoNoteAggiornamento,
  BandoUlterioriInformazioni,
  RelatedItemInEvidence,
  SkipToMainContent,
  ContentTypeViewSections,
  useSideMenu,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

export const BandoViewSectionsOrder = [
  { /* Testo */ component: BandoText },
  /* Responsabili */
  { /* UFFICIO */ component: BandoUfficioResponsabile },
  { /* AREA */ component: BandoAreaResponsabile },
  { /* SERVIZI */ component: BandoServizi },
  { /* DATE IMPORTANTI  */ component: BandoDate },
  {
    /* ALLEGATI (CARTELLE APPROFONDIMENTI)  */ component: BandoApprofondimenti,
  },
  { /* NOTE AGGIORNAMENTO  */ component: BandoNoteAggiornamento },
  { /* ULTERIORI INFORMAZIONI  */ component: BandoUlterioriInformazioni },
];
/**
 * BandoView view component class.
 * @function BandoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const BandoView = ({ content, location }) => {
  let documentBody = createRef();
  const { sideMenuElements, SideMenu } = useSideMenu(content, documentBody);

  return (
    <>
      <div className="container px-4 my-4 bando-view">
        <SkipToMainContent />
        <PageHeader
          content={content}
          readingtime={null}
          showreadingtime={false}
          showdates={false}
          showtassonomiaargomenti={true}
          showbandostate={true}
        />
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
              defaultSections={BandoViewSectionsOrder}
            />
          </section>
        </div>
      </div>
      <BandoPlaceholderAfterContent content={content} />
      <RelatedItems content={content} />
      <RelatedItemInEvidence content={content} />
      <BandoPlaceholderAfterRelatedItems content={content} />
    </>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
BandoView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    chiusura_procedimento_bando: PropTypes.string,
    scadenza_bando: PropTypes.string,
    scadenza_domande_bando: PropTypes.string,
    riferimenti_bando: PropTypes.shape({
      data: PropTypes.string,
    }),
    text: PropTypes.shape({
      data: PropTypes.string,
    }),
    ufficio_responsabile: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
    area_responsabile: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
    tipologia_bando: PropTypes.shape({
      title: PropTypes.string,
      token: PropTypes.string,
    }),
    tassonomia_argomenti: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
    servizi_correlati: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
    ente_bando: PropTypes.arrayOf(PropTypes.string),
    effective: PropTypes.string,
    expires: PropTypes.string,
    destinatari: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default BandoView;
