import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { useIntl } from 'react-intl';
import moment from 'moment';
import 'moment/min/locales';
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

import { CardCategory } from '@italia/components/ItaliaTheme';

const CardWithImageTemplateSkeleton = ({
  isEditMode,
  title,
  linkMore,
  show_block_bg = false,
  always_show_image = false,
  hide_dates = false,
  full_width = true,
}) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  return (
    <div
      className={cx('card-with-image-template', { 'public-ui': isEditMode })}
    >
      <div className={cx({ 'full-width': full_width })}>
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
                      <CardBody>
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
                              className="mr-2"
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
            {linkMore?.href && <div className="link-more"></div>}
          </div>
        </Container>
      </div>
    </div>
  );
};

CardWithImageTemplateSkeleton.propTypes = {
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CardWithImageTemplateSkeleton;
