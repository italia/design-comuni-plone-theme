/* eslint-disable react-hooks/exhaustive-deps */
/**
 * HeaderLogin component.
 * @module components/ItaliaTheme/Header/HeaderSlim/HeaderLogin
 *
 * login button/dropdown for spid for top header
 *
 * nel caso di spid_login la url di login è impostata alla pagina intermedia
 * dove si può scegliere se loggarsi con spid o con utente plone/operatore
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import jwtDecode from 'jwt-decode';
import {
  Row,
  Col,
  DropdownMenu,
  DropdownToggle,
  LinkList,
  LinkListItem,
  UncontrolledDropdown,
} from 'design-react-kit';
import { getUser, logout, purgeMessages } from '@plone/volto/actions';
import config from '@plone/volto/registry';
import { BodyClass } from '@plone/volto/helpers';
import {
  Icon,
  UserLoggedMenu,
  LoginButton,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import { getBaseUrl } from '@plone/volto/helpers';
import { useLocation } from 'react-router-dom';

const messages = defineMessages({
  loginAreaPersonale: {
    id: "Accedi all'area personale",
    defaultMessage: "Accedi all'area personale",
  },
  Logout: {
    id: 'Logout',
    defaultMessage: 'Esci',
  },
});

const HeaderLogin = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const userId = useSelector((state) =>
    state.userSession.token ? jwtDecode(state.userSession.token).sub : null,
  );

  const userLogged = useSelector((state) => state.users.user);
  const userLoggedSt = useSelector((state) => state.users);

  useEffect(() => {
    if (!userLoggedSt?.get?.loading && userId) {
      dispatch(getUser(userId));
    }
  }, [userId]);

  const doLogout = () => {
    dispatch(logout());
    dispatch(purgeMessages());
  };

  const rolesBodyClasses = userLogged.roles?.length
    ? userLogged.roles.map((role) => `role-${role.toLowerCase()}`)
    : ['no-user-roles'];

  // BBB: per retrocompatibilità con il vecchio config arLoginUrl
  const arLoginUrl = config.settings.siteProperties?.arLoginUrl;
  const arLogoutUrl = config.settings.siteProperties?.arLogoutUrl;

  const spidLoginUrl = __CLIENT__
    ? window.env.RAZZLE_SPID_LOGIN_URL
    : process.env.RAZZLE_SPID_LOGIN_URL;

  const spidLogoutUrl = __CLIENT__
    ? window.env.RAZZLE_SPID_LOGOUT_URL
    : process.env.RAZZLE_SPID_LOGOUT_URL;

  const location = useLocation();

  return (
    <>
      <BodyClass className={rolesBodyClasses.join(' ')} />
      {spidLoginUrl || arLoginUrl ? (
        !userId ? (
          <LoginButton
            baseLoginUrl={
              spidLoginUrl
                ? `${getBaseUrl(location.pathname)}/login`
                : arLoginUrl
            }
          >
            <span className="rounded-icon">
              <Icon color="primary" icon="it-user" padding={false} size="" />
            </span>
            <span className="d-none d-lg-block">
              {intl.formatMessage(messages.loginAreaPersonale)}
            </span>
          </LoginButton>
        ) : (
          <>
            <UncontrolledDropdown nav tag="div">
              <DropdownToggle
                aria-haspopup
                caret
                color="secondary"
                nav
                className="btn-icon"
              >
                <span className="rounded-icon">
                  <Icon color="primary" icon="it-user" size="" />
                </span>
                <span className="d-none d-lg-block">
                  {userLogged.fullname || userLogged.username}
                </span>
                <Icon color="" icon="it-expand" padding={false} size="" />
              </DropdownToggle>
              <DropdownMenu flip tag="div">
                <Row tag="div">
                  <Col
                    size="12"
                    tag="div"
                    widths={['xs', 'sm', 'md', 'lg', 'xl']}
                  >
                    <LinkList tag="div">
                      <UserLoggedMenu userLogged={userLogged} />
                      <LinkListItem
                        href={spidLogoutUrl || arLogoutUrl}
                        title={intl.formatMessage(messages.Logout)}
                        tag="a"
                        onClick={() => {
                          if (!spidLogoutUrl && !arLogoutUrl) {
                            doLogout();
                          }
                        }}
                        className="logout"
                      >
                        <Icon color="" icon="sign-out-alt" size="sm" left />
                        <span>{intl.formatMessage(messages.Logout)}</span>
                      </LinkListItem>
                    </LinkList>
                  </Col>
                </Row>
              </DropdownMenu>
            </UncontrolledDropdown>
          </>
        )
      ) : null}
    </>
  );
};

export default HeaderLogin;
