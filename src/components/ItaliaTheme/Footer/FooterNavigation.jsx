/**
 * FooterNavigation components.
 * @module components/ItaliaTheme/Footer/FooterNavigation
 */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { defineMessages, useIntl } from 'react-intl';
import { isEqual } from 'lodash';
import { getBaseUrl } from '@plone/volto/helpers';
import { getNavigation } from '@plone/volto/actions';
import { UniversalLink } from '@plone/volto/components';
import { Row, Col, LinkList, LinkListItem } from 'design-react-kit';
import { SectionIcon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import config from '@plone/volto/registry';

const messages = defineMessages({
  goToPage: {
    id: 'Vai alla pagina',
    defaultMessage: 'Vai alla pagina',
  },
});

const FooterNavigation = () => {
  const intl = useIntl();
  const currentLang = useSelector((state) => state.intl.locale);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.navigation.items, isEqual);

  let path = '';
  if (config.settings.isMultilingual) {
    path = '/' + currentLang;
  }

  useEffect(() => {
    dispatch(
      getNavigation(
        getBaseUrl(path),
        config.settings.siteProperties.footerNavigationDepth,
      ),
    );
  }, [path, dispatch]);

  return (
    <>
      {items && (
        <Row tag="div">
          {items.map((item) => (
            <Col
              lg={3}
              md={3}
              sm={6}
              className="pb-4"
              widths={['xs', 'sm', 'md', 'lg', 'xl']}
              key={item.url}
            >
              <h4>
                <SectionIcon
                  section={item.url}
                  iconProps={{ size: 'sm', color: 'white', className: 'me-2' }}
                />
                <Link
                  to={item.url}
                  title={
                    intl.formatMessage(messages.goToPage) + ': ' + item.title
                  }
                >
                  {item.title}
                </Link>
              </h4>
              {!config.settings.isFooterCollapsed && item.items && (
                <LinkList className="footer-list clearfix" tag="div">
                  {item.items.map((subitem) => {
                    return (
                      <LinkListItem
                        key={subitem.url}
                        href={subitem.url}
                        tag={UniversalLink}
                        title={
                          intl.formatMessage(messages.goToPage) +
                          ': ' +
                          subitem.title
                        }
                      >
                        {subitem.title}
                      </LinkListItem>
                    );
                  })}
                </LinkList>
              )}
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default FooterNavigation;
