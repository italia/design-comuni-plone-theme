import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import moment from 'moment';
import 'moment/min/locales';

import {
  Card,
  CardBody,
  CardTitle,
  CardCategory,
  CardText,
  Button,
  Icon,
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
  moment.locale(intl.locale);

  return (
    <div
      className={cx('simple-card-default', {
        'public-ui': isEditMode,
      })}
    >
      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3 mb-3">
        {items.map((item, index) => {
          const date =
            item['@type'] === 'News Item' && item.effective
              ? moment(item.effective).format('ll')
              : null;
          const icon = getItemIcon(item);
          let className = null;

          switch (item['@type']) {
            case 'News Item':
              className = item.tipologia_notizia?.token
                .toLowerCase()
                .replace(' ', '_');

              break;
            default:
              className = className;
          }

          return (
            <Card
              className={`align-items-top rounded shadow ${className}`}
              noWrapper
              teaser
              key={index}
            >
              <CardBody>
                {(show_icon || show_section || date) && (
                  <CardCategory
                    iconName={show_icon && !date ? icon : null}
                    date={date}
                  >
                    {show_icon && date && <Icon icon={icon} />}{' '}
                    {/*questo perchè CardCategory mostra o l'icona o la data */}
                    {show_section && (
                      <span className="text font-weight-bold">
                        {item.parent?.title}
                      </span>
                    )}
                  </CardCategory>
                )}
                <CardTitle tag="h5">
                  <Link to={!isEditMode ? flattenToAppURL(item['@id']) : '#'}>
                    {item.title || item.id}
                  </Link>
                </CardTitle>
                {show_description && item.description && (
                  <CardText>{item.description}</CardText>
                )}
              </CardBody>
            </Card>
          );
        })}
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
