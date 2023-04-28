import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import moment from 'moment';
import cx from 'classnames';

import {
  Card,
  CardBody,
  CardTitle,
  CardReadMore,
  CardText,
  Row,
  Col,
  Container,
} from 'design-react-kit/dist/design-react-kit';

import { UniversalLink } from '@plone/volto/components';

import {
  Icon,
  getItemIcon,
  ListingText,
  ListingLinkMore,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  getCalendarDate,
  getEventRecurrenceMore,
} from 'design-comuni-plone-theme/helpers';
import { getCategory } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/utils';

const messages = defineMessages({
  default_detail_link: {
    id: 'Vedi',
    defaultMessage: 'Vedi',
  },
});

const RibbonCardTemplate = (props) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  const {
    items,
    isEditMode,
    linkTitle,
    linkHref,
    title,
    show_only_first_ribbon,
    show_detail_link,
    detail_link_label,
    show_section = true,
    show_icon = true,
    show_description = true,
    show_type,
    hide_dates,
    id_lighthouse,
    center_cards,
  } = props;

  return (
    <div className="ribbon-card-template">
      <Container className="px-4">
        {title && (
          <Row>
            <Col>
              <h2 className="mb-4">{title}</h2>
            </Col>
          </Row>
        )}

        <Row className={cx('mb-4', { 'center-cards': center_cards })}>
          {items.map((item, index) => {
            const itemTitle = item.title || item.id;
            const showRibbon =
              !show_only_first_ribbon ||
              (show_only_first_ribbon && index === 0);
            const icon = show_icon ? getItemIcon(item) : null;
            const date = hide_dates ? null : getCalendarDate(item);
            const eventRecurrenceMore = hide_dates
              ? null
              : getEventRecurrenceMore(item, isEditMode);
            const category = getCategory(item, show_type, show_section, props);
            const listingText = show_description ? (
              <ListingText item={item} />
            ) : null;

            return (
              <Col lg={4} sm={12} key={index}>
                <Card
                  className={cx(
                    `card-bg card-big align-items-top rounded shadow`,
                    { show_detail_link: show_detail_link },
                  )}
                  noWrapper={false}
                  tag="div"
                  spacing
                  key={index}
                >
                  {showRibbon && <div className="flag-icon" />}

                  {(category || icon) && (
                    <div className="etichetta">
                      {icon && <Icon icon={icon} />}
                      {category && <span>{category}</span>}
                    </div>
                  )}

                  <CardBody
                    tag="div"
                    className={cx('', { 'mt-5': !showRibbon })}
                  >
                    {date && <div className="dates">{date}</div>}
                    <CardTitle tag="h3">
                      <UniversalLink
                        item={!isEditMode ? item : null}
                        href={isEditMode ? '#' : null}
                        data-element={id_lighthouse}
                      >
                        {itemTitle}
                      </UniversalLink>
                    </CardTitle>
                    {listingText && <CardText>{listingText}</CardText>}

                    {eventRecurrenceMore}
                    {show_detail_link && (
                      <CardReadMore
                        iconName="it-arrow-right"
                        tag={UniversalLink}
                        item={!isEditMode ? item : null}
                        href={isEditMode ? '#' : null}
                        text={
                          detail_link_label ||
                          intl.formatMessage(messages.default_detail_link)
                        }
                      />
                    )}
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
        <ListingLinkMore title={linkTitle} href={linkHref} className="my-5" />
      </Container>
    </div>
  );
};

RibbonCardTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
};

export default RibbonCardTemplate;
