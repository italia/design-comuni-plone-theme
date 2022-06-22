/**
 * HeaderSlim component.
 * @module components/ItaliaTheme/Header/HeaderSlim
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import { HeaderSlimRightZone } from '@italia/components/ItaliaTheme';
import { getSiteProperty } from '@italia/helpers';

const HeaderSlim = ({ designReactKit }) => {
  const subsite = useSelector((state) => state.subsite?.data);
  const intl = useIntl();

  const parentSiteURL = subsite
    ? '/'
    : getSiteProperty('parentSiteURL', intl.locale);

  const parentSiteTile = subsite
    ? getSiteProperty('subsiteParentSiteTitle', intl.locale)
    : getSiteProperty('parentSiteTitle', intl.locale);

  const target = subsite ? null : '_blank';

  const {
    Header,
    HeaderBrand,
    HeaderContent,
    HeaderRightZone,
  } = designReactKit;

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

export default injectLazyLibs(['designReactKit'])(HeaderSlim);
