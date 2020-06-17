import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardCategory,
  CardText,
} from 'design-react-kit/dist/design-react-kit';
import moment from 'moment';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import cx from 'classnames';

const InEvidenceTemplate = ({ items, title }) => {
  return (
    <div className="in-evidence">
      <div className="title">{title && <h3>{title}</h3>}</div>
      <div className="container">
        {items.map((item, index) => (
          <Card
            className={cx('listing-item card-bg', {
              'card-img': index === 0 && item.image,
            })}
          >
            {index === 0 && item.image && (
              <div className="img-responsive-wrapper">
                <div className="img-responsive">
                  <Link to={flattenToAppURL(item['@id'])} className="img-link">
                    <figure className="img-wrapper">
                      <img
                        className="listing-image"
                        src={item.image.scales.preview.download}
                        alt={item.title}
                      />
                    </figure>
                  </Link>
                </div>
              </div>
            )}
            <CardBody>
              <CardCategory date={moment(item.effective).format('ll')}>
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
        ))}
      </div>
    </div>
  );
};

InEvidenceTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default InEvidenceTemplate;
