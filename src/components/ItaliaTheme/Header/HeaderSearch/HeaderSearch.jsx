/**
 * HeaderSearch component.
 * @module components/Header/HeaderSearch
 */

import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { SearchModal } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  search: {
    id: 'Cerca',
    defaultMessage: 'Cerca',
  },
  searchLabel: {
    id: 'searchLabel',
    defaultMessage: 'Cerca nel sito',
  },
});

const HeaderSearch = () => {
  const intl = useIntl();
  const [showSearchModal, setShowSearchModal] = useState(false);

  return (
    <>
      <div
        className="it-search-wrapper"
        role="search"
        aria-label={intl.formatMessage(messages.searchLabel)}
      >
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
          href="/search"
          role="button"
        >
          <Icon icon="it-search" title={intl.formatMessage(messages.search)} />
        </a>
      </div>
      <SearchModal
        show={showSearchModal}
        closeModal={() => setShowSearchModal(false)}
      />
    </>
  );
};

export default HeaderSearch;
