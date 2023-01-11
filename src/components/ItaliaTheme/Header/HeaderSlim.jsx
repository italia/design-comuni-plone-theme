/**
 * HeaderSlim component.
 * @module components/ItaliaTheme/Header/HeaderSlim
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderSlimRightZone } from 'design-comuni-plone-theme/components/ItaliaTheme';
import {
  Header,
  HeaderBrand,
  HeaderContent,
  HeaderRightZone,
} from 'design-react-kit/dist/design-react-kit';
import { useIntl } from 'react-intl';
import { getSiteProperty } from 'design-comuni-plone-theme/helpers';

const HeaderSlim = () => {
  const subsite = useSelector((state) => state.subsite?.data);
  const intl = useIntl();

  const parentSiteURL = subsite
    ? '/'
    : getSiteProperty('parentSiteURL', intl.locale);

  const parentSiteTile = subsite
    ? getSiteProperty('subsiteParentSiteTitle', intl.locale)
    : getSiteProperty('parentSiteTitle', intl.locale);

  const target = subsite ? null : '_blank';
  return (
    <Header small={false} theme="" type="slim" role="navigation">
      <HeaderContent>
        <HeaderBrand
          responsive
          href={parentSiteURL}
          target={target}
          rel="noopener noreferrer"
        >
          {parentSiteTile}
        </HeaderBrand>
        <HeaderRightZone>
          <HeaderSlimRightZone />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

export default HeaderSlim;
