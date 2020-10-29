/**
 * HeaderCenter component.
 * @module components/Header/HeaderCenter
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import {
  Header,
  HeaderContent,
  HeaderRightZone,
  Icon,
} from 'design-react-kit/dist/design-react-kit';

import { flattenToAppURL } from '@plone/volto/helpers';
import {
  SearchModal,
  Logo,
  SocialHeader,
  SubsiteSocialHeader,
} from '@italia/components/ItaliaTheme';
import { siteConfig } from '~/config';

const messages = defineMessages({
  search: {
    id: 'Cerca',
    defaultMessage: 'Cerca',
  },
});

const HeaderCenter = () => {
  const intl = useIntl();
  const [showSearchModal, setShowSearchModal] = useState(false);

  const subsite = useSelector(
    (state) => state.content?.subrequests?.subsite?.data,
  );

  return (
    <Header small={false} theme="" type="center">
      <HeaderContent>
        <div className="it-brand-wrapper">
          <Link to={subsite?.['@id'] ? flattenToAppURL(subsite['@id']) : '/'}>
            <Logo />
            <div className="it-brand-text">
              <h2 className="no_toc">
                {subsite?.title || siteConfig.properties.siteTitle}
              </h2>
              <h3 className="no_toc d-none d-md-block">
                {subsite?.description || siteConfig.properties.siteSubtitle}
              </h3>
            </div>
          </Link>
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
              onClick={() => setShowSearchModal(true)}
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
