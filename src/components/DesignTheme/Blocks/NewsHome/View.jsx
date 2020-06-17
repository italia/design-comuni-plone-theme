import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getContent, resetContent } from '@plone/volto/actions';
import { getBaseUrl, flattenToAppURL } from '@plone/volto/helpers';

import Body from './Body';

const View = ({ data, id }) => {
  const content = useSelector((state) => state.content.subrequests[id]?.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.href) {
      dispatch(getContent(flattenToAppURL(data.href), null, id));
    }
    return () => dispatch(resetContent(id));
  }, [dispatch, id, data.href]);

  return data.href && content ? (
    <div className="block newsHome">
      <Body content={content} block={data} />
    </div>
  ) : null;
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
