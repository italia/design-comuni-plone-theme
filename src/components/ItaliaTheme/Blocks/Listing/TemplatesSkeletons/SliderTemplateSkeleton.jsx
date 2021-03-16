import React from 'react';
import PropTypes from 'prop-types';
import SliderTemplate from '@italia/components/ItaliaTheme/Blocks/Listing/SliderTemplate';

const SliderTemplateSkeleton = (data) => {
  let items = [];
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((i) => {
    items.push({ '@id': i + '' });
  });
  return (
    <div className="public-ui ">
      <div className="skeleton-template">
        <SliderTemplate {...data} items={items} />
      </div>
    </div>
  );
};

SliderTemplateSkeleton.propTypes = {
  linkMore: PropTypes.any,
  isEditMode: PropTypes.bool,
  title: PropTypes.string,
};

export default SliderTemplateSkeleton;
