/**
 * SearchBar view component.
 * @module components/theme/View/SearchBar
 */

import React, { useState } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';
import { Container } from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

const messages = defineMessages({
  search_faq: {
    id: 'faq_search',
    defaultMessage: 'Type in a keyword to find answers',
  },
  search_icon: {
    id: 'search_icon',
    defaultMessage: 'Search icon',
  },
});

/**
 * SearchBar view component class.
 * @function SearchBar
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const SearchBar = ({ searchableText, setSearchableText }) => {
  const intl = useIntl();
  const [focusSearch, setFocusSearch] = useState(false);

  return (
    <div className="section section-muted search-section">
      <Container className="px-4">
        <div className="form-group mb-0">
          <div className="input-group shadow">
            <div className="d-flex">
              <div className="input-group-text rounded-start">
                <Icon
                  icon="it-search"
                  padding={false}
                  size="sm"
                  style={{
                    ariaHidden: true,
                  }}
                  title={intl.formatMessage(messages.search_icon)}
                />
              </div>
            </div>
            <label
              className={cx('ms-5', {
                active: focusSearch || searchableText,
              })}
              htmlFor="search-field"
            >
              {intl.formatMessage(messages.search_faq)}...
            </label>
            <input
              className="form-control rounded-end"
              id="search-field"
              name="search-field"
              onBlur={(a, b) => {
                setFocusSearch(false);
              }}
              onFocus={() => {
                setFocusSearch(true);
              }}
              onChange={(e) => {
                setSearchableText(e?.target?.value || '');
              }}
              type="text"
              aria-controls="faq-search-results-region"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchBar;
