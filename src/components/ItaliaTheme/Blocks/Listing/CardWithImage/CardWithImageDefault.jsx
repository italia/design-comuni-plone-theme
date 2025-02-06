/*
 * componente per visulizzare un elemento del template 'Card con immagine' del blocco listing con l'aspetto di default.
 */
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Chip,
  ChipLabel,
} from 'design-react-kit';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { CardCategory } from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  getCalendarDate,
  getEventRecurrenceMore,
  getComponentWithFallback,
  contentHasImage,
} from 'design-comuni-plone-theme/helpers';
import { getCategory } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/utils';

import {
  getItemIcon,
  CardCalendar,
  ListingCategory,
  ListingImage,
  ListingText,
  CardPersona,
  RassegnaInfo,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const CardWithImageDefault = (props) => {
  const {
    item,
    index,
    isEditMode,
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
    rrule,
  } = props;

  const imagesToShow = set_four_columns ? 4 : 3;

  const icon = show_icon ? getItemIcon(item) : null;
  const date = hide_dates ? null : getCalendarDate(item, rrule.rrulestr);
  const eventRecurrenceMore = hide_dates
    ? null
    : getEventRecurrenceMore(item, isEditMode);
  const listingText = show_description ? <ListingText item={item} /> : null;

  const showImage = contentHasImage(
    item,
    index < imagesToShow || always_show_image,
  );
  const category = getCategory(item, show_type, show_section, props);
  const topics = show_topics ? item.tassonomia_argomenti : null;

  const BlockExtraTags = getComponentWithFallback({
    name: 'BlockExtraTags',
    dependencies: ['CardWithImageDefault', item['@type']],
  }).component;
  const isEventAppointment =
    item?.parent?.['@type'] === 'Event' && item?.['@type'] === 'Event';

  return (
    <>
      {item['@type'] === 'Persona' ? (
        <CardPersona
          item={item}
          className="card-bg shadow-sm"
          showImage={showImage}
          natural_image_size={natural_image_size}
          show_description={show_description}
          icon={icon}
          type={category}
          isEditMode={isEditMode}
        />
      ) : (
        <Card
          className={cx(
            'card-with-image-default-item listing-item card-bg no-after',
            {
              'card-teaser-image card-flex': item['@type'] === 'Persona',
            },
          )}
        >
          {/* wrapperClassName="card-overlapping" */}
          {showImage && (
            <div
              className={cx('img-responsive-wrapper', {
                'natural-image-size': natural_image_size,
              })}
            >
              <div className="img-responsive img-responsive-panoramic">
                <ListingImage item={item} showTitleAttr={false} />
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
          <CardBody className="px-4">
            {(icon || category || date) && (
              <CardCategory iconName={icon} date={date}>
                <ListingCategory category={category} item={item} />
              </CardCategory>
            )}
            <CardTitle
              tag="h3"
              className={`${
                isEventAppointment ? 'rassegna-appointment-title' : ''
              }`}
            >
              <UniversalLink
                item={!isEditMode ? item : null}
                href={isEditMode ? '#' : ''}
                data-element={id_lighthouse}
                tabIndex={0}
              >
                {item.title || item.id}
              </UniversalLink>
            </CardTitle>
            {isEventAppointment && <RassegnaInfo eventoPadre={item.parent} />}
            {listingText && (
              <CardText
                className={cx('', {
                  'mb-3': topics?.length > 0,
                })}
              >
                {listingText}
              </CardText>
            )}
            <BlockExtraTags {...props} item={item} itemIndex={index} />
            {topics?.length > 0 && (
              <div
                className={cx('card-with-image-additional-links', {
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
                      className="me-2"
                    >
                      <ChipLabel tag="span">{argument.title}</ChipLabel>
                    </Chip>
                  </UniversalLink>
                ))}
              </div>
            )}

            {eventRecurrenceMore}
          </CardBody>
        </Card>
      )}
    </>
  );
};

CardWithImageDefault.propTypes = {
  item: PropTypes.any.isRequired,
  isEditMode: PropTypes.bool,
};

export default injectLazyLibs(['rrule'])(CardWithImageDefault);
