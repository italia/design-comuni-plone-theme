import { defineMessages, useIntl } from 'react-intl';
import React, { useState } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem,
  Icon,
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

  let socials = [
    {
      id: 'print',
      attributes: null,
      title: intl.formatMessage(messages.print),
      url: 'javascript:this.print()',
      icon: 'it-print',
    },
    {
      id: 'mailto',
      attributes: null,
      title: intl.formatMessage(messages.mailto),
      url: 'mailto:?subject=' + props.title + '&body=' + props.url,
      icon: 'it-mail',
    },
  ];
  return (
    <UncontrolledDropdown className="d-inline">
      <DropdownToggle
        className={`btn btn-dropdown`}
        color=""
        tag={'button'}
        caret
      >
        <Icon
          className={undefined}
          color=""
          icon="it-more-items"
          padding={false}
          size=""
          alt={intl.formatMessage(messages.actions)}
          title={intl.formatMessage(messages.actions)}
        />
        <small>{intl.formatMessage(messages.actions)}</small>
      </DropdownToggle>
      <DropdownMenu>
        <LinkList>
          {socials.map((item, i) => (
            <LinkListItem href={item.url} key={item.id}>
              <Icon
                className={undefined}
                color=""
                icon={item.icon}
                padding={false}
                size=""
                alt={item.title}
                title={item.title}
              />
              <span>{item.title}</span>
            </LinkListItem>
          ))}
        </LinkList>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
export default Actions;
