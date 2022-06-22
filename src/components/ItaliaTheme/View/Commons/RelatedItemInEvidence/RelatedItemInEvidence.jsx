import React from 'react';
import PropTypes from 'prop-types';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import ItemInEvidence from '@italia/components/ItaliaTheme/View/Commons/RelatedItemInEvidence/ItemInEvidence';
import Arguments from '@italia/components/ItaliaTheme/View/Commons/RelatedItemInEvidence/Arguments';

/**
 * RelatedItems view component class.
 * @function RelatedItems
 * @params {object} location: object.
 * @returns {string} Markup of the component.
 */
const RelatedItemInEvidence = ({ content, designReactKit }) => {
  const { Container, Row, Col } = designReactKit;
  return (
    content?.correlato_in_evidenza?.length > 0 && (
      <section id="correlato-in-evidenza">
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

export default injectLazyLibs(['designReactKit'])(RelatedItemInEvidence);

RelatedItemInEvidence.propTypes = {
  content: PropTypes.shape({
    '@id': PropTypes.string,
    '@type': PropTypes.string,
    title: PropTypes.string,
    correlato_in_evidenza: PropTypes.array,
  }),
};
