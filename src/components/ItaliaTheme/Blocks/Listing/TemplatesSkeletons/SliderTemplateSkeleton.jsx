import React from 'react';
import PropTypes from 'prop-types';
import SliderTemplate from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/Listing/SliderTemplate';

const SliderTemplateSkeleton = (data) => {
  let items = [];
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((i) => {
    items.push({ '@id': i + '' });
  });
  return (
    <div className="skeleton-template">
      <SliderTemplate {...data} items={items} />
    </div>
  );
};

SliderTemplateSkeleton.propTypes = {
  linkHref: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default SliderTemplateSkeleton;
