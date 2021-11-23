/**
 * @module components/theme/Unauthorized/Unauthorized
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { withServerErrorCode } from '@plone/volto/helpers/Utils/Utils';
import { getBaseUrl, BodyClass } from '@plone/volto/helpers';
import {
  Icon,
  LoginButton,
  RemoveBodyClass,
} from '@italia/components/ItaliaTheme';

import config from '@plone/volto/registry';
/**
 * unauthorized function.
 * @function Unauthorized
 * @returns {string} Markup of the unauthorized page.
 */
const Unauthorized = () => {
  const error_message = useSelector((state) => state.apierror.message);
  let location = useLocation();

  return (
    <Container className="view-wrapper">
      <BodyClass className="public-ui" />
      <RemoveBodyClass className="cms-ui" />
      <h1>
        <FormattedMessage id="Unauthorized" defaultMessage="Unauthorized" />
      </h1>
      <h3>{error_message}</h3>
      <p className="description">
        <FormattedMessage
          id="You are trying to access a protected resource, please {login} first."
          defaultMessage="You are trying to access a protected resource, please {login} first."
          values={{
            login: (
              <>
                {config.settings.siteProperties.spidLogin && (
                  <>
                    <FormattedMessage
                      id="login_spid_message"
                      defaultMessage="login with Spid"
                    />
                    <div className="unauthorized-spid-login">
                      <LoginButton size="big">
                        <span className="rounded-icon">
                          <Icon
                            color="primary"
                            icon="it-user"
                            padding={false}
                            size=""
                          />
                        </span>
                        <span>
                          <FormattedMessage
                            id="login_with_spid"
                            defaultMessage="Login with Spid"
                          />
                        </span>
                      </LoginButton>
                    </div>
                    <FormattedMessage
                      id="login_admin_message"
                      defaultMessage="or login as an administrator"
                    />{' '}
                  </>
                )}
                <Link to={`${getBaseUrl(location.pathname)}/login`}>
                  <FormattedMessage id="log in" defaultMessage="log in" />
                </Link>
              </>
            ),
          }}
        />
      </p>
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
      </p>
      <p>
        <FormattedMessage id="Thank you." defaultMessage="Thank you." />
      </p>
    </Container>
  );
};

export default withServerErrorCode(401)(Unauthorized);
