import { useState } from 'react';
import { useIntl, defineMessages } from 'react-intl';
import {
  Icon,
  Grid,
  Menu,
  Form,
  Button,
  Segment,
  Header,
} from 'semantic-ui-react';

import Component from '@plone/volto/components/theme/Component/Component';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import { TextWidget } from '@plone/volto/components';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';

const messages = defineMessages({
  add_contacts_path: {
    id: 'add_contacts_path',
    defaultMessage: 'Add contacts path',
  },
  root_path: {
    id: 'root_path',
    defaultMessage: 'Root path',
  },
  delete_button: {
    id: 'delete_button',
    defaultMessage: 'Delete',
  },
  contact_items_header: {
    id: 'contact_items_header',
    defaultMessage: 'Contact items',
  },
  move_menu_item_up: {
    id: 'move_menu_item_up',
    defaultMessage: 'Move menu item up',
  },
  move_menu_item_down: {
    id: 'move_menu_item_down',
    defaultMessage: 'Move menu item down',
  },
  add_contacts_item: {
    id: 'add_contacts_item',
    defaultMessage: 'Add contacts item',
  },
  empty_active_contacts_item: {
    id: 'empty_active_contacts_item',
    defaultMessage: 'Add a contact item',
  },
  empty_active_contacts_path: {
    id: 'empty_active_contacts_path',
    defaultMessage: 'Add a contacts path',
  },
  icon_list_help_text: {
    id: 'icon_list_help_text',
    defaultMessage: 'For a complete list of icon names, see:',
  },
});

const defaultContactsItem = (title) => ({
  title,
  icon: '',
  contact: '',
});

const defaultRootContacts = (title) => ({
  rootPath: '/',
  items: [defaultContactsItem(title)],
});

const defaultContactsConfiguration = [defaultRootContacts(`Tab 0`)];

const ContactsConfigWidget = ({ id, title, value, onChange }) => {
  const intl = useIntl();

  const [contactsConfiguration, setContactsConfiguration] = useState(
    value ? JSON.parse(value) : defaultContactsConfiguration,
  );
  const [activeContact, setActiveContact] = useState(0);
  const [activeContactItem, setActiveContactItem] = useState(0);

  const handleChangeConfiguration = (value) => {
    setContactsConfiguration(value);
    onChange(id, JSON.stringify(value));
  };

  const addContactsPath = (e) => {
    e.preventDefault();
    const contactItemsNumber = contactsConfiguration.length;
    const contactItem = `/tab${contactItemsNumber}`;
    let newContactsConfiguration = [
      ...contactsConfiguration,
      {
        ...defaultRootContacts(`Tab ${contactItemsNumber}`),
        rootPath: contactItem,
      },
    ];

    handleChangeConfiguration(newContactsConfiguration);
    setActiveContact(newContactsConfiguration.length - 1);
  };

  const onChangeContactsPath = (index, menu) => {
    let newContactsConfiguration = [...contactsConfiguration];
    newContactsConfiguration[index] = menu;

    handleChangeConfiguration(newContactsConfiguration);
  };

  const deleteContactsPath = (e, index) => {
    e.preventDefault();
    let newContactsConfiguration = [...contactsConfiguration];
    newContactsConfiguration.splice(index, 1);

    if (activeContact === index) {
      setTimeout(() => setActiveContact(index > 0 ? index - 1 : 0), 0);
    }

    handleChangeConfiguration(newContactsConfiguration);
  };

  const moveContactsItem = (e, pathIndex, contactsItemIndex, direction) => {
    e.preventDefault();
    const up = direction === 'up';
    let newContactsConfiguration = [...contactsConfiguration];

    let contactsItem =
      newContactsConfiguration[pathIndex].items[contactsItemIndex];
    newContactsConfiguration[pathIndex].items.splice(contactsItemIndex, 1);
    newContactsConfiguration[pathIndex].items.splice(
      contactsItemIndex + (up ? -1 : 1),
      0,
      contactsItem,
    );

    handleChangeConfiguration(newContactsConfiguration);
  };

  const addContactItem = (e, pathIndex) => {
    e.preventDefault();
    let newContactsConfiguration = [...contactsConfiguration];
    newContactsConfiguration[pathIndex].items = [
      ...newContactsConfiguration[pathIndex].items,
      defaultContactsItem(
        `New ${newContactsConfiguration[pathIndex].items.length}`,
      ),
    ];

    setActiveContactItem(newContactsConfiguration[pathIndex].items.length - 1);
    handleChangeConfiguration(newContactsConfiguration);
  };

  const onChangeContactsItem = (pathIndex, contactItemIndex, contactItem) => {
    let newContactsConfiguration = [...contactsConfiguration];
    newContactsConfiguration[pathIndex].items[contactItemIndex] = contactItem;

    handleChangeConfiguration(newContactsConfiguration);
  };

  const deleteContactsItem = (e, pathIndex, index) => {
    e.preventDefault();
    let newContactsConfiguration = [...contactsConfiguration];
    newContactsConfiguration[pathIndex].items.splice(index, 1);

    if (activeContactItem === index) {
      setTimeout(() => setActiveContactItem(index > 0 ? index - 1 : 0), 0);
    }

    handleChangeConfiguration(newContactsConfiguration);
  };

  return (
    <div className="contacts-configuration-widget">
      <Form.Field inline id={id}>
        <Grid>
          <Grid.Row>
            <Grid.Column width="12">
              <div className="wrapper">
                <label htmlFor="contacts-configuration">{title}</label>
              </div>
            </Grid.Column>
            <Grid.Column width="12" className="contacts-configuration-widget">
              <div id="contacts-configuration">
                <Menu pointing secondary className="contacts-path-menu">
                  {contactsConfiguration.map((contact, idx) => (
                    <Menu.Item
                      key={`contacts-path-${idx}`}
                      name={contact.rootPath}
                      active={activeContact === idx}
                      onClick={() => {
                        setActiveContact(idx);
                        setActiveContactItem(0);
                      }}
                    >
                      <span>{flattenToAppURL(contact.rootPath)}</span>
                    </Menu.Item>
                  ))}
                  <Menu.Item
                    active={false}
                    name={intl.formatMessage(messages.add_contacts_path)}
                    onClick={addContactsPath}
                  >
                    <Icon name="plus" />
                  </Menu.Item>
                </Menu>
                <Segment>
                  {activeContact > -1 &&
                  activeContact < contactsConfiguration.length ? (
                    <Grid>
                      <Grid.Column
                        width={12}
                        className="contact-rootpath-segment"
                      >
                        <TextWidget
                          id="rootPath"
                          title={intl.formatMessage(messages.root_path)}
                          required
                          value={flattenToAppURL(
                            contactsConfiguration[activeContact].rootPath,
                          )}
                          onChange={(id, value) => {
                            onChangeContactsPath(activeContact, {
                              ...contactsConfiguration[activeContact],
                              rootPath: value?.length > 0 ? value : '/',
                            });
                          }}
                        />
                        <Form.Field
                          inline
                          className="delete wide"
                          id="contactpath-delete"
                        >
                          <Grid>
                            <Grid.Row stretched>
                              <Grid.Column width={12}>
                                <div className="delete-button">
                                  <Button
                                    icon="trash"
                                    negative
                                    onClick={(e) =>
                                      deleteContactsPath(e, activeContact)
                                    }
                                    id="delete-contactspath"
                                    content={intl.formatMessage(
                                      messages.delete_button,
                                    )}
                                  />
                                </div>
                              </Grid.Column>
                            </Grid.Row>
                          </Grid>
                        </Form.Field>
                      </Grid.Column>
                      <Grid.Column width={4}>
                        <Header as="h2" className="contacts-items-header">
                          {intl.formatMessage(messages.contact_items_header)}
                        </Header>
                        <Menu
                          fluid
                          vertical
                          tabular
                          className="contact-items-menu"
                        >
                          {contactsConfiguration[activeContact].items?.map(
                            (contactItem, idx) => (
                              <Menu.Item
                                key={`contacts-item-${idx}`}
                                name={contactItem.title}
                                active={activeContactItem === idx}
                                onClick={() => setActiveContactItem(idx)}
                              >
                                <Button.Group vertical className="move-buttons">
                                  <Button
                                    disabled={idx === 0}
                                    size="tiny"
                                    icon={<Icon name="arrow left" />}
                                    title={intl.formatMessage(
                                      messages.move_menu_item_up,
                                    )}
                                    onClick={(e) =>
                                      moveContactsItem(
                                        e,
                                        activeContact,
                                        idx,
                                        'up',
                                      )
                                    }
                                  />
                                  <Button
                                    disabled={
                                      idx ===
                                      contactsConfiguration[activeContact].items
                                        .length -
                                        1
                                    }
                                    size="tiny"
                                    icon={<Icon name="arrow right" />}
                                    title={intl.formatMessage(
                                      messages.move_menu_item_down,
                                    )}
                                    onClick={(e) =>
                                      moveContactsItem(
                                        e,
                                        activeContact,
                                        idx,
                                        'down',
                                      )
                                    }
                                  />
                                </Button.Group>
                                <span className="item-title">
                                  {contactItem.title}
                                </span>
                              </Menu.Item>
                            ),
                          )}
                          <Menu.Item
                            name={intl.formatMessage(
                              messages.add_contacts_item,
                            )}
                            onClick={(e) => addContactItem(e, activeContact)}
                          >
                            <Icon name="plus" />
                          </Menu.Item>
                        </Menu>
                      </Grid.Column>
                      <Grid.Column stretched width={8}>
                        <div className="help-text">
                          {intl.formatMessage(messages.icon_list_help_text)}
                          <ul>
                            <li>
                              <UniversalLink href="https://italia.github.io/bootstrap-italia/docs/utilities/icone/#lista-delle-icone-disponibili">
                                Bootstrap Italia
                              </UniversalLink>
                            </li>
                            <li>
                              <UniversalLink href="https://fontawesome.com/v5/search?ic=free&o=r">
                                Fontawesome
                              </UniversalLink>
                            </li>
                          </ul>
                        </div>
                        {activeContactItem > -1 &&
                        activeContactItem <
                          contactsConfiguration[activeContact].items.length ? (
                          <Component
                            componentName="ContactsConfigForm"
                            id={`${activeContact}-${activeContactItem}`}
                            contactItem={
                              contactsConfiguration[activeContact].items[
                                activeContactItem
                              ]
                            }
                            onChange={(contact) =>
                              onChangeContactsItem(
                                activeContact,
                                activeContactItem,
                                contact,
                              )
                            }
                            deleteContactItem={(e) =>
                              deleteContactsItem(
                                e,
                                activeContact,
                                activeContactItem,
                              )
                            }
                          />
                        ) : (
                          <span>
                            {intl.formatMessage(
                              messages.empty_active_contacts_item,
                            )}
                          </span>
                        )}
                      </Grid.Column>
                    </Grid>
                  ) : (
                    <span>
                      {intl.formatMessage(messages.empty_active_contacts_path)}
                    </span>
                  )}
                </Segment>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form.Field>
    </div>
  );
};

export default ContactsConfigWidget;
