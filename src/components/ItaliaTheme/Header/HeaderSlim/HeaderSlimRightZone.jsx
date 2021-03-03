/**
 * HeaderSlim component.
 * @module components/ItaliaTheme/Header/HeaderSlim
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import { Button } from 'design-react-kit/dist/design-react-kit';

import { siteConfig } from '~/config';

import {
  ParentSiteMenu,
  LanguageSelector,
  Icon,
} from '@italia/components/ItaliaTheme';

const messages = defineMessages({
  arLogin: {
    id: "Accedi all'area personale",
    defaultMessage: "Accedi all'area personale",
  },
});

const HeaderSlimRightZone = () => {
  const intl = useIntl();
  return (
    <>
      <ParentSiteMenu />
      <LanguageSelector />

      {siteConfig.properties.arLoginUrl && (
        <Button
          className="btn-icon"
          color="primary"
          to={siteConfig.properties.arLoginUrl}
          target="_blank"
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
      )}
    </>
  );
};

export default HeaderSlimRightZone;
