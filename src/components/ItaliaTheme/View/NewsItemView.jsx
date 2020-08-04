/**
 * NewsItemView view component.
 * @module components/theme/View/NewsItemView
 */

import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { readingTime } from './ViewUtils';

import {
  RelatedNews,
  GenericCard,
  Metadata,
  RichTextArticle,
  PageHeader,
  SideMenu,
  WideImage,
  Locations,
  CuredBy,
  Gallery,
  Attachments,
  TextOrBlocks,
} from '@italia/components/ItaliaTheme/View';

// import { getBaseUrl } from '@plone/volto/helpers';

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

  useEffect(() => {
    if (documentBody.current) {
      if (__CLIENT__) {
        setReadingtime(
          readingTime(content.title, content.description, documentBody),
        );
        setSideMenuElements(documentBody.current);
      }
    }
  }, [documentBody]);

  return (
    <>
      <div className="container px-4 my-4 newsitem-view">
        <PageHeader
          content={content}
          readingtime={readingtime}
          showreadingtime={true}
          imageinheader={false}
          imageinheader_field={null}
          showdates={true}
          showtopics={true}
          showtassonomiaargomenti={true}
        />
        {(content.image || content.image_caption) && (
          <WideImage
            title={content.title}
            image={content.image}
            caption={content.image_caption}
          />
        )}
        <div className="row border-top row-column-border row-column-menu-left">
          <aside className="col-lg-4">
            <SideMenu data={sideMenuElements} />
          </aside>
          <section
            className="col-lg-8 it-page-sections-container"
            ref={documentBody}
          >
            <article
              id="text-body"
              className="it-page-section anchor-offset clearfix"
            >
              <TextOrBlocks content={content} location={location} />
            </article>

            {content?.items.some((e) => e.id === 'multimedia') && (
              <Gallery content={content} folder_name={'multimedia'} />
            )}
            {content?.items.some((e) => e.id === 'documenti-allegati') && (
              <Attachments
                content={content}
                folder_name={'documenti-allegati'}
              />
            )}
            {((content.a_cura_di && content.a_cura_di.length > 0) ||
              (content.a_cura_di_persone &&
                content.a_cura_di_persone.length > 0)) && (
              <CuredBy
                office={content.a_cura_di ? content.a_cura_di[0] : null}
                people={content.a_cura_di_persone}
              />
            )}
            {content.luoghi_notizia?.length > 0 ? (
              <Locations locations={content.luoghi_notizia} />
            ) : null}
            {content.dataset?.data.replace(/(<([^>]+)>)/g, '') && (
              <RichTextArticle
                content={content.dataset.data}
                tag_id="dataset"
                title={'Dataset'}
              />
            )}
            {content.related_news?.length > 0 ? (
              <article
                id="related-news"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-related-news">
                  {intl.formatMessage(messages.notizie_in_evidenza)}
                </h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.related_news.map((item, i) => (
                    <RelatedNews
                      key={item['@id']}
                      item={item}
                      showimage={false}
                      content={content}
                    />
                  ))}
                </div>
              </article>
            ) : null}
            {content.relatedItems?.length > 0 ? (
              <article
                id="related-items"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-related-items">
                  {intl.formatMessage(messages.related_items)}
                </h4>

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
    luoghi_notizia: PropTypes.array,
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
