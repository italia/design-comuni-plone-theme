/**
 * SubsiteHeader component.
 * @module components/ItaliaTheme/Header/SubsiteHeader
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { flattenToAppURL } from '@plone/volto/helpers';

const SubsiteHeader = () => {
  const subsite = useSelector(
    (state) => state.content?.subrequests?.subsite?.data,
  );
  console.log(subsite);
  return subsite ? (
    <div className="subsite-header">
      {subsite.image && (
        <img
          src={flattenToAppURL(subsite.image.download)}
          role="presentation"
          alt={subsite.image.filename}
        />
      )}

      <div className="text">
        <div className="container">
          {subsite.subsite_header?.data && (
            <div
              dangerouslySetInnerHTML={{ __html: subsite.subsite_header.data }}
            />
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default SubsiteHeader;
