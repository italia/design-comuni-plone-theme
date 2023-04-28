import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Chip,
  ChipLabel,
} from 'design-react-kit/dist/design-react-kit';

import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  CardCategory,
  ListingLinkMore,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  getCalendarDate,
  getEventRecurrenceMore,
} from 'design-comuni-plone-theme/helpers';
import { getCategory } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/utils';

import {
  getItemIcon,
  CardCalendar,
  ListingCategory,
  ListingImage,
  ListingText,
  CardPersona,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const CardWithImageTemplate = (props) => {
  const {
    items,
    isEditMode,
    title,
    linkTitle,
    linkHref,
    show_block_bg = false,
    always_show_image = false,
    set_four_columns = false,
    show_type = true,
    show_section,
    show_icon = true,
    show_description = true,
    show_topics = true,
    hide_dates = false,
    natural_image_size = false,
    id_lighthouse,
    center_cards,
  } = props;

  const imagesToShow = set_four_columns ? 4 : 3;

  return (
    <div className="card-with-image-template">
      <Container className="px-4">
        {title && (
          <Row>
            <Col>
              <h2 className={cx('mb-4', { 'mt-5': !show_block_bg })}>
                {title}
              </h2>
            </Col>
          </Row>
        )}
        <Row className={cx('items', { 'center-cards': center_cards })}>
          {items.map((item, index) => {
            const icon = show_icon ? getItemIcon(item) : null;
            const date = hide_dates ? null : getCalendarDate(item);
            const eventRecurrenceMore = hide_dates
              ? null
              : getEventRecurrenceMore(item, isEditMode);
            const listingText = show_description ? (
              <ListingText item={item} />
            ) : null;

            const image = ListingImage({ item });

            const showImage =
              (index < imagesToShow || always_show_image) && image != null;
            const category = getCategory(item, show_type, show_section, props);
            const topics = show_topics ? item.tassonomia_argomenti : null;

            return (
              <Col
                lg={set_four_columns ? '3' : '4'}
                key={item['@id']}
                className="col-item mb-3"
              >
                {item['@type'] === 'Persona' ? (
                  <CardPersona
                    item={item}
                    className="listing-item card-bg"
                    showImage={showImage}
                    natural_image_size={natural_image_size}
                    listingText={listingText}
                    icon={icon}
                    type={category}
                    isEditMode={isEditMode}
                  />
                ) : (
                  <Card
                    className={cx('listing-item card-bg', {
                      'card-img': showImage,
                      'card-teaser-image card-flex no-after':
                        item['@type'] === 'Persona',
                    })}
                  >
                    {/* wrapperClassName="card-overlapping" */}
                    {showImage && (
                      <div
                        className={cx('img-responsive-wrapper', {
                          'natural-image-size': natural_image_size,
                        })}
                      >
                        <div className="img-responsive img-responsive-panoramic">
                          <figure className="img-wrapper">{image}</figure>
                          {item['@type'] === 'Event' && (
                            <CardCalendar
                              start={item.start}
                              end={item.end}
                              recurrence={item.recurrence}
                            />
                          )}
                        </div>
                      </div>
                    )}
                    <CardBody>
                      {(icon || category || date) && (
                        <CardCategory iconName={icon} date={date}>
                          <ListingCategory category={category} item={item} />
                        </CardCategory>
                      )}
                      <CardTitle tag="h3">
                        <UniversalLink
                          item={!isEditMode ? item : null}
                          href={isEditMode ? '#' : ''}
                          data-element={id_lighthouse}
                        >
                          {item.title || item.id}
                        </UniversalLink>
                      </CardTitle>
                      {listingText && (
                        <CardText
                          className={cx('', {
                            'mb-3': topics?.length > 0,
                          })}
                        >
                          {listingText}
                        </CardText>
                      )}

                      {topics?.length > 0 && (
                        <div
                          className={cx('', {
                            'mb-3': eventRecurrenceMore,
                          })}
                        >
                          {topics.map((argument, index) => (
                            <UniversalLink
                              href={flattenToAppURL(argument['@id'])}
                              key={index}
                              title={argument.title}
                              className="text-decoration-none"
                            >
                              <Chip
                                color="primary"
                                disabled={false}
                                simple
                                tag="div"
                                className="mr-2"
                              >
                                <ChipLabel tag="span">
                                  {argument.title}
                                </ChipLabel>
                              </Chip>
                            </UniversalLink>
                          ))}
                        </div>
                      )}

                      {eventRecurrenceMore}
                    </CardBody>
                  </Card>
                )}
              </Col>
            );
          })}
        </Row>
        <ListingLinkMore title={linkTitle} href={linkHref} className="my-4" />
      </Container>
    </div>
  );
};

CardWithImageTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CardWithImageTemplate;
