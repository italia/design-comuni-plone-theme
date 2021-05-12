/* eslint-disable react-hooks/exhaustive-deps */
/**
 * ArLogin component.
 * @module components/ItaliaTheme/Header/HeaderSlim/ArLogin
 */

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import jwtDecode from 'jwt-decode';
import {
  Button,
  Row,
  Col,
  DropdownMenu,
  DropdownToggle,
  LinkList,
  LinkListItem,
  UncontrolledDropdown,
} from 'design-react-kit/dist/design-react-kit';

import { getUser, logout, purgeMessages } from '@plone/volto/actions';

import { BodyClass } from '@plone/volto/helpers';

import { Icon, UserLoggedMenu } from '@italia/components/ItaliaTheme';

import config from '@plone/volto/registry';

const messages = defineMessages({
  arLogin: {
    id: "Accedi all'area personale",
    defaultMessage: "Accedi all'area personale",
  },
  arLogout: {
    id: 'arLogout',
    defaultMessage: 'Esci',
  },
});

const ArLogin = () => {
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

  let rolesBodyClasses = [];
  // eslint-disable-next-line no-unused-expressions
  userLogged?.roles?.forEach((role) => {
    rolesBodyClasses.push(`role-${role.toLowerCase()}`);
  });

  if (!userLogged?.roles || userLogged?.roles?.length === 0) {
    rolesBodyClasses.push('no-user-roles');
  }

  const isPublicUser = userLogged?.roles?.length === 0;

  return config.settings.siteProperties.arLoginUrl ? (
    <>
      {!userId || !isPublicUser ? (
        // not logged
        <Button
          className="btn-icon"
          color="primary"
          href={config.settings.siteProperties.arLoginUrl}
          icon={false}
          size="full"
          tag="a"
        >
          <span className="rounded-icon">
            <Icon color="primary" icon="it-user" padding={false} size="" />
          </span>
          <span className="d-none d-lg-block">
            {intl.formatMessage(messages.arLogin)}
          </span>
        </Button>
      ) : (
        // logged
        <>
          {/* add user roles classes to body */}
          <BodyClass className={rolesBodyClasses.join(' ')} />

          {/* dropdown */}
          <UncontrolledDropdown nav tag="div">
            <DropdownToggle
              aria-haspopup
              caret
              color="secondary"
              nav
              className="btn-icon"
            >
              <span class="rounded-icon">
                <Icon color="primary" icon="it-user" size="" />
              </span>
              <span class="d-none d-lg-block">
                {userLogged.fullname
                  ? userLogged.fullname
                  : userLogged.username}
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
                    <UserLoggedMenu />
                    <LinkListItem divider tag="a" />
                    <LinkListItem
                      href={config.settings.siteProperties.arLogoutUrl || '/'}
                      title={intl.formatMessage(messages.arLogout)}
                      tag="a"
                      onClick={() => {
                        if (!config.settings.siteProperties.arLogoutUrl) {
                          doLogout();
                        }
                      }}
                      className="logout"
                    >
                      <Icon color="" icon="sign-out-alt" size="sm" left />
                      <span>{intl.formatMessage(messages.arLogout)}</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </UncontrolledDropdown>
        </>
      )}
    </>
  ) : null;
};

export default ArLogin;
