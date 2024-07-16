/**
 * ParentSiteMenu component.
 * @module components/ItaliaTheme/Header/ParentSiteMenu
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Nav, NavItem, NavLink } from 'design-react-kit';
import { useHomePath } from 'design-comuni-plone-theme/helpers';

const ParentSiteMenu = () => {
  const dropdownMenu = useSelector(
    (state) => state.dropdownMenuNavItems?.result,
  );
  const subsite = useSelector((state) => state.subsite?.data);
  const homepath = useHomePath();

  let menu = null;
  if (subsite) {
    const subsiteUrl = flattenToAppURL(subsite?.['@id'] ?? '');
    const url_split = subsiteUrl.split('/');

    let i = url_split.length - 1;
    while (i > 0) {
      let s = url_split.slice(0, i).join('/');
      s = s.length === 0 ? homepath : s;
      // eslint-disable-next-line no-loop-func
      dropdownMenu.forEach((m) => {
        if (m.rootPath === s) {
          // Filter non visible dropdown menu entries
          menu = { ...m, items: m.items.filter((mi) => mi.visible) };
          i = 0;
        }
      });
      i--;
    }
  }

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
            <span dangerouslySetInnerHTML={{ __html: navitem.title }}></span>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  ) : null;
};

export default ParentSiteMenu;
