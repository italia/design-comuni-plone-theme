import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import {
  Card,
  CardBody,
  CardTitle,
  CardReadMore,
  CardText,
  Row,
  Col,
  Container,
} from 'design-react-kit';

import { Link } from 'react-router-dom';

const RibbonCardTemplateSkeleton = ({
  isEditMode,
  linkHref,
  title,
  show_only_first_ribbon,
  show_detail_link,
  detail_link_label,
  show_block_bg,
  hide_dates,
}) => {
  return (
    <div className="ribbon-card-template">
      <Container className="px-4">
        <div className="skeleton-template">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
              </Col>
            </Row>
          )}

          <Row className="mb-4">
            {[0, 1, 2, 3, 4, 5].map((i) => {
              const showRibbon =
                !show_only_first_ribbon || (show_only_first_ribbon && i === 0);
              return (
                <Col lg={4} sm={12} key={i}>
                  <Card
                    className={cx(
                      `card-bg card-big align-items-top rounded shadow`,
                      { show_detail_link: show_detail_link },
                    )}
                    noWrapper={false}
                    tag="div"
                    spacing
                    key={i}
                  >
                    {showRibbon && <div className="flag-icon" />}

                    <div className="etichetta"></div>

                    <CardBody
                      tag="div"
                      className={cx('', { 'mt-5': !showRibbon })}
                    >
                      <CardTitle tag="h5"> </CardTitle>
                      <CardText> </CardText>

                      <CardReadMore
                        iconName="it-arrow-right"
                        tag={Link}
                        to={'#'}
                        text=" "
                      />
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
          {linkHref && <div className="link-button text-center my-5"></div>}
        </div>
      </Container>
    </div>
  );
};

RibbonCardTemplateSkeleton.propTypes = {
  isEditMode: PropTypes.bool,
  linkHref: PropTypes.any,
};

export default RibbonCardTemplateSkeleton;
