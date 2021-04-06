/**
 * Navigation components.
 * @module components/theme/Navigation/Navigation
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import cx from 'classnames';
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Button,
  Row,
  Col,
  LinkList,
} from 'design-react-kit/dist/design-react-kit';
import { defineMessages, useIntl } from 'react-intl';
import {
  flattenToAppURL,
  hasBlocksData,
  getBlocksFieldname,
  getBlocksLayoutFieldname,
  getBaseUrl,
} from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { Icon } from '@italia/components/ItaliaTheme';
import config from '@plone/volto/registry';

const messages = defineMessages({
  menu_selected: {
    id: 'Menu selezionato',
    defaultMessage: 'Menu selezionato',
  },
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
  closeMenu: {
    id: 'dropdownmenu-close-menu-button',
    defaultMessage: 'Close menu',
  },
});

const MEGAMENU_MAX_ROWS = 8;
const MEGAMENU_MAX_COLS = 3;

const isActive = (item, pathname) => {
  const paths = [...(item.navigationRoot || [])];

  if (item.showMoreLink?.length > 0) {
    paths.push(item.showMoreLink[0]);
  }
  if (item.linkUrl?.length > 0) {
    paths.push(item.linkUrl[0]);
  }

  return paths.reduce(
    (acc, path) =>
      acc ||
      flattenToAppURL(pathname).indexOf(flattenToAppURL(path['@id'])) > -1,
    false,
  );
};

const isChildActive = (itemUrl, pathname) => {
  return pathname.indexOf(itemUrl) > -1;
};

const MegaMenu = ({ item, pathname }) => {
  const intl = useIntl();
  const blocksFieldname = getBlocksFieldname(item);
  const blocksLayoutFieldname = getBlocksLayoutFieldname(item);
  const isItemActive = isActive(item, pathname);

  const [menuStatus, setMenuStatus] = useState(false);

  const getAnchorTarget = (nodeElement) => {
    if (nodeElement.nodeName === 'A') {
      return nodeElement;
    } else if (nodeElement.parentElement?.nodeName === 'A') {
      return nodeElement.parentElement;
    } else {
      return null;
    }
  };

  useEffect(() => {
    const blocksClickListener = (e) => {
      const dropdownmenuLinks = [
        ...document.querySelectorAll('.dropdown-menu.show a'),
      ];

      if (
        dropdownmenuLinks?.length === 0 ||
        dropdownmenuLinks?.indexOf(getAnchorTarget(e.target)) < 0
      ) {
        return;
      }

      setMenuStatus(false);
    };

    document.body.addEventListener('click', blocksClickListener);

    return () =>
      document.body.removeEventListener('click', blocksClickListener);
  }, []);

  if (item.mode === 'simpleLink') {
    return item.linkUrl?.length > 0 ? (
      <NavItem tag="li" active={isItemActive}>
        <NavLink
          href={item.linkUrl === '' ? '/' : null}
          item={item.linkUrl[0]}
          tag={UniversalLink}
          active={isItemActive}
        >
          <span>{item.title}</span>
          {isItemActive && (
            <span className="sr-only">
              {intl.formatMessage(messages.menu_selected)}
            </span>
          )}
        </NavLink>
      </NavItem>
    ) : null;
  } else {
    //megamenu
    let hasBlocks = hasBlocksData(item);
    if (item?.blocks && Object.keys(item.blocks).length === 1) {
      let b = item.blocks[Object.keys(item.blocks)[0]];
      if (b['@type'] === 'text' && (!b.text || b.text?.length === 0)) {
        hasBlocks = false;
      }
    }

    const childrenGroups = [];
    const items = [];
    // eslint-disable-next-line no-unused-expressions
    item.navigationRoot?.forEach((navRoot) => {
      if (item.navigationRoot.length > 1) {
        items.push({ ...navRoot, showAsHeader: true });
      }
      // eslint-disable-next-line no-unused-expressions
      navRoot.items?.forEach((subitem) => {
        items.push(subitem);
      });
    });

    let max_cols = hasBlocks ? 2 : MEGAMENU_MAX_COLS;
    if (items.length < MEGAMENU_MAX_ROWS) {
      childrenGroups.push(items);
    } else {
      let rows = Math.ceil(items.length / max_cols);

      rows = rows === 0 ? 1 : rows;
      let col = 0;

      for (var i = 0; i < items.length; i++) {
        if (!childrenGroups[col]) {
          childrenGroups.push([]);
        }
        childrenGroups[col].push(items[i]);
        if ((i + 1) % rows === 0) {
          col++;
        }
      }
    }

    return (
      <NavItem tag="li" className="megamenu" active={isItemActive}>
        <UncontrolledDropdown
          nav
          inNavbar
          isOpen={menuStatus}
          tag="div"
          toggle={() => setMenuStatus(!menuStatus)}
        >
          <DropdownToggle aria-haspopup color="secondary" nav>
            {item.title}
            <Icon
              icon="it-expand"
              className={cx('megamenu-toggle-icon', { open: menuStatus })}
            />
          </DropdownToggle>
          <DropdownMenu flip tag="div">
            <div className="text-right megamenu-close-button">
              <Button
                color="link"
                onClick={() => setMenuStatus(false)}
                title={intl.formatMessage(messages.closeMenu)}
              >
                <Icon icon="it-close" />
              </Button>
            </div>
            <Row>
              <Col lg={hasBlocks ? 6 : 12}>
                <Row>
                  {childrenGroups.map((group, index) => (
                    <Col lg={12 / max_cols} key={'group_' + index}>
                      <LinkList className="bordered">
                        {group.map((child, idx) => {
                          return (
                            <li key={child['@id'] + idx}>
                              {child.showAsHeader ? (
                                <h3
                                  className={cx('list-item', {
                                    active: isChildActive(
                                      flattenToAppURL(child['@id']),
                                      pathname,
                                    ),
                                  })}
                                >
                                  <UniversalLink
                                    item={child}
                                    title={child.title}
                                    key={child['@id']}
                                    onClick={() => setMenuStatus(false)}
                                  >
                                    <span>{child.title}</span>
                                  </UniversalLink>
                                </h3>
                              ) : (
                                <UniversalLink
                                  item={child}
                                  title={child.title}
                                  key={child['@id']}
                                  onClick={() => setMenuStatus(false)}
                                  className={cx('list-item', {
                                    active: isChildActive(
                                      flattenToAppURL(child['@id']),
                                      pathname,
                                    ),
                                  })}
                                >
                                  <span>{child.title}</span>
                                </UniversalLink>
                              )}
                            </li>
                          );
                        })}
                      </LinkList>
                    </Col>
                  ))}
                </Row>
              </Col>
              {hasBlocks && (
                <Col lg={6} className="m-4 m-lg-0 dropdownmenu-blocks-column">
                  {map(item[blocksLayoutFieldname].items, (block) => {
                    const blockType = item[blocksFieldname]?.[block]?.['@type'];
                    if (['title', 'pageDescription'].indexOf(blockType) > -1)
                      return null;

                    const Block =
                      config.blocks.blocksConfig[blockType]?.['view'] ?? null;
                    return Block !== null ? (
                      <Block
                        key={block}
                        id={block}
                        properties={item}
                        data={item[blocksFieldname][block]}
                        path={getBaseUrl(pathname || '')}
                      />
                    ) : (
                      <div key={block}>
                        {intl.formatMessage(messages.unknownBlock, {
                          block: item[blocksFieldname]?.[block]?.['@type'],
                        })}
                      </div>
                    );
                  })}
                </Col>
              )}
            </Row>

            {item.showMoreLink?.length > 0 && (
              <div className="it-external bottom-right">
                <Row>
                  <Col lg={8} />
                  <Col lg={4}>
                    <LinkList>
                      <li className="it-more text-right">
                        <UniversalLink
                          className="list-item medium"
                          item={item.showMoreLink[0]}
                          onClick={() => setMenuStatus(false)}
                        >
                          <span>
                            {item.showMoreText?.length > 0
                              ? item.showMoreText
                              : intl.formatMessage(messages.view_all)}
                          </span>
                          <Icon icon="it-arrow-right" />
                        </UniversalLink>
                      </li>
                    </LinkList>
                  </Col>
                </Row>
              </div>
            )}
          </DropdownMenu>
        </UncontrolledDropdown>
      </NavItem>
    );
  }
};

MegaMenu.propTypes = {
  pathname: PropTypes.string.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
      }),
    ),
  }).isRequired,
};

export default MegaMenu;
