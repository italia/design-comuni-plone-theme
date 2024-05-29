/*
 * Blocco link solo immagini
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import cx from 'classnames';

import {
  ListingLinkMore,
  ListingImage,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const SmallBlockLinksTemplate = ({
  items,
  title,
  isEditMode,
  show_block_bg,
  linkAlign,
  linkTitle,
  linkHref,
  titleLine,
  linkmore_id_lighthouse,
  override_links_accessibility_marker,
}) => {
  return (
    <div className="small-block-links">
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
        <Row className="items">
          {items.map((item, index) => {
            const image = ListingImage({
              item,
              sizes: '(max-width:575px) 520px, 200px',
              style: {},
              alt: item.title,
              noWrapLink: true,
            });

            return (
              <Col
                md="3"
                key={item['@id']}
                className="col-item col-sm-4 col-lg-2"
              >
                {image && (
                  <div className="center-image-card">
                    <UniversalLink
                      item={!isEditMode ? item : null}
                      href={isEditMode ? '#' : ''}
                      className="img-link"
                      overrideMarkSpecialLinks={
                        override_links_accessibility_marker
                      }
                    >
                      {image}
                    </UniversalLink>
                  </div>
                )}
              </Col>
            );
          })}
        </Row>
        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-4"
          linkmoreIdLighthouse={linkmore_id_lighthouse}
        />
      </Container>
    </div>
  );
};

SmallBlockLinksTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  linkTitle: PropTypes.any,
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default SmallBlockLinksTemplate;
