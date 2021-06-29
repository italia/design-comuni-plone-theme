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
} from 'design-react-kit/dist/design-react-kit';
import cx from 'classnames';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { getCalendarDate, getEventRecurrenceMore } from '@italia/helpers';
import {
  ListingCategory,
  ListingText,
  CardCategory,
  getItemIcon,
  ListingLinkMore,
} from '@italia/components/ItaliaTheme';
import Image from '@plone/volto/components/theme/Image/Image';

const ContentInEvidenceTemplate = ({
  items,
  title,
  isEditMode,
  show_block_bg,
  linkTitle,
  linkHref,
}) => {
  return (
    <div
      className={cx('contentInEvidenceTemplate', {
        'public-ui': isEditMode,
      })}
    >
      <Container
        className={cx('', {
          'px-4': isEditMode,
        })}
      >
        {title && (
          <Row>
            <Col>
              <h2 className="mb-4">{title}</h2>
            </Col>
          </Row>
        )}

        {items.map((item, index) => {
          const date = getCalendarDate(item);
          const eventRecurrenceMore = getEventRecurrenceMore(item, isEditMode);
          const listingText = <ListingText item={item} />;
          const image =
            item.image || item.immagine_testata || item.foto_persona;
          const icon = getItemIcon(item);
          return (
            <Row key={item['@id']} className="content-in-evidence">
              {image && (
                <Col lg={{ size: 6, offset: 1, order: 2 }}>
                  <Image
                    image={image}
                    alt={item.title}
                    className="item-image"
                    role="presentation"
                    useOriginal={false}
                    maxSize={400}
                  />
                </Col>
              )}
              <Col lg={{ size: 5, order: 1 }}>
                <Card>
                  <CardBody className="pb-2">
                    <CardCategory date={date} iconName={icon}>
                      <ListingCategory
                        category={item.parent?.title}
                        date={date}
                        item={item}
                      />
                    </CardCategory>
                    <CardTitle tag="h2">
                      <UniversalLink href={flattenToAppURL(item['@id'])}>
                        {item.title}
                      </UniversalLink>
                    </CardTitle>
                    <CardText>{listingText}</CardText>

                    {item.tassonomia_argomenti &&
                      item.tassonomia_argomenti.length > 0 && (
                        <>
                          {item.tassonomia_argomenti.map((argomento) => (
                            <Chip
                              simple
                              color="primary"
                              key={argomento['@id']}
                              className="mr-2"
                            >
                              <UniversalLink
                                href={flattenToAppURL(argomento['@id'])}
                                className="chip-label text-decoration-none"
                              >
                                {argomento.title}
                              </UniversalLink>
                            </Chip>
                          ))}
                        </>
                      )}

                    {eventRecurrenceMore}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          );
        })}

        <ListingLinkMore title={linkTitle} href={linkHref} className="my-4" />
      </Container>
    </div>
  );
};

ContentInEvidenceTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default ContentInEvidenceTemplate;
