/**
 * NewsItemView view component.
 * @module components/theme/View/NewsItemView
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { defineMessages, useIntl } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Attachments } from './Commons';
import { Gallery } from './Commons';
import { CuredBy } from './Commons';
import { Locations } from './Commons';
import { readingTime } from './ViewUtils';
// import { getBaseUrl } from '@plone/volto/helpers';

const messages = defineMessages({
  share: {
    id: 'share',
    defaultMessage: 'Condividi',
  },
  actions: {
    id: 'actions',
    defaultMessage: 'Vedi azioni',
  },
  topics: {
    id: 'topics',
    defaultMessage: 'Argomenti',
  },
  date: {
    id: 'date',
    defaultMessage: 'Data',
  },
  expire: {
    id: 'expire',
    defaultMessage: 'Scadenza',
  },
  other_info: {
    id: 'other_info',
    defaultMessage: 'Altre informazioni',
  },
  modified: {
    id: 'modified',
    defaultMessage: 'Ultimo aggiornamento',
  },
  rights: {
    id: 'rights',
    defaultMessage: 'Diritti',
  },
  reading_time: {
    id: 'reading_time',
    defaultMessage: 'Tempo di lettura',
  },
  minutes: {
    id: 'minutes',
    defaultMessage: 'min',
  },
});

/**
 * NewsItemView view component class.
 * @function NewsItemView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const NewsItemView = ({ content }) => {
  const intl = useIntl();

  let readingtime = readingTime(
    content.text.data + ' ' + content.title + ' ' + content.description,
  );
  return (
    <>
      <div className="container px-4 my-4 newsitem-view">
        <div className="row">
          <div className="col-lg-8 px-lg-4 py-lg-2">
            <h1>
              {content.title}
              {content.subtitle && ` - ${content.subtitle}`}
            </h1>
            {content.description && (
              <p className="documentDescription">{content.description}</p>
            )}
            <div className="row mt-5 mb-4">
              {((content.effective || content.expires) && (
                <div className="col-6">
                  {content.effective && (
                    <div className="row">
                      <div className="col-12">
                        <small>{intl.formatMessage(messages.date)}:</small>
                        <p className="font-weight-semibold text-monospace">
                          {moment(content.effective).format('DD-MM-Y')}
                        </p>
                      </div>
                    </div>
                  )}
                  {content.expires && (
                    <div className="row">
                      <div className="col-12">
                        <small>{intl.formatMessage(messages.expire)}:</small>
                        <p className="font-weight-semibold text-monospace">
                          {moment(content.expires).format('DD-MM-Y')}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )) || <div className="col-6" />}
              {readingtime > 0 &&
                ((
                  <div className="col-6">
                    <small>{intl.formatMessage(messages.reading_time)}</small>
                    <p className="font-weight-semibold">
                      {readingtime} {intl.formatMessage(messages.minutes)}
                    </p>
                  </div>
                ) || <div className="col-6" />)}
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="dropdown d-inline">
              <a href="https://www.google.it" className="mr-3">
                {intl.formatMessage(messages.share)}
              </a>
            </div>
            <div className="dropdown d-inline">
              <a href="https://www.google.it">
                {intl.formatMessage(messages.actions)}
              </a>
            </div>
            <div className="mt-4 mb-4">
              {content.tassonomia_argomenti && (
                <>
                  <h4>{intl.formatMessage(messages.topics)}</h4>
                  <div>
                    {content.tassonomia_argomenti.map((item, i) => (
                      <a
                        href="https://www.google.it"
                        className="badge badge-pill badge-argomenti"
                        key={i}
                        title={item.title}
                      >
                        <div className="chip chip-simple chip-primary">
                          <span className="chip-label">{item.title}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {(content.image || content.image_caption) && (
          <div className="row row-full-width my-3">
            <figure className="figure">
              {content.image && (
                <img
                  src={flattenToAppURL(content.image.download)}
                  className="figure-img img-fluid full-width"
                  alt="{content.image_caption || content.title}"
                  title="{content.image_caption || content.title}"
                />
              )}
              {content.image_caption && (
                <figcaption className="figure-caption text-center pt-3">
                  {content.image_caption}
                </figcaption>
              )}
            </figure>
          </div>
        )}
        <div className="row border-top row-column-border row-column-menu-left">
          <aside className="col-lg-4">MENU LATERALE</aside>
          <section className="col-lg-8 it-page-sections-container">
            {content.text.data && (
              <article className="it-page-section anchor-offset mt-5">
                {content.text && (
                  <div
                    dangerouslySetInnerHTML={{ __html: content.text.data }}
                  />
                )}
              </article>
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
            {(content.a_cura_di || content.a_cura_di_persone) && (
              <CuredBy
                content={content}
                office={content.a_cura_di}
                people={content.a_cura_di_persone}
              />
            )}
            {content.luoghi_notizia && (
              <Locations locations={content.luoghi_notizia} />
            )}
            {content.dataset && (
              <article
                id="dataset"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 className="mb-3">Dataset</h4>
                <div
                  dangerouslySetInnerHTML={{ __html: content.dataset.data }}
                />
              </article>
            )}
            <article
              id="ulteriori-informazioni"
              className="it-page-section anchor-offset mt-5"
            >
              <h4 className="mb-3">
                {intl.formatMessage(messages.other_info)}
              </h4>
              <>
                <p className="text-serif">
                  {intl.formatMessage(messages.modified)}
                </p>
                <h6>
                  <strong>
                    {moment(content.modified).format('DD-MM-Y HH:MM')}
                  </strong>
                </h6>
              </>
              {content.rights && (
                <>
                  <p className="text-serif">
                    {intl.formatMessage(messages.rights)}
                  </p>
                  <h6>
                    <strong>{content.rights}</strong>
                  </h6>
                </>
              )}
            </article>
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
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    effective: PropTypes.string,
    expires: PropTypes.string,
    image: PropTypes.object,
    image_caption: PropTypes.string,
    text: PropTypes.shape({
      data: PropTypes.string,
    }),
    items: PropTypes.object,
    a_cura_di: PropTypes.shape({
      title: PropTypes.string,
    }),
    a_cura_di_persone: PropTypes.object,
    dataset: PropTypes.shape({
      data: PropTypes.string,
    }),
    modified: PropTypes.string,
    rights: PropTypes.string,
  }).isRequired,
};

export default NewsItemView;
