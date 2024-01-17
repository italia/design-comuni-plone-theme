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
  RichTextSection,
  RelatedItemsChipsPDC,
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
  url: {
    id: 'url',
    defaultMessage: 'Sito web',
  },
  social: {
    id: 'social',
    defaultMessage: 'Social',
  },
  telefono: {
    id: 'telefono',
    defaultMessage: 'Telefono',
  },
  fax: {
    id: 'fax',
    defaultMessage: 'Fax',
  },
  account: {
    id: 'account',
    defaultMessage: 'Account',
  },
  whatsapp: {
    id: 'whatsapp',
    defaultMessage: 'Whatsapp',
  },
  telegram: {
    id: 'telegram',
    defaultMessage: 'Telegram',
  },
  skype: {
    id: 'skype',
    defaultMessage: 'Skype',
  },
  linkedin: {
    id: 'linkedin',
    defaultMessage: 'LinkedIn',
  },
  twitter: {
    id: 'twitter',
    defaultMessage: 'Twitter',
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
    <div className="punto-di-contatto-view">
      <div className="container px-4 my-4">
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
          {/* TODO: add tipologia when present */}
          <RichTextSection
            tag_id="contatti"
            title={intl.formatMessage(messages.contatti)}
          >
            {content?.value_punto_contatto?.map((pdc, i) => {
              return (
                <div className="my-2" key={i}>
                  <h5 className="h6">
                    {messages[pdc?.pdc_type] === undefined
                      ? pdc?.pdc_type
                      : intl.formatMessage(messages[pdc.pdc_type])}
                    {pdc?.pdc_desc && ` - ${pdc.pdc_desc}`}:
                    <span className="ms-1">{renderPDCItemValue(pdc)}</span>
                  </h5>
                </div>
              );
            })}
          </RichTextSection>
          <IncaricoPersone content={content} />
          <RelatedItemsChipsPDC
            content={content}
            fieldLists={[
              'strutture_correlate',
              'servizi_correlati',
              'eventi_correlati',
              'luoghi_correlati',
              'persone_correlate',
            ]}
          />
        </section>
        <PuntoDiContattoPlaceholderAfterContent content={content} />
      </div>
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

    value_punto_contatto: PropTypes.arrayOf(
      PropTypes.shape({
        pdc_type: PropTypes.arrayOf(PropTypes.string),
        pdc_value: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
};

export default injectIntl(PuntoDiContattoView);
