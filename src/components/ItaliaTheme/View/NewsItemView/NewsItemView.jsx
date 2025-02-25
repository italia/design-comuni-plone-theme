/**
 * NewsItemView view component.
 * @module components/theme/View/NewsItemView
 */

import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import {
  PageHeader,
  ContentImage,
  RelatedItems,
  NewsItemPlaceholderAfterContent,
  NewsItemPlaceholderAfterRelatedItems,
  RelatedItemInEvidence,
  SkipToMainContent,
  NewsItemText,
  NewsItemGallery,
  NewsItemAllegati,
  NewsItemACuraDi,
  NewsItemLuoghiCorrelati,
  NewsItemDataset,
  NewsItemMetadata,
  ContentTypeViewSections,
  useSideMenu,
  useReadingTime,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  sideMenuIndex: {
    id: 'sideMenuIndex',
    defaultMessage: 'Indice della pagina',
  },
  newsContent: {
    id: 'newsContent',
    defaultMessage: 'Contenuto della notizia',
  },
});

export const NewsItemViewSectionsOrder = [
  {
    /* HEADER IMAGE */
    component: ContentImage,
    props: { position: 'documentBody' },
  },
  { /* TEXT BODY */ component: NewsItemText },
  { /* GALLERY */ component: NewsItemGallery },
  { /* ALLEGATI */ component: NewsItemAllegati },
  { /* A CURA DI */ component: NewsItemACuraDi },
  { /* LUOGHI CORRELATI */ component: NewsItemLuoghiCorrelati },
  { /* DATASET */ component: NewsItemDataset },
  { /* ULTERIORI INFORMAZIONI */ component: NewsItemMetadata },
];

/**
 * NewsItemView view component class.
 * @function NewsItemView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const NewsItemView = ({ content, location }) => {
  let documentBody = createRef();
  const intl = useIntl();
  const { sideMenuElements, SideMenu } = useSideMenu(content, documentBody);
  const { readingtime } = useReadingTime(content, documentBody);

  let related_items = [];
  if (content?.notizie_correlate?.length > 0) {
    related_items = [...related_items, ...content.notizie_correlate];
  }
  if (content?.relatedItems?.length > 0) {
    related_items = [...related_items, ...content.relatedItems];
  }

  return (
    <>
      <div className="container px-4 my-4 newsitem-view">
        <SkipToMainContent />
        <PageHeader
          content={content}
          readingtime={readingtime}
          showreadingtime={true}
          showdates={true}
          showtassonomiaargomenti={true}
        />

        {/* HEADER IMAGE */}
        <ContentImage content={content} position="afterHeader" />
        <div className="row row-column-border border-light row-column-menu-left">
          <aside
            className="col-lg-4"
            aria-label={intl.formatMessage(messages.sideMenuIndex)}
          >
            <SideMenu data={sideMenuElements} content_uid={content?.UID} />
          </aside>
          <section
            className="col-lg-8 it-page-sections-container border-light"
            id="main-content-section"
            ref={documentBody}
            role="region"
            aria-label={intl.formatMessage(messages.newsContent)}
          >
            {/* SEZIONI */}
            <ContentTypeViewSections
              content={content}
              defaultSections={NewsItemViewSectionsOrder}
            />
          </section>
        </div>
      </div>
      <NewsItemPlaceholderAfterContent content={content} />
      <RelatedItems list={related_items} />
      <RelatedItemInEvidence content={content} />
      <NewsItemPlaceholderAfterRelatedItems content={content} />
    </>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
NewsItemView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    effective: PropTypes.string,
    expires: PropTypes.string,
    image: PropTypes.object,
    image_caption: PropTypes.string,
    text: PropTypes.shape({
      data: PropTypes.string,
    }),
    items: PropTypes.array,
    a_cura_di: PropTypes.array.isRequired,
    a_cura_di_persone: PropTypes.array,
    dataset: PropTypes.shape({
      data: PropTypes.string,
    }),
    modified: PropTypes.string,
    rights: PropTypes.string,
    luoghi_correlati: PropTypes.array,
    related_news: PropTypes.array,
    tassonomia_argomenti: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
    tipologia_notizia: PropTypes.shape({
      title: PropTypes.string,
      token: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default NewsItemView;
