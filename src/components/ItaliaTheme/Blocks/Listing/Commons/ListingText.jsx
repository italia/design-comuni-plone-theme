import React from 'react';
import PropTypes from 'prop-types';

export const ListingText = ({ item }) => {
  return <>{item.description}</>;
};

ListingText.propTypes = {
  item: PropTypes.object,
};

export default ListingText;
