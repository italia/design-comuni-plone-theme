/**
 * @module components/theme/Unauthorized/Unauthorized
 */

import { Button } from 'design-react-kit';
import React from 'react';
import { FormattedMessage, defineMessages, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col, Container } from 'design-react-kit';
import { withServerErrorCode } from '@plone/volto/helpers/Utils/Utils';
import { BodyClass } from '@plone/volto/helpers';
import { useLocation } from 'react-router-dom';
import { getBaseUrl } from '@plone/volto/helpers';
import config from '@plone/volto/registry';
import { LoginAgidButtons } from 'design-comuni-plone-theme/components/ItaliaTheme';

/**
 * unauthorized function.
 * @function Unauthorized
 * @returns {string} Markup of the unauthorized page.
 */

const messages = defineMessages({
  unauthorizedDescription: {
    id: 'unauthorized_description',
    defaultMessage:
      'You are trying to access a protected resource, please login first.',
  },
  loginOther: {
    id: 'login_agid_other',
    defaultMessage: 'Other users',
  },
  loginOtherDescription: {
    id: 'login_agid_other_description',
    defaultMessage: 'Alternatively you can use these methods.',
  },
  loginPloneUser: {
    id: 'login_plone_user',
    defaultMessage: 'Log in as employee',
  },
});

const Unauthorized = (props) => {
  const intl = useIntl();
  const location = useLocation();
  const error_message = useSelector((state) => state.apierror?.message);
  const spidLoginUrl = __CLIENT__
    ? window.env.RAZZLE_SPID_LOGIN_URL
    : process.env.RAZZLE_SPID_LOGIN_URL;
  // BBB: per retrocompatibilità con il vecchio config arLoginUrl
  const spidLogin = config.settings.siteProperties?.spidLogin;
  const came_from = `${getBaseUrl(location.pathname)}${location.search}`;

  return (
    <div id="unauthorized-agid" className="view-wrapper">
      <BodyClass className="public-ui" />
      <BodyClass className="cms-ui" remove={true} />

      <Container className="view-wrapper py-5">
        {spidLoginUrl || spidLogin ? (
          <>
            <Row className="view-container">
              <Col xs={12} lg={{ size: 10, offset: 1 }}>
                <h1>
                  <FormattedMessage
                    id="Unauthorized"
                    defaultMessage="Unauthorized"
                  />
                </h1>
                <p className="description">
                  <FormattedMessage {...messages.unauthorizedDescription} />
                </p>
              </Col>
            </Row>
            <hr className="d-none d-lg-block mt-0 mb-4" />
            <Row className="py-4">
              <Col xs={12} lg={{ size: 8, offset: 2 }}>
                <LoginAgidButtons origin={getBaseUrl(location.pathname)} />
                <div className="login-method">
                  <h3>{intl.formatMessage(messages.loginOther)}</h3>
                  <p className="description">
                    {intl.formatMessage(messages.loginOtherDescription)}
                  </p>
                  <div className="unauthorized-spid-login">
                    <Button
                      color="primary"
                      outline
                      href={`/login?${new URLSearchParams({
                        login_operatore: 1,
                        return_url: came_from,
                      })}`}
                      tag="button"
                    >
                      <span>{intl.formatMessage(messages.loginPloneUser)}</span>
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <Row className="view-container">
            <Col xs={12} lg={{ size: 10, offset: 1 }}>
              <h1>
                <FormattedMessage
                  id="Unauthorized"
                  defaultMessage="Unauthorized"
                />
              </h1>
              <h3>{error_message}</h3>
              <p className="description">
                <FormattedMessage
                  id="You are trying to access a protected resource, please {login} first."
                  defaultMessage="You are trying to access a protected resource, please {login} first."
                  values={{
                    login: (
                      <Link
                        to={`/login?${new URLSearchParams({
                          login_operatore: 1,
                          return_url: came_from,
                        })}`}
                      >
                        <FormattedMessage id="log in" defaultMessage="log in" />
                      </Link>
                    ),
                  }}
                />
              </p>
            </Col>
          </Row>
        )}
        <Row>
          <Col xs={12} lg={{ size: 10, offset: 1 }}>
            {/*
            Rimosso perchè la form di contatto è stata disabilitata
            <p>
              <FormattedMessage
                id="If you are certain you have the correct web address but are encountering an error, please contact the {site_admin}."
                defaultMessage="If you are certain you have the correct web address but are encountering an error, please contact the {site_admin}."
                values={{
                  site_admin: (
                    <Link to="/contact-form">
                      <FormattedMessage
                        id="Site Administration"
                        defaultMessage="Site Administration"
                      />
                    </Link>
                  ),
                }}
              />
            </p> */}
            <p>
              <FormattedMessage id="Thank you." defaultMessage="Thank you." />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default withServerErrorCode(401)(Unauthorized);
