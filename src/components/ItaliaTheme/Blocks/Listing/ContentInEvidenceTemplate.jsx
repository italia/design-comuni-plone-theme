import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardReadMore,
  Chip,
} from 'design-react-kit';
import cx from 'classnames';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { UniversalLink } from '@plone/volto/components';

import {
  getCalendarDate,
  getEventRecurrenceMore,
} from 'design-comuni-plone-theme/helpers';
import {
  ListingCategory,
  ListingText,
  CardCategory,
  getItemIcon,
  // ListingLinkMore,
  ListingImage,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const ContentInEvidenceTemplate = ({
  items,
  title,
  isEditMode,
  show_block_bg,
  linkAlign,
  linkTitle,
  linkHref,
  id_lighthouse,
  linkmore_id_lighthouse,
  titleLine,
  rrule,
}) => {
  const intl = useIntl();

  return (
    <div className="contentInEvidenceTemplate">
      <Container
        className={cx('', {
          'px-4': isEditMode,
        })}
      >
        {title && (
          <Row>
            <Col>
              <h2 className={cx('mb-4', { 'title-bottom-line': titleLine })}>
                {title}
              </h2>
            </Col>
          </Row>
        )}
        {items.map((item, index) => {
          const date = getCalendarDate(item, rrule.rrulestr);
          const eventRecurrenceMore = getEventRecurrenceMore(item, isEditMode);
          const listingText = <ListingText item={item} />;
          const image = ListingImage({ item, className: 'item-image' });
          const icon = getItemIcon(item);
          return (
            <Row key={item['@id']} className="content-in-evidence">
              {image && (
                <Col lg={{ size: 6, offset: 1, order: 2 }}>{image}</Col>
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
                      <UniversalLink item={item} data-element={id_lighthouse}>
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
                              className="me-2"
                            >
                              <UniversalLink
                                item={argomento}
                                className="chip-label text-decoration-none"
                              >
                                {argomento.title}
                              </UniversalLink>
                            </Chip>
                          ))}
                        </>
                      )}

                    {eventRecurrenceMore}
                    {linkHref?.[0]?.['@id'] && (
                      <CardReadMore
                        tag={UniversalLink}
                        iconName="it-arrow-right"
                        text={
                          linkTitle || intl.formatMessage(messages.view_all)
                        }
                        href={linkHref[0]['@id']}
                      />
                    )}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          );
        })}
        {/* Commentato in favore del CardReadMore sopra
        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-4"
          linkmoreIdLighthouse={linkmore_id_lighthouse}
      /> */}
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

export default injectLazyLibs(['rrule'])(ContentInEvidenceTemplate);

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});
