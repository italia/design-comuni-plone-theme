/**
 * HeaderCenter component.
 * @module components/Header/HeaderCenter
 */

import React, { useState } from 'react';
import { UniversalLink } from '@plone/volto/components';
import { useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import {
  Header,
  HeaderContent,
  HeaderRightZone,
} from 'design-react-kit/dist/design-react-kit';
import { Icon } from '@italia/components/ItaliaTheme';

import { flattenToAppURL } from '@plone/volto/helpers';
import {
  SearchModal,
  Logo,
  SocialHeader,
  SubsiteSocialHeader,
} from '@italia/components/ItaliaTheme';
import config from '@plone/volto/registry';

const messages = defineMessages({
  search: {
    id: 'Cerca',
    defaultMessage: 'Cerca',
  },
});

const HeaderCenter = () => {
  const intl = useIntl();
  const [showSearchModal, setShowSearchModal] = useState(false);

  const subsite = useSelector((state) => state.subsite?.data);

  return (
    <Header small={false} theme="" type="center">
      <HeaderContent>
        <div className="it-brand-wrapper">
          <UniversalLink
            href={subsite?.['@id'] ? flattenToAppURL(subsite['@id']) : '/'}
          >
            <Logo />
            <div className="it-brand-text">
              <h2 className="no_toc">
                {subsite?.title || config.settings.siteProperties.siteTitle}
              </h2>
              <h3 className="no_toc d-none d-md-block">
                {subsite?.description ||
                  config.settings.siteProperties.siteSubtitle}
              </h3>
            </div>
          </UniversalLink>
        </div>
        <HeaderRightZone>
          {!subsite ? <SocialHeader /> : <SubsiteSocialHeader />}

          <div className="it-search-wrapper">
            <span className="d-none d-md-block">
              {intl.formatMessage(messages.search)}
            </span>
            <a
              className="search-link rounded-icon"
              aria-label={intl.formatMessage(messages.search)}
              onClick={(e) => {
                e.preventDefault();
                setShowSearchModal(true);
              }}
              href="#search"
            >
              <Icon icon="it-search" />
            </a>
          </div>
          <SearchModal
            show={showSearchModal}
            closeModal={() => setShowSearchModal(false)}
          />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

export default HeaderCenter;
