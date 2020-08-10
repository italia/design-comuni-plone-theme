import React from 'react';
import PropTypes from 'prop-types';
import ArgumentListingTemplateDefault from '@italia/components/ItaliaTheme/Blocks/Listing/ArgumentListing/ArgumentListingTemplateDefault';
import ArgumentListingTemplateCompact from '@italia/components/ItaliaTheme/Blocks/Listing/ArgumentListing/ArgumentListingTemplateCompact';
const ArgumentListingTemplate = ({
  items,
  isEditMode,
  linkMore,
  appearance,
}) => {
  switch (appearance) {
    case 'compact':
      return (
        <ArgumentListingTemplateCompact
          items={items}
          isEditMode={isEditMode}
          linkMore={linkMore}
        />
      );
    default:
      return (
        <ArgumentListingTemplateDefault
          items={items}
          isEditMode={isEditMode}
          linkMore={linkMore}
        />
      );
  }
};

ArgumentListingTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkMore: PropTypes.any,
};

export default ArgumentListingTemplate;
