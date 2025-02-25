/*
 * Gallery a griglia
 */
import { Alert, Col, Container, Row } from 'design-react-kit';
import {
  ListingImage,
  ListingLinkMore,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import { defineMessages, useIntl } from 'react-intl';
import { contentHasImage } from 'design-comuni-plone-theme/helpers';
import PropTypes from 'prop-types';
import React from 'react';
import { UniversalLink } from '@plone/volto/components';
import cx from 'classnames';
import { flattenToAppURL } from '@plone/volto/helpers';

const messages = defineMessages({
  maxItemsExceeded: {
    id: 'grid-gallery-max-items-exceeded',
    defaultMessage:
      'Per questo template il numero di risultati per pagina deve essere 7. Controlla le impostazioni.',
  },
});

const GridGalleryTemplate = ({
  items,
  isEditMode,
  title,
  titleLine,
  linkAlign,
  linkTitle,
  linkHref,
  show_block_bg,
  critical = false,
  linkmore_id_lighthouse,
}) => {
  const intl = useIntl();
  return (
    <div className="grid-gallery-template">
      <Container className="px-4">
        {title && (
          <Row>
            <Col>
              <h2 className={cx('mb-4', { 'title-bottom-line': titleLine })}>
                {title}
              </h2>
            </Col>
          </Row>
        )}

        {isEditMode && items.length > 7 && (
          <Alert color="danger">
            {intl.formatMessage(messages.maxItemsExceeded)}
          </Alert>
        )}
        <div className="grid-gallery-grid">
          {items.map((item, index) => {
            let image = ListingImage({
              item,
              className: '',
            });
            let scale = null;
            let hasImage = contentHasImage(item);
            if (index % 7 === 0 || index % 7 === 6 || index % 7 === 3) {
              scale = 'great';
            }
            if (index % 7 === 1 || index % 7 === 5) {
              scale = 'teaser';
            }
            if (index % 7 === 2 || index % 7 === 4) {
              scale = 'large';
            }
            if (scale && item?.image?.scales?.[scale]) {
              image = (
                <img
                  src={flattenToAppURL(item.image.scales[scale].download)}
                  width={item.image.scales[scale].width}
                  height={item.image.scales[scale].height}
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  title={item.title}
                  loading={critical ? 'eager' : 'lazy'}
                />
              );
              hasImage = true;
            }

            return (
              <div
                key={item['@id'] ?? index}
                className={cx('grid-gallery-item', `item-${index % 7}`)}
              >
                <UniversalLink
                  item={!isEditMode ? item : null}
                  href={isEditMode ? '#' : null}
                >
                  {hasImage && (
                    <picture className="volto-image responsive">
                      {image}
                    </picture>
                  )}
                  <h3>{item.title}</h3>
                </UniversalLink>
              </div>
            );
          })}
        </div>
        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-5"
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </Container>
    </div>
  );
};

GridGalleryTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
  critical: PropTypes.bool,
};

export default GridGalleryTemplate;
