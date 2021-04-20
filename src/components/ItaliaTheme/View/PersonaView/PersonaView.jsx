/**
 * PersonaView view component.
 * @module components/theme/View/PersonaView
 */

import React, { createRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';
import {
  Attachments,
  Attachment,
  SideMenu,
  PageHeader,
  RichText,
  RichTextArticle,
  OfficeCard,
  Gallery,
  Metadata,
  HelpBox,
  RelatedItems,
  PersonaPlaceholderAfterContent,
  ContactLink,
  RelatedItemInEvidence,
  richTextHasContent,
} from '@italia/components/ItaliaTheme/View';
import { contentFolderHasItems, viewDate } from '@italia/helpers';

const messages = defineMessages({
  biografia: {
    id: 'biografia',
    defaultMessage: 'Biografia',
  },
  ruolo: {
    id: 'ruolo',
    defaultMessage: 'Ruolo',
  },
  contacts: {
    id: 'contacts',
    defaultMessage: 'Contatti',
  },
  telefono: {
    id: 'telefono',
    defaultMessage: 'Tel',
  },
  email_label: {
    id: 'email_label',
    defaultMessage: 'E-mail',
  },
  organizzazione_riferimento: {
    id: 'organizzazione_riferimento',
    defaultMessage: 'Organizzazione di riferimento',
  },
  responsabile_di: {
    id: 'responsabile_di',
    defaultMessage: 'Responsabile di',
  },
  assessore_di: {
    id: 'assessore_di',
    defaultMessage: 'Assessore di',
  },
  competenze: {
    id: 'competenze',
    defaultMessage: 'Competenze',
  },
  deleghe: {
    id: 'deleghe',
    defaultMessage: 'Deleghe',
  },
  tipologia_persona: {
    id: 'tipologia_persona',
    defaultMessage: 'Tipologia di persona',
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
  variazione_situazione_patrimoniale: {
    id: 'variazione_situazione_patrimoniale',
    defaultMessage: 'Variazione situazione patrimoniale',
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
  foto_attivita_politica: {
    id: 'foto_attivita_politica',
    defaultMessage: "Foto dell'attività politica",
  },
  documenti: {
    id: 'documenti',
    defaultMessage: 'Documenti',
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
            {(content.ruolo ||
              content?.data_conclusione_incarico ||
              (!content?.data_conclusione_incarico &&
                (content?.organizzazione_riferimento?.length > 0 ||
                  content?.responsabile_di?.length > 0 ||
                  content?.assessore_di?.length > 0 ||
                  richTextHasContent(content?.competenze) ||
                  richTextHasContent(content?.deleghe) ||
                  content?.tipologia_persona ||
                  content?.data_insediamento ||
                  richTextHasContent(content?.biografia) ||
                  contentFolderHasItems(
                    content,
                    'foto-e-attivita-politica',
                  )))) && (
              <RichTextArticle
                tag_id="ruolo"
                title={intl.formatMessage(messages.ruolo)}
              >
                {content?.ruolo?.length > 0 && (
                  <div className="mb-5">{content.ruolo}</div>
                )}
                {!content?.data_conclusione_incarico && (
                  <>
                    {content?.organizzazione_riferimento?.length > 0 && (
                      <div className="mb-5 mt-3">
                        <h4>
                          {intl.formatMessage(
                            messages.organizzazione_riferimento,
                          )}
                        </h4>
                        <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                          {content?.organizzazione_riferimento?.map(
                            (item, i) => (
                              <OfficeCard key={item['@id']} office={item} />
                            ),
                          )}
                        </div>
                      </div>
                    )}

                    {content?.responsabile_di?.length > 0 && (
                      <div className="mb-5 mt-3">
                        <h5>{intl.formatMessage(messages.responsabile_di)}</h5>
                        <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                          {content?.responsabile_di?.map((item, i) => (
                            <OfficeCard key={item['@id']} office={item} />
                          ))}
                        </div>
                      </div>
                    )}

                    {content?.assessore_di?.length > 0 && (
                      <div className="mb-5 mt-3">
                        <h5>{intl.formatMessage(messages.assessore_di)}</h5>
                        <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                          {content?.assessore_di?.map((item, i) => (
                            <OfficeCard key={item['@id']} office={item} />
                          ))}
                        </div>
                      </div>
                    )}

                    {richTextHasContent(content?.competenze) && (
                      <div className="mb-5 mt-3">
                        <RichText
                          title_size="h5"
                          title={intl.formatMessage(messages.competenze)}
                          content={content.competenze}
                        />
                      </div>
                    )}

                    {richTextHasContent(content?.deleghe) && (
                      <div className="mb-5 mt-3">
                        <RichText
                          title_size="h5"
                          title={intl.formatMessage(messages.deleghe)}
                          content={content.deleghe}
                        />
                      </div>
                    )}

                    {content?.tipologia_persona && (
                      <div className="mb-5 mt-3">
                        <h5>
                          {intl.formatMessage(messages.tipologia_persona)}
                        </h5>
                        {content?.tipologia_persona?.title}
                      </div>
                    )}

                    {content?.data_insediamento && (
                      <div className="mb-5 mt-3">
                        <h5>
                          {intl.formatMessage(messages.data_insediamento)}
                        </h5>
                        {viewDate(
                          intl.locale,
                          content?.data_insediamento,
                          'DD-MM-Y',
                        )}
                      </div>
                    )}

                    {richTextHasContent(content?.biografia) > 0 && (
                      <div className="mb-5 mt-3">
                        <RichText
                          title_size="h5"
                          title={intl.formatMessage(messages.biografia)}
                          content={content.biografia}
                        />
                      </div>
                    )}

                    <Gallery
                      content={content}
                      folder_name="foto-e-attivita-politica"
                      title={intl.formatMessage(
                        messages.foto_attivita_politica,
                      )}
                      title_type="h5"
                    />
                  </>
                )}
                {content?.data_conclusione_incarico && (
                  <p>
                    <strong>
                      {intl.formatMessage(messages.data_conclusione_incarico)}:
                    </strong>{' '}
                    {viewDate(
                      intl.locale,
                      content?.data_conclusione_incarico,
                      'DD-MM-Y',
                    )}
                  </p>
                )}
              </RichTextArticle>
            )}

            {(content?.telefono?.length > 0 ||
              content?.fax ||
              content?.email?.length > 0) && (
              <RichTextArticle
                title={intl.formatMessage(messages.contacts)}
                tag_id="contacts"
              >
                {content?.telefono?.length > 0 && (
                  <p>
                    <strong>{intl.formatMessage(messages.telefono)}: </strong>
                    {content.telefono.map((tel) => (
                      <>
                        <ContactLink tel={tel} label={false} />{' '}
                      </>
                    ))}
                  </p>
                )}

                {content?.fax && (
                  <p>
                    <ContactLink fax={content.fax} strong={true} />
                  </p>
                )}

                {content?.email?.length > 0 && (
                  <p>
                    <strong>
                      {intl.formatMessage(messages.email_label)}:{' '}
                    </strong>
                    {content.email.map((email) => (
                      <>
                        <ContactLink email={email} label={false} />{' '}
                      </>
                    ))}
                  </p>
                )}
              </RichTextArticle>
            )}

            {(content?.curriculum_vitae?.download ||
              contentFolderHasItems(content, 'compensi') ||
              contentFolderHasItems(
                content,
                'importi-di-viaggio-e-o-servizi',
              ) ||
              contentFolderHasItems(content, 'altre-cariche') ||
              content.atto_nomina?.download ||
              contentFolderHasItems(content, 'situazione-patrimoniale') ||
              contentFolderHasItems(content, 'dichiarazione-dei-redditi') ||
              contentFolderHasItems(content, 'spese-elettorali') ||
              contentFolderHasItems(
                content,
                'variazione-situazione-patrimoniale',
              )) && (
              <RichTextArticle
                title={intl.formatMessage(messages.documenti)}
                tag_id="documenti"
              >
                {content.curriculum_vitae?.download && (
                  <div className="mb-5 mt-3">
                    <h5>{intl.formatMessage(messages.curriculum_vitae)}</h5>
                    <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                      <Attachment
                        download_url={content.curriculum_vitae.download}
                        title={content.curriculum_vitae.filename}
                      />
                    </div>
                  </div>
                )}

                <Attachments
                  content={content}
                  folder_name={'compensi'}
                  title={intl.formatMessage(messages.compensi)}
                  as_article={false}
                />

                <Attachments
                  content={content}
                  folder_name={'importi-di-viaggio-e-o-servizi'}
                  title={intl.formatMessage(
                    messages.importi_di_viaggio_e_o_servizi,
                  )}
                  as_article={false}
                />

                <Attachments
                  content={content}
                  folder_name={'altre-cariche'}
                  title={intl.formatMessage(messages.altre_cariche)}
                  as_article={false}
                />

                {content.atto_nomina?.download && (
                  <div className="mb-5 mt-3">
                    <h5>{intl.formatMessage(messages.atto_nomina)}</h5>
                    <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                      <Attachment
                        download_url={content.atto_nomina.download}
                        title={content.atto_nomina.filename}
                      />
                    </div>
                  </div>
                )}

                <Attachments
                  content={content}
                  folder_name={'situazione-patrimoniale'}
                  title={intl.formatMessage(messages.situazione_patrimoniale)}
                  as_article={false}
                />

                <Attachments
                  content={content}
                  folder_name={'dichiarazione-dei-redditi'}
                  title={intl.formatMessage(messages.dichiarazione_dei_redditi)}
                  as_article={false}
                />

                <Attachments
                  content={content}
                  folder_name={'spese-elettorali'}
                  title={intl.formatMessage(messages.spese_elettorali)}
                  as_article={false}
                />

                <Attachments
                  content={content}
                  folder_name={'variazione-situazione-patrimoniale'}
                  title={intl.formatMessage(
                    messages.variazione_situazione_patrimoniale,
                  )}
                  as_article={false}
                />
              </RichTextArticle>
            )}
            <Metadata content={content}>
              {richTextHasContent(content?.ulteriori_informazioni) && (
                <HelpBox text={content?.ulteriori_informazioni} />
              )}
            </Metadata>
          </section>
        </div>
      </div>
      <PersonaPlaceholderAfterContent content={content} />
      <RelatedItems content={content} />
      <RelatedItemInEvidence content={content} />
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
