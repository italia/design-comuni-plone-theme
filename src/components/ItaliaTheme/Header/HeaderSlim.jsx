/**
 * HeaderSlim component.
 * @module components/ItaliaTheme/Header/HeaderSlim
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
// import { BITIcon, it_user } from '@italia/components/ItaliaTheme/Icons';
import {
  Button,
  Header,
  HeaderBrand,
  HeaderContent,
  HeaderRightZone,
  Icon,
} from 'design-react-kit/dist/design-react-kit';

import { LanguageSelector } from '@italia/components/ItaliaTheme';

const messages = defineMessages({
  arLogin: {
    id: "Accedi all'area personale",
    defaultMessage: "Accedi all'area personale",
  },
});

const HeaderSlim = () => {
  const intl = useIntl();

  return (
    <Header small={false} theme="" type="slim">
      <HeaderContent>
        <HeaderBrand responsive tag={Link} to="/">
          Nome della Regione
        </HeaderBrand>
        <HeaderRightZone>
          <LanguageSelector />
          <Button
            className="btn-icon"
            color="primary"
            to="#"
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
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

export default HeaderSlim;
