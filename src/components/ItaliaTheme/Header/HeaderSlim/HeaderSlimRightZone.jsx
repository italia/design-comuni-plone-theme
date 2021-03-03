/**
 * HeaderSlim component.
 * @module components/ItaliaTheme/Header/HeaderSlim
 */

import React from 'react';

import {
  ParentSiteMenu,
  LanguageSelector,
  ArLogin,
} from '@italia/components/ItaliaTheme';

const HeaderSlimRightZone = () => {
  return (
    <>
      <ParentSiteMenu />
      <LanguageSelector />
      <ArLogin />
    </>
  );
};

export default HeaderSlimRightZone;
