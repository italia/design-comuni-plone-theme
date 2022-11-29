import React from 'react';
import PropTypes from 'prop-types';

import { UniversalLink } from '@plone/volto/components';

import { Container, Row, Col } from 'design-react-kit';

const SquaresImageTemplateSkeleton = ({
  isEditMode,
  title,
  linkHref,
  show_block_bg,
}) => {
  return (
    <div className="squares-image-template">
      <Container className="px-4">
        <div className="skeleton-template">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}

          <div className="grid mb-3 mt-5">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <UniversalLink
                href="#"
                key={i}
                className="listing-item box bg-img card"
              >
                <span className="title skeleton-item-title"> </span>
              </UniversalLink>
            ))}
          </div>
          {linkHref && <div className="link-button text-center my-5"></div>}
        </div>
      </Container>
    </div>
  );
};

SquaresImageTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default SquaresImageTemplateSkeleton;
