/**
 * HeaderSlim component.
 * @module components/ItaliaTheme/Header/HeaderSlim
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderSlimRightZone } from '@italia/components/ItaliaTheme';
import {
  Header,
  HeaderBrand,
  HeaderContent,
  HeaderRightZone,
} from 'design-react-kit/dist/design-react-kit';
import config from '@plone/volto/registry';

const HeaderSlim = () => {
  const subsite = useSelector((state) => state.subsite?.data);

  const parentSiteURL = subsite
    ? '/'
    : config.siteConfig.properties.parentSiteURL;
  const parentSiteTile = subsite
    ? config.siteConfig.properties.subsiteParentSiteTitle
    : config.siteConfig.properties.parentSiteTitle;

  const target = subsite ? null : '_blank';
  return (
    <Header small={false} theme="" type="slim">
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
