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
} from 'design-react-kit/dist/design-react-kit';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { getCalendarDate, getEventRecurrenceMore } from '@italia/helpers';
import {
  CardCalendar,
  getItemIcon,
  ListingCategory,
  ListingText,
  ListingLinkMore,
  CardCategory,
  CardPersona,
} from '@italia/components/ItaliaTheme';
import Image from '@plone/volto/components/theme/Image/Image';
import { getCategory } from '@italia/components/ItaliaTheme/Blocks/Listing/Commons/utils';

const InEvidenceTemplate = ({
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
  linkTitle,
  linkHref,
}) => {
  return (
    <div className="in-evidence">
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
        <div className="in-evidence-cards-wrapper mb-5">
          {items.map((item, index) => {
            const icon = show_icon ? getItemIcon(item) : null;
            const date = hide_dates ? null : getCalendarDate(item);
            const eventRecurrenceMore = hide_dates
              ? null
              : getEventRecurrenceMore(item, isEditMode);
            const listingText = show_description ? (
              <ListingText item={item} />
            ) : null;
            const image =
              item.image || item.immagine_testata || item.foto_persona;
            const category = getCategory(item, show_type, show_section);
            const topics = show_topics ? item.tassonomia_argomenti : null;

            return item['@type'] === 'Persona' ? (
              <CardPersona
                item={item}
                className="listing-item card-bg"
                showImage={image ? true : false}
                listingText={listingText}
                icon={icon}
                isEditMode={isEditMode}
                key={index}
              />
            ) : (
              <Card
                key={index}
                className={cx('listing-item card-bg', {
                  'card-img': index === 0 && image,
                })}
              >
                {index === 0 && image && (
                  <div className="img-responsive-wrapper">
                    <div className="img-responsive">
                      <figure className="img-wrapper">
                        <Image
                          className="listing-image"
                          image={image}
                          alt=""
                          aria-hidden="true"
                          useOriginal={false}
                          maxSize={400}
                        />
                      </figure>
                      {item['@type'] === 'Event' && (
                        <CardCalendar start={item.start} end={item.end} />
                      )}
                    </div>
                  </div>
                )}
                <CardBody>
                  {(icon || category || date) && (
                    <CardCategory iconName={icon} date={date}>
                      {category && (
                        <ListingCategory category={category} item={item} />
                      )}
                    </CardCategory>
                  )}
                  <CardTitle tag="h3">
                    <UniversalLink
                      item={!isEditMode ? item : null}
                      href={isEditMode ? '#' : null}
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
                            className="mr-2"
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
        <ListingLinkMore title={linkTitle} href={linkHref} className="my-4" />
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

export default InEvidenceTemplate;
