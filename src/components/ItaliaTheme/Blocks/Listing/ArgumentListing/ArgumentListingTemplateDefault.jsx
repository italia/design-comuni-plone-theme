import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  Card,
  CardBody,
  CardTitle,
  CardCategory,
  CardText,
  Button,
} from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import cx from 'classnames';

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});

const ArgumentListingTemplate = ({ items, isEditMode, linkMore }) => {
  const intl = useIntl();
  const getIcon = (service) => {
    switch (service) {
      case 'Servizio':
        return 'it-settings';
      case 'UnitaOrganizzativa':
        return 'it-pa';
      case 'Documento':
        return 'it-file';
      default:
        return 'it-pa';
    }
  };

  return (
    <div
      className={cx('arguments', {
        'public-ui': isEditMode,
      })}
    >
      <div className="container mb-3">
        {items.map((item, index) => (
          <Card className={cx('listing-item card-bg')} key={index}>
            <CardBody>
              <CardCategory iconName={getIcon(item['@type'])}>
                <span className="text font-weight-bold">
                  {item.parent?.title}
                </span>
              </CardCategory>
              <CardTitle tag="h4">
                <Link to={!isEditMode ? flattenToAppURL(item['@id']) : '#'}>
                  {item.title || item.id}
                </Link>
              </CardTitle>
              {item.description && <CardText>{item.description}</CardText>}
            </CardBody>
          </Card>
        ))}
      </div>
      {linkMore?.href && (
        <div className="link-button">
          <Button
            className="view-all"
            icon={false}
            tag="button"
            onClick={() => window.open(linkMore.href, '_self')}
          >
            {linkMore.title || intl.formatMessage(messages.view_all)}
          </Button>
        </div>
      )}
    </div>
  );
};

ArgumentListingTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkMore: PropTypes.any,
};

export default ArgumentListingTemplate;
