import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { useLocation } from 'react-router-dom';
import { matchPath } from 'react-router';
import { Helmet, BodyClass } from '@plone/volto/helpers';
import { RemoveBodyClass } from '@italia/components/ItaliaTheme';
import { getSiteProperty } from '@italia/helpers';
import ScrollToTop from '@italia/components/ItaliaTheme/ScrollToTop/ScrollToTop';
import { SubsiteLoader } from '@italia/addons/volto-subsites';
import config from '@plone/volto/registry';

const AppExtras = (props) => {
  const intl = useIntl();
  const { settings } = config;
  const { appExtras = [] } = settings;
  const { pathname } = props;

  const subsite = useSelector((state) => state.subsite?.data);
  const siteTitle = subsite?.title ?? getSiteProperty('siteTitle', intl.locale);

  const location = useLocation();

  const FORCE_PUBLIC_UI = ['/sitemap', '/search'];
  const isPublicUI = FORCE_PUBLIC_UI.reduce(
    (acc, route) => acc || new RegExp(route).test(`/${location.pathname}`),
    false,
  );

  const active = appExtras
    .map((reg) => {
      const match = matchPath(pathname, reg.match);
      return match ? { reg, match } : null;
    })
    .filter((reg) => reg);

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

      {/* AppExtras from volto config */}
      {active.map(({ reg: { component, props: extraProps }, match }, i) => {
        const Insert = component;
        return (
          <Insert
            key={`appextra-${i}`}
            match={match}
            {...props}
            {...extraProps}
          />
        );
      })}
    </>
  );
};

export default connect(
  (state, props) => ({
    pathname: props.location?.pathname,
  }),
  {},
)(AppExtras);
