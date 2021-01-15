import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Chip,
} from 'design-react-kit/dist/design-react-kit';
import cx from 'classnames';

import { CardCategory } from '@italia/components/ItaliaTheme';

const InEvidenceTemplateSkeleton = ({
  title,
  isEditMode,
  show_block_bg,
  linkMore,
}) => {
  return (
    <div
      className={cx('in-evidence', {
        'public-ui': isEditMode,
      })}
    >
      <div className="full-width">
        <Container className="px-4">
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

            <div className="in-evidence-cards-wrapper mb-5">
              {[0, 1, 2, 3, 4].map((i) => {
                return (
                  <Card
                    key={i}
                    className={cx('listing-item card-bg', {
                      'card-img': i === 0,
                    })}
                  >
                    {i === 0 && (
                      <div className="img-responsive-wrapper">
                        <div className="img-responsive">
                          <figure className="img-wrapper"></figure>
                        </div>
                      </div>
                    )}

                    <CardBody>
                      <CardCategory> </CardCategory>
                      <CardTitle tag="h4"> </CardTitle>
                      <CardText className="mb-3"> </CardText>
                      <div>
                        {[0, 1]?.map((index) => (
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
                );
              })}
            </div>
            {linkMore?.href && <div className="link-more"></div>}
          </div>
        </Container>
      </div>
    </div>
  );
};

InEvidenceTemplateSkeleton.propTypes = {
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default InEvidenceTemplateSkeleton;
