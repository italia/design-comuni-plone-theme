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
  CardReadMore,
  Button,
  Icon,
  Row,
  Col,
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
  card_detail_label: { id: 'Card detail label', defaultMessage: 'Vedi' },
});

const SimpleCardTemplateDefault = ({
  items,
  isEditMode,
  linkMore,
  show_icon = true,
  show_section = true,
  show_description = true,
  show_detail_link,
  detail_link_label,
  title,
  show_block_bg,
}) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  const getItemClass = (item) => {
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
    return className;
  };

  return (
    <div className="simple-card-default">
      {title && (
        <Row>
          <Col>
            <h2 className={cx('mb-4', { 'mt-5': !show_block_bg })}>{title}</h2>
          </Col>
        </Row>
      )}

      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3 mb-3">
        {items.map((item, index) => {
          const icon = getItemIcon(item);
          const itemTitle = item.title || item.id;
          const date =
            item['@type'] === 'News Item' && item.effective
              ? moment(item.effective).format('ll')
              : null;

          return (
            <Card
              className={`align-items-top rounded shadow ${getItemClass(item)}`}
              noWrapper
              teaser
              key={index}
            >
              <CardBody className={cx('', { 'pb-5': show_detail_link })}>
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
                    {itemTitle}
                  </Link>
                </CardTitle>
                {show_description && item.description && (
                  <CardText>{item.description}</CardText>
                )}

                {show_detail_link && (
                  <CardReadMore
                    iconName="it-arrow-right"
                    tag={Link}
                    to={!isEditMode ? flattenToAppURL(item['@id']) : '#'}
                    text={
                      detail_link_label ||
                      intl.formatMessage(messages.card_detail_label)
                    }
                  />
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
