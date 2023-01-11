import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { BlockSearchSectionsBody } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { SearchUtils } from 'design-comuni-plone-theme/components';

const View = ({ data, id }) => {
  const { parseFetchedSections } = SearchUtils;
  const location = useLocation();

  const content = useSelector((state) => state.content.subrequests[id]?.data);
  const fetched_sections = useSelector(
    (state) => state?.searchFilters?.result?.sections,
  );

  const sections = parseFetchedSections(fetched_sections ?? [], location);

  return (
    <div className="block full-width">
      <BlockSearchSectionsBody
        content={content}
        block={data}
        sections={sections}
      />
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
