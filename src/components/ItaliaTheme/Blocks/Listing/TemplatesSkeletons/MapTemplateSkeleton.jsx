import React from 'react';
import PropTypes from 'prop-types';

import { Container } from 'design-react-kit';

const MapTemplateSkeleton = ({
  isEditMode,
  linkHref,
  title,
  show_only_first_ribbon,
  show_detail_link,
  detail_link_label,
  show_block_bg,
  hide_dates,
}) => {
  return (
    <div className="map-template">
      <Container className="px-4">
        <div className="template-skeleton">
          {title && <h2 className="mb-4">{title}</h2>}

          <div className="mb-4">
            <div className="map-skeleton"></div>
          </div>
          {linkHref && <div className="link-button text-center my-5"></div>}
        </div>
      </Container>
    </div>
  );
};

MapTemplateSkeleton.propTypes = {
  isEditMode: PropTypes.bool,
  linkHref: PropTypes.any,
};

export default MapTemplateSkeleton;
