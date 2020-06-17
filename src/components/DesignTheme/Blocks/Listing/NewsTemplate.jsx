import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { ConditionalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { useIntl } from 'react-intl';
import moment from 'moment';

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardCategory,
  CardText,
} from 'design-react-kit/dist/design-react-kit';

const NewsTemplate = ({ items, isEditMode, title, linkMore }) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  return (
    <div className={cx('news-template', { 'public-ui': isEditMode })}>
      {title && <h2>{title}</h2>}
      <Row className="items">
        {items.map((item, index) => (
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
                          src={item.image.scales.preview.download}
                          alt={item.title}
                        />
                      </figure>
                    </ConditionalLink>
                  </div>
                </div>
              )}
              <CardBody>
                <CardCategory
                  date={moment(item.effective || item.created).format('ll')}
                >
                  {item.subjects?.join(', ')}
                </CardCategory>
                <CardTitle tag="h4">
                  <Link to={flattenToAppURL(item['@id'])}>
                    {item.title || item.id}
                  </Link>
                </CardTitle>
                {item.description && <CardText>{item.description}</CardText>}
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
      {linkMore?.href && (
        <div className="link-more">
          <ConditionalLink condition={!isEditMode} to={linkMore.href}>
            {linkMore.title}
          </ConditionalLink>
        </div>
      )}
    </div>
  );
};

NewsTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default NewsTemplate;
