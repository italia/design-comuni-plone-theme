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

import { getItemIcon } from '@italia/components/ItaliaTheme';

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});

const SimpleCardTemplateDefault = ({
  items,
  isEditMode,
  linkMore,
  show_icon = true,
  show_section = true,
  show_description = true,
}) => {
  const intl = useIntl();

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
              {(show_icon || show_section) && (
                <CardCategory iconName={show_icon ? getItemIcon(item) : null}>
                  {show_section && (
                    <span className="text font-weight-bold">
                      {item.parent?.title}
                    </span>
                  )}
                </CardCategory>
              )}
              <CardTitle tag="h4">
                <Link to={!isEditMode ? flattenToAppURL(item['@id']) : '#'}>
                  {item.title || item.id}
                </Link>
              </CardTitle>
              {show_description && item.description && (
                <CardText>{item.description}</CardText>
              )}
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

SimpleCardTemplateDefault.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkMore: PropTypes.any,
};

export default SimpleCardTemplateDefault;
