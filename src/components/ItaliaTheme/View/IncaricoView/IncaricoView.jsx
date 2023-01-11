/**
 * Default view component.
 * @module components/theme/View/IncaricoView
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { defineMessages, useIntl } from 'react-intl';
import {
  PageHeader,
  SkipToMainContent,
  RichTextArticle,
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
import { ConditionalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
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
  data_insediamento: {
    id: 'data_insediamento',
    defaultMessage: 'Data insediamento',
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
const IncaricoView = (props) => {
  const { content } = props;
  const intl = useIntl();
  return (
    <div className="container px-4 my-4 punto-di-contatto-view">
      <SkipToMainContent />
      <PageHeader
        content={{ ...content, stato_servizio: null }}
        showreadingtime={false}
        showdates={false}
        showtassonomiaargomenti={false}
      />
      <section
        className="col-lg-12 it-page-sections-container my-4 py-4"
        id="main-content-section"
      >
        {/* TODO: add tipologia when present */}
        <RichTextArticle
          content={content.importi_viaggio_servizio}
          tag_id={'text-body'}
          field="importi_viaggio_servizio"
          title={intl.formatMessage(messages.importi_viaggio)}
          show_title={true}
        />
        <Attachments
          content={content}
          folder_name={'importi-di-viaggio-e-o-servizi'}
          title={null}
          as_article={false}
        />
        <RichTextArticle
          content={content.compensi}
          tag_id={'text-body'}
          field="compensi"
          title={intl.formatMessage(messages.compensi)}
          show_title={true}
        />
        <Attachments
          content={content}
          folder_name={'compensi-file'}
          title={null}
          as_article={false}
        />
        <IncaricoPersone content={content} />
        {content.unita_organizzativa?.length > 0 && (
          <RichTextArticle
            tag_id="ufficio"
            title={intl.formatMessage(messages.ufficio)}
          >
            {content.unita_organizzativa?.map((item, i) => (
              <OfficeCard key={item['@id']} office={item} load_data={false} />
            ))}
          </RichTextArticle>
        )}
        {content.responsabile_struttura?.length > 0 && (
          <RichTextArticle
            tag_id="responsabile"
            title={intl.formatMessage(messages.responsabile)}
          >
            {content.responsabile_struttura?.map((item, i) => (
              <OfficeCard key={item['@id']} office={item} load_data={false} />
            ))}
          </RichTextArticle>
        )}
        {content.atto_nomina?.map((atto_nomina) => (
          <div className="mb-5 mt-3">
            <h5>{intl.formatMessage(messages.atto_nomina)}</h5>
            <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal">
              <ConditionalLink to={flattenToAppURL(atto_nomina['@id'])} />
            </div>
          </div>
        ))}
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

export default injectIntl(IncaricoView);
