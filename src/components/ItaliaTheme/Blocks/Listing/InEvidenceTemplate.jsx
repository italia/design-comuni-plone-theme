import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardCategory,
  CardText,
  Chip,
  ChipLabel,
  Icon,
} from 'design-react-kit/dist/design-react-kit';
import { ConditionalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import {
  getIcon,
  getCalendarDate,
  getEventRecurrenceMore,
} from '@italia/helpers';
import { CardCalendar, getItemIcon } from '@italia/components/ItaliaTheme';

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
              return (
                <Card
                  key={index}
                  className={cx('listing-item card-bg', {
                    'card-img': index === 0 && item.image,
                  })}
                >
                  {index === 0 && item.image && (
                    <div className="img-responsive-wrapper">
                      <div className="img-responsive">
                        <Link
                          to={flattenToAppURL(item['@id'])}
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
                        </Link>
                        {item['@type'] == 'Event' && (
                          <CardCalendar start={item.start} end={item.end} />
                        )}
                      </div>
                    </div>
                  )}
                  <CardBody>
                    <CardCategory iconName={!date ? icon : null} date={date}>
                      {/*questo perchè CardCategory mostra o l'icona o la data */}
                      {date && (
                        <Icon
                          className="icon"
                          color="primary"
                          icon={getIcon(item['@type'])}
                          padding={false}
                        />
                      )}{' '}
                      {item?.design_italia_meta_type}
                    </CardCategory>
                    <CardTitle tag="h4">
                      <Link to={flattenToAppURL(item['@id'])}>
                        {item.title || item.id}
                      </Link>
                    </CardTitle>
                    {(item.description ||
                      item.tassonomia_argomenti?.length > 0) && (
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
                              <ChipLabel tag="span">{argument.title}</ChipLabel>
                            </Chip>
                          </Link>
                        ))}
                      </CardText>
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
