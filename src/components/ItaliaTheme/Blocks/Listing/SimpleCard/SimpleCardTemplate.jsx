import React from 'react';
import PropTypes from 'prop-types';
import SimpleCardTemplateDefault from '@italia/components/ItaliaTheme/Blocks/Listing/SimpleCard/SimpleCardTemplateDefault';
import SimpleCardTemplateCompact from '@italia/components/ItaliaTheme/Blocks/Listing/SimpleCard/SimpleCardTemplateCompact';

import { SimpleCardListingAppearance_COMPACT } from '@italia/components/ItaliaTheme/Blocks/Listing/Options/SimpleCardListingOptions';

const SimpleCardTemplate = (data) => {
  switch (data.appearance) {
    case SimpleCardListingAppearance_COMPACT:
      return <SimpleCardTemplateCompact {...data} />;
    default:
      return <SimpleCardTemplateDefault {...data} />;
  }
};

SimpleCardTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  isEditMode: PropTypes.bool,
  linkMore: PropTypes.any,
};

export default SimpleCardTemplate;
