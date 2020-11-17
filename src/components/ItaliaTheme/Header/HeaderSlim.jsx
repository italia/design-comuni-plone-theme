/**
 * HeaderSlim component.
 * @module components/ItaliaTheme/Header/HeaderSlim
 */

import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import { HeaderSlimRightZone } from '@italia/components/ItaliaTheme';
// import { BITIcon, it_user } from '@italia/components/ItaliaTheme/Icons';
import {
  Button,
  Header,
  HeaderBrand,
  HeaderContent,
  HeaderRightZone,
  Icon,
} from 'design-react-kit/dist/design-react-kit';
import { addAppURL } from '@plone/volto/helpers';

import {
  ParentSiteMenu,
  LanguageSelector,
} from '@italia/components/ItaliaTheme';
import { siteConfig } from '~/config';

const messages = defineMessages({
  arLogin: {
    id: "Accedi all'area personale",
    defaultMessage: "Accedi all'area personale",
  },
});

const HeaderSlim = () => {
  const intl = useIntl();

  const subsite = useSelector((state) => state.subsite?.data);

  const parentSiteURL = subsite ? '/' : siteConfig.properties.parentSiteURL;
  const parentSiteTile = subsite
    ? siteConfig.properties.subsiteParentSiteTitle
    : siteConfig.properties.parentSiteTitle;
  return (
    <Header small={false} theme="" type="slim">
      <HeaderContent>
        <HeaderBrand
          responsive
          href={parentSiteURL}
          target="_blank"
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
