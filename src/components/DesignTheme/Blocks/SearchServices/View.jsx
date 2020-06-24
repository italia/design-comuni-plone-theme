import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Body from './Body';

const View = ({ data, id }) => {
  const content = useSelector((state) => state.content.subrequests[id]?.data);

  return (
    <div className="block">
      <Body content={content} block={data} />
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
};

export default View;
