import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { UniversalLink } from '@plone/volto/components';
import { useIntl, defineMessages } from 'react-intl';
import Image from '@plone/volto/components/theme/Image/Image';

import { ListingLinkMore } from '@italia/components/ItaliaTheme';
import {
  Container,
  Row,
  Col,
  Alert,
} from 'design-react-kit/dist/design-react-kit';

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
  linkTitle,
  linkHref,
  show_block_bg,
}) => {
  const intl = useIntl();

  return (
    <div
      className={cx('grid-gallery-template', {
        'public-ui': isEditMode,
      })}
    >
      <div className="full-width">
        <Container className="px-4">
          {title && (
            <Row>
              <Col>
                <h2 className="mb-4">{title}</h2>
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
              const image =
                item.image || item.immagine_testata || item.foto_persona;

              return (
                <div
                  key={item['@id'] ?? index}
                  className={cx('grid-gallery-item', `item-${index % 7}`)}
                >
                  <UniversalLink
                    item={!isEditMode ? item : null}
                    href={isEditMode ? '#' : null}
                  >
                    {image && (
                      <Image
                        image={image}
                        alt=""
                        loading="lazy"
                        role="presentation"
                        aria-hidden="true"
                        useOriginal={false}
                        maxSize={450}
                      />
                    )}
                    <h3>{item.title}</h3>
                  </UniversalLink>
                </div>
              );
            })}
          </div>
          <ListingLinkMore title={linkTitle} href={linkHref} className="my-5" />
        </Container>
      </div>
    </div>
  );
};

GridGalleryTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default GridGalleryTemplate;
