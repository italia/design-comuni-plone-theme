/**
 * TertiaryMenu component.
 * @module components/ItaliaTheme/Header/HeaderSlim/TertiaryMenu
 */

import React from 'react';
import { Nav, NavItem, NavLink } from 'design-react-kit';
import { UniversalLink } from '@plone/volto/components';
import { useIntl } from 'react-intl';
import config from '@plone/volto/registry';

const TertiaryMenu = () => {
  const intl = useIntl();
  let menu = config.settings.siteProperties.headerslimTertiaryMenu;
  const items = menu[intl.locale];

  return items?.length > 0 ? (
    <Nav vertical={false} className="tertiary-menu">
      {items.map((navitem, id) => (
        <NavItem tag="li" key={id}>
          <NavLink href={navitem.url} tag={UniversalLink}>
            <span>{navitem.title}</span>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  ) : null;
};

export default TertiaryMenu;
