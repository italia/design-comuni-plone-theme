/**
 * NewsItemView view component.
 * @module components/theme/View/NewsItemView
 */

import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { readingTime } from '../ViewUtils';
import {
  Metadata,
  RichTextArticle,
  PageHeader,
  SideMenu,
  ContentImage,
  VenuesSmall,
  CuredBy,
  Gallery,
  Attachments,
  RelatedItems,
  NewsItemPlaceholderAfterContent,
  RelatedItemInEvidence,
  richTextHasContent,
} from '@italia/components/ItaliaTheme/View';

// import { getBaseUrl } from '@plone/volto/helpers';

const messages = defineMessages({
  news_item_contenuto: {
    id: 'news_item_contenuto',
    defaultMessage: 'Contenuto',
  },
  notizie_in_evidenza: {
    id: 'notizie_in_evidenza',
    defaultMessage: 'Notizie in evidenza',
  },
  related_items: {
    id: 'related_items',
    defaultMessage: 'Contenuti correlati',
  },
  dataset: {
    id: 'dataset',
    defaultMessage: 'Dataset',
  },
  luoghi: {
    id: 'luoghi_notizia',
    defaultMessage: 'Luoghi',
  },
});

/**
 * NewsItemView view component class.
 * @function NewsItemView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const NewsItemView = ({ content, location }) => {
  const intl = useIntl();

  const [readingtime, setReadingtime] = useState(0);
  let documentBody = createRef();
  const [sideMenuElements, setSideMenuElements] = useState(null);

  let related_items = [];
  if (content?.related_news?.length > 0) {
    related_items = [...related_items, ...content.related_news];
  }
  if (content?.relatedItems?.length > 0) {
    related_items = [...related_items, ...content.relatedItems];
  }

  useEffect(() => {
    if (documentBody.current) {
      if (__CLIENT__) {
        setReadingtime(
          readingTime(content.title, content.description, documentBody),
        );
        setSideMenuElements(documentBody.current);
      }
    }
  }, [content.description, content.title, documentBody]);

  return (
    <>
      <div className="container px-4 my-4 newsitem-view">
        <PageHeader
          content={content}
          readingtime={readingtime}
          showreadingtime={true}
          showdates={true}
          showtopics={true}
          showtassonomiaargomenti={true}
        />

        {/* HEADER IMAGE */}
        <ContentImage content={content} position="afterHeader" />

        <div className="row border-top row-column-border row-column-menu-left">
          <aside className="col-lg-4">
            <SideMenu data={sideMenuElements} />
          </aside>
          <section
            className="col-lg-8 it-page-sections-container"
            ref={documentBody}
          >
            {/* HEADER IMAGE */}
            <ContentImage content={content} position="documentBody" />

            {/* TEXT BODY */}
            <RichTextArticle
              content={content.descrizione_estesa}
              tag_id={'text-body'}
              field="descrizione_estesa"
              title={intl.formatMessage(messages.news_item_contenuto)}
              show_title={false}
            />

            <Gallery content={content} folder_name={'multimedia'} />

            <Attachments content={content} folder_name={'documenti-allegati'} />

            {((content.a_cura_di && content.a_cura_di.length > 0) ||
              (content.a_cura_di_persone &&
                content.a_cura_di_persone.length > 0)) && (
              <CuredBy
                office={content.a_cura_di ? content.a_cura_di[0] : null}
                people={content.a_cura_di_persone}
              />
            )}

            {content.luoghi_correlati?.length > 0 && (
              <RichTextArticle
                tag_id="luoghi"
                title={intl.formatMessage(messages.luoghi)}
              >
                <VenuesSmall venues={content.luoghi_correlati} />
              </RichTextArticle>
            )}

            {richTextHasContent(content.dataset) && (
              <RichTextArticle
                content={content.dataset}
                tag_id="dataset"
                title={intl.formatMessage(messages.dataset)}
              />
            )}
            <Metadata content={content} />
          </section>
        </div>
      </div>
      <NewsItemPlaceholderAfterContent content={content} />
      <RelatedItems list={related_items} />
      <RelatedItemInEvidence content={content} />
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
