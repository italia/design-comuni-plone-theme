import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardReadMore,
} from 'design-react-kit';

const BandiInEvidenceTemplateSkeleton = ({
  title,
  isEditMode,
  show_block_bg,
  linkHref,
}) => {
  return (
    <div className={'bandi-in-evidence public-ui'}>
      <div className="full-width">
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

            <div className="bandi-in-evidence-cards-wrapper mt-2 mb-4">
              {[0, 1, 2, 3, 4, 5].map((i) => {
                return (
                  <Card key={i} className="listing-item card-bg mt-2">
                    <CardBody>
                      <CardTitle tag="h4" className="title">
                        -
                      </CardTitle>
                      <div className="bando-description">-</div>
                      <div className="bando-dati"></div>
                      <div className="read-more">
                        <CardReadMore
                          iconName="it-arrow-right"
                          tag={Link}
                          to={'#'}
                          text=""
                        />
                      </div>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
            {linkHref && <div className="link-button text-center my-4"></div>}
          </div>
        </Container>
      </div>
    </div>
  );
};

BandiInEvidenceTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default BandiInEvidenceTemplateSkeleton;
