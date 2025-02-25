import React from 'react';
import PropTypes from 'prop-types';
import ItemInEvidence from 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/RelatedItemInEvidence/ItemInEvidence';
import Arguments from 'design-comuni-plone-theme/components/ItaliaTheme/View/Commons/RelatedItemInEvidence/Arguments';
import { Container, Row, Col } from 'design-react-kit';
import { defineMessages, useIntl } from 'react-intl';

const messages = defineMessages({
  inEvidenceItems: {
    id: 'inEvidenceItems',
    defaultMessage: 'Contenuti in evidenza',
  },
});

/**
 * RelatedItems view component class.
 * @function RelatedItems
 * @params {object} location: object.
 * @returns {string} Markup of the component.
 */
const RelatedItemInEvidence = ({ content }) => {
  const intl = useIntl();
  return (
    content?.correlato_in_evidenza?.length > 0 && (
      <section
        id="correlato-in-evidenza"
        role="complementary"
        aria-label={intl.formatMessage(messages.inEvidenceItems)}
      >
        <section className="section bg-primary">
          <div className="section-content">
            <Container>
              <Row className="m-4">
                <Col md={6} className="px-3">
                  <ItemInEvidence content={content} />
                </Col>
                <Col md={6} className="px-3">
                  <Arguments content={content} />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </section>
    )
  );
};

export default RelatedItemInEvidence;

RelatedItemInEvidence.propTypes = {
  content: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    title: PropTypes.string,
    correlato_in_evidenza: PropTypes.array,
  }),
};
