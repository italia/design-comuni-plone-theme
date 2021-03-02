/**
 * BandoVies view component.
 * @module components/theme/View/BandoView
 */

import React, { useState, createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import {
  SideMenu,
  HelpBox,
  PageHeader,
  RichTextArticle,
  Metadata,
  OfficeCard,
  GenericCard,
  BandoDates,
  RelatedItems,
  RichText,
  BandoPlaceholderAfterContent,
  RelatedItemInEvidence,
  richTextHasContent,
} from '@italia/components/ItaliaTheme/View';

import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { Icon } from '@italia/components/ItaliaTheme';

const messages = defineMessages({
  descrizione: {
    id: 'descrizione',
    defaultMessage: 'Descrizione',
  },
  tempi_scadenze: {
    id: 'tempi_e_scadenze',
    defaultMessage: 'Tempi e scadenze',
  },
  tipologia_bando: {
    id: 'tipologia_bando',
    defaultMessage: 'Tipologia del bando',
  },
  destinatari: {
    id: 'bando_destinatari',
    defaultMessage: 'Destinatari del bando',
  },
  ente: {
    id: 'bando_ente',
    defaultMessage: 'Ente erogatore',
  },
  ufficio_responsabile: {
    id: 'ufficio_responsabile',
    defaultMessage: 'Ufficio responsabile',
  },
  area_responsabile: {
    id: 'area_responsabile',
    defaultMessage: 'Area responsabile',
  },
  servizi_correlati: {
    id: 'servizi_collegati',
    defaultMessage: 'Servizi collegati',
  },
  ulteriori_informazioni: {
    id: 'ulteriori_informazioni',
    defaultMessage: 'Ulteriori informazioni',
  },
  allegati: {
    id: 'allegati',
    defaultMessage: 'Documenti allegati',
  },
});

/**
 * BandoView view component class.
 * @function BandoView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */
const BandoView = ({ content, location }) => {
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
      <div className="container px-4 my-4 bando-view">
        <PageHeader
          content={content}
          readingtime={null}
          showreadingtime={false}
          showdates={false}
          showtopics={false}
          showtassonomiaargomenti={true}
          showbandostate={true}
        />
        <div className="row border-top row-column-border row-column-menu-left">
          <aside className="col-lg-4">
            {__CLIENT__ && <SideMenu data={sideMenuElements} />}
          </aside>
          <section
            ref={documentBody}
            className="col-lg-8 it-page-sections-container"
          >
            {(richTextHasContent(content?.text) ||
              content?.tipologia_bando ||
              content?.destinatari?.length > 0 ||
              content?.ente_bando?.length > 0) && (
              <RichTextArticle
                tag_id={'text-body'}
                title={intl.formatMessage(messages.descrizione)}
                show_title={true}
              >
                {/* DESCRIZIONE DEL BANDO */}
                {richTextHasContent(content?.text) && (
                  <RichText
                    title_size="h5"
                    title={''}
                    content={content?.text}
                  />
                )}
                {/* TIPOLOGIA DEL BANDO */}
                {content?.tipologia_bando && (
                  <>
                    <h5>{intl.formatMessage(messages.tipologia_bando)}</h5>
                    <span>{content.tipologia_bando.title}</span>
                  </>
                )}
                {/* DESTINATARI DEL BANDO */}
                {content?.destinatari?.length > 0 && (
                  <>
                    <h5>{intl.formatMessage(messages.destinatari)}</h5>
                    {content.destinatari.map((item, i) => (
                      <p>{item.title}</p>
                    ))}
                  </>
                )}
                {/* ENTE DEL BANDO */}
                {content?.ente_bando?.length > 0 && (
                  <>
                    <h5>{intl.formatMessage(messages.ente)}</h5>
                    {content.ente_bando.map((item, i) => (
                      <span>{item}</span>
                    ))}
                  </>
                )}
              </RichTextArticle>
            )}
            {/* Responsabili */}
            {/* UFFICIO */}
            {content?.ufficio_responsabile?.length > 0 && (
              <RichTextArticle
                tag_id="ufficio_responsabile"
                title={intl.formatMessage(messages.ufficio_responsabile)}
              >
                <div className="mb-5 mt-3">
                  <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                    {content?.ufficio_responsabile?.map((item, i) => (
                      <OfficeCard key={item['@id']} office={item} />
                    ))}
                  </div>
                </div>
              </RichTextArticle>
            )}
            {/* AREA */}
            {content?.area_responsabile?.length > 0 && (
              <RichTextArticle
                tag_id="area_responsabile"
                title={intl.formatMessage(messages.area_responsabile)}
              >
                <div className="mb-5 mt-3">
                  <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                    {content?.area_responsabile?.map((item, i) => (
                      <OfficeCard key={item['@id']} office={item} />
                    ))}
                  </div>
                </div>
              </RichTextArticle>
            )}
            {/* SERVIZI */}
            {content?.servizi_correlati?.length > 0 && (
              <RichTextArticle
                tag_id="servizi_collegati"
                title={intl.formatMessage(messages.servizi_correlati)}
              >
                <div className="mb-5 mt-3">
                  <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                    {content?.servizi_correlati?.map((item, i) => (
                      <GenericCard
                        key={item['@id']}
                        index={item['@id']}
                        item={item}
                        showimage={false}
                        showDescription={true}
                      />
                    ))}
                  </div>
                </div>
              </RichTextArticle>
            )}
            {/* DATE IMPORTANTI */}
            {(content?.effective ||
              content?.scadenza_bando ||
              content?.scadenza_domande_bando ||
              content?.chiusura_procedimento_bando) && (
              <RichTextArticle
                tag_id="tempi_e_scadenze"
                title={intl.formatMessage(messages.tempi_scadenze)}
              >
                <BandoDates content={content} />
              </RichTextArticle>
            )}
            {content?.approfondimento?.length > 0 && (
              <RichTextArticle
                tag_id="allegati"
                title={intl.formatMessage(messages.allegati)}
              >
                {/* Se ho una sola cartella lascio solo "allegati" altrimenti
                aggiungo gli altri titoli */}
                {content?.approfondimento?.length === 1 ? (
                  <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                    {content.approfondimento[0].children.map((item, _i) => (
                      <div
                        className={
                          'genericcard card card-teaser shadow p-3 mt-3 rounded'
                        }
                      >
                        <div className="card-body">
                          <div className="card-text">
                            <Icon
                              className={undefined}
                              icon={
                                item.type === 'File'
                                  ? 'it-clip'
                                  : 'it-external-link'
                              }
                              padding={false}
                            />
                            <UniversalLink href={flattenToAppURL(item.url)}>
                              {item.title}
                            </UniversalLink>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <>
                    {content.approfondimento.map((item, _i) => (
                      <>
                        <h5>{item.title}</h5>
                        <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
                          {content.approfondimento[_i].children.map(
                            (inner_item, _x) => (
                              <div
                                className={
                                  'genericcard card card-teaser shadow p-3 mt-3 rounded'
                                }
                              >
                                <div className="card-body">
                                  <div className="card-text">
                                    <p>{item.Type}</p>
                                    <Icon
                                      className={undefined}
                                      icon={
                                        inner_item.type === 'File'
                                          ? 'it-clip'
                                          : 'it-external-link'
                                      }
                                      padding={false}
                                    />
                                    {inner_item.type === 'File' ? (
                                      <UniversalLink
                                        href={flattenToAppURL(inner_item.url)}
                                      >
                                        {inner_item.title}
                                      </UniversalLink>
                                    ) : (
                                      <UniversalLink
                                        openLinkInNewTab={true}
                                        href={flattenToAppURL(inner_item.url)}
                                        rel="noopener noreferrer"
                                      >
                                        {inner_item.title}
                                      </UniversalLink>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </>
                    ))}
                  </>
                )}
              </RichTextArticle>
            )}
            <Metadata content={content}>
              {richTextHasContent(content?.riferimenti_bando) && (
                <HelpBox text={content?.riferimenti_bando} />
              )}
            </Metadata>
          </section>
        </div>
      </div>
      <BandoPlaceholderAfterContent content={content} />
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
BandoView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    chiusura_procedimento_bando: PropTypes.string,
    scadenza_bando: PropTypes.string,
    scadenza_domande_bando: PropTypes.string,
    riferimenti_bando: PropTypes.shape({
      data: PropTypes.string,
    }),
    text: PropTypes.shape({
      data: PropTypes.string,
    }),
    ufficio_responsabile: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
    area_responsabile: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
    tipologia_bando: PropTypes.shape({
      title: PropTypes.string,
      token: PropTypes.string,
    }),
    tassonomia_argomenti: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
    servizi_correlati: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
    ente_bando: PropTypes.arrayOf(PropTypes.string),
    effective: PropTypes.string,
    expires: PropTypes.string,
    destinatari: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        token: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default BandoView;
