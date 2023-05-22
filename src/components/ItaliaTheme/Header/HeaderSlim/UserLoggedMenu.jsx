/**
 * UserLoggedMenu component.
 * @module components/ItaliaTheme/Header/HeaderSlim/UserLoggedMenu
 *
 * le azione proposte sono configurate in config.settings.siteProperties.userLoggedMenu
 * nella forma:
 *     userLoggedMenu: [
 *       {
 *         href: { it: '/area-personale-cittadino' },
 *         title: { it: 'Area personale' },
 *         roles: [],
 *         className: 'link-areaPersonale',
 *       },
 *       {
 *         href: { it: '/area-personale-operatore' },
 *         title: { it: 'Area operatore' },
 *         roles: ['Gestore Pratiche'],
 *         className: 'link-areaOperatore',
 *       },
 *     ],
 *
 */

import React from 'react';
import { useIntl } from 'react-intl';
import { LinkListItem } from 'design-react-kit';
import config from '@plone/volto/registry';


const UserLoggedMenu = ({ userLogged }) => {
  const intl = useIntl();
  const items = config.settings.siteProperties.userLoggedMenu || [];
  return (
    <>
      <LinkListItem divider tag="a" />
      {items
        .filter(
          (item) =>
            !item.roles ||
            item.roles.length === 0 ||
            (item.roles &&
              userLogged.roles &&
              userLogged?.roles.find((e) => item.roles.includes(e))),
        )
        .map((item, index) => (
          <React.Fragment key={`userloggedmenu-${index}`}>
            <LinkListItem
              href={item.href?.[intl.locale] || item.href.it}
              title={item.title?.[intl.locale] || item.title.it}
              tag="a"
              className={item.className}
            >
              <span>{item.title?.[intl.locale] || item.title.it}</span>
            </LinkListItem>
            <LinkListItem divider tag="a" />
          </React.Fragment>
        ))}
    </>
  );
};

export default UserLoggedMenu;
