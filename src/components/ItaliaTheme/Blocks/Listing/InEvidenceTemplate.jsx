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
import { ConditionalLink, UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { getCalendarDate, getEventRecurrenceMore } from '@italia/helpers';
import {
  CardCalendar,
  getItemIcon,
  ListingCategory,
  ListingText,
  CardCategory,
  CardPersona,
} from '@italia/components/ItaliaTheme';
import Image from '@plone/volto/components/theme/Image/Image';

const InEvidenceTemplate = ({
  items,
  title,
  isEditMode,
  show_block_bg,
  linkMore,
}) => {
  return (
    <div
      className={cx('in-evidence', {
        'public-ui': isEditMode,
      })}
    >
      <div className="full-width">
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
              const icon = getItemIcon(item);
              const date = getCalendarDate(item);
              const eventRecurrenceMore = getEventRecurrenceMore(
                item,
                isEditMode,
              );
              const listingText = <ListingText item={item} />;
              const image =
                item.image || item.immagine_testata || item.foto_persona;

              return item['@type'] === 'Persona' ? (
                <CardPersona
                  item={item}
                  className="listing-item card-bg"
                  showImage={image ? true : false}
                  listingText={listingText}
                  icon={icon}
                  isEditMode={isEditMode}
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
                    <CardCategory iconName={icon} date={date}>
                      <ListingCategory
                        category={item?.design_italia_meta_type}
                        item={item}
                      />
                    </CardCategory>
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
                          'mb-3': item.tassonomia_argomenti?.length > 0,
                        })}
                      >
                        {listingText}
                      </CardText>
                    )}
                    {item.tassonomia_argomenti?.length > 0 && (
                      <div
                        className={cx('', {
                          'mb-3': eventRecurrenceMore,
                        })}
                      >
                        {item.tassonomia_argomenti?.map((argument, index) => (
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
          {linkMore?.href && (
            <div className="link-more">
              <ConditionalLink condition={!isEditMode} to={linkMore.href}>
                {linkMore.title}
              </ConditionalLink>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

InEvidenceTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default InEvidenceTemplate;
