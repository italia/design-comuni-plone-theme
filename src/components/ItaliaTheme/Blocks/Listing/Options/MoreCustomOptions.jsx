import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/*
Customizable component to add More Listing options.
- data.template contains the name of the template
*/
const MoreCustomOptions = ({
  data,
  block,
  onChangeBlock,
  required = false,
}) => {
  // useEffect(() => {
  //   if (!data.show_detail_link) {
  //     onChangeBlock(block, {
  //       ...data,
  //       detail_link_label: undefined,
  //     });
  //   }
  // }, [data.show_detail_link]);

  return <></>;
};

MoreCustomOptions.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default MoreCustomOptions;
