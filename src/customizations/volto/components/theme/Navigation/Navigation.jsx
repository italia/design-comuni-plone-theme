/**
 * Navigation components.
 * @module components/theme/Navigation/Navigation
 */

import React, { useEffect, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';

import { Header, HeaderContent, HeaderToggler, Nav } from 'design-react-kit';

import { flattenToAppURL } from '@plone/volto/helpers';

import { Collapse } from 'design-comuni-plone-theme/components';
import {
  MegaMenu,
  MenuSecondary,
  ParentSiteMenu,
  TertiaryMenu,
  Logo,
  Icon,
  SocialHeader,
  BrandText,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

import { getDropdownMenuNavitems, getItemsByPath } from 'volto-dropdownmenu';
import FocusLock from 'react-focus-lock';

const Navigation = ({ pathname }) => {
  const intl = useIntl();
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [focusTrapActive, setFocusTrapActive] = useState(false);

  const dispatch = useDispatch();

  const subsite = useSelector((state) => state.subsite?.data);
  const logoSubsite = subsite?.subsite_logo && (
    <figure className="icon">
      <img
        src={flattenToAppURL(subsite.subsite_logo.scales?.mini?.download)}
        alt="Logo"
      />
    </figure>
  );

  const items = useSelector((state) => state.dropdownMenuNavItems?.result);
  useEffect(() => {
    dispatch(getDropdownMenuNavitems());
  }, [dispatch]);

  const menu = getItemsByPath(items, pathname);

  const getAnchorTarget = (nodeElement) => {
    if (nodeElement.nodeName === 'A') {
      return nodeElement;
    } else if (nodeElement.parentElement?.nodeName === 'A') {
      return nodeElement.parentElement;
    } else {
      return null;
    }
  };

  useEffect(() => {
    const blocksClickListener = (e) => {
      const menuLinks = [
        ...(document?.querySelectorAll(
          '.menu-wrapper a:not([aria-haspopup]), .menu-wrapper .it-brand-wrapper a',
        ) ?? []),
      ];

      if (
        menuLinks?.length === 0 ||
        menuLinks?.indexOf(getAnchorTarget(e.target)) < 0
      ) {
        return;
      }

      setCollapseOpen(false);
      setFocusTrapActive(false);
    };

    document.body.addEventListener('click', blocksClickListener);

    return () =>
      document.body.removeEventListener('click', blocksClickListener);
  }, []);

  const closeButtonStyle = collapseOpen
    ? {
        display: 'block',
      }
    : { display: 'none' };

  return (
    <Header theme="" type="navbar">
      {menu?.length > 0 ? (
        <HeaderContent expand="lg" megamenu id="navigation">
          <HeaderToggler
            aria-controls="it-navigation-collapse"
            aria-expanded={collapseOpen}
            aria-label={intl.formatMessage(messages.toggleMenu, {
              action: collapseOpen
                ? intl.formatMessage(messages.toggleMenu_close)
                : intl.formatMessage(messages.toggleMenu_open),
            })}
            onClick={() => {
              setCollapseOpen(!collapseOpen);
              setFocusTrapActive(!focusTrapActive);
            }}
          >
            <Icon
              icon="it-burger"
              title={intl.formatMessage(messages.toggleNavigation)}
            />
          </HeaderToggler>
          <Collapse
            header
            isOpen={collapseOpen}
            navbar
            onOverlayClick={() => setCollapseOpen(!collapseOpen)}
            id="it-navigation-collapse"
            showCloseButton={false}
          >
            <FocusLock disabled={!focusTrapActive}>
              <div className="menu-wrapper">
                <div className="it-brand-wrapper" role="navigation">
                  <UniversalLink
                    href={
                      subsite?.['@id'] ? flattenToAppURL(subsite['@id']) : '/'
                    }
                    onClick={() => setCollapseOpen(false)}
                  >
                    {subsite?.subsite_logo ? logoSubsite : <Logo />}
                    <BrandText mobile={true} subsite={subsite} />
                  </UniversalLink>
                </div>
                {/* Main Menu */}
                <Nav data-element="main-navigation" navbar role="menubar">
                  {menu
                    ?.filter((item) => item.visible)
                    ?.map((item, index) => (
                      <MegaMenu
                        item={item}
                        pathname={pathname}
                        key={index + 'mm'}
                      />
                    ))}
                </Nav>

                {/* Secondary Menu */}
                <MenuSecondary pathname={pathname} />

                {/* Headerslim Menu - main site */}
                {!subsite && <TertiaryMenu />}

                {/* Social Links */}
                <SocialHeader />

                {/* Headerslim Menu - parent site (if subsite) */}
                {subsite && <ParentSiteMenu />}
              </div>
              <div className="close-div" style={closeButtonStyle}>
                <button
                  className="btn close-menu"
                  type="button"
                  title={intl.formatMessage(messages.CloseMenu)}
                  onClick={() => setCollapseOpen(!collapseOpen)}
                >
                  <Icon
                    color="white"
                    icon="it-close-big"
                    padding={false}
                    title={intl.formatMessage(messages.CloseMenu)}
                  />
                </button>
              </div>
            </FocusLock>
          </Collapse>
        </HeaderContent>
      ) : null}
    </Header>
  );
};

const messages = defineMessages({
  CloseMenu: {
    id: 'close-menu',
    defaultMessage: 'Chiudi menu',
  },
  toggleMenu: {
    id: 'toggle-menu',
    defaultMessage: '{action} il menu',
  },
  toggleMenu_open: {
    id: 'toggleMenu_open',
    defaultMessage: 'Apri',
  },
  toggleMenu_close: {
    id: 'toggleMenu_close',
    defaultMessage: 'Chiudi',
  },
});

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Navigation;
