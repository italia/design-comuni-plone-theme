import React from 'react';
import cx from 'classnames';

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardReadMore,
  Row,
  Col,
} from 'design-react-kit';

const CardWithoutImageRssTemplateSkeleton = ({ isEditMode, data = {} }) => {
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
              <Card noWrapper={false} tag="div">
                <CardBody tag="div">
                  <div className="category-top"></div>
                  <CardTitle className="big-heading" tag="h5"></CardTitle>
                  <CardText tag="p" className="font-serif"></CardText>
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

export default CardWithoutImageRssTemplateSkeleton;
