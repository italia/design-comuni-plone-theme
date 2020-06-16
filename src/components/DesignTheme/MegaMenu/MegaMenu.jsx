/**
 * Navigation components.
 * @module components/theme/Navigation/Navigation
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isMatch } from 'lodash';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Row,
  Col,
  LinkList,
  LinkListItem,
  Icon,
} from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  menu_selected: {
    id: 'Menu selezionato',
    defaultMessage: 'Menu selezionato',
  },
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});

const megamenu_max_rows = 6;
const megamenu_max_cols = 3;

const isActive = (pathname = '', url) => {
  var ret =
    (url === '' && (pathname === '/' || pathname === '')) ||
    (url !== '' && isMatch(pathname.split('/'), url.split('/')));
  return ret;
};

const MegaMenu = ({ item, pathname }) => {
  const intl = useIntl();
  const isItemActive = isActive(pathname, item.url);
  const { items = [] } = item;

  const [menuStatus, setMenuStatus] = useState(false);

  if (items.length) {
    //megamenu
    const childrenGroups = [];
    if (items.size < megamenu_max_rows) {
      childrenGroups.push(items);
    } else {
      let rows = Math.floor(items.length / megamenu_max_cols);
      rows = rows === 0 ? 1 : rows;

      for (var i = 0; i < items.length; i++) {
        const group = Math.floor(i % rows);
        if (!childrenGroups[i]) {
          childrenGroups.push([]);
        }
        childrenGroups[group].push(items[i]);
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
          </DropdownToggle>
          <DropdownMenu flip tag="div">
            <Row>
              {childrenGroups.map((group, index) => (
                <Col lg={4} key={'group_' + index}>
                  <LinkList className="bordered">
                    {group.map(child => (
                      <LinkListItem
                        to={flattenToAppURL(child.url)}
                        tag={Link}
                        title={child.title}
                        key={child.url}
                        onClick={() => setMenuStatus(false)}
                        className={cx({
                          active: isActive(pathname, child.url),
                        })}
                      >
                        <span>{child.title}</span>
                      </LinkListItem>
                    ))}
                  </LinkList>
                </Col>
              ))}
            </Row>

            <div className="it-external bottom-right">
              <Row>
                <Col lg={8} />
                <Col lg={4}>
                  <LinkList>
                    <li className="it-more text-right">
                      <Link
                        className="list-item medium"
                        to={flattenToAppURL(item.url)}
                        onClick={() => setMenuStatus(false)}
                      >
                        <span>{intl.formatMessage(messages.view_all)}</span>
                        <Icon icon="it-arrow-right" />
                      </Link>
                    </li>
                  </LinkList>
                </Col>
              </Row>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </NavItem>
    );
  } else {
    return (
      <NavItem tag="li" active={isItemActive}>
        <NavLink
          to={item.url === '' ? '/' : flattenToAppURL(item.url)}
          tag={Link}
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
