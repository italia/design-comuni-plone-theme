/**
 * Default view component.
 * @module components/theme/View/IncaricoView
 */

import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  PageHeader,
  SkipToMainContent,
  RichTextSection,
  OfficeCard,
  Metadata,
  HelpBox,
  richTextHasContent,
  Attachments,
  IncaricoPlaceholderAfterContent,
  IncaricoPlaceholderAfterRelatedItems,
  RelatedItems,
  IncaricoPersone,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { contentFolderHasItems } from 'design-comuni-plone-theme/helpers';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

const messages = defineMessages({
  tipologia_incarico: {
    id: 'tipologia_incarico',
    defaultMessage: 'Tipo di incarico',
  },
  data_inizio_incarico: {
    id: 'data_inizio_incarico',
    defaultMessage: "Data di inizio dell'incarico",
  },
  data_conclusione_incarico: {
    id: 'data_conclusione_incarico',
    defaultMessage:
      "Ha fatto parte dell'organizzazione comunale come {incarico} fino al",
  },
  data_insediamento: {
    id: 'data_insediamento',
    defaultMessage: 'Data di insediamento',
  },
  importi_viaggio: {
    id: 'importi_viaggio',
    defaultMessage: 'Importi di viaggio e/o servizio',
  },
  compensi: {
    id: 'compensi',
    defaultMessage: 'Compensi',
  },
  ufficio: {
    id: 'ufficio',
    defaultMessage: 'Unita organizzativa',
  },
  responsabile: {
    id: 'responsabile',
    defaultMessage: 'Responsabile della struttura',
  },
  data_inizio: {
    id: 'data_inizio',
    defaultMessage: 'Data inizio incarico',
  },
  data_conclusione: {
    id: 'data_conclusione',
    defaultMessage: 'Data conclusione incarico',
  },
  atto_nomina: {
    id: 'atto_nomina',
    defaultMessage: 'Atto di nomina',
  },
});
/**
 * Component to display the default view.
 * @function DefaultView
 * @param {Object} content Content object.
 * @returns {string} Markup of the component.
 */
const IncaricoView = ({ content, moment: momentlib }) => {
  const moment = momentlib.default;
  const intl = useIntl();

  return (
    <div className="container px-4 my-4 incarico-view">
      <SkipToMainContent />
      <PageHeader
        content={{ ...content, stato_servizio: null }}
        showreadingtime={false}
        showdates={false}
        showtassonomiaargomenti={false}
      />
      <section
        className="col-lg-12 it-page-sections-container border-light my-4 py-4"
        id="main-content-section"
      >
        {content.tipologia_incarico && (
          <RichTextSection
            tag_id="tipologia_incarico"
            title={intl.formatMessage(messages.tipologia_incarico)}
          >
            <div className="font-serif">{content.tipologia_incarico.title}</div>
          </RichTextSection>
        )}
        {content.data_inizio_incarico && (
          <RichTextSection
            tag_id="data_inizio_incarico"
            title={intl.formatMessage(messages.data_inizio_incarico)}
          >
            <div className="font-serif">
              {moment(content.data_inizio_incarico).format('D-MM-YYYY')}
            </div>
          </RichTextSection>
        )}
        {content.data_conclusione_incarico && (
          <RichTextSection
            tag_id="data_conclusione_incarico"
            title={intl.formatMessage(messages.data_conclusione_incarico, {
              incarico: content.title,
            })}
          >
            <div className="font-serif">
              {moment(content.data_conclusione_incarico).format('D-MM-YYYY')}
            </div>
          </RichTextSection>
        )}
        {content.data_insediamento && (
          <RichTextSection
            tag_id="data_insediamento"
            title={intl.formatMessage(messages.data_insediamento)}
          >
            <div className="font-serif">
              {moment(content.data_insediamento).format('D-MM-YYYY')}
            </div>
          </RichTextSection>
        )}
        {richTextHasContent(content.compensi) && (
          <RichTextSection
            data={content.compensi}
            tag_id={'text-body'}
            title={intl.formatMessage(messages.compensi)}
          />
        )}
        {contentFolderHasItems(content, 'compensi-file') && (
          <Attachments
            content={content}
            folder_name={'compensi-file'}
            as_article={false}
          />
        )}
        {richTextHasContent(content.importi_viaggio_servizio) && (
          <RichTextSection
            data={content.importi_viaggio_servizio}
            tag_id={'text-body'}
            title={intl.formatMessage(messages.importi_viaggio)}
          />
        )}
        {contentFolderHasItems(content, 'importi-di-viaggio-e-o-servizi') && (
          <Attachments
            content={content}
            folder_name={'importi-di-viaggio-e-o-servizi'}
            as_article={false}
          />
        )}
        <IncaricoPersone content={content} />
        {content.unita_organizzativa?.length > 0 && (
          <RichTextSection
            tag_id="ufficio"
            title={intl.formatMessage(messages.ufficio)}
          >
            <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
              {content.unita_organizzativa?.map((item) => (
                <OfficeCard key={flattenToAppURL(item['@id'])} office={item} />
              ))}
            </div>
          </RichTextSection>
        )}
        {content.responsabile_struttura?.length > 0 && (
          <RichTextSection
            tag_id="responsabile"
            title={intl.formatMessage(messages.responsabile)}
          >
            <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
              {content.responsabile_struttura?.map((item) => (
                <OfficeCard key={flattenToAppURL(item['@id'])} office={item} />
              ))}
            </div>
          </RichTextSection>
        )}
        {content.atto_nomina?.length > 0 && (
          <RichTextSection
            tag_id="atto-nomina"
            title={intl.formatMessage(messages.atto_nomina)}
          >
            {content.atto_nomina.map((atto_nomina) => (
              <div
                key={flattenToAppURL(atto_nomina['@id'])}
                className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal"
              >
                <UniversalLink href={flattenToAppURL(atto_nomina['@id'])}>
                  {atto_nomina.title}
                </UniversalLink>
              </div>
            ))}
          </RichTextSection>
        )}
        <Metadata
          content={content}
          showSectionTitle={richTextHasContent(content?.ulteriori_informazioni)}
        >
          {richTextHasContent(content?.ulteriori_informazioni) && (
            <HelpBox text={content?.ulteriori_informazioni} />
          )}
        </Metadata>
      </section>
      <IncaricoPlaceholderAfterContent content={content} />
      <RelatedItems list={content?.relatedItems} />
      <IncaricoPlaceholderAfterRelatedItems content={content} />
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
IncaricoView.propTypes = {
  /**
   * Content of the object
   */
  content: PropTypes.shape({
    /**
     * Title of the object
     */
    title: PropTypes.string,
  }).isRequired,
};

export default injectLazyLibs(['moment'])(IncaricoView);
