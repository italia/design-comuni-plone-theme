import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { Row, Col } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { CardPersona } from 'design-comuni-plone-theme/components/ItaliaTheme';
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
      data={autori}
      title={intl.formatMessage(messages.autore)}
    >
      <div className="autori-container">
        <Row className="card-wrapper card-teaser-wrapper ruolo-persone-struttura">
          {autori.map((autore) => (
            <Col xs="12" lg="12" xl="6" md="12" key={autore['@id']}>
              <CardPersona
                item={autore}
                className="shadow-sm"
                titleTagName="h5"
                showImage={true}
                listingText={autore?.incarichi ?? ''}
              />
            </Col>
          ))}
        </Row>
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
