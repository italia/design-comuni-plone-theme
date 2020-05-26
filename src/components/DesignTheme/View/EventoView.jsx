/**
 * EventoView view component.
 * @module components/theme/View/EventoView
 */

import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import { Attachments } from './Commons';
import { Gallery } from './Commons';
import { CuredBy } from './Commons';
import { Locations } from './Commons';
import { WideImage } from './Commons';
import { SideMenu } from './Commons';
import { PageHeader } from './Commons';
import { RichTextArticle } from './Commons';
import { Metadata } from './Commons';
import { Venue } from './Commons';
import { readingTime } from './ViewUtils';
import { OfficeCard } from './Commons';
import { GenericCard } from './Commons';
import { Icon } from 'design-react-kit/dist/design-react-kit';
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
 * EventoView view component class.
 * @function EventoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const EventoView = ({ content }) => {
  //   let readingtime = readingTime(
  //     `${content.text.data} ${content.title} ${content.description}`,
  //   );
  const intl = useIntl();
  console.log(content);
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
            {content?.items.some(e => e.id === 'documenti-allegati') && (
              <Attachments
                content={content}
                folder_name={'documenti-allegati'}
              />
            )}
            {content?.luogo_event?.length > 0 ? (
              <>
                <Locations locations={content?.luogo_event} />
                {content?.luogo_event?.map(location => (
                  <Venue venue={location} key={location['@id']} />
                ))}
              </>
            ) : null}

            {content?.orari?.data.replace(/(<([^>]+)>)/g, '') && (
              <RichTextArticle
                content={content?.orari?.data}
                tag_id="date-e-orari"
                title={'Date e orari'}
              />
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
            {content?.organizzato_da_esterno ? (
              <>
                <h4>Contatti</h4>
                <div className="card card-teaser border rounded shadow p-4">
                  <div className="card-body pr-3"></div>
                </div>
                {content?.evento_supportato_da?.map(item => (
                  <OfficeCard key={item['@id']} office={item} />
                ))}
              </>
            ) : null}
            {content?.ulteriori_informazioni?.data && (
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
            {content?.sponsor?.data && (
              <RichTextArticle
                content={content?.sponsor?.data}
                tag_id="sponsor"
                title={'Sponsor:'}
              />
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
// EventoView.propTypes = {
//   content: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     subtitle: PropTypes.string,
//     description: PropTypes.string,
//     effective: PropTypes.string,
//     expires: PropTypes.string,
//     image: PropTypes.object,
//     image_caption: PropTypes.string,
//     text: PropTypes.shape({
//       data: PropTypes.string,
//     }),
//     items: PropTypes.array,
//     a_cura_di: PropTypes.shape({
//       title: PropTypes.string,
//     }).isRequired,
//     a_cura_di_persone: PropTypes.array,
//     dataset: PropTypes.shape({
//       data: PropTypes.string,
//     }),
//     modified: PropTypes.string,
//     rights: PropTypes.string,
//     luoghi_notizia: PropTypes.array,
//     related_news: PropTypes.array,
//     tassonomia_argomenti: PropTypes.arrayOf(
//       PropTypes.shape({
//         title: PropTypes.string,
//         token: PropTypes.string,
//       }),
//     ),
//     tipologia_notizia: PropTypes.shape({
//       title: PropTypes.string,
//       token: PropTypes.string,
//     }).isRequired,
//   }).isRequired,
// };

export default EventoView;
