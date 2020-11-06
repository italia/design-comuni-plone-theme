import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { ConditionalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { useIntl } from 'react-intl';
import moment from 'moment';
import 'moment/min/locales';
import { getIcon } from '@italia/helpers';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardCategory,
  CardText,
  Icon,
  Chip,
  ChipLabel,
} from 'design-react-kit/dist/design-react-kit';
import { getCalendarDate, getEventRecurrenceMore } from '@italia/helpers';

import { getItemIcon, CardCalendar } from '@italia/components/ItaliaTheme';

const CardWithImageTemplate = ({
  items,
  isEditMode,
  title,
  linkMore,
  show_block_bg = false,
}) => {
  const intl = useIntl();
  moment.locale(intl.locale);

  return (
    <div
      className={cx('card-with-image-template', { 'public-ui': isEditMode })}
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
          <Row className="items">
            {items.map((item, index) => {
              const icon = getItemIcon(item);
              const date = getCalendarDate(item);
              const eventRecurrenceMore = getEventRecurrenceMore(
                item,
                isEditMode,
              );
              return (
                <Col md="4" key={item['@id']} className="col-item">
                  <Card
                    className={cx('listing-item card-bg', {
                      'card-img': index < 3 && item.image,
                    })}
                  >
                    {/* wrapperClassName="card-overlapping" */}
                    {index < 3 && item.image && (
                      <div className="img-responsive-wrapper">
                        <div className="img-responsive img-responsive-panoramic">
                          <ConditionalLink
                            to={flattenToAppURL(item['@id'])}
                            condition={!isEditMode}
                            className="img-link"
                          >
                            <figure className="img-wrapper">
                              <img
                                className="listing-image"
                                src={flattenToAppURL(
                                  item.image.scales.preview.download,
                                )}
                                alt={item.title}
                              />
                            </figure>
                          </ConditionalLink>
                          {item['@type'] === 'Event' && (
                            <CardCalendar start={item.start} end={item.end} />
                          )}
                        </div>
                      </div>
                    )}
                    <CardBody>
                      <CardCategory iconName={!date ? icon : null} date={date}>
                        {date && (
                          <Icon
                            className="icon mr-2"
                            color="primary"
                            icon={getIcon(item['@type'])}
                            padding={false}
                          />
                        )}{' '}
                        {/*questo perchè CardCategory mostra o l'icona o la data */}
                        {item?.design_italia_meta_type}
                      </CardCategory>
                      <CardTitle tag="h4">
                        <Link to={flattenToAppURL(item['@id'])}>
                          {item.title || item.id}
                        </Link>
                      </CardTitle>
                      {(item.description ||
                        item.tassonomia_argomenti.length > 0) && (
                        <CardText>
                          {item.description && (
                            <div
                              className={cx('', {
                                'mb-3': item.tassonomia_argomenti.length > 0,
                              })}
                            >
                              {item.description}
                            </div>
                          )}
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
                                <ChipLabel tag="span">
                                  {argument.title}
                                </ChipLabel>
                              </Chip>
                            </Link>
                          ))}
                        </CardText>
                      )}

                      {eventRecurrenceMore}
                    </CardBody>
                  </Card>
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
