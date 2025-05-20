import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { UniversalLink } from '@plone/volto/components';

import { Container, Row, Col } from 'design-react-kit';

const GridGalleryTemplateSkeleton = ({
  isEditMode,
  title,
  linkHref,
  show_block_bg,
}) => {
  return (
    <div className="grid-gallery-template">
      <Container className="px-4 pt-3">
        <div className="skeleton-template">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}

          <div className="grid-gallery-grid my-3 pb-3">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={cx('grid-gallery-item', `item-${i % 7}`)}>
                <UniversalLink href="#">
                  <h3 className="skeleton-item-title"> </h3>
                </UniversalLink>
              </div>
            ))}
          </div>
          {linkHref && <div className="link-button text-center my-5"></div>}
        </div>
      </Container>
    </div>
  );
};

GridGalleryTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default GridGalleryTemplateSkeleton;
