import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';

import { NewsHomeBody } from '@italia/components/ItaliaTheme';
import Skeleton from '@italia/components/ItaliaTheme/Blocks/NewsHome/Skeleton';

const View = ({ data, id }) => {
  const content = useSelector((state) => state.content.subrequests[id]?.data);
  const dispatch = useDispatch();
  const loaded = useSelector((state) => {
    return (
      (state.content.subrequests[id]?.loaded &&
        !state.content.subrequests[id]?.loading) ||
      state.content.subrequests[id]?.error
    );
  });

  useEffect(() => {
    if (data.href) {
      dispatch(getContent(flattenToAppURL(data.href), null, id));
    }
    return () => dispatch(resetContent(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.href]);

  return loaded ? (
    <>
      {data.href && content && (
        <div className="block newsHome">
          <NewsHomeBody content={content} block={data} />
        </div>
      )}
    </>
  ) : (
    <div className="block newsHome">
      <Skeleton block={data} />
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
