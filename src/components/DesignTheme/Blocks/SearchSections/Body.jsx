/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Icon, Button } from 'design-react-kit/dist/design-react-kit';
import { useIntl } from 'react-intl';
import moment from 'moment';
import cx from 'classnames';

const navigate = (text, serivices) => {
  window.location.href =
    window.location.origin +
    `/search?SearchableText=${text}&path.query=${serivices}`;
};

const Body = ({ block, sections }) => {
  const [inputText, setInputText] = useState(false);

  const searchFilters = () => {
    return block.sections.flatMap((section) => {
      return sections[section.value].items.map((x) => x.path);
    });
  };

  const intl = useIntl();
  moment.locale(intl.locale);
  return (
    <Row>
      <div className={cx('searchServices', 'public-ui')}>
        <div>
          <h2 className="text-white">{block.title}</h2>
        </div>
        <div className="searchContainer d-flex w-100">
          <div className="searchbar lightgrey-bg-c2 shadow-sm rounded d-flex w-100">
            <div>
              <input
                className="inputSearch lightgrey-bg-c2"
                type="text"
                placeholder={block.placeholder}
                onChange={(e) => setInputText(e.currentTarget.value)}
                onKeyDown={(e) =>
                  e.key === 'Enter'
                    ? navigate(inputText, searchFilters())
                    : null
                }
              ></input>
              <button className="rounded-right" onClick={(e) => navigate(inputText, searchFilters())}>
                <Icon
                  icon="it-search"
                  padding={false}
                  size="sm"
                  color="white"
                />
              </button>
            </div>
          </div>
          <div className={cx('buttonsContainer', 'mt-2', 'd-flex')}>
            {block.links?.map((link, index) => {
              return (
                <Button
                  outline
                  tag="button"
                  size="sm"
                  key={index}
                  onClick={() => (window.location = link['@id'])}
                >
                  {link.title}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </Row>
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
