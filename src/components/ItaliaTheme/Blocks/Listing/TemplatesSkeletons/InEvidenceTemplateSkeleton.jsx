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
} from 'design-react-kit';
import cx from 'classnames';

import { CardCategory } from 'design-comuni-plone-theme/components/ItaliaTheme';

const InEvidenceTemplateSkeleton = ({
  title,
  isEditMode,
  show_block_bg,
  linkHref,
}) => {
  return (
    <div className="in-evidence">
      <Container className="px-4 pt-3">
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

          <div className="in-evidence-cards-wrapper my-3 pb-2">
            {[0, 1, 2, 3, 4].map((i) => {
              return (
                <Card key={i} className={cx('listing-item card-bg')}>
                  {i === 0 && (
                    <div className="img-responsive-wrapper">
                      <div className="img-responsive">
                        <figure className="img-wrapper"></figure>
                      </div>
                    </div>
                  )}

                  <CardBody className="px-4">
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
                          className="me-2"
                          key={index}
                        ></Chip>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              );
            })}
          </div>
          {linkHref && <div className="link-button text-center"></div>}
        </div>
      </Container>
    </div>
  );
};

InEvidenceTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default InEvidenceTemplateSkeleton;
