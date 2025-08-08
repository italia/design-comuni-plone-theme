import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import moment from 'moment';
import cx from 'classnames';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardReadMore,
} from 'design-react-kit';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { UniversalLink } from '@plone/volto/components';

import { CardCategory } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { getCategory } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/utils';
import {
  getItemIcon,
  ListingCategory,
  ListingText,
  RassegnaInfo,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  getCalendarDate,
  getEventRecurrenceMore,
  getComponentWithFallback,
} from 'design-comuni-plone-theme/helpers';
import config from '@plone/volto/registry';

const messages = defineMessages({
  card_detail_label: { id: 'Card detail label', defaultMessage: 'Vedi' },
  publication_date: {
    id: 'publication_date',
    defaultMessage: 'Data di pubblicazione',
  },
  update_date: {
    id: 'update_date',
    defaultMessage: 'Data di aggiornamento',
  },
});

const SimpleCardDefault = (props) => {
  const intl = useIntl();

  moment.locale(intl.locale);

  const {
    item,
    isEditMode,
    show_icon = true,
    show_section = true,
    show_type,
    show_description = true,
    show_detail_link,
    detail_link_label,
    hide_dates,
    id_lighthouse,
    rrule,
    index,
    title,
  } = props;

  const getItemClass = (item) => {
    let className = null;
    switch (item['@type']) {
      case 'News Item':
        className =
          item.tipologia_notizia
            ?.map?.((tipologia) =>
              tipologia.token.toLowerCase().replace(' ', '_'),
            )
            .join(' ') ?? '';
        break;
      default:
        className = null;
        break;
    }
    return className;
  };

  const icon = show_icon ? getItemIcon(item) : null;
  const itemTitle = item.title || item.id;
  const date = hide_dates ? null : getCalendarDate(item, rrule.rrulestr);
  const eventRecurrenceMore = hide_dates
    ? null
    : getEventRecurrenceMore(item, isEditMode);
  const listingText = show_description ? <ListingText item={item} /> : null;
  const category = getCategory(item, show_type, show_section, props);
  const type = item['@type'];

  const BlockExtraTags = getComponentWithFallback({
    name: 'BlockExtraTags',
    dependencies: ['SimpleCardDefault', type],
  }).component;

  const isEventAppointment =
    item?.parent?.['@type'] === 'Event' && item?.['@type'] === 'Event';

  const showContentDateInListingFor =
    config.settings.siteProperties.showContentDateInListingFor;

  return (
    <Card
      className={`align-items-top rounded shadow no-after ${getItemClass(
        item,
      )} simple-card-default-item`}
      noWrapper
      teaser
      key={index}
    >
      <CardBody
        className={cx('', {
          'pb-5': show_detail_link || eventRecurrenceMore,
        })}
      >
        {(icon || category || date) && (
          <CardCategory iconName={icon} date={date}>
            {category && (
              <span className="text fw-bold">
                <ListingCategory category={category} item={item} />
              </span>
            )}
          </CardCategory>
        )}
        <CardTitle
          tag={title ? 'h3' : 'h2'}
          className={cx('', {
            'rassegna-appointment-title': isEventAppointment,
            h3: !title,
          })}
        >
          <UniversalLink
            item={!isEditMode ? item : null}
            href={isEditMode ? '#' : null}
            data-element={id_lighthouse}
            tabIndex={0}
          >
            {itemTitle}
          </UniversalLink>
        </CardTitle>
        {isEventAppointment && <RassegnaInfo eventoPadre={item.parent} />}
        {listingText && (
          <CardText className={cx('', { 'mb-5': eventRecurrenceMore })}>
            {listingText}
            {showContentDateInListingFor.includes(type) && !hide_dates && (
              <div className="document-date mt-3">
                {item?.effective && (
                  <p className="mb-0">
                    <strong>
                      {intl.formatMessage(messages.publication_date)}:{' '}
                    </strong>
                    {moment(item.effective).format('DD-MM-YYYY')}
                  </p>
                )}
                {item?.modified && (
                  <p className="mb-0">
                    <strong>
                      {intl.formatMessage(messages.update_date)}:{' '}
                    </strong>
                    {moment(item.modified).format('DD-MM-YYYY')}
                  </p>
                )}
              </div>
            )}
          </CardText>
        )}
        <BlockExtraTags {...props} item={item} itemIndex={index} />
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
            aria-hidden="true"
          />
        )}
      </CardBody>
    </Card>
  );
};

SimpleCardDefault.propTypes = {
  item: PropTypes.any.isRequired,
  isEditMode: PropTypes.bool,
};

export default injectLazyLibs(['rrule'])(SimpleCardDefault);
