/**
 * TertiaryMenu component.
 * @module components/ItaliaTheme/Header/HeaderSlim/TertiaryMenu
 */

import React, { useEffect } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Nav, NavItem, NavLink } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers';
import { getSiteProperty } from 'design-comuni-plone-theme/helpers';
import { getSlimHeader, getItemsByPath } from 'volto-slimheader';

const TertiaryMenu = () => {
  const intl = useIntl();
  const pathname = useLocation().pathname;
  const dispatch = useDispatch();

  const slimHeader = useSelector((state) => state.slimHeader?.result);
  const slimHeaderItems = getItemsByPath(slimHeader, pathname)
    ?.filter((item) => item.visible)
    .map((item) => {
      return {
        url: item.href || flattenToAppURL(item.linkUrl?.[0]?.['@id']) || '/',
        title: item.title,
        inEvidence: item.inEvidence,
      };
    });

  const staticMenu =
    getSiteProperty('headerslimTertiaryMenu', intl.locale) ?? [];

  useEffect(() => {
    dispatch(getSlimHeader());
  }, [dispatch]);

  const items = slimHeaderItems?.length > 0 ? slimHeaderItems : staticMenu;

  return items?.length > 0 ? (
    <Nav vertical={false} className="tertiary-menu">
      {items.map((navitem, id) => (
        <NavItem
          tag="li"
          key={id}
          className={cx('', { 'in-evidence': navitem.inEvidence })}
        >
          <NavLink href={navitem.url} tag={UniversalLink}>
            <span>{navitem.title}</span>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  ) : null;
};

export default TertiaryMenu;
