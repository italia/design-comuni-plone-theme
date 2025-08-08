/*
 * In evidenza
 */
import React from 'react';
import PropTypes from 'prop-types';
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
} from 'design-react-kit';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import {
  getCalendarDate,
  getEventRecurrenceMore,
  contentHasImage,
} from 'design-comuni-plone-theme/helpers';
import {
  CardCalendar,
  getItemIcon,
  ListingCategory,
  ListingText,
  ListingLinkMore,
  ListingImage,
  CardCategory,
  CardPersona,
  RassegnaInfo,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import { getCategory } from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/Commons/utils';

const InEvidenceTemplate = (props) => {
  const {
    items,
    title,
    isEditMode,
    show_block_bg,
    show_icon = true,
    show_section,
    show_type = true,
    show_description = true,
    show_topics = true,
    hide_dates,
    linkAlign,
    linkTitle,
    linkHref,
    titleLine,
    id_lighthouse,
    linkmore_id_lighthouse,
    rrule,
  } = props;

  return (
    <div className="in-evidence">
      <Container className="px-4 pt-3">
        {title && (
          <Row>
            <Col>
              <h2
                className={cx('mb-4', {
                  'mt-5': !show_block_bg,
                  'title-bottom-line': titleLine,
                })}
              >
                {title}
              </h2>
            </Col>
          </Row>
        )}
        <div className="in-evidence-cards-wrapper my-3 pb-2">
          {items.map((item, index) => {
            const icon = show_icon ? getItemIcon(item) : null;
            const date = hide_dates
              ? null
              : getCalendarDate(item, rrule.rrulestr);
            const eventRecurrenceMore = hide_dates
              ? null
              : getEventRecurrenceMore(item, isEditMode);
            const listingText = show_description ? (
              <ListingText item={item} />
            ) : null;
            const hasImage = contentHasImage(item);
            const category = getCategory(item, show_type, show_section, props);
            const topics = show_topics ? item.tassonomia_argomenti : null;

            const isEventAppointment =
              item?.parent?.['@type'] === 'Event' &&
              item?.['@type'] === 'Event';

            return item['@type'] === 'Persona' ? (
              <CardPersona
                item={item}
                className="listing-item card-bg"
                showImage={hasImage}
                show_description={show_description}
                icon={icon}
                isEditMode={isEditMode}
                key={index}
              />
            ) : (
              <Card key={index} className={cx('listing-item card-bg')}>
                {index === 0 && hasImage && (
                  <div className="img-responsive-wrapper">
                    <div className="img-responsive">
                      <ListingImage
                        item={item}
                        sizes="(max-width:320px) 200px, 300px"
                      />
                      {item['@type'] === 'Event' && (
                        <CardCalendar start={item.start} end={item.end} />
                      )}
                    </div>
                  </div>
                )}
                <CardBody className="px-4">
                  {(icon || category || date) && (
                    <CardCategory iconName={icon} date={date}>
                      {category && (
                        <ListingCategory category={category} item={item} />
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
                    >
                      {item.title || item.id}
                    </UniversalLink>
                  </CardTitle>
                  {isEventAppointment && (
                    <RassegnaInfo eventoPadre={item.parent} />
                  )}
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
                        <Link
                          to={flattenToAppURL(argument['@id'])}
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
                        </Link>
                      ))}
                    </div>
                  )}

                  {eventRecurrenceMore}
                </CardBody>
              </Card>
            );
          })}
        </div>
        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-4"
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </Container>
    </div>
  );
};

InEvidenceTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default injectLazyLibs(['rrule'])(InEvidenceTemplate);
