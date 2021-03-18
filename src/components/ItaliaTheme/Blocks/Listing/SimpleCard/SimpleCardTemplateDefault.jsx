import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import moment from 'moment';
import 'moment/min/locales';
import { UniversalLink } from '@plone/volto/components';
import cx from 'classnames';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardReadMore,
  Button,
  Row,
  Col,
} from 'design-react-kit/dist/design-react-kit';
import { CardCategory } from '@italia/components/ItaliaTheme';
import { flattenToAppURL } from '@plone/volto/helpers';

import {
  getItemIcon,
  ListingCategory,
  ListingText,
} from '@italia/components/ItaliaTheme';
import { getCalendarDate, getEventRecurrenceMore } from '@italia/helpers';

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
  hide_dates,
  path_filters,
  show_path_filters,
  addFilters,
  additionalFilters = [],
}) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  let currentPathFilter = additionalFilters
    ?.filter((f) => {
      return f.i === 'path';
    })
    ?.map((f) => {
      return f.v;
    });

  const [pathFilter, setPathFilter] = useState(currentPathFilter?.[0] || null);

  const getItemClass = (item) => {
    let className = null;
    switch (item['@type']) {
      case 'News Item':
        className = item.tipologia_notizia?.token
          .toLowerCase()
          .replace(' ', '_');
        break;
      default:
        className = null;
        break;
    }
    return className;
  };

  const path_filters_buttons =
    show_path_filters && path_filters
      ? Object.keys(path_filters)
          .map((k) => {
            return {
              label: path_filters[k].label,
              path: path_filters[k].path?.[0],
            };
          })
          .filter((f) => f.path)
      : null;

  const addPathFilter = (path) => {
    let new_path = pathFilter === path ? null : path;
    setPathFilter(new_path);
    let filters = [];
    if (new_path) {
      filters = [
        {
          i: 'path',
          o: 'plone.app.querystring.operation.string.absolutePath',
          v: new_path,
        },
      ];
    }
    addFilters(filters);
  };

  return (
    <div className="simple-card-default">
      {(title || path_filters_buttons) && (
        <Row
          className={cx('template-header', {
            'with-filters': path_filters_buttons,
          })}
        >
          {title && (
            <Col md={path_filters_buttons ? 6 : 12}>
              <h2
                className={cx('', {
                  'mt-5': !show_block_bg,
                  'mb-4': !path_filters_buttons,
                })}
              >
                {title}
              </h2>
            </Col>
          )}

          {path_filters_buttons && (
            <Col md={title ? 6 : 12} className="path-filter-buttons">
              <div className="path-filter-buttons-wrapper">
                {path_filters_buttons.map((button, i) => (
                  <Button
                    key={i}
                    color="primary"
                    outline={button.path['@id'] !== pathFilter}
                    size="xs"
                    icon={false}
                    tag="button"
                    className="ml-3"
                    onClick={(e) => {
                      addPathFilter(button.path['@id']);
                    }}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            </Col>
          )}
        </Row>
      )}

      <div className="card-wrapper card-teaser-wrapper card-teaser-wrapper-equal card-teaser-block-3 mb-3">
        {items.map((item, index) => {
          const icon = getItemIcon(item);
          const itemTitle = item.title || item.id;
          const date = hide_dates ? null : getCalendarDate(item);
          const eventRecurrenceMore = getEventRecurrenceMore(item, isEditMode);
          const listingText = <ListingText item={item} />;

          return (
            <Card
              className={`align-items-top rounded shadow ${getItemClass(item)}`}
              noWrapper
              teaser
              key={index}
            >
              <CardBody
                className={cx('', {
                  'pb-5': show_detail_link || eventRecurrenceMore,
                })}
              >
                {(show_icon || show_section || date) && (
                  <CardCategory iconName={show_icon ? icon : null} date={date}>
                    {show_section && (
                      <span className="text font-weight-bold">
                        <ListingCategory
                          category={item.parent?.title}
                          item={item}
                        />
                      </span>
                    )}
                  </CardCategory>
                )}
                <CardTitle tag="h3">
                  <UniversalLink
                    item={!isEditMode ? item : null}
                    href={isEditMode ? '#' : null}
                  >
                    {itemTitle}
                  </UniversalLink>
                </CardTitle>
                {show_description && listingText && (
                  <CardText className={cx('', { 'mb-5': eventRecurrenceMore })}>
                    {listingText}
                  </CardText>
                )}
                {eventRecurrenceMore}
                {show_detail_link && (
                  <CardReadMore
                    iconName="it-arrow-right"
                    tag={UniversalLink}
                    item={!isEditMode ? item : null}
                    href={isEditMode ? '#' : null}
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
        <div className="link-button text-center my-4">
          <UniversalLink
            href={flattenToAppURL(linkMore.href)}
            className="btn btn-tertiary"
          >
            {linkMore.title || intl.formatMessage(messages.view_all)}
          </UniversalLink>
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
