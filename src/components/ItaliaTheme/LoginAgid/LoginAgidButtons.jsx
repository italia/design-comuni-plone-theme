/**
 * Login container.
 * @module components/theme/Login/Login
 *
 * utilizzata nella pagina /login e nelle pagine Unauthorized
 *
 */

import React from 'react';
import { Button } from 'design-react-kit';
import { defineMessages, useIntl } from 'react-intl';
import { UniversalLink } from '@plone/volto/components';
import {
  Icon,
  LoginButton,
} from 'design-comuni-plone-theme/components/ItaliaTheme';
import { useLocation } from 'react-router-dom';
import config from '@plone/volto/registry';

const messages = defineMessages({
  loginSpid: {
    id: 'login_spid',
    defaultMessage: 'SPID',
  },
  loginSpidDescription: {
    id: 'login_spid_description',
    defaultMessage: 'Log in with SPID, the public digital identity system.',
  },
  loginSpidButton: {
    id: 'login_with_spid',
    defaultMessage: 'Login with SPID',
  },
  loginSpidHelp: {
    id: 'login_spid_help',
    defaultMessage: 'How to activate SPID',
  },
});

// https://v5.reactrouter.com/web/example/query-parameters
function useQueryV5() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const LoginAgidButtons = ({ origin }) => {
  const intl = useIntl();
  const query = useQueryV5();
  const came_from = query.get('came_from') || origin;
  const qs = came_from ? `?came_from=${came_from}` : '';
  const arLoginUrl = config.settings.siteProperties?.arLoginUrl;
  const spidLoginUrl = __CLIENT__
    ? window.env.RAZZLE_SPID_LOGIN_URL
    : process.env.RAZZLE_SPID_LOGIN_URL;

  return spidLoginUrl ? (
    <div className="login-method">
      <h2>{intl.formatMessage(messages.loginSpid)}</h2>
      <p className="description">
        {intl.formatMessage(messages.loginSpidDescription)}
      </p>
      <div className="authorized-spid-login mb-4">
        <Button
          className="btn-icon"
          color="primary"
          href={`${spidLoginUrl}${qs}`}
          tag="a"
          data-element="personal-area-login"
          size="big"
        >
          <span className="rounded-icon">
            <Icon color="primary" icon="it-user" padding={false} size="" />
          </span>
          <span>{intl.formatMessage(messages.loginSpidButton)}</span>
        </Button>
        <div>
          <UniversalLink href="https://www.spid.gov.it/cos-e-spid/come-attivare-spid">
            <small>{intl.formatMessage(messages.loginSpidHelp)}</small>
          </UniversalLink>
        </div>
      </div>
    </div>
  ) : arLoginUrl ? (
    <div className="login-method">
      <h2>{intl.formatMessage(messages.loginSpid)}</h2>
      <p className="description">
        {intl.formatMessage(messages.loginSpidDescription)}
      </p>
      <div className="authorized-spid-login mb-4">
        <LoginButton baseLoginUrl={arLoginUrl}>
          <span className="rounded-icon">
            <Icon color="primary" icon="it-user" padding={false} size="" />
          </span>
          <span className="d-none d-lg-block">
            {intl.formatMessage(messages.loginSpidButton)}
          </span>
        </LoginButton>
      </div>
    </div>
  ) : null;
};

export default LoginAgidButtons;
