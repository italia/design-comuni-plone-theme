import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import cx from 'classnames';

import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import { getCalendarDate, getEventRecurrenceMore } from '@italia/helpers';
import {
  ListingCategory,
  ListingText,
  CardCategory,
  getItemIcon,
  ListingLinkMore,
  ListingImage,
} from '@italia/components/ItaliaTheme';

const ContentInEvidenceTemplate = ({
  items,
  title,
  isEditMode,
  show_block_bg,
  linkTitle,
  linkHref,
  moment: Moment,
  designReactKit,
}) => {
  const intl = useIntl();
  const moment = Moment.default;
  moment.locale(intl.locale);

  const {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Chip,
  } = designReactKit;
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
              <h2 className="mb-4">{title}</h2>
            </Col>
          </Row>
        )}

        {items.map((item, index) => {
          const date = getCalendarDate(item, moment);
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

export default injectLazyLibs(['moment', 'designReactKit'])(
  ContentInEvidenceTemplate,
);
