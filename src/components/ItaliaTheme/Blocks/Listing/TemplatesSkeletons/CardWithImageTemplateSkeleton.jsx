import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

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

import { CardCategory } from 'design-comuni-plone-theme/components/ItaliaTheme';

const CardWithImageTemplateSkeleton = ({
  isEditMode,
  title,
  linkHref,
  show_block_bg = false,
  always_show_image = false,
  hide_dates = false,
  full_width = true,
}) => {
  return (
    <div className="card-with-image-template">
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
          <Row className="items">
            {[0, 1, 2, 3, 4, 5].map((i) => {
              return (
                <Col lg="4" key={i} className="col-item mb-3">
                  <Card
                    className={cx('listing-item card-bg', {
                      'card-img': i < 3,
                    })}
                  >
                    {/* wrapperClassName="card-overlapping" */}
                    {(i < 3 || always_show_image) && (
                      <div className="img-responsive-wrapper">
                        <div className="img-responsive img-responsive-panoramic">
                          <figure className="img-wrapper"></figure>
                        </div>
                      </div>
                    )}
                    <CardBody className="px-4">
                      <CardCategory></CardCategory>
                      <CardTitle tag="h4">-</CardTitle>
                      <CardText className="mb-3"></CardText>
                      <div>
                        {[0, 1].map((argument) => (
                          <Chip
                            color="primary"
                            disabled={false}
                            simple
                            tag="div"
                            className="me-2"
                            key={argument}
                          ></Chip>
                        ))}
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
          {linkHref && <div className="link-button text-center"></div>}
        </div>
      </Container>
    </div>
  );
};

CardWithImageTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CardWithImageTemplateSkeleton;
