/**
 * TertiaryMenu component.
 * @module components/ItaliaTheme/Header/HeaderSlim/TertiaryMenu
 */

import React from 'react';

import { UniversalLink } from '@plone/volto/components';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';

import { useIntl } from 'react-intl';
import config from '@plone/volto/registry';

const TertiaryMenu = ({ designReactKit }) => {
  const intl = useIntl();
  let menu = config.settings.siteProperties.headerslimTertiaryMenu;
  const items = menu[intl.locale];

  const { Nav, NavItem, NavLink } = designReactKit;

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

export default injectLazyLibs(['designReactKit'])(TertiaryMenu);
