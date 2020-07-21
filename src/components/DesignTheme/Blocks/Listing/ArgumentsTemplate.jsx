import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardTitle,
  CardCategory,
  CardText,
} from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import cx from 'classnames';

const ArgumentsTemplate = ({ items, isEditMode }) => {

  const getIcon = (service) => {
    switch (service) {
      case 'Servizio':
        return 'it-settings'
      case 'Amministrazione':
        return 'it-pa'
      case 'Documento':
        return 'it-file'
      default:
        return '';
    }
  }
  return (
    <div
      className={cx('arguments', {
        'public-ui': isEditMode,
      })}
    >
      <div className="container">
        {items.map((item, index) => (
          <Card
            className={cx('listing-item card-bg')}
            key={index}
          >
            <CardBody>
              <CardCategory iconName={getIcon(item['@type'])}>
                <span className="text font-weight-bold">
                  {item.parent?.title}
                </span>
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

ArgumentsTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
};

export default ArgumentsTemplate;
