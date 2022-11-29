import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from 'design-react-kit';

const CompleteBlockLinksTemplateSkeleton = ({
  title,
  isEditMode,
  linkHref,
  show_block_bg,
}) => {
  return (
    <div className="complete-block-links-template">
      <Container className="px-4 px-md-0">
        <div className="skeleton-template">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}
          <Row className="items">
            {[0, 1, 2, 3].map((i) => (
              <Col md="6" lg="3" key={i} className="col-item">
                <Card
                  color=""
                  className="card-bg rounded"
                  noWrapper={false}
                  tag="div"
                >
                  <a target="_blank" rel="noopener noreferrer" href="/">
                    <div className="d-flex">
                      <div className="image-container"> </div>

                      <CardBody>
                        <CardTitle tag="h5">-</CardTitle>
                        <CardText tag="p"></CardText>
                      </CardBody>
                    </div>
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
          {linkHref && <div className="link-button text-center my-4"></div>}
        </div>
      </Container>
    </div>
  );
};

CompleteBlockLinksTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CompleteBlockLinksTemplateSkeleton;
