/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Icon, Button } from 'design-react-kit/dist/design-react-kit';
import { useIntl } from 'react-intl';
import moment from 'moment';
import cx from 'classnames';

const navigate = (text) => {
  window.location.href =
    window.location.origin +
    `/search?SearchableText=${text}&path.query=%2FPlone%2Fservizi%2Fagricoltura&path.query=%2FPlone%2Fservizi%2Fambiente&path.query=%2FPlone%2Fservizi%2Fanagrafe-e-stato-civile&path.query=%2FPlone%2Fservizi%2Fappalti-pubblici&path.query=%2FPlone%2Fservizi%2Fattivit-produttive-e-commercio&path.query=%2FPlone%2Fservizi%2Fautorizzazioni&path.query=%2FPlone%2Fservizi%2Fcatasto-e-urbanistica&path.query=%2FPlone%2Fservizi%2Fcultura-e-tempo-libero&path.query=%2FPlone%2Fservizi%2Feducazione-e-formazione&path.query=%2FPlone%2Fservizi%2Fgiustizia-e-sicurezza-pubblica&path.query=%2FPlone%2Fservizi%2Fmobilit-e-trasporti&path.query=%2FPlone%2Fservizi%2Fsalute-benessere-e-assistenza&path.query=%2FPlone%2Fservizi%2Ftributi-e-finanze&path.query=%2FPlone%2Fservizi%2Fturismo&path.query=%2FPlone%2Fservizi%2Fvita-lavorativa`;
};

const Body = ({ content, pathname, block, isEditMode }) => {
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
                  e.key === 'Enter' ? navigate(e.target.value) : null
                }
              ></input>
            </div>
          </div>
          <div className="buttonsContainer">
            {block.links?.map((link, index) => {
              return (
                <Button
                  icon={false}
                  outline
                  tag="button"
                  size="sm"
                  key={index}
                  onClick={() => (window.location = link.url)}
                >
                  {link.desc}
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
