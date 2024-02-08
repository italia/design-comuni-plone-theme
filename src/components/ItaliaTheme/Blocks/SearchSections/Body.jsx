/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { flatMapDeep } from 'lodash';
import { useHistory } from 'react-router-dom';
import { Button } from 'design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  Icon,
  BackgroundUser,
  SearchSectionsBackground,
} from 'design-comuni-plone-theme/components/ItaliaTheme';

const navigate = (text, sections) => {
  window.location.href =
    window.location.origin +
    `/search?SearchableText=${text}&path.query=${sections}`;
};

const messages = defineMessages({
  doSearch: {
    id: 'Search',
    defaultMessage: 'Cerca',
  },
});

const Body = ({ block, sections }) => {
  const history = useHistory();

  const [inputText, setInputText] = useState('');

  const searchFilters = () => {
    return flatMapDeep(block.sections ?? [], (section) => {
      let items = sections?.[section.value]?.items;
      return items ? Object.keys(items) : [];
    });
  };

  const handleClick = (link) => {
    history.push(flattenToAppURL(link['@id']));
  };

  const intl = useIntl();

  return (
    <div className="public-ui searchSections">
      {block?.image ? (
        <BackgroundUser image={block.image} />
      ) : (
        <SearchSectionsBackground />
      )}
      <div className="container">
        <div className="searchContainer d-flex w-100">
          {block.title && (
            <h2 className="search-section-title mb-4">{block.title}</h2>
          )}
          <div className="searchbar shadow-sm rounded d-flex w-100">
            <button
              className="rounded-start"
              onClick={(e) => navigate(inputText, searchFilters())}
              aria-label={intl.formatMessage(messages.doSearch)}
            >
              <Icon icon="it-search" padding={false} size="sm" />
            </button>
            <input
              className="inputSearch"
              type="text"
              placeholder={block.placeholder}
              onChange={(e) => setInputText(e.currentTarget.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' ? navigate(inputText, searchFilters()) : null
              }
              aria-label={block.placeholder}
            ></input>
          </div>
          <div className="buttonsContainer mt-2 d-flex">
            {block.links?.map((link, index) => {
              return (
                <Button
                  color="primary"
                  tag="button"
                  size="sm"
                  key={index}
                  onClick={() => handleClick(link)}
                >
                  {link.title}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Body.propTypes = {
  block: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Body;
