/**
 * Navigation components.
 * @module components/theme/Navigation/Navigation
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isEqual, isMatch } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { flattenToAppURL, getBaseUrl } from '@plone/volto/helpers';
import { getNavigation } from '@plone/volto/actions';
// import {
//   BITIcon,
//   it_burger,
//   it_close_circle,
// } from '@italia/components/ItaliaTheme/Icons';
import {
  Header,
  HeaderContent,
  HeaderToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Icon,
} from 'design-react-kit/dist/design-react-kit';
import { MegaMenu } from '@italia/components/ItaliaTheme';

const messages = defineMessages({
  menu_selected: {
    id: 'Menu selezionato',
    defaultMessage: 'Menu selezionato',
  },
  close: {
    id: 'close',
    defaultMessage: 'Chiudi',
  },
});

const argumentsItems = [
  { title: 'Ambiente', url: '/argomenti/ambiente' },
  { title: 'Cantieri in città', url: '/argomenti/cantieri-in-citta' },
  { title: 'Tutti gli argomenti...', url: '/argomenti', type: 'all' },
];

// const isSectionActive = (url, pathname) =>
//   (url === '' && pathname === '/') ||
//   (url !== '' && isMatch(pathname.split('/'), url.split('/')));

const isMenuActive = (url, pathname = '') =>
  (url === '' && (pathname === '/' || pathname === '')) ||
  (url !== '' && isMatch(pathname.split('/'), url.split('/')));

const Navigation = ({ pathname }) => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const intl = useIntl();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.navigation.items, isEqual);

  useEffect(() => {
    dispatch(getNavigation(getBaseUrl(pathname), 2));
  }, [dispatch, pathname]);

  return (
    <Header theme="" type="navbar">
      <HeaderContent expand="lg" megamenu>
        <HeaderToggler
          aria-controls="nav1"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setCollapseOpen(!collapseOpen)}
        >
          <Icon icon="it-burger" />
        </HeaderToggler>
        <Collapse
          header
          isOpen={collapseOpen}
          navbar
          onOverlayClick={() => setCollapseOpen(!collapseOpen)}
        >
          <div className="menu-wrapper">
            <Nav navbar>
              {items.map((item) => (
                <MegaMenu
                  item={item}
                  pathname={pathname}
                  key={item.url + 'mm'}
                />
              ))}
            </Nav>
            <Nav navbar className="navbar-secondary">
              {argumentsItems.map((item) => (
                <NavItem
                  tag="li"
                  active={isMenuActive(item.url, pathname)}
                  key={item.url}
                >
                  <NavLink
                    to={item.url === '' ? '/' : flattenToAppURL(item.url)}
                    tag={Link}
                    active={isMenuActive(item.url, pathname)}
                  >
                    <span
                      className={item.type === 'all' ? 'font-weight-bold' : ''}
                    >
                      {item.title}
                    </span>
                    {isMenuActive(item.url, pathname) && (
                      <span className="sr-only">
                        {intl.formatMessage(messages.menu_selected)}
                      </span>
                    )}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </div>
        </Collapse>
      </HeaderContent>
    </Header>
  );
};

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Navigation;
