import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'design-react-kit/dist/design-react-kit';
import cx from 'classnames';

const SmallBlockLinksTemplateSkeleton = ({
  title,
  isEditMode,
  show_block_bg,
}) => {
  return (
    <div className={cx('small-block-links', { 'public-ui': isEditMode })}>
      <div className="full-width">
        <Container className="px-4">
          <div className="skeleton-template">
            {title && (
              <Row>
                <Col>
                  <h2 className="mb-4">{title}</h2>
                </Col>
              </Row>
            )}
            <Row className="items">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <Col md="3" key={i} className="col-item col-sm-4 col-lg-2">
                  <div className="center-image-card">
                    <figure className="img-skeleton"></figure>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

SmallBlockLinksTemplateSkeleton.propTypes = {
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default SmallBlockLinksTemplateSkeleton;
