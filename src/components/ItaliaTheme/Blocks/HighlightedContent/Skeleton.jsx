import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Row,
  Col,
  Chip,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardReadMore,
} from 'design-react-kit';

import { CardCategory } from 'design-comuni-plone-theme/components/ItaliaTheme';

const Skeleton = ({ content, pathname, block }) => {
  return (
    <div className="skeleton-template">
      <Row>
        <Col lg={{ size: 6, offset: 1, order: 2 }}>
          <div className="img-skeleton"></div>
        </Col>

        <Col lg={{ size: 5, order: 1 }}>
          <Card>
            <CardBody className="pb-2">
              <CardCategory></CardCategory>
              <CardTitle tag="h2">-</CardTitle>
              <CardText></CardText>

              {[0, 1, 2].map((argomento) => (
                <Chip simple color="primary" key={argomento}></Chip>
              ))}

              {block.moreHref && (
                <CardReadMore
                  tag={Link}
                  iconName="it-arrow-right"
                  text=" "
                  to="#"
                />
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Skeleton.propTypes = {
  content: PropTypes.objectOf(PropTypes.any),
  pathname: PropTypes.string,
};

export default Skeleton;
