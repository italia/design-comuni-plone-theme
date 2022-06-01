/**
 * ParentSiteMenu component.
 * @module components/ItaliaTheme/Header/ParentSiteMenu
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { flattenToAppURL } from '@plone/volto/helpers';

const ParentSiteMenu = ({ designReactKit }) => {
  const dropdownMenu = useSelector(
    (state) => state.dropdownMenuNavItems?.result,
  );
  const subsite = useSelector((state) => state.subsite?.data);

  let menu = null;
  if (subsite) {
    const subsiteUrl = flattenToAppURL(subsite?.['@id'] ?? '');
    const url_split = subsiteUrl.split('/');

    let i = url_split.length - 1;
    while (i > 0) {
      let s = url_split.slice(0, i).join('/');
      s = s.length === 0 ? '/' : s;
      // eslint-disable-next-line no-loop-func
      dropdownMenu.forEach((m) => {
        if (m.rootPath === s) {
          menu = m;
          i = 0;
        }
      });
      i--;
    }
  }

  const { Nav, NavItem, NavLink } = designReactKit;

  return subsite && menu ? (
    <Nav vertical={false} className="parent-site-menu">
      {menu.items.map((navitem, id) => (
        <NavItem tag="li" key={id}>
          <NavLink
            to={flattenToAppURL(
              navitem.linkUrl?.[0]?.['@id'] ||
                navitem.showMoreLink?.[0]?.['@id'] ||
                navitem.navigationRoot?.[0]?.['@id'] ||
                '',
            )}
            tag={Link}
          >
            <span>{navitem.title}</span>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  ) : null;
};

export default injectLazyLibs(['designReactKit'])(ParentSiteMenu);
