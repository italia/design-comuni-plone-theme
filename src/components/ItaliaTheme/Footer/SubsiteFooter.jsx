/**
 * SubsiteFooter component.
 * @module components/ItaliaTheme/Header/SubsiteFooter
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { flattenHTMLToAppURL } from '@plone/volto/helpers';

const SubsiteFooter = () => {
  const subsite = useSelector(
    (state) => state.content?.subrequests?.subsite?.data,
  );

  return subsite && subsite.subsite_footer?.data ? (
    <div className="subsite-footer ">
      <div className="text">
        <div className="container px-md-4">
          {subsite.subsite_footer?.data && (
            <div
              dangerouslySetInnerHTML={{
                __html: flattenHTMLToAppURL(subsite.subsite_footer.data),
              }}
            />
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default SubsiteFooter;
