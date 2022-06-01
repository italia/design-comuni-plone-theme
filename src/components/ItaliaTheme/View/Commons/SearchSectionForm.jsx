import { defineMessages, useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { flattenToAppURL } from '@plone/volto/helpers';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import { SearchUtils } from '@italia/components';
import { Icon } from '@italia/components/ItaliaTheme';

const { getSearchParamsURL } = SearchUtils;
/**
 * SearchSectionForm view component class.
 * @function SearchSectionForm
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  search: {
    id: 'search',
    defaultMessage: 'Cerca',
  },
  searchLabel: {
    id: 'searchContentIn',
    defaultMessage: 'Cerca contenuti in',
  },
});

const SearchSectionForm = ({ content, moment: Moment, designReactKit }) => {
  const intl = useIntl();
  const moment = Moment.default;
  moment.locale(intl.locale);

  const subsite = useSelector((state) => state.subsite?.data);
  const [searchableText, setSearchableText] = useState('');
  const doSearch = (e) => {
    if (!e || e.key === 'Enter') {
      if (__CLIENT__)
        window.location.href =
          window.location.origin +
          getSearchParamsURL(
            searchableText,
            {},
            {},
            {},
            {},
            null,
            null,
            null,
            subsite,
            intl.locale,
            false,
            moment,
          ) +
          '&custom_path=' +
          flattenToAppURL(content['@id']);
    }
  };

  const { Button } = designReactKit;

  return (
    <div className="form-group mt-5">
      <div className="input-group mb-3">
        <input
          id="search-page-text"
          type="text"
          value={searchableText}
          className="form-control"
          onChange={(e) => setSearchableText(e.target.value)}
          onKeyDown={doSearch}
          placeholder={`${intl.formatMessage(messages.searchLabel)} "${
            content.title
          }"`}
          aria-label={`${intl.formatMessage(messages.searchLabel)} "${
            content.title
          }"`}
          aria-describedby="search-page-button"
        />
        <div className="input-group-append">
          <Button
            color="link"
            onClick={() => doSearch()}
            title={intl.formatMessage(messages.search)}
            id="search-page-button"
            className="pr-2"
          >
            <Icon icon="it-search" aria-hidden={true} size="sm" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default injectLazyLibs(['moment', 'designReactKit'])(SearchSectionForm);

SearchSectionForm.propTypes = {
  params: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  }),
};
