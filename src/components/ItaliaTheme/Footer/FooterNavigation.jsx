/**
 * FooterNavigation components.
 * @module components/ItaliaTheme/Footer/FooterNavigation
 */

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { defineMessages, useIntl } from 'react-intl';
import { isEqual } from 'lodash';
import { UniversalLink } from '@plone/volto/components';
import { Row, Col, LinkList, LinkListItem } from 'design-react-kit';
import { SectionIcon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';
import config from '@plone/volto/registry';

const messages = defineMessages({
  goToPage: {
    id: 'Vai alla pagina',
    defaultMessage: 'Vai alla pagina',
  },
});

const FooterNavigation = () => {
  const intl = useIntl();
  const items = useSelector((state) => state.navigation.items, isEqual);
  const show_navigation = useSelector(
    (state) => state.navigation.show_in_footer,
  );

  // DEPRECATED: isFooterCollapsed to be removed in version 12
  if (config.settings.isFooterCollapsed) {
    // eslint-disable-next-line no-console
    console.warn(
      'DEPRECATED: config.settings.isFooterCollapsed will be removed in version 12. Use config.settings.siteProperties.footerNavigationDepth instead.',
    );
  }

  return show_navigation ? (
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
                  iconProps={{
                    size: 'sm',
                    color: 'white',
                    className: 'me-2',
                    title: item.title,
                  }}
                />
                <Link
                  to={item.url}
                  title={
                    intl.formatMessage(messages.goToPage) + ': ' + item.title
                  }
                >
                  {item.title}
                  <Icon icon="it-arrow-right" color="white" />
                </Link>
              </h4>
              {/* DEPRECATED: isFooterCollapsed to be removed in version 12 */}
              {!config.settings.isFooterCollapsed &&
                config.settings.siteProperties.footerNavigationDepth > 1 &&
                item.items && (
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
  ) : (
    <></>
  );
};

export default FooterNavigation;
