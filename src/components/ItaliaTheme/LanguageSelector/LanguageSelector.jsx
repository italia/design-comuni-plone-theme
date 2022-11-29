/* eslint-disable react-hooks/exhaustive-deps */
/**
 * LanguageSelector component.
 * @module components/ItaliaTheme/LanguageSelector/LanguageSelector
 */

import React from 'react';
import PropTypes from 'prop-types';
import { find, map } from 'lodash';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import { Helmet, flattenToAppURL, langmap } from '@plone/volto/helpers';
import {
  Row,
  Col,
  DropdownMenu,
  DropdownToggle,
  LinkList,
  LinkListItem,
  UncontrolledDropdown,
} from 'design-react-kit';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import config from '@plone/volto/registry';

const languagesISO392 = {
  de: 'deu',
  en: 'eng',
  es: 'spa',
  eu: 'eus',
  fr: 'fra',
  it: 'ita',
  ja: 'jpn',
  nl: 'nld',
  pt: 'por',
  ro: 'ron',
};

/**
 * LanguageSelector component class.
 * @class LanguageSelector
 * @extends Component
 */
const LanguageSelector = (props) => {
  const currentLang = useSelector((state) => state.intl.locale);

  const translations = useSelector(
    (state) => state.content.data?.['@components']?.translations?.items,
  );

  return config.settings.isMultilingual ? (
    <UncontrolledDropdown nav tag="div">
      <DropdownToggle aria-haspopup caret color="secondary" nav>
        {languagesISO392[currentLang]}
        <Icon color="" icon="it-expand" padding={false} size="" />
      </DropdownToggle>
      <DropdownMenu flip tag="div">
        <Row tag="div">
          <Col tag="div" widths={['xs', 'sm', 'md', 'lg', 'xl']}>
            <LinkList tag="div">
              {map(config.settings.supportedLanguages, (lang) => {
                const translation = find(translations, { language: lang });
                return (
                  <LinkListItem
                    className={cx({ selected: lang === currentLang })}
                    to={
                      translation
                        ? flattenToAppURL(translation['@id'])
                        : `/${lang}`
                    }
                    title={langmap[lang].nativeName}
                    onClick={() => {
                      props.onClickAction();
                    }}
                    key={`language-selector-${lang}`}
                    tag={Link}
                  >
                    <span>{langmap[lang].nativeName}</span>
                  </LinkListItem>
                );
              })}
            </LinkList>
          </Col>
        </Row>
      </DropdownMenu>
    </UncontrolledDropdown>
  ) : (
    <Helmet>
      <html lang={config.settings.defaultLanguage} />
    </Helmet>
  );
};

LanguageSelector.propTypes = {
  onClickAction: PropTypes.func,
};

LanguageSelector.defaultProps = {
  onClickAction: () => {},
};

export default LanguageSelector;
