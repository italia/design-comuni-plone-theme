/**
 * MenuSecondary components.
 * @module components/ItaliaTheme/MenuSecondary
 */

import React, { useEffect } from 'react';
import { isMatch } from 'lodash';
import { useIntl, defineMessages } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { getSecondaryMenu, getItemsByPath } from 'volto-secondarymenu';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { Nav, NavItem, NavLink } from 'design-react-kit/dist/design-react-kit';

const messages = defineMessages({
  menu_selected: {
    id: 'Menu selezionato',
    defaultMessage: 'Menu selezionato',
  },
});

const MenuSecondary = ({ pathname }) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const menuItems = useSelector((state) => state.secondaryMenu?.result);
  const items = getItemsByPath(menuItems, pathname)?.filter(
    (item) => item.visible,
  );

  useEffect(() => {
    dispatch(getSecondaryMenu());
  }, [dispatch]);

  const isMenuActive = (itemUrl = '') => {
    const url = flattenToAppURL(itemUrl);
    const currrentPath = pathname ?? '';

    return (
      (url === '' && (currrentPath === '/' || currrentPath === '')) ||
      (url !== '' && isMatch(currrentPath.split('/'), url.split('/')))
    );
  };

  return (
    items?.length > 0 && (
      <Nav navbar className="navbar-secondary" role="menubar">
        {items.map((item, i) => {
          let url = item.href || item.linkUrl?.[0]?.['@id'] || '';

          return (
            <NavItem tag="li" active={isMenuActive(url)} key={i} role="none">
              <NavLink
                href={url === '' ? '/' : flattenToAppURL(url)}
                tag={UniversalLink}
                active={isMenuActive(url)}
                data-element={item.id_lighthouse}
                role="menuitem"
              >
                <span
                  className={item.inEvidence ? 'font-weight-bold' : ''}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></span>
                {isMenuActive(url) && (
                  <span className="sr-only">
                    {intl.formatMessage(messages.menu_selected)}
                  </span>
                )}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    )
  );
};

MenuSecondary.propTypes = {};

export default MenuSecondary;
