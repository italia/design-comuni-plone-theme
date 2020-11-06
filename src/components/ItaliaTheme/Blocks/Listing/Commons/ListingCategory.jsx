import React from 'react';
import PropTypes from 'prop-types';

export const ListingCategory = ({ category, item }) => {
  return category ? <>{category}</> : null;
};

ListingCategory.propTypes = {
  category: PropTypes.string,
  item: PropTypes.object,
};

export default ListingCategory;
