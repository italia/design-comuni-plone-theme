/**
 * ParentSiteMenu component.
 * @module components/ItaliaTheme/Header/ParentSiteMenu
 */

import React from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Nav, NavItem, NavLink } from 'design-react-kit/dist/design-react-kit';

const ParentSiteMenu = () => {
  const intl = useIntl();

  const dropdownMenu = useSelector(
    (state) => state.dropdownMenuNavItems?.result,
  );
  const subsite = useSelector(
    (state) => state.content?.subrequests?.subsite?.data,
  );

  let menu = null;
  if (subsite) {
    const subsiteUrl = flattenToAppURL(subsite['@id']);
    const url_split = subsiteUrl.split('/');
    let parentMenuPath = '/';
    let i = url_split.length - 1;
    while (i > 0) {
      let s = url_split.slice(0, i).join('/');
      s = s.length === 0 ? '/' : s;
      dropdownMenu.map((m) => {
        if (m.rootPath === s) {
          menu = m;
          i = 0;
        }
      });
      i--;
    }
  }

  return subsite && menu ? (
    <Nav vertical={false} className="parent-site-menu d-none d-md-flex">
      {menu.items.map((navitem, id) => (
        <NavItem tag="li" key={id}>
          <NavLink
            to={flattenToAppURL(
              navitem.linkUrl?.[0]?.['@id'] ||
                navitem.navigationRoot?.[0]?.['@id'],
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

export default connect(
  (state, props) => ({
    subsite: state.content.subrequests?.subsite?.data,
  }),
  {},
)(ParentSiteMenu);
