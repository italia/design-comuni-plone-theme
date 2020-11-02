/**
 * SubsiteHeader component.
 * @module components/ItaliaTheme/Header/SubsiteHeader
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { flattenToAppURL, flattenHTMLToAppURL } from '@plone/volto/helpers';
import { isSubsiteRoot } from '@italia/addons/volto-subsites';

const SubsiteHeader = () => {
  const subsite = useSelector(state => state.subsite?.data);
  const location = useLocation();
  let style = {};
  if (subsite?.image?.download) {
    style.backgroundImage = `linear-gradient(rgba(25,25,25,0.8), rgba(25,25,25,0.8)), url(${flattenToAppURL(
      subsite.image.download,
    )})`;
  }

  return subsite &&
    isSubsiteRoot(location.pathname, subsite) &&
    (Object.keys(style).length > 0 ||
      subsite?.subsite_header?.data?.replace(/(<([^>]+)>)/g, '').length > 0) ? (
    <div className="subsite-header" style={style}>
      <div className={`text`}>
        <div className="container px-md-4 py-5">
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
