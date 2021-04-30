/* eslint-disable react-hooks/exhaustive-deps */
/**
 * LanguageSelector component.
 * @module components/ItaliaTheme/LanguageSelector/LanguageSelector
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { find, map } from 'lodash';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';
import langmap from 'langmap';
import { Helmet, flattenToAppURL } from '@plone/volto/helpers';
import { changeLanguage } from '@plone/volto/actions';
import {
  Row,
  Col,
  DropdownMenu,
  DropdownToggle,
  LinkList,
  LinkListItem,
  UncontrolledDropdown,
} from 'design-react-kit/dist/design-react-kit';
import { Icon } from '@italia/components/ItaliaTheme';
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
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.intl.locale);

  const translations = useSelector(
    (state) => state.content.data?.['@components']?.translations?.items,
  );

  const [allLocales, setAllLocales] = useState({});

  useEffect(() => {
    if (config.settings) {
      config.settings.supportedLanguages.forEach((lang) => {
        import('~/../locales/' + lang + '.json').then((locale) => {
          setAllLocales({ ...allLocales, [lang]: locale.default });
        });
      });
    }
  }, []);

  return config.settings.isMultilingual ? (
    <UncontrolledDropdown nav tag="div">
      <DropdownToggle aria-haspopup caret color="secondary" nav>
        {languagesISO392[currentLang]}
        <Icon color="" icon="it-expand" padding={false} size="" />
      </DropdownToggle>
      <DropdownMenu flip tag="div">
        <Row tag="div">
          <Col size="12" tag="div" widths={['xs', 'sm', 'md', 'lg', 'xl']}>
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
                      if (config.settings.supportedLanguages.includes(lang)) {
                        import('~/../locales/' + lang + '.json').then(
                          (locale) => {
                            dispatch(changeLanguage(lang, locale.default));
                          },
                        );
                      }
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
