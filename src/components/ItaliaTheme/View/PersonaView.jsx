/**
 * NewsItemView view component.
 * @module components/theme/View/NewsItemView
 */

import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { defineMessages, useIntl } from 'react-intl';
import {
  Attachments,
  Attachment,
  SideMenu,
  PageHeader,
  RichTextArticle,
  OfficeCard,
  Gallery,
  Metadata,
  NewsCard,
  GenericCard,
} from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  role_bio: {
    id: 'role_bio',
    defaultMessage: 'Ruolo/Biografia',
  },
  contacts: {
    id: 'contacts',
    defaultMessage: 'Contatti',
  },
  phone: {
    id: 'phone',
    defaultMessage: 'Telefono',
  },
  email: {
    id: 'email',
    defaultMessage: 'Email',
  },
  organizzazione_riferimento: {
    id: 'organizzazione_riferimento',
    defaultMessage: 'Organizzazione di riferimento',
  },
  responsabile_di: {
    id: 'responsabile_di',
    defaultMessage: 'Responsabile di',
  },
  collegamenti_organizzazione_l1: {
    id: 'collegamenti_organizzazione_l1',
    defaultMessage: "Collegamenti all'organizzazione (I Livello)",
  },
  collegamenti_organizzazione_l2: {
    id: 'collegamenti_organizzazione_l2',
    defaultMessage: "Collegamenti all'organizzazione (II Livello)",
  },
  competenze: {
    id: 'competenze',
    defaultMessage: 'Competenze',
  },
  deleghe: {
    id: 'deleghe',
    defaultMessage: 'Deleghe',
  },
  ulteriori_informazioni: {
    id: 'ulteriori_informazioni',
    defaultMessage: 'Ulteriori informazioni',
  },
  compensi: {
    id: 'compensi',
    defaultMessage: 'Compensi',
  },
  importi_di_viaggio_e_o_servizi: {
    id: 'importi_di_viaggio_e_o_servizi',
    defaultMessage: 'Importi di viaggio e/o servizi',
  },
  altre_cariche: {
    id: 'altre_cariche',
    defaultMessage: 'Altre cariche',
  },
  situazione_patrimoniale: {
    id: 'situazione_patrimoniale',
    defaultMessage: 'Situazione patrimoniale',
  },
  dichiarazione_dei_redditi: {
    id: 'dichiarazione_dei_redditi',
    defaultMessage: 'Dichiarazione dei redditi',
  },
  spese_elettorali: {
    id: 'spese_elettorali',
    defaultMessage: 'Spese elettorali',
  },
  valutazione_situazione_patrimoniale: {
    id: 'valutazione_situazione_patrimoniale',
    defaultMessage: 'Valutazione situazione patrimoniale',
  },
  data_insediamento: {
    id: 'data_insediamento',
    defaultMessage: 'Data di insediamento',
  },
  data_conclusione_incarico: {
    id: 'data_conclusione_incarico',
    defaultMessage: "Ha fatto parte dell'organizzazione comunale fino al",
  },
  curriculum_vitae: {
    id: 'curriculum_vitae',
    defaultMessage: 'Curriculum vitae',
  },
  atto_nomina: {
    id: 'atto_nomina',
    defaultMessage: 'Atto di nomina',
  },
  related_news: {
    id: 'related_news',
    defaultMessage: 'Notizie collegate',
  },
});

/**
 * PersonaView view component class.
 * @function PersonaView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const PersonaView = ({ content }) => {
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
      <div className="container px-4 my-4 persona-view">
        <PageHeader
          content={content}
          readingtime={null}
          showreadingtime={false}
          imageinheader={true}
          imageinheader_field={'foto_persona'}
          showdates={false}
          showtassonomiaargomenti={true}
        />
        <div className="row border-top row-column-border row-column-menu-left">
          <aside className="col-lg-4">
            <SideMenu data={sideMenuElements} />
          </aside>
          <section
            className="col-lg-8 it-page-sections-container"
            ref={documentBody}
          >
            {content.data_insediamento && !content.data_conclusione_incarico ? (
              <p>
                <strong>
                  {intl.formatMessage(messages.data_insediamento)}:
                </strong>{' '}
                {moment(content.data_insediamento).format('DD-MM-Y')}
              </p>
            ) : (
              ''
            )}
            {content.data_conclusione_incarico ? (
              <p>
                <strong>
                  {intl.formatMessage(messages.data_conclusione_incarico)}:
                </strong>{' '}
                {moment(content.data_conclusione_incarico).format('DD-MM-Y')}
              </p>
            ) : (
              ''
            )}
            {!content.data_conclusione_incarico && content.biografia?.data && (
              <RichTextArticle
                content={content.biografia.data}
                tag_id={'biografia'}
                title={intl.formatMessage(messages.role_bio)}
                add_class="mb-4"
              />
            )}
            {content.telefono ||
            content.email ||
            content.informazioni_di_contatto ? (
              <article id="contacts">
                <h4 id="header-contacts">
                  {intl.formatMessage(messages.contacts)}
                </h4>
                {content.telefono ? (
                  <p>
                    <strong>{intl.formatMessage(messages.phone)}: </strong>
                    <a href={`tel:${content.telefono}`}>{content.telefono}</a>
                  </p>
                ) : (
                  ''
                )}
                {content.email ? (
                  <p>
                    <strong>{intl.formatMessage(messages.email)}: </strong>
                    <a href={`mailto:${content.email}`}>{content.email}</a>
                  </p>
                ) : (
                  ''
                )}
                {content.informazioni_di_contatto ? (
                  <div
                    className="text-serif"
                    dangerouslySetInnerHTML={{
                      __html: content.informazioni_di_contatto.data,
                    }}
                  />
                ) : (
                  ''
                )}
              </article>
            ) : (
              ''
            )}
            {!content.data_conclusione_incarico &&
            content.organizzazione_riferimento?.length > 0 ? (
              <article
                id="organizzazione_riferimento"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-organizzazione_riferimento">
                  {intl.formatMessage(messages.organizzazione_riferimento)}
                </h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.organizzazione_riferimento.map((item, i) => (
                    <OfficeCard key={item['@id']} office={item} />
                  ))}
                </div>
              </article>
            ) : null}
            {!content.data_conclusione_incarico &&
            content.responsabile_di?.length > 0 ? (
              <article
                id="responsabile_di"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-responsabile_di">
                  {intl.formatMessage(messages.responsabile_di)}
                </h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.responsabile_di.map((item, i) => (
                    <OfficeCard key={item['@id']} office={item} />
                  ))}
                </div>
              </article>
            ) : null}
            {!content.data_conclusione_incarico &&
            content.collegamenti_organizzazione_l1.length > 0 ? (
              <article
                id="collegamenti_organizzazione_l1"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-collegamenti_organizzazione_l1">
                  {intl.formatMessage(messages.collegamenti_organizzazione_l1)}
                </h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.collegamenti_organizzazione_l1.map((item, i) => (
                    <OfficeCard key={item['@id']} office={item} />
                  ))}
                </div>
              </article>
            ) : null}
            {!content.data_conclusione_incarico &&
            content.collegamenti_organizzazione_l2.length > 0 ? (
              <article
                id="collegamenti_organizzazione_l2"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-collegamenti_organizzazione_l2">
                  {intl.formatMessage(messages.collegamenti_organizzazione_l2)}
                </h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.collegamenti_organizzazione_l2.map((item, i) => (
                    <OfficeCard key={item['@id']} office={item} />
                  ))}
                </div>
              </article>
            ) : null}
            {!content.data_conclusione_incarico && content.competenze?.data ? (
              <RichTextArticle
                content={content.competenze.data}
                tag_id={'text-competenze'}
                title={intl.formatMessage(messages.competenze)}
              />
            ) : (
              ''
            )}
            {!content.data_conclusione_incarico && content.deleghe?.data ? (
              <RichTextArticle
                content={content.deleghe.data}
                tag_id={'text-deleghe'}
                title={intl.formatMessage(messages.deleghe)}
              />
            ) : (
              ''
            )}
            {!content.data_conclusione_incarico &&
            content?.items?.some((e) => e.id === 'foto-e-attivita-politica') ? (
              <Gallery
                content={content}
                folder_name={'foto-e-attivita-politica'}
              />
            ) : (
              ''
            )}
            {content.curriculum_vitae ? (
              <article
                id="curriculum"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-curriculum">
                  {intl.formatMessage(messages.curriculum_vitae)}
                </h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  <Attachment
                    download_url={content.curriculum_vitae.download}
                    title={content.curriculum_vitae.filename}
                  />
                </div>
              </article>
            ) : (
              ''
            )}
            {content.atto_nomina ? (
              <article
                id="atto_nomina"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-atto_nomina">
                  {intl.formatMessage(messages.atto_nomina)}
                </h4>
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  <Attachment
                    download_url={content.atto_nomina.download}
                    title={content.atto_nomina.filename}
                  />
                </div>
              </article>
            ) : (
              ''
            )}
            {content?.items?.some((e) => e.id === 'compensi') && (
              <Attachments
                content={content}
                folder_name={'compensi'}
                folder_title={intl.formatMessage(messages.compensi)}
              />
            )}
            {content?.items?.some(
              (e) => e.id === 'importi-di-viaggio-e-o-servizi',
            ) && (
              <Attachments
                content={content}
                folder_name={'importi-di-viaggio-e-o-servizi'}
                folder_title={intl.formatMessage(
                  messages.importi_di_viaggio_e_o_servizi,
                )}
              />
            )}
            {content?.items?.some((e) => e.id === 'altre-cariche') && (
              <Attachments
                content={content}
                folder_name={'altre-cariche'}
                folder_title={intl.formatMessage(messages.altre_cariche)}
              />
            )}
            {content?.items?.some(
              (e) => e.id === 'situazione-patrimoniale',
            ) && (
              <Attachments
                content={content}
                folder_name={'situazione-patrimoniale'}
                folder_title={intl.formatMessage(
                  messages.situazione_patrimoniale,
                )}
              />
            )}
            {content?.items?.some(
              (e) => e.id === 'dichiarazione-dei-redditi',
            ) && (
              <Attachments
                content={content}
                folder_name={'dichiarazione-dei-redditi'}
                folder_title={intl.formatMessage(
                  messages.dichiarazione_dei_redditi,
                )}
              />
            )}
            {content?.items?.some((e) => e.id === 'spese-elettorali') && (
              <Attachments
                content={content}
                folder_name={'spese-elettorali'}
                folder_title={intl.formatMessage(messages.spese_elettorali)}
              />
            )}
            {content?.items?.some(
              (e) => e.id === 'valutazione-situazione-patrimoniale',
            ) && (
              <Attachments
                content={content}
                folder_name={'valutazione-situazione-patrimoniale'}
                folder_title={intl.formatMessage(
                  messages.valutazione_situazione_patrimoniale,
                )}
              />
            )}
            {content.ulteriori_informazioni?.data && (
              <RichTextArticle
                content={content.ulteriori_informazioni.data}
                tag_id={'ulteriori_informazioni'}
                title={intl.formatMessage(messages.ulteriori_informazioni)}
              />
            )}
            {content.related_news?.length > 0 ? (
              <article
                id="related-news"
                className="it-page-section anchor-offset mt-5"
              >
                <h4 id="header-related-news">
                  {intl.formatMessage(messages.related_news)}
                </h4>
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
      </div>
    </>
  );
};

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
    collegamenti_organizzazione_l1: PropTypes.array.isRequired,
    collegamenti_organizzazione_l2: PropTypes.array.isRequired,
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
    email: PropTypes.string,
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
    ruolo: PropTypes.string.isRequired,
    telefono: PropTypes.string,
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
