/**
 * MenuSecondary components.
 * @module components/ItaliaTheme/MenuSecondary
 */

import React from 'react';
import { isMatch } from 'lodash';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useIntl, defineMessages } from 'react-intl';

import { flattenToAppURL } from '@plone/volto/helpers';
import { Nav, NavItem, NavLink } from 'design-react-kit/dist/design-react-kit';

import { SubsiteMenuSecondary } from '@italia/components/ItaliaTheme';

const messages = defineMessages({
  menu_selected: {
    id: 'Menu selezionato',
    defaultMessage: 'Menu selezionato',
  },
});

const argumentsItems = [
  { title: 'Ambiente', url: '/argomenti/ambiente' },
  { title: 'Cantieri in città', url: '/argomenti/cantieri-in-citta' },
  { title: 'Tutti gli argomenti...', url: '/argomenti', type: 'all' },
];

const MenuSecondary = ({ pathname }) => {
  const intl = useIntl();

  const isMenuActive = (url, pathname = '') =>
    (url === '' && (pathname === '/' || pathname === '')) ||
    (url !== '' && isMatch(pathname.split('/'), url.split('/')));

  return (
    <Nav navbar className="navbar-secondary">
      {argumentsItems.map((item) => (
        <NavItem
          tag="li"
          active={isMenuActive(flattenToAppURL(item.url), pathname)}
          key={item.url}
        >
          <NavLink
            to={item.url === '' ? '/' : flattenToAppURL(item.url)}
            tag={Link}
            active={isMenuActive(flattenToAppURL(item.url), pathname)}
          >
            <span className={item.type === 'all' ? 'font-weight-bold' : ''}>
              {item.title}
            </span>
            {isMenuActive(flattenToAppURL(item.url), pathname) && (
              <span className="sr-only">
                {intl.formatMessage(messages.menu_selected)}
              </span>
            )}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

MenuSecondary.propTypes = {};

export default MenuSecondary;
