/**
 * ArLogin component.
 * @module components/ItaliaTheme/Header/HeaderSlim/ArLogin
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import { Button } from 'design-react-kit/dist/design-react-kit';

import { siteConfig } from '~/config';

import { Icon } from '@italia/components/ItaliaTheme';

const messages = defineMessages({
  arLogin: {
    id: "Accedi all'area personale",
    defaultMessage: "Accedi all'area personale",
  },
});

const ArLogin = () => {
  const intl = useIntl();
  return siteConfig.properties.arLoginUrl ? (
    <Button
      className="btn-icon"
      color="primary"
      to={siteConfig.properties.arLoginUrl}
      icon={false}
      size="full"
      tag={Link}
    >
      <span className="rounded-icon">
        <Icon color="primary" icon="it-user" padding={false} size="" />
      </span>
      <span className="d-none d-lg-block">
        {intl.formatMessage(messages.arLogin)}
      </span>
    </Button>
  ) : null;
};

export default ArLogin;
