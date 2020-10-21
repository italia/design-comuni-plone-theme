/**
 * HeaderCenter component.
 * @module components/Header/HeaderCenter
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import {
  Header,
  HeaderContent,
  HeaderRightZone,
  HeaderSocialsZone,
  Icon,
} from 'design-react-kit/dist/design-react-kit';

import { SearchModal } from '@italia/components/ItaliaTheme';
import { siteConfig } from '~/config';

const messages = defineMessages({
  followUs: {
    id: 'Seguici su',
    defaultMessage: 'Seguici su',
  },
  search: {
    id: 'Cerca',
    defaultMessage: 'Cerca',
  },
});

const HeaderCenter = () => {
  const intl = useIntl();
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <Header small={false} theme="" type="center">
      <HeaderContent>
        <div className="it-brand-wrapper">
          <Link to="/">
            <Icon color="" icon="it-pa" padding={false} size="" />
            <div className="it-brand-text">
              <h2 className="no_toc">{siteConfig.siteTitle}</h2>
              <h3 className="no_toc d-none d-md-block">
                {siteConfig.properties.siteSubtitle}
              </h3>
            </div>
          </Link>
        </div>
        <HeaderRightZone>
          <HeaderSocialsZone label={intl.formatMessage(messages.followUs)}>
            <ul>
              {siteConfig.socialSettings?.map((social, idx) => (
                <li key={idx}>
                  <a
                    title={social.title}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon color="" icon={social.icon} padding={false} size="" />
                  </a>
                </li>
              ))}
            </ul>
          </HeaderSocialsZone>
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
