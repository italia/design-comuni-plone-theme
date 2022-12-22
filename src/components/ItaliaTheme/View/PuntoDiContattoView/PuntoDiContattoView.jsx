/**
 * Default view component.
 * @module components/theme/View/PuntoDiContattoView
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import {
  PageHeader,
  SkipToMainContent,
  PuntoDiContattoPlaceholderAfterContent,
  PuntoDiContattoPlaceholderAfterRelatedItems,
  RelatedItems,
  IncaricoPersone,
  RichTextArticle,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';
import { renderPDCItemValue } from 'design-comuni-plone-theme/helpers';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  email: {
    id: 'email',
    defaultMessage: 'Email',
  },
  pec: {
    id: 'pec',
    defaultMessage: 'PEC',
  },
  web: {
    id: 'web',
    defaultMessage: 'Sito web',
  },
  social: {
    id: 'social',
    defaultMessage: 'Social',
  },
  phone: {
    id: 'phone',
    defaultMessage: 'Telefono',
  },
  fax: {
    id: 'fax',
    defaultMessage: 'Fax',
  },
  label: {
    id: 'label',
    defaultMessage: '{value}:',
  },
  contatti: {
    id: 'contatti',
    defaultMessage: 'Contatti',
  },
});
/**
 * Component to display the default view.
 * @function DefaultView
 * @param {Object} content Content object.
 * @returns {string} Markup of the component.
 */
const PuntoDiContattoView = (props) => {
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
          tag_id="contatti"
          title={intl.formatMessage(messages.contatti)}
        >
          {content?.value_punto_contatto?.map((pdc) => {
            return (
              <div className="my-2">
                <h6>
                  {intl.formatMessage(messages.label, {
                    value: intl.formatMessage(messages[pdc?.pdc_type]),
                  })}
                  <span className="ml-1">{renderPDCItemValue(pdc)}</span>
                </h6>
              </div>
            );
          })}
        </RichTextArticle>
        <IncaricoPersone content={content} />
      </section>
      <PuntoDiContattoPlaceholderAfterContent content={content} />
      <RelatedItems list={content?.relatedItems} />
      <PuntoDiContattoPlaceholderAfterRelatedItems content={content} />
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
PuntoDiContattoView.propTypes = {
  /**
   * Content of the object
   */
  content: PropTypes.shape({
    /**
     * Title of the object
     */
    title: PropTypes.string,

    value_punto_contatto: PropTypes.shape({
      pdc_type: PropTypes.string,
      pdc_value: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default injectIntl(PuntoDiContattoView);
