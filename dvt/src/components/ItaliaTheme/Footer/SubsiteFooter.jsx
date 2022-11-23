/**
 * SubsiteFooter component.
 * @module components/ItaliaTheme/Header/SubsiteFooter
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { flattenHTMLToAppURL, isCmsUi } from '@plone/volto/helpers';

const SubsiteFooter = () => {
  const location = useLocation();
  const isCmsUI = isCmsUi(location.pathname);
  const subsite = useSelector((state) => state.subsite?.data);

  return subsite?.subsite_footer?.data ? (
    <div className={`subsite-footer ${isCmsUI ? 'public-ui' : ''}`}>
      <div className="text">
        <div className="container px-md-4">
          <div
            dangerouslySetInnerHTML={{
              __html: flattenHTMLToAppURL(subsite.subsite_footer.data),
            }}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default SubsiteFooter;
