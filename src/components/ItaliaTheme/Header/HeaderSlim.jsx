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

import { siteConfig } from '~/config';

const HeaderSlim = () => {
  const subsite = useSelector((state) => state.subsite?.data);

  const parentSiteURL = subsite ? '/' : siteConfig.properties.parentSiteURL;
  const parentSiteTile = subsite
    ? siteConfig.properties.subsiteParentSiteTitle
    : siteConfig.properties.parentSiteTitle;

  const target = subsite ? null : '_blank';
  return (
    <Header small={false} theme="" type="slim">
      <HeaderContent>
        <HeaderBrand
          responsive
          href={parentSiteURL}
          target={target}
          rel="noopener noreferer"
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
