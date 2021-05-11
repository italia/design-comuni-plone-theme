import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { UniversalLink, ConditionalLink } from '@plone/volto/components';
import { useIntl } from 'react-intl';
import moment from 'moment';
import 'moment/min/locales';
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
import Image from '@plone/volto/components/theme/Image/Image';
import { flattenToAppURL } from '@plone/volto/helpers';
import { CardCategory } from '@italia/components/ItaliaTheme';
import { getCalendarDate, getEventRecurrenceMore } from '@italia/helpers';

import {
  getItemIcon,
  CardCalendar,
  ListingCategory,
  ListingText,
  CardPersona,
} from '@italia/components/ItaliaTheme';

const CardWithImageTemplate = ({
  items,
  isEditMode,
  title,
  linkMore,
  show_block_bg = false,
  always_show_image = false,
  hide_dates = false,
  full_width = true,
  natural_image_size = false,
}) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  return (
    <div
      className={cx('card-with-image-template', { 'public-ui': isEditMode })}
    >
      <div className={cx({ 'full-width': full_width })}>
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
          <Row className="items">
            {items.map((item, index) => {
              const icon = getItemIcon(item);
              const date = hide_dates ? null : getCalendarDate(item);
              const eventRecurrenceMore = getEventRecurrenceMore(
                item,
                isEditMode,
              );
              const listingText = <ListingText item={item} />;
              const image =
                item.image || item.immagine_testata || item.foto_persona;
              const showImage = (index < 3 || always_show_image) && image;

              return (
                <Col lg="4" key={item['@id']} className="col-item mb-3">
                  {item['@type'] === 'Persona' ? (
                    <CardPersona
                      item={item}
                      className="listing-item card-bg"
                      showImage={showImage}
                      natural_image_size={natural_image_size}
                      listingText={listingText}
                      icon={icon}
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
                            <figure className="img-wrapper">
                              <Image
                                className="listing-image"
                                image={image}
                                aria-hidden="true"
                                alt=""
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
                            href={isEditMode ? '#' : ''}
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
                            {item.tassonomia_argomenti?.map(
                              (argument, index) => (
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
                              ),
                            )}
                          </div>
                        )}

                        {eventRecurrenceMore}
                      </CardBody>
                    </Card>
                  )}{' '}
                </Col>
              );
            })}
          </Row>
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

CardWithImageTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default CardWithImageTemplate;
