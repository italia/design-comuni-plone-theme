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
              <h2 className="no_toc">Nome del Comune</h2>
              <h3 className="no_toc d-none d-md-block">
                Uno dei tanti Comuni d'Italia
              </h3>
            </div>
          </Link>
        </div>
        <HeaderRightZone>
          <HeaderSocialsZone label={intl.formatMessage(messages.followUs)}>
            <ul>
              <li>
                <a
                  title="Facebook"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon color="" icon="it-facebook" padding={false} size="" />
                </a>
              </li>
              <li>
                <a
                  title="Github"
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon color="" icon="it-github" padding={false} size="" />
                </a>
              </li>
              <li>
                <a
                  title="Twitter"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon color="" icon="it-twitter" padding={false} size="" />
                </a>
              </li>
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
