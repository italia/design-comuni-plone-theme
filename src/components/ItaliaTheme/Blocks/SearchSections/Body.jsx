/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { Button } from 'design-react-kit/dist/design-react-kit';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Icon, SearchSectionsBackground } from '@italia/components/ItaliaTheme';

const navigate = (text, sections) => {
  window.location.href =
    window.location.origin +
    `/search?SearchableText=${text}&path.query=${sections}`;
};

const Body = ({ block, sections }) => {
  const history = useHistory();
  const [inputText, setInputText] = useState('');

  const searchFilters = () => {
    return block.sections.flatMap((section) => {
      let items = sections?.[section.value]?.items;
      return items ? Object.keys(items) : [];
    });
  };

  const handleClick = (link) => {
    history.push(flattenToAppURL(link['@id']));
  };

  const intl = useIntl();
  moment.locale(intl.locale);
  return (
    <div className="public-ui searchSections">
      <SearchSectionsBackground />
      <div className="container">
        <div className="searchContainer d-flex w-100">
          <h2 className="text-secondary mb-4">{block.title}</h2>
          <div className="searchbar lightgrey-bg-c2 shadow-sm rounded d-flex w-100">
            <input
              className="inputSearch lightgrey-bg-c2"
              type="text"
              placeholder={block.placeholder}
              onChange={(e) => setInputText(e.currentTarget.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' ? navigate(inputText, searchFilters()) : null
              }
            ></input>
            <button
              className="rounded-right"
              onClick={(e) => navigate(inputText, searchFilters())}
            >
              <Icon icon="it-search" padding={false} size="sm" color="white" />
            </button>
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
