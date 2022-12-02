import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  Card,
  CardBody,
  CardTitle,
  CardReadMore,
  Row,
  Col,
} from 'design-react-kit';

const CardWithImageRssTemplateSkeleton = ({ isEditMode, data = {} }) => {
  return (
    <div className={cx('', { 'public-ui': isEditMode })}>
      <div className="skeleton-template">
        {data.title && (
          <Row>
            <Col>
              <h2 className="mb-4 mt-5">{data.title}</h2>
            </Col>
          </Row>
        )}
        <Row>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Col lg={3} className="mb-3" key={i}>
              <Card className="card-img" noWrapper={false} tag="div">
                <div className="img-responsive-wrapper">
                  <div className="img-responsive img-responsive-panoramic">
                    <figure className="img-wrapper"></figure>
                  </div>
                </div>

                <CardBody tag="div" className="px-4">
                  <div className="category-top"></div>
                  <CardTitle className="big-heading" tag="h6"></CardTitle>
                </CardBody>
                <CardReadMore
                  iconName="it-arrow-right"
                  className="ms-4"
                  tag="a"
                  href="#"
                  text=""
                />
              </Card>
            </Col>
          ))}
        </Row>
        {data.linkMore && data.linkMoreTitle && (
          <div className="link-button text-center my-4"></div>
        )}
      </div>
    </div>
  );
};

CardWithImageRssTemplateSkeleton.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default CardWithImageRssTemplateSkeleton;
