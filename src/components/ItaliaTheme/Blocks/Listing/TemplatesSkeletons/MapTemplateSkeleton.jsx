import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import { Container } from 'design-react-kit/dist/design-react-kit';

const MapTemplateSkeleton = ({
  isEditMode,
  linkMore,
  title,
  show_only_first_ribbon,
  show_detail_link,
  detail_link_label,
  show_block_bg,
  hide_dates,
}) => {
  return (
    <div
      className={cx('map-template', {
        'public-ui': isEditMode,
      })}
    >
      <div className="full-width">
        <Container className="px-4">
          <div className="template-skeleton">
            {title && <h2 className="mb-4">{title}</h2>}

            <div className="mb-4">
              <div className="map-skeleton"></div>
            </div>
            {linkMore?.href && (
              <div className="link-more text-center my-5"></div>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

MapTemplateSkeleton.propTypes = {
  isEditMode: PropTypes.bool,
  linkMore: PropTypes.any,
};

export default MapTemplateSkeleton;
