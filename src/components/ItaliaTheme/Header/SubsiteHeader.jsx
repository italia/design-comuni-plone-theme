/**
 * SubsiteHeader component.
 * @module components/ItaliaTheme/Header/SubsiteHeader
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import { isSubsiteRoot } from 'volto-subsites';
import {
  richTextHasContent,
  RichText,
} from 'design-comuni-plone-theme/components/ItaliaTheme/View';

const SubsiteHeader = () => {
  const subsite = useSelector((state) => state.subsite?.data);
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
      richTextHasContent(subsite?.subsite_header)) ? (
    <div className="subsite-header" style={style}>
      <div className={`text`}>
        <div className="container px-md-4 py-5">
          {subsite.subsite_header?.data && (
            <RichText data={subsite.subsite_header} />
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default SubsiteHeader;
