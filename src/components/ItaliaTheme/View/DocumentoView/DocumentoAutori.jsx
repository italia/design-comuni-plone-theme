import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { UniversalLink } from '@plone/volto/components';
import { RichTextSection } from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const messages = defineMessages({
  autore: {
    id: 'autore',
    defaultMessage: 'Autore',
  },
});

/**
 * CuredBy view component class.
 * @function DocumentoAutori
 * @params {object} content: Content object.
 * @params {string} office_field: field where office is related
 * @params {string} office_field: field where people is related
 * @returns {string} Markup of the component.
 */

const DocumentoAutori = ({ autori, title }) => {
  const intl = useIntl();
  return (
    <RichTextSection
      tag_id="a-cura-di"
      content={autori}
      title={intl.formatMessage(messages.autore)}
    >
      <div className="autori-container col-12 col-sm-8">
        {autori.map((autore) => (
          <div className="card card-big card-teaser rounded shadow ">
            <div className="card-body p-4">
              <h5 className="card-title">
                <UniversalLink item={autore} title={autore.title}>
                  {autore.title}
                </UniversalLink>
              </h5>
              <p className="card-text">{autore.description}</p>
            </div>
            <div className="card-image">
              <img
                src={
                  autore.image_scales.foto_persona[0].scales.preview.download
                }
                alt={autore.title}
              />
            </div>
          </div>
        ))}
      </div>
    </RichTextSection>
  );
};

export default DocumentoAutori;

DocumentoAutori.propTypes = {
  autori: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    review_state: PropTypes.string,
  }),
};
