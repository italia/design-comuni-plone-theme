/* CUSTOMIZATIONS:
  - Agid styling
  - added id to searchInput label to match aria-describedby tag
*/
import React, { useState } from 'react';
import { Button, Icon, Input, Label } from 'design-react-kit';
import { useIntl } from 'react-intl';
import { commonSearchBlockMessages } from 'design-comuni-plone-theme/helpers';

const SearchInput = (props) => {
  const {
    data,
    searchText,
    setSearchText,
    isEditMode,
    isLive,
    onTriggerSearch,
  } = props;
  const intl = useIntl();
  const clearSearch = () => {
    setSearchText('');
    onTriggerSearch('');
  };
  const [focused, setFocused] = useState(false);
  return (
    <>
      <span className="autocomplete-icon bg-transparent">
        <Icon icon="it-search" aria-hidden size="sm" />
      </span>
      <Label
        htmlFor={`${props.id}-searchtext`}
        className={focused ? 'active' : 'inactive'}
        id={`${props.id}-searchtextDescription`}
      >
        {intl.formatMessage(commonSearchBlockMessages.search)}
      </Label>
      <Input
        noWrapper
        disabled={isEditMode}
        id={`${props.id}-searchtext`}
        value={searchText}
        type="search"
        placeholder={
          focused || data.searchInputPrompt
            ? data.searchInputPrompt
            : intl.formatMessage(commonSearchBlockMessages.search)
        }
        onKeyPress={(event) => {
          if (isLive || event.key === 'Enter') onTriggerSearch(searchText);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={({ target }) => {
          setSearchText(target.value);
          if (isLive) {
            onTriggerSearch(target.value);
          }
        }}
        className="form-control autocomplete"
      />
      {searchText && (
        <button
          className="clear-icon bg-transparent"
          onClick={clearSearch}
          title={intl.formatMessage(commonSearchBlockMessages.clearSearch)}
          style={{ right: isLive ? 0 : 80 }}
        >
          <Icon
            icon="it-close"
            aria-label={intl.formatMessage(
              commonSearchBlockMessages.clearSearch,
            )}
            title={intl.formatMessage(commonSearchBlockMessages.clearSearch)}
            size="sm"
          />
        </button>
      )}

      {data.showSearchButton && (
        <div className="input-group-append">
          <Button
            color="primary"
            tag="button"
            title={
              data.searchButtonLabel ||
              intl.formatMessage(commonSearchBlockMessages.searchButtonText)
            }
            size="sm"
            onClick={() => onTriggerSearch(searchText)}
          >
            {data.searchButtonLabel ||
              intl.formatMessage(commonSearchBlockMessages.searchButtonText)}
          </Button>
        </div>
      )}
    </>
  );
};

export default SearchInput;
