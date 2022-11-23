/**
 * HeaderSlim component.
 * @module components/ItaliaTheme/Header/HeaderSlim
 */

import React from 'react';
import { useSelector } from 'react-redux';

import {
  ParentSiteMenu,
  LanguageSelector,
  ArLogin,
  TertiaryMenu,
} from 'design-volto-theme/components/ItaliaTheme';

const HeaderSlimRightZone = () => {
  const subsite = useSelector((state) => state.subsite?.data);
  return (
    <>
      <ParentSiteMenu />
      {!subsite && <TertiaryMenu />}
      <LanguageSelector />
      <ArLogin />
    </>
  );
};

export default HeaderSlimRightZone;
