/**
 * Navigation components.
 * @module components/theme/Navigation/Navigation
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getDropdownMenuNavitems } from '@italia/addons/volto-dropdownmenu';
import {
  Header,
  HeaderContent,
  HeaderToggler,
  Nav,
} from 'design-react-kit/dist/design-react-kit';
import { Collapse } from '@italia/components';
import {
  MegaMenu,
  MenuSecondary,
  Logo,
  Icon,
  SocialHeader,
  SubsiteSocialHeader,
} from '@italia/components/ItaliaTheme';
import { flattenToAppURL } from '@plone/volto/helpers';
import { siteConfig } from '~/config';

const Navigation = ({ pathname }) => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const dispatch = useDispatch();
  const subsite = useSelector((state) => state.subsite?.data);

  const items = useSelector((state) => state.dropdownMenuNavItems?.result);
  useEffect(() => {
    dispatch(getDropdownMenuNavitems());
  }, [dispatch]);

  const menu =
    items
      ?.filter((menu) =>
        (pathname?.length ? pathname : '/').match(new RegExp(menu.rootPath)),
      )
      .pop()?.items ?? [];

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
        <HeaderContent expand="lg" megamenu id="navigation">
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
              <div className="it-brand-wrapper">
                <Link
                  to={subsite?.['@id'] ? flattenToAppURL(subsite['@id']) : '/'}
                >
                  <Logo />
                  <div className="it-brand-text">
                    <h2 className="no_toc">
                      {subsite?.title || siteConfig.properties.siteTitle}
                    </h2>
                    <h3 className="no_toc">
                      {subsite?.description ||
                        siteConfig.properties.siteSubtitle}
                    </h3>
                  </div>
                </Link>
              </div>
              <Nav navbar rol="navigation">
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

              <MenuSecondary pathname={pathname} />

              {!subsite ? <SocialHeader /> : <SubsiteSocialHeader />}
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
