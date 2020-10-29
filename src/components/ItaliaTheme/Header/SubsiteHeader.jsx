/**
 * SubsiteHeader component.
 * @module components/ItaliaTheme/Header/SubsiteHeader
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { flattenToAppURL, flattenHTMLToAppURL } from '@plone/volto/helpers';
import { isSubsiteRoot } from 'volto-subsites';

const SubsiteHeader = () => {
  const subsite = useSelector(
    (state) => state.content?.subrequests?.subsite?.data,
  );
  const location = useLocation();

  return subsite && isSubsiteRoot(location.pathname, subsite) ? (
    <div
      className="subsite-header"
      style={{
        backgroundImage: `linear-gradient(rgba(25,25,25,0.8), rgba(25,25,25,0.8)), url(${flattenToAppURL(
          subsite.image.download,
        )})`,
      }}
    >
      <div className={`text`}>
        <div className="container px-md-4">
          {subsite.subsite_header?.data && (
            <div
              className="text-serif"
              dangerouslySetInnerHTML={{
                __html: flattenHTMLToAppURL(subsite.subsite_header.data),
              }}
            />
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default SubsiteHeader;
