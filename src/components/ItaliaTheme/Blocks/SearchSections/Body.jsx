/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Icon, Button } from 'design-react-kit/dist/design-react-kit';
import { useIntl } from 'react-intl';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const navigate = (text, serivices) => {
  window.location.href =
    window.location.origin +
    `/search?SearchableText=${text}&path.query=${serivices}`;
};

const Body = ({ block, sections }) => {
  const history = useHistory();
  const [inputText, setInputText] = useState('');

  const searchFilters = () => {
    return block.sections.flatMap((section) => {
      return sections[section.value].items.map((x) => x.path);
    });
  };

  const handleClick = (link) => {
    history.push(link['@id']);
  };

  const intl = useIntl();
  moment.locale(intl.locale);
  return (
    <div className="public-ui searchSections">
      <div className="container">
        <div>
          <h2 className="text-white">{block.title}</h2>
        </div>
        <div className="searchContainer d-flex w-100">
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
