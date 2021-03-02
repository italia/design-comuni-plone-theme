/**
 * DocumentoView view component.
 * @module components/theme/View/DocumentoView
 */

import React, { useState, createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import Modules from '@italia/components/ItaliaTheme/View/DocumentoView/Modules';
import { contentFolderHasItems } from '@italia/helpers';
import {
  Gallery,
  CuredBy,
  ContentImage,
  SideMenu,
  HelpBox,
  PageHeader,
  RichTextArticle,
  Metadata,
  OfficeCard,
  GenericCard,
  RelatedItems,
  DocumentoPlaceholderAfterContent,
  RichText,
  RelatedItemInEvidence,
  richTextHasContent,
} from '@italia/components/ItaliaTheme/View';

const messages = defineMessages({
  descrizione: {
    id: 'documento_descrizione',
    defaultMessage: 'Descrizione',
  },
  documenti: {
    id: 'documento_documenti',
    defaultMessage: 'Documenti',
  },
  ufficio_responsabile: {
    id: 'documento_ufficio_responsabile',
    defaultMessage: 'Ufficio responsabile',
  },
  area_responsabile: {
    id: 'documento_area_responsabile',
    defaultMessage: 'Area responsabile',
  },
  autori: {
    id: 'documento_autori',
    defaultMessage: 'Autori',
  },
  licenza_distribuzione: {
    id: 'documento_licenza_distribuzione',
    defaultMessage: 'Licenza di distribuzione',
  },
  accedere_al_servizio: {
    id: 'documento_accedere_al_servizio',
    defaultMessage: 'Accedere al servizio',
  },
  riferimenti_normativi: {
    id: 'documento_riferimenti_normativi',
    defaultMessage: 'Riferimenti normativi',
  },
  documenti_allegati: {
    id: 'documento_documenti_allegati',
    defaultMessage: 'Documenti allegati',
  },
  ulteriori_informazioni: {
    id: 'ulteriori_informazioni',
    defaultMessage: "Box d'aiuto",
  },
});

/**
 * DocumentoView view component class.
 * @function DocumentoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const DocumentoView = ({ content, location }) => {
  const intl = useIntl();
  let documentBody = createRef();
  const [sideMenuElements, setSideMenuElements] = useState(null);
  //const userLogged = useSelector((state) => state.userSession);

  useEffect(() => {
    if (documentBody.current) {
      if (__CLIENT__) {
        setSideMenuElements(documentBody.current);
      }
    }
  }, [documentBody]);

  return (
    <>
      <div className="container px-4 my-4 newsitem-view">
        <PageHeader
          content={content}
          readingtime={null}
          showtopics={true}
          showtassonomiaargomenti={true}
        />

        {/* HEADER IMAGE */}
        <ContentImage content={content} position="afterHeader" />

        <div className="row border-top row-column-border row-column-menu-left">
          <aside className="col-lg-4">
            {__CLIENT__ && <SideMenu data={sideMenuElements} />}
          </aside>
          <section
            ref={documentBody}
            className="col-lg-8 it-page-sections-container"
          >
            {/* HEADER IMAGE */}
            <ContentImage content={content} position="documentBody" />

            {/* DESCRIZIONE*/}

            {(richTextHasContent(content.descrizione_estesa) ||
              contentFolderHasItems(content, 'multimedia') ||
              content.autori?.length > 0 ||
              content.licenza_distribuzione?.length > 0) && (
              <RichTextArticle
                tag_id={'text-body'}
                title={intl.formatMessage(messages.descrizione)}
                show_title={true}
                content={content.descrizione_estesa}
              >
                {contentFolderHasItems(content, 'multimedia') && (
                  <Gallery
                    content={content}
                    folder_name={'multimedia'}
                    className="mt-5"
                  />
                )}

                {content.autori?.length > 0 && (
                  <CuredBy
                    people={content.autori}
                    title={intl.formatMessage(messages.autori)}
                  />
                )}

                {content.licenza_distribuzione?.length > 0 && (
                  <div className="mt-5">
                    <h4>
                      {intl.formatMessage(messages.licenza_distribuzione)}
                    </h4>
                    <p>{content.licenza_distribuzione}</p>
                  </div>
                )}
              </RichTextArticle>
            )}

            {/* DOCUMENTI */}
            <Modules
              content={content}
              title={intl.formatMessage(messages.documenti)}
              id="elenco-documenti"
            />

            {/* UFFICIO RESPONSABILE */}
            {content.ufficio_responsabile?.length > 0 && (
              <RichTextArticle
                tag_id="ufficio_responsabile"
                title={intl.formatMessage(messages.ufficio_responsabile)}
              >
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.ufficio_responsabile?.length > 0 && (
                    <>
                      {content.ufficio_responsabile.map((item, i) => (
                        <OfficeCard key={item['@id']} office={item} />
                      ))}
                    </>
                  )}
                </div>
              </RichTextArticle>
            )}

            {/* AREA RESPONSABILE */}
            {content?.area_responsabile?.length > 0 && (
              <RichTextArticle
                tag_id="area_responsabile"
                title={intl.formatMessage(messages.area_responsabile)}
              >
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.area_responsabile.map((item, i) => (
                    <OfficeCard key={item['@id']} office={item} />
                  ))}
                </div>
              </RichTextArticle>
            )}

            {/* ACCEDERE AL SERVIZIO */}
            {content?.servizi_collegati?.length > 0 && (
              <RichTextArticle
                tag_id={'accedere-al-servizio'}
                title={intl.formatMessage(messages.accedere_al_servizio)}
              >
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.servizi_collegati?.map((servizio, i) => (
                    <GenericCard
                      key={servizio['@id']}
                      item={servizio}
                      showimage={false}
                      image_field={'immagine'}
                    >
                      <RichText
                        serif={false}
                        content={servizio.canale_digitale}
                        add_class="mt-3"
                      />
                    </GenericCard>
                  ))}
                </div>
              </RichTextArticle>
            )}

            {/* DOCUMENTI ALLEGATI */}
            {content?.documenti_allegati?.length > 0 && (
              <RichTextArticle
                tag_id={'documenti-allegati'}
                title={intl.formatMessage(messages.documenti_allegati)}
              >
                <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                  {content.documenti_allegati.map((item, i) => (
                    <GenericCard
                      key={item['@id']}
                      item={item}
                      show_icon="it-clip"
                    />
                  ))}
                </div>
              </RichTextArticle>
            )}

            {/* ULTERIORI INFORMAZIONI */}
            <Metadata content={content}>
              {richTextHasContent(content?.ulteriori_informazioni) && (
                <HelpBox text={content?.ulteriori_informazioni} />
              )}

              {/* RIFERIMENTI NORMATIVI */}
              {richTextHasContent(content?.riferimenti_normativi) && (
                <div className="mt-2">
                  <h5>{intl.formatMessage(messages.riferimenti_normativi)}</h5>
                  <RichText
                    serif={false}
                    content={content.riferimenti_normativi}
                  />
                </div>
              )}
            </Metadata>
          </section>
        </div>
      </div>
      <DocumentoPlaceholderAfterContent content={content} />
      <RelatedItems content={content} />
      <RelatedItemInEvidence content={content} />
    </>
  );
};
/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
DocumentoView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.object,
    image_caption: PropTypes.string,
    items: PropTypes.array,
    modified: PropTypes.string,
    tassonomia_argomenti: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default DocumentoView;
