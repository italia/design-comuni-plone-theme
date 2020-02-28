/**
 * UOView view component.
 * @module components/theme/View/UOView
 */

import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';

import { WideImage } from './Commons';
import { SideMenu } from './Commons';
import { PageHeader } from './Commons';
import { RichTextArticle } from './Commons';
import { OfficeCard } from './Commons';
import { Attachments } from './Commons';
import { Metadata } from './Commons';
import { Venue } from './Commons';
import { NewsCard } from './Commons';
import { GenericCard } from './Commons';
import { Chip, ChipLabel } from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  tipologia_organizzazione: {
    id: 'tipologia_organizzazione',
    defaultMessage: 'Tipologia organizzazione',
  },
  legami_altre_strutture: {
    id: 'legami_altre_strutture',
    defaultMessage: 'Legami con altre strutture',
  },
  assessore_riferimento: {
    id: 'assessore_riferimento',
    defaultMessage: 'Assessore di riferimento',
  },
  responsabile: {
    id: 'responsabile',
    defaultMessage: 'Reposanbile',
  },
  persone_struttura: {
    id: 'persone_struttura',
    defaultMessage: 'Persone che compongono la struttura',
  },
  ulteriori_informazioni: {
    id: 'ulteriori_informazioni',
    defaultMessage: 'Informazioni',
  },
  box_aiuto: {
    id: 'box_aiuto',
    defaultMessage: "Box d'aiuto",
  },
  sedi: {
    id: 'sedi',
    defaultMessage: 'Dove e come trovarci',
  },
  notizie_in_evidenza: {
    id: 'notizie_in_evidenza',
    defaultMessage: 'Notizie in evidenza',
  },
  servizi_offerti: {
    id: 'servizi_offerti',
    defaultMessage: 'Servizi offerti',
  },
  related_items: {
    id: 'related_items',
    defaultMessage: 'Contenuti correlati',
  },
});

/**
 * UOView view component class.
 * @function NewsItemView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const UOView = ({ content }) => {
  const intl = useIntl();
  return (
    <>
      <div className="container px-4 my-4 uo-view">
        <PageHeader
          content={content}
          readingtime={null}
          showreadingtime={false}
          showdates={false}
          showtassonomiaargomenti={true}
        />
        {content.immagine && (
          <WideImage
            title={content.title}
            image={content.immagine}
            caption={null}
          />
        )}
        <div className="row border-top row-column-border row-column-menu-left">
          <aside className="col-lg-4">
            <SideMenu />
          </aside>
          <section className="col-lg-8 it-page-sections-container">
            {content.ulteriori_informazioni.data.replace(
              /(<([^>]+)>)/g,
              '',
            ) && (
              <RichTextArticle
                content={content.ulteriori_informazioni.data}
                tag_id="ulteriori_informazioni"
                title={intl.formatMessage(messages.ulteriori_informazioni)}
              />
            )}
            {content.sedi && (
              <article id="sedi" className="it-page-section anchor-offset mt-5">
                <h4>{intl.formatMessage(messages.sedi)}</h4>
                {content.sedi.map((item, i) => (
                  <Venue key={item['@id']} venue={item} content={content} />
                ))}
              </article>
            )}
            {content.tipologia_organizzazione && (
              <article
                id="organizzazione"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 className="mb-3">
                  {intl.formatMessage(messages.tipologia_organizzazione)}
                </h4>
                <p className="text-serif">
                  {' '}
                  {content.tipologia_organizzazione.title}
                </p>
              </article>
            )}
            {content.competenze.data.replace(/(<([^>]+)>)/g, '') && (
              <RichTextArticle
                content={content.competenze.data}
                tag_id={'competenze'}
                title={'Competenze'}
              />
            )}
            {content.servizi_offerti.length > 0 ? (
              <article
                id="servizi-offerti"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.servizi_offerti)}</h4>
                <div class="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.servizi_offerti.map((item, i) => (
                    <GenericCard
                      index={item['@id']}
                      item={item}
                      showimage={true}
                      image_field={'immagine'}
                      content={content}
                    />
                  ))}
                </div>
              </article>
            ) : null}
            {content.legami_con_altre_strutture.length > 0 ? (
              <article
                id="legami-altre-strutture"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.legami_altre_strutture)}</h4>
                <div class="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.legami_con_altre_strutture.map((item, i) => (
                    <OfficeCard
                      key={item['@id']}
                      office={item}
                      content={content}
                    />
                  ))}
                </div>
              </article>
            ) : null}
            {content.assessore_riferimento.length > 0 ? (
              <article
                id="assessore-riferimento"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.assessore_riferimento)}</h4>
                {content.assessore_riferimento.map((item, i) => (
                  <Link
                    to={flattenToAppURL(item['@id'])}
                    key={item['@id']}
                    title={item.title}
                  >
                    <Chip
                      color="primary"
                      disabled={false}
                      large={false}
                      simple
                      tag="div"
                    >
                      <ChipLabel tag="span">{item.title}</ChipLabel>
                    </Chip>
                  </Link>
                ))}
              </article>
            ) : null}
            {content.responsabile.length > 0 ? (
              <article
                id="responsabile"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.responsabile)}</h4>
                {content.responsabile.map((item, i) => (
                  <Link
                    to={flattenToAppURL(item['@id'])}
                    key={item['@id']}
                    title={item.title}
                  >
                    <Chip
                      color="primary"
                      disabled={false}
                      large={false}
                      simple
                      tag="div"
                    >
                      <ChipLabel tag="span">{item.title}</ChipLabel>
                    </Chip>
                  </Link>
                ))}
              </article>
            ) : null}
            {content.persone_struttura.length > 0 ? (
              <article
                id="persone-struttura"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.persone_struttura)}</h4>
                {content.persone_struttura.map((item, i) => (
                  <Link
                    to={flattenToAppURL(item['@id'])}
                    key={item['@id']}
                    title={item.title}
                  >
                    <Chip
                      color="primary"
                      disabled={false}
                      large={false}
                      simple
                      tag="div"
                    >
                      <ChipLabel tag="span">{item.title}</ChipLabel>
                    </Chip>
                  </Link>
                ))}
              </article>
            ) : null}
            {content?.items.some(e => e.id === 'allegati') && (
              <Attachments content={content} folder_name={'allegati'} />
            )}
            {content.box_aiuto && (
              <RichTextArticle
                content={content.box_aiuto.data}
                tag_id="box_aiuto"
                title={intl.formatMessage(messages.box_aiuto)}
              />
            )}
            {content.notizie_collegate.length > 0 ? (
              <article
                id="related-news"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.notizie_in_evidenza)}</h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.notizie_collegate.map((item, i) => (
                    <NewsCard
                      index={item['@id']}
                      item={item}
                      showimage={false}
                      content={content}
                    />
                  ))}
                </div>
              </article>
            ) : null}
            {content.relatedItems.length > 0 ? (
              <article
                id="related-items"
                className="it-page-section anchor-offset mt-5"
              >
                <h4>{intl.formatMessage(messages.related_items)}</h4>
                <div class="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.relatedItems.map((item, i) => (
                    <GenericCard
                      index={item['@id']}
                      item={item}
                      showimage={false}
                      content={content}
                    />
                  ))}
                </div>
              </article>
            ) : null}
            <Metadata content={content} />
          </section>
        </div>
      </div>
    </>
  );
};

export default UOView;
