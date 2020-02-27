import { defineMessages, useIntl } from 'react-intl';
import SVGAction from '@design/components/DesignTheme/View/Commons/assets/actions.svg';
import { Image } from 'semantic-ui-react';
import React, { useState } from 'react';
import PrintIcon from './assets/print.svg';
import DownloadIcon from './assets/download.svg';
import MailToIcon from './assets/email.svg';

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem,
} from 'design-react-kit/dist/design-react-kit';

/**
 * Actions view component class.
 * @function Actions
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */

const messages = defineMessages({
  actions: {
    id: 'actions',
    defaultMessage: 'Vedi azioni',
  },
  print: {
    id: 'print',
    defaultMessage: 'Stampa',
  },
  mailto: {
    id: 'mailto',
    defaultMessage: 'Invia',
  },
  download: {
    id: 'download',
    defaultMessage: 'Scarica',
  },
});

const Actions = props => {
  const intl = useIntl();
  const toggle = () => setDropdownOpen(prevState => !prevState);

  let socials = [
    {
      id: 'print',
      attributes: null,
      title: intl.formatMessage(messages.print),
      url: 'javascript:this.print()',
      icon: PrintIcon,
    },
    // {
    //   id: 'download',
    //   attributes: 'download',
    //   title: intl.formatMessage(messages.download),
    //   url: 'https://twitter.com/intent/tweet?url=' + props.url,
    //   icon: DownloadIcon,
    // },
    {
      id: 'mailto',
      attributes: null,
      title: intl.formatMessage(messages.mailto),
      url: 'mailto:?subject=' + props.title + '&body=' + props.url,
      icon: MailToIcon,
    },
  ];
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <Dropdown className="d-inline" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle
        className={`btn btn-dropdown`}
        color=""
        tag={'button'}
        caret
      >
        <Image
          src={SVGAction}
          height={32}
          alt={intl.formatMessage(messages.actions)}
          title={intl.formatMessage(messages.actions)}
        />
        <small>{intl.formatMessage(messages.actions)}</small>
      </DropdownToggle>
      <DropdownMenu>
        <LinkList>
          {socials.map((item, i) => (
            <LinkListItem href={item.url} key={item.id}>
              <Image
                src={item.icon}
                height={32}
                alt={item.title}
                title={item.title}
              />
              <span>{item.title}</span>
            </LinkListItem>
          ))}
        </LinkList>
      </DropdownMenu>
    </Dropdown>
  );
};
export default Actions;
