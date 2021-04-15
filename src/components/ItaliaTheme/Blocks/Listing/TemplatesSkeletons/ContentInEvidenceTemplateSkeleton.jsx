import React from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Chip,
  Container,
} from 'design-react-kit/dist/design-react-kit';
import cx from 'classnames';

import { CardCategory } from '@italia/components/ItaliaTheme';

const ContentInEvidenceTemplateSkeleton = ({
  title,
  isEditMode,
  show_block_bg,
  linkMore,
}) => {
  return (
    <div
      className={cx('contentInEvidence', {
        'public-ui': isEditMode,
      })}
    >
      <Container>
        <div className="skeleton-template">
          {title && (
            <Row>
              <Col>
                <h2 className={cx('mb-4', { 'mt-5': !show_block_bg })}>
                  {title}
                </h2>
              </Col>
            </Row>
          )}

          {[0].map((i) => {
            return (
              <Row key={i}>
                <Col lg={{ size: 6, offset: 1, order: 2 }}>
                  <div className="img-responsive-wrapper item-image">
                    <div className="img-responsive">
                      <figure className="img-wrapper"></figure>
                    </div>
                  </div>
                </Col>

                <Col lg={{ size: 5, order: 1 }}>
                  <Card>
                    <CardBody className="pb-2">
                      <CardCategory></CardCategory>
                      <CardTitle tag="h2"></CardTitle>
                      <CardText></CardText>

                      <div>
                        {[0, 1].map((index) => (
                          <Chip
                            color="primary"
                            disabled={false}
                            simple
                            tag="div"
                            className="mr-2"
                            key={index}
                          ></Chip>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            );
          })}
        </div>
        {linkMore?.href && <div className="link-more"></div>}
      </Container>
    </div>
  );
};

ContentInEvidenceTemplateSkeleton.propTypes = {
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default ContentInEvidenceTemplateSkeleton;
