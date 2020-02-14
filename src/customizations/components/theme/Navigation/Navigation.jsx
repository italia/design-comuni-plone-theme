/**
 * Navigation components.
 * @module components/theme/Navigation/Navigation
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { isEqual, isMatch } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { getBaseUrl } from '@plone/volto/helpers';
import { getNavigation } from '@plone/volto/actions';
// import {
//   BITIcon,
//   it_burger,
//   it_close_circle,
// } from '@design/components/DesignTheme/Icons';
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
import { MegaMenu } from '@design/components/DesignTheme';

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
  { title: 'Argomento 1', url: '/argomenti/argomento-1' },
  { title: 'Argomento 2', url: '/argomenti/argomento-2' },
  { title: 'Tutti gli argomenti...', url: '/argomenti', type: 'all' },
];

// const isSectionActive = (url, pathname) =>
//   (url === '' && pathname === '/') ||
//   (url !== '' && isMatch(pathname.split('/'), url.split('/')));

const isMenuActive = (url, pathname = '') =>
  (url === '' && (pathname === '/' || pathname === '')) ||
  (url !== '' && isMatch(pathname.split('/'), url.split('/')));

const Navigation = ({ pathname }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const items = useSelector(state => state.navigation.items, isEqual);

  useEffect(() => {
    dispatch(getNavigation(getBaseUrl(pathname), 2));
  }, [dispatch, pathname]);

  return (
    // <Navbar expand="lg" className="has-megamenu">
    //   <Navbar.Toggle
    //     aria-controls="nav10"
    //     expanded="false"
    //     className="custom-navbar-toggler"
    //   >
    //     <BITIcon name={it_burger} />
    //   </Navbar.Toggle>
    //   <Navbar.Collapse
    //     id="nav10"
    //     bsPrefix="navbar-collapsable"
    //     dimension="width"
    //   >
    //     <Navbar.Toggle as="div" aria-controls="nav10" bsPrefix="overlay" />
    //     <div className="close-div sr-only">
    //       <Navbar.Toggle
    //         as="button"
    //         aria-controls="nav10"
    //         bsPrefix="btn"
    //         className="close-menu"
    //       >
    //         <span className="it-close" />
    //         <BITIcon name={it_close_circle} />
    //         <span className="sr-only">
    //           {intl.formatMessage(messages.close)}
    //         </span>
    //       </Navbar.Toggle>
    //     </div>

    //     <div className="menu-wrapper">
    //       <div className="d-md-none it-brand-wrapper">
    //         <Brand />
    //       </div>
    //       <Nav as="ul">
    //         {items.map(item => (
    //           <MegaMenu item={item} pathname={pathname} key={item.url + 'mm'} />
    //         ))}
    //       </Nav>

    //       {/*Arguments menu*/}
    //       <Nav as="ul" className="navbar-secondary">
    //         {argumentsItems.map(item => (
    //           <Nav.Item
    //             as="li"
    //             className={isMenuActive(item.url) ? 'active' : ''}
    //             key={item.url}
    //           >
    //             <Nav.Link
    //               href={item.url === '' ? '/' : item.url}
    //               eventKey={item.url}
    //               active={isMenuActive(item.url)}
    //             >
    //               <span
    //                 className={item.type == 'all' ? 'font-weight-bold' : ''}
    //               >
    //                 {item.title}
    //               </span>
    //               {isMenuActive(item.url) ? (
    //                 <span className="sr-only">
    //                   {intl.formatMessage(messages.menu_selected)}
    //                 </span>
    //               ) : null}
    //             </Nav.Link>
    //           </Nav.Item>
    //         ))}
    //       </Nav>
    //     </div>
    //   </Navbar.Collapse>
    // </Navbar>
    <Header small={false} theme="" type="navbar">
      <HeaderContent expand="lg" megamenu>
        <HeaderToggler
          aria-controls="nav1"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={function noRefCheck() {}}
        >
          <Icon color="" icon="it-burger" padding={false} size="" />
        </HeaderToggler>
        <Collapse
          appear={false}
          enter
          exit
          header
          in={false}
          isOpen={false}
          mountOnEnter={false}
          navbar
          onEnter={function noRefCheck() {}}
          onEntered={function noRefCheck() {}}
          onEntering={function noRefCheck() {}}
          onExit={function noRefCheck() {}}
          onExited={function noRefCheck() {}}
          onExiting={function noRefCheck() {}}
          onOverlayClick={function noRefCheck() {}}
          tag="div"
          timeout={350}
          unmountOnExit={false}
        >
          <div className="menu-wrapper">
            <Nav navbar tag="ul" vertical={false}>
              {items.map(item => (
                <MegaMenu
                  item={item}
                  pathname={pathname}
                  key={item.url + 'mm'}
                />
              ))}
            </Nav>
            <Nav tag="ul" className="navbar-secondary">
              {argumentsItems.map(item => (
                <NavItem
                  tag="li"
                  active={isMenuActive(item.url, pathname)}
                  key={item.url}
                >
                  <NavLink
                    to={item.url === '' ? '/' : item.url}
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
