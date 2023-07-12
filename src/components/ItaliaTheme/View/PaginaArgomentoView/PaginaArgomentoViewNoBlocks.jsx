/**
 * PaginaArgomentoView view component.
 * @module components/theme/View/PaginaArgomentoViewNoBlocks
 */

import React, { createRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  GenericCard,
  ContentImage,
  SideMenu,
  PageHeader,
  OfficeCard,
  RichTextArticle,
  Metadata,
  NewsCard,
  PaginaArgomentoPlaceholderAfterContent,
  PaginaArgomentoPlaceholderAfterRelatedItems,
  SkipToMainContent,
  RelatedItems,
  RelatedItemInEvidence,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

// import { getBaseUrl } from '@plone/volto/helpers';

const messages = defineMessages({
  area_appartenenza: {
    id: 'area_appartenenza',
    defaultMessage: 'Area di appartenenza',
  },
  assessorati_riferimento: {
    id: 'assessorati_riferimento',
    defaultMessage: 'Assessorati di riferimento',
  },
  ulteriori_informazioni: {
    id: 'ulteriori_informazioni',
    defaultMessage: 'Ulteriori informazioni',
  },
  related_servizio: {
    id: 'related_services',
    defaultMessage: 'Servizi',
  },
  related_items: {
    id: 'related_items',
    defaultMessage: 'Contenuti correlati',
  },
  related_news: {
    id: 'related_news',
    defaultMessage: 'Novità',
  },
  related_doc: {
    id: 'related_doc',
    defaultMessage: 'Documenti',
  },
  related_uo: {
    id: 'related_uo',
    defaultMessage: 'Amministrazione',
  },
});

/**
 * PaginaArgomentoView view component class.
 * @function PaginaArgomentoViewNoBlocks
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const PaginaArgomentoViewNoBlocks = ({ content }) => {
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
      <div className="container px-4 my-4 uo-view">
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

        <div className="row border-top row-column-border row-column-menu-left side-menu-container">
          <aside className="col-lg-4">
            <SideMenu data={sideMenuElements} content_uid={content?.UID} />
          </aside>
          <section
            className="col-lg-8 it-page-sections-container"
            id="main-content-section"
            ref={documentBody}
          >
            {/* HEADER IMAGE */}
            <ContentImage content={content} position="documentBody" />

            {content?.area_appartenenza?.length > 0 ? (
              <article
                id="area_appartenenza"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.area_appartenenza)}</h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.area_appartenenza.map((item, i) => (
                    <OfficeCard key={item['@id']} office={item} />
                  ))}
                </div>
              </article>
            ) : null}
            {content?.assessorati_riferimento?.length > 0 ? (
              <article
                id="area_appartenenza"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.assessorati_riferimento)}</h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.assessorati_riferimento.map((item, i) => (
                    <OfficeCard key={item['@id']} office={item} />
                  ))}
                </div>
              </article>
            ) : null}

            <RichTextArticle
              content={content.ulteriori_informazioni}
              tag_id={'text-ulteriori_informazioni'}
              title={intl.formatMessage(messages.ulteriori_informazioni)}
            />

            {content?.related_services?.length > 0 ? (
              <article
                id="related_servizio-items"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.related_services)}</h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.related_servizio.map((item, i) => (
                    <GenericCard
                      show_icon={null}
                      key={item['@id']}
                      item={item}
                      showimage={true}
                    />
                  ))}
                </div>
              </article>
            ) : null}
            {content?.related_news?.length > 0 ? (
              <article
                id="related-news"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.related_news)}</h4>
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
            {content?.related_docs?.length > 0 ? (
              <article
                id="related_doc-items"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.related_docs)}</h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.related_doc.map((item, i) => (
                    <GenericCard
                      show_icon={null}
                      key={item['@id']}
                      item={item}
                      showimage={false}
                    />
                  ))}
                </div>
              </article>
            ) : null}
            {content?.related_uo?.length > 0 ? (
              <article
                id="related_uo-items"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.related_uo)}</h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.related_uo.map((item, i) => (
                    <GenericCard
                      show_icon={null}
                      key={item['@id']}
                      item={item}
                      showimage={false}
                    />
                  ))}
                </div>
              </article>
            ) : null}
            {content?.relatedItems?.length > 0 ? (
              <article
                id="related-items"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.related_items)}</h4>
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
            <Metadata content={content} />
          </section>
        </div>
        <PaginaArgomentoPlaceholderAfterContent content={content} />
      </div>
      <RelatedItems content={content} />
      <RelatedItemInEvidence content={content} />
      <PaginaArgomentoPlaceholderAfterRelatedItems content={content} />
    </>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
PaginaArgomentoViewNoBlocks.propTypes = {
  content: PropTypes.shape({
    area_appartenenza: PropTypes.array,
    assessorati_riferimento: PropTypes.array,
    ulteriori_informazioni: PropTypes.shape({
      data: PropTypes.string,
    }),
    description: PropTypes.string,
    image: PropTypes.shape({
      download: PropTypes.string,
    }),
    rights: PropTypes.string,
    subjects: PropTypes.array,
    title: PropTypes.string.isRequired,
  }),
};

export default PaginaArgomentoViewNoBlocks;
