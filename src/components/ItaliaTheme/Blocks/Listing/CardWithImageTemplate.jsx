import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { ConditionalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
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
  CardCategory,
  CardText,
} from 'design-react-kit/dist/design-react-kit';

const CardWithImageTemplate = ({
  items,
  isEditMode,
  title,
  linkMore,
  show_block_bg = false,
}) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  return (
    <div
      className={cx('card-with-image-template', { 'public-ui': isEditMode })}
    >
      <div
        className={cx('full-width', {
          'bg-light py-5': show_block_bg,
        })}
      >
        <Container className="px-4">
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
            {items.map((item, index) => {
              let date = null;
              switch (item['@type']) {
                case 'News Item':
                  date = item.effective && moment(item.effective).format('ll');
                  break;
                default:
                  date = null;
              }

              return (
                <Col md="4" key={item['@id']} className="col-item">
                  <Card
                    className={cx('listing-item card-bg', {
                      'card-img': index < 3 && item.image,
                    })}
                  >
                    {/* wrapperClassName="card-overlapping" */}
                    {index < 3 && item.image && (
                      <div className="img-responsive-wrapper">
                        <div className="img-responsive img-responsive-panoramic">
                          <ConditionalLink
                            to={flattenToAppURL(item['@id'])}
                            condition={!isEditMode}
                            className="img-link"
                          >
                            <figure className="img-wrapper">
                              <img
                                className="listing-image"
                                src={flattenToAppURL(
                                  item.image.scales.preview.download,
                                )}
                                alt={item.title}
                              />
                            </figure>
                          </ConditionalLink>
                        </div>
                      </div>
                    )}
                    <CardBody>
                      <CardCategory date={date}>
                        {item?.design_italia_meta_type}
                      </CardCategory>
                      <CardTitle tag="h4">
                        <Link to={flattenToAppURL(item['@id'])}>
                          {item.title || item.id}
                        </Link>
                      </CardTitle>
                      {item.description && (
                        <CardText>{item.description}</CardText>
                      )}
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
          {linkMore?.href && (
            <div className="link-more">
              <ConditionalLink condition={!isEditMode} to={linkMore.href}>
                {linkMore.title}
              </ConditionalLink>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

CardWithImageTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CardWithImageTemplate;
