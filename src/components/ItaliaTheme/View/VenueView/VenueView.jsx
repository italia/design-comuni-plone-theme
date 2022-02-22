/**
 * VenueView view component.
 * @module components/theme/View/VenueView
 */

import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  SideMenu,
  PageHeader,
  ContentImage,
  RelatedItems,
  RelatedArticles,
  HelpBox,
  Metadata,
  VenuePlaceholderAfterContent,
  VenuePlaceholderAfterRelatedItems,
  RelatedItemInEvidence,
  richTextHasContent,
  SkipToMainContent,
  VenueDescription,
  VenueServices,
  VenueAccessMode,
  VenueWhere,
  VenuePublicTimetable,
  VenueContacts,
} from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
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

  related_items: {
    id: 'related_items',
    defaultMessage: 'Contenuti correlati',
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
        <SkipToMainContent />
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
            {__CLIENT__ && (
              <SideMenu data={sideMenuElements} content_uid={content?.UID} />
            )}
          </aside>
          <section
            className="col-lg-8 it-page-sections-container"
            id="main-content-section"
            ref={documentBody}
          >
            {/* HEADER IMAGE */}

            <ContentImage content={content} position="documentBody" />
            {/* DESCRIZIONE */}
            <VenueDescription content={content} />

            {/* SERVIZI CORRELATI */}
            <VenueServices content={content} />

            {/* MODALITA DI ACCESSO */}
            <VenueAccessMode content={content} />

            {/* MAPPA */}
            <VenueWhere content={content} />

            {/* ORARIO AL PUBBLICO */}
            <VenuePublicTimetable content={content} />

            {/* CONTATTI */}
            <VenueContacts content={content} />

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
      <VenuePlaceholderAfterRelatedItems content={content} />
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
    venue_services: PropTypes.array,
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};
export default VenueView;
