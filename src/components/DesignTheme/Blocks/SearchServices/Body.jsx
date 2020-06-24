/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
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

const Body = ({ content, pathname, block, isEditMode }) => {
  const searchFilters = useSelector((state) =>
    state?.searchFilters?.result?.sections?.servizi?.items
      .map((x) => x.path)
      .join('&path.query='),
  );
  const intl = useIntl();
  moment.locale(intl.locale);
  return (
    <Row>
      <div className={cx('searchServices', { 'public-ui': isEditMode })}>
        <div>
          <h3 className="white">{block.title}</h3>
        </div>
        <div className="searchContainer">
          <div className="searchbar">
            <div className="icon">
              <Icon color="" icon="it-search" padding={false} size="sm" />
            </div>
            <div className="flex1">
              <input
                className="inputSearch"
                type="text"
                placeholder="Ricerca Servizi"
                onKeyDown={(e) =>
                  e.key === 'Enter'
                    ? navigate(e.target.value, searchFilters)
                    : null
                }
              ></input>
            </div>
          </div>
          <div className="buttonsContainer">
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
  content: PropTypes.objectOf(PropTypes.any),
  pathname: PropTypes.string,
  isEditMode: PropTypes.bool,
};

export default Body;
