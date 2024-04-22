import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getContent, resetContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';

import Body from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HighlightedContent/Body';
import Skeleton from 'design-comuni-plone-theme/components/ItaliaTheme/Blocks/HighlightedContent/Skeleton';

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
      dispatch(
        getContent(
          // tolerate references to File objects
          flattenToAppURL(data.href.replace(/\/@@download\/file$/, '')),
          null,
          id,
        ),
      );
    }
    return () => dispatch(resetContent(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.href]);

  return loaded ? (
    <>
      {data.href && content && (
        <div className="block highlitedContent">
          <Body content={content} block={data} />
        </div>
      )}
    </>
  ) : (
    <div className="block highlitedContent">
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
