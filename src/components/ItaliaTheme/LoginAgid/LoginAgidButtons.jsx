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
import { Icon as BaseIcon } from '@plone/volto/components';
import { useLocation } from 'react-router-dom';
import config from '@plone/volto/registry';
import cieSVG from 'design-comuni-plone-theme/icons/entra_con_cie.svg';

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
  loginCie: {
    id: 'login_cie',
    defaultMessage: 'CIE',
  },
  loginCieDescription: {
    id: 'login_cie_description',
    defaultMessage: 'Log in with CIE.',
  },
  loginCieButton: {
    id: 'login_with_cie',
    defaultMessage: 'Login with CIE',
  },
  loginCieHelp: {
    id: 'login_cie_help',
    defaultMessage: 'How to activate CIE',
  },
});

// https://v5.reactrouter.com/web/example/query-parameters
function useQueryV5() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const SpidButton = ({ spidLoginUrl, qs, intl }) => (
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
);

const CieButton = ({ cieLoginUrl, qs, intl }) => (
  <div className="login-method">
    <h2>{intl.formatMessage(messages.loginCie)}</h2>
    <p className="description">
      {intl.formatMessage(messages.loginCieDescription)}
    </p>
    <div className="authorized-spid-login mb-4">
      <Button
        className="btn-icon"
        color="primary"
        href={`${cieLoginUrl}${qs}`}
        tag="a"
        data-element="personal-area-login"
        size="big"
        style={{
          padding: 0,
        }}
        title={intl.formatMessage(messages.loginCieButton)}
      >
        <BaseIcon name={cieSVG} style={{ width: '100%', height: '100%' }} />
      </Button>
      <div>
        <UniversalLink href="https://www.cartaidentita.interno.gov.it/">
          <small>{intl.formatMessage(messages.loginCieHelp)}</small>
        </UniversalLink>
      </div>
    </div>
  </div>
);

const ArButton = ({ arLoginUrl, intl }) => (
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
);

const LoginAgidButtons = ({ origin }) => {
  const intl = useIntl();
  const query = useQueryV5();
  const came_from = query.get('came_from') || origin;
  const qs = came_from ? `?came_from=${came_from}` : '';
  // "ar" => "Area Riservata"
  const arLoginUrl = config.settings.siteProperties?.arLoginUrl;
  const spidLoginUrl = __CLIENT__
    ? window.env.RAZZLE_SPID_LOGIN_URL
    : process.env.RAZZLE_SPID_LOGIN_URL;
  const cieLoginUrl = __CLIENT__
    ? window.env.RAZZLE_CIE_LOGIN_URL
    : process.env.RAZZLE_CIE_LOGIN_URL;

  return (
    <>
      {spidLoginUrl && (
        <SpidButton intl={intl} qs={qs} spidLoginUrl={spidLoginUrl} />
      )}
      {cieLoginUrl && (
        <CieButton intl={intl} qs={qs} cieLoginUrl={cieLoginUrl} />
      )}
      {!cieLoginUrl && !spidLoginUrl && arLoginUrl && (
        <ArButton intl={intl} qs={qs} arLoginUrl={arLoginUrl} />
      )}
    </>
  );
};

export default LoginAgidButtons;
