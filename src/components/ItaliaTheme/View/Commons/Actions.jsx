import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem,
  Button,
} from 'design-react-kit';
import { toPublicURL } from '@plone/volto/helpers';
import { Icon } from 'design-comuni-plone-theme/components/ItaliaTheme';

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

const Actions = (props) => {
  const intl = useIntl();
  const publicUrl = toPublicURL(props.url);
  const socials = [
    {
      id: 'print',
      attributes: null,
      title: intl.formatMessage(messages.print),
      url: '#',
      icon: 'it-print',
    },
    {
      id: 'mailto',
      attributes: null,
      title: intl.formatMessage(messages.mailto),
      url: `mailto:?subject=${props.title}&body=${publicUrl}`,
      icon: 'it-mail',
    },
  ];
  const handlePrint = (e) => {
    e.preventDefault();
    return window.print();
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.code === 'Space') {
      const childElement = e.target.firstChild;
      if (childElement.tagName === 'BUTTON' || childElement.tagName === 'A') {
        // La libreria del dropdown ha dei problemi nel suo focus manager interno.
        // Enter e spazio chiudono il menu, quindi fermiamo il bubbling (per chiudere si usa esc,
        // come correttamente dichiarato dallo screen reader), poi simuliamo il click
        e.stopPropagation();
        childElement.click();
      }
    }
  };

  return (
    <UncontrolledDropdown className="d-inline page-actions" id="page-actions">
      <DropdownToggle
        className={`btn btn-dropdown ps-0`}
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
          {socials.map((item, i) => {
            const commonButtonProps = {
              icon: false,
              title: item.title,
              alt: item.title,
              'aria-label': item.title,
              id: item.id,
            };

            const icon = (
              <>
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
              </>
            );

            let buttonProps = { ...commonButtonProps };
            if (item.id === 'print')
              buttonProps = {
                ...commonButtonProps,
                tag: 'button',
                onClick: handlePrint,
                color: 'link',
              };
            else if (item.id === 'mailto')
              buttonProps = {
                ...commonButtonProps,
                href: item.url,
              };
            return (
              // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/menu_role#:~:text=within%20the%20menu-,tabindex,-attribute
              <LinkListItem
                key={item.id}
                role="menuitem"
                tabIndex={-1}
                onKeyDown={handleKeyDown}
              >
                {item.id === 'print' && (
                  <Button {...buttonProps}>{icon}</Button>
                )}
                {item.id === 'mailto' && <a {...buttonProps}>{icon}</a>}
              </LinkListItem>
            );
          })}
        </LinkList>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
export default Actions;

Actions.propTypes = {
  params: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
  }),
};
