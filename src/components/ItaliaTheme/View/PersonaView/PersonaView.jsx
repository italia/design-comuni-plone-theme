/**
 * PersonaView view component.
 * @module components/theme/View/PersonaView
 */

import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import {
  SideMenu,
  PageHeader,
  RelatedItems,
  PersonaRuolo,
  PersonaContatti,
  PersonaDocumenti,
  PersonaUlterioriInformazioni,
  PersonaPlaceholderAfterContent,
  PersonaPlaceholderAfterRelatedItems,
  RelatedItemInEvidence,
  SkipToMainContent,
  ContentTypeViewSections,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

export const PersonaViewSectionsOrder = [
  { /* RUOLO */ component: PersonaRuolo },
  { /* CONTATTI */ component: PersonaContatti },
  { /* DOCUMENTI */ component: PersonaDocumenti },
  { /* ULTERIORI INFORMAZIONI */ component: PersonaUlterioriInformazioni },
];

/**
 * PersonaView view component class.
 * @function PersonaView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const PersonaView = ({ content }) => {
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
      <div className="container px-4 my-4 persona-view">
        <SkipToMainContent />
        <PageHeader
          content={content}
          readingtime={null}
          showreadingtime={false}
          imageinheader={!!content.foto_persona}
          imageinheader_field={'foto_persona'}
          showdates={false}
          showtassonomiaargomenti={true}
        />
        <div className="row row-column-border row-column-menu-left side-menu-container">
          <aside className="col-lg-4">
            <SideMenu data={sideMenuElements} content_uid={content?.UID} />
          </aside>
          <section
            className="col-lg-8 it-page-sections-container"
            id="main-content-section"
            ref={documentBody}
          >
            {/* SEZIONI */}
            <ContentTypeViewSections
              content={content}
              defaultSections={PersonaViewSectionsOrder}
            />
          </section>
        </div>
      </div>
      <PersonaPlaceholderAfterContent content={content} />
      <RelatedItems content={content} />
      <RelatedItemInEvidence content={content} />
      <PersonaPlaceholderAfterRelatedItems content={content} />
    </>
  );
};

// TODO: items
PersonaView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    atto_nomina: PropTypes.shape({
      download: PropTypes.string,
      filename: PropTypes.string,
    }),
    biografia: PropTypes.shape({
      data: PropTypes.string,
    }),
    collegamenti_organizzazione_l1: PropTypes.array,
    collegamenti_organizzazione_l2: PropTypes.array,
    competenze: PropTypes.shape({
      data: PropTypes.string,
    }),
    curriculum_vitae: PropTypes.shape({
      download: PropTypes.string,
      filename: PropTypes.string,
    }),
    data_conclusione_incarico: PropTypes.string,
    data_insediamento: PropTypes.string,
    deleghe: PropTypes.shape({
      data: PropTypes.string,
    }),
    description: PropTypes.string,
    email: PropTypes.array,
    foto_persona: PropTypes.shape({
      scales: PropTypes.shape({
        preview: PropTypes.shape({
          download: PropTypes.string,
        }),
      }),
    }),
    informazioni_di_contatto: PropTypes.shape({
      data: PropTypes.string,
    }),
    organizzazione_riferimento: PropTypes.array.isRequired,
    responsabile_di: PropTypes.array,
    ruolo: PropTypes.object.isRequired,
    telefono: PropTypes.array,
    tipologia_persona: PropTypes.shape({
      title: PropTypes.string.isRequired,
      token: PropTypes.string.isRequired,
    }).isRequired,
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};

export default PersonaView;
