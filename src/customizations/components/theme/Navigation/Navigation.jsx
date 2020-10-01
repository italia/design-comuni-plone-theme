/**
 * Navigation components.
 * @module components/theme/Navigation/Navigation
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isMatch } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import { getDropdownMenuNavitems } from '@italia/addons/volto-dropdownmenu/actions';
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

const isMenuActive = (url, pathname = '') =>
  (url === '' && (pathname === '/' || pathname === '')) ||
  (url !== '' && isMatch(pathname.split('/'), url.split('/')));

const Navigation = ({ pathname }) => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const intl = useIntl();
  const dispatch = useDispatch();

  const items = useSelector(state => state.dropdownMenuNavItems?.result);
  useEffect(() => {
    dispatch(getDropdownMenuNavitems());
  }, [dispatch]);

  const menu =
    items
      .filter(menu =>
        (pathname?.length ? pathname : '/').match(new RegExp(menu.rootPath)),
      )
      .pop()?.items ?? [];

  const getAnchorTarget = nodeElement => {
    if (nodeElement.nodeName === 'A') {
      return nodeElement;
    } else if (nodeElement.parentElement?.nodeName === 'A') {
      return nodeElement.parentElement;
    } else {
      return null;
    }
  };

  useEffect(() => {
    const blocksClickListener = e => {
      const menuLinks = [
        ...document.querySelectorAll('.menu-wrapper a:not([aria-haspopup])'),
      ];

      if (
        menuLinks?.length === 0 ||
        menuLinks?.indexOf(getAnchorTarget(e.target)) < 0
      ) {
        return;
      }

      setCollapseOpen(false);
    };

    document.body.addEventListener('click', blocksClickListener);

    return () =>
      document.body.removeEventListener('click', blocksClickListener);
  }, []);

  return (
    <Header theme="" type="navbar">
      {menu?.length > 0 ? (
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
                {menu
                  ?.filter(item => item.visible)
                  ?.map((item, index) => (
                    <MegaMenu
                      item={item}
                      pathname={pathname}
                      key={index + 'mm'}
                    />
                  ))}
              </Nav>
              <Nav navbar className="navbar-secondary">
                {argumentsItems.map(item => (
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
                      <span
                        className={
                          item.type === 'all' ? 'font-weight-bold' : ''
                        }
                      >
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
            </div>
          </Collapse>
        </HeaderContent>
      ) : null}
    </Header>
  );
};

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Navigation;
