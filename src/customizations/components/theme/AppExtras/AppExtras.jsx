import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Helmet } from '@plone/volto/helpers';
import ScrollToTop from '@italia/components/ItaliaTheme/ScrollToTop/ScrollToTop';
import { SubsiteLoader } from '@italia/addons/volto-subsites';
import { siteConfig } from '~/config';

import { useLocation } from 'react-router-dom';
import { BodyClass } from '@plone/volto/helpers';
import { RemoveBodyClass } from '@italia/components/ItaliaTheme';

const AppExtras = ({ pathname }) => {
  const subsite = useSelector((state) => state.subsite?.data);
  const siteTitle = subsite?.title ?? siteConfig?.properties?.siteTitle;

  const location = useLocation();

  const FORCE_PUBLIC_UI = ['/sitemap', '/search'];
  const isPublicUI = FORCE_PUBLIC_UI.reduce(
    (acc, route) => acc || new RegExp(route).test(`/${location.pathname}`),
    false,
  );

  return (
    <>
      <Helmet titleTemplate={`%s - ${siteTitle}`} />
      {isPublicUI && (
        <>
          <BodyClass className="public-ui" />
          <RemoveBodyClass className="cms-ui" />
        </>
      )}
      <ScrollToTop />
      <SubsiteLoader pathname={pathname} />
    </>
  );
};

export default connect(
  (state, props) => ({
    pathname: props.location?.pathname,
  }),
  {},
)(AppExtras);
