import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import cx from 'classnames';

import {
  ListingLinkMore,
  getListingImageBackground,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const SquaresImageTemplate = ({
  items,
  title,
  show_block_bg,
  isEditMode,
  linkAlign,
  linkTitle,
  linkHref,
  id_lighthouse,
  titleLine,
}) => {
  return (
    <div className="squares-image-template">
      <Container className="px-4">
        <div className="title">
          {title && (
            <h2 className={cx('', { 'title-bottom-line': titleLine })}>
              {title}
            </h2>
          )}
        </div>
        <div className="grid mb-3 mt-5">
          {items.map((item, index) => {
            const image = getListingImageBackground(item, 'preview');

            return (
              <UniversalLink
                item={!isEditMode ? item : null}
                href={isEditMode ? '#' : null}
                style={{
                  backgroundImage: `url(${image})`,
                }}
                className="listing-item box bg-img"
                key={index}
                data-element={id_lighthouse}
              >
                <span className="title fw-bold">{item?.title}</span>
              </UniversalLink>
            );
          })}
        </div>

        <ListingLinkMore
          title={linkTitle}
          href={linkHref}
          linkAlign={linkAlign}
          className="my-4"
        />
      </Container>
    </div>
  );
};

SquaresImageTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkTitle: PropTypes.any,
  linkHrefs: PropTypes.any,
};

export default SquaresImageTemplate;
