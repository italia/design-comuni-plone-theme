/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Icon, Button } from 'design-react-kit/dist/design-react-kit';
import { useIntl } from 'react-intl';
import moment from 'moment';
import cx from 'classnames';
import { useSelector } from 'react-redux';

const navigate = (text, serivices) => {
  window.location.href =
    window.location.origin +
    `/search?SearchableText=${text}&path.query=${serivices}`;
};

const Body = ({ block }) => {
  const [inputText, setInputText] = useState(false);

  const searchFilters = useSelector((state) =>
    state?.searchFilters?.result?.sections?.servizi?.items
      .map((x) => x.path)
      .join('&path.query='),
  );
  const intl = useIntl();
  moment.locale(intl.locale);
  return (
    <Row>
      <div className={cx('searchServices', 'public-ui')}>
        <div>
          <h2 className="white">{block.title}</h2>
        </div>
        <div className="searchContainer">
          <div className="searchbar">
            <div className="flex1">
              <div>
                <input
                  className="inputSearch"
                  type="text"
                  placeholder="Ricerca Servizi"
                  onChange={(e) => setInputText(e.currentTarget.value)}
                  onKeyDown={(e) =>
                    e.key === 'Enter'
                      ? navigate(inputText, searchFilters)
                      : null
                  }
                ></input>
                <button onClick={(e) => navigate(inputText, searchFilters)}>
                  <Icon
                    icon="it-search"
                    padding={false}
                    size="sm"
                    color="white"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className={cx('buttonsContainer')}>
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
