import React, { useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import {
  Icon,
  Grid,
  Menu,
  Form,
  Button,
  Segment,
  Header,
} from 'semantic-ui-react';
import { TextWidget } from '@plone/volto/components';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';

import SearchSectionsConfigurationForm from 'design-comuni-plone-theme/components/ItaliaTheme/manage/Widgets/SearchSectionsConfigurationWidget/SearchSectionsConfigurationForm';

const messages = defineMessages({
  rootItemsHeader: {
    id: 'searchsectionswidget-items-header',
    defaultMessage: 'Sections',
  },
  addRootPath: {
    id: 'searchsectionswidget-add-rootpath',
    defaultMessage: 'Add path',
  },
  deleteRootPath: {
    id: 'searchsectionswidget-delete-rootpath',
    defaultMessage: 'Delete path',
  },
  root_path: {
    id: 'searchsectionswidget-rootpath',
    defaultMessage: 'Root path',
  },
  addItem: {
    id: 'searchsectionswidget-additem',
    defaultMessage: 'Add item',
  },
  moveItemUp: {
    id: 'searchsectionswidget-move-item-up',
    defaultMessage: 'Move item up',
  },
  moveItemDown: {
    id: 'searchsectionswidget-move-item-down',
    defaultMessage: 'Move item down',
  },
  emptyActiveRootPath: {
    id: 'searchsectionswidget-emptyActiveRootPath',
    defaultMessage: 'Select a path',
  },
  emptyActiveItem: {
    id: 'searchsectionswidget-emptyActiveItem',
    defaultMessage: 'Add a new section, or select one.',
  },
});

const defaultSectionItem = (title) => ({
  title,
  linkUrl: null,
});

const defaultRootConfiguration = (title) => ({
  rootPath: '/',
  items: [defaultSectionItem(title)],
});

const defaultConfiguration = [defaultRootConfiguration()];

const SearchSectionsConfigurationWidget = ({
  value,
  id,
  onChange,
  required,
  title,
  description,
}) => {
  const intl = useIntl();
  const [configuration, setConfiguration] = useState(
    value?.length > 0 && value !== '""'
      ? JSON.parse(value)
      : defaultConfiguration,
  );

  const [activeRoot, setActiveRoot] = useState(0);
  const [activeItem, setActiveItem] = useState(0);

  const handleChangeConfiguration = (value) => {
    setConfiguration(value);
    onChange(id, JSON.stringify(value));
  };

  const addRootPath = (e) => {
    e.preventDefault();
    const itemsNumber = configuration.length;
    const rootItem = `/tab${itemsNumber}`;
    let newRootConfiguration = [
      ...configuration,
      {
        ...defaultRootConfiguration(`Tab ${itemsNumber}`),
        rootPath: rootItem,
      },
    ];

    handleChangeConfiguration(newRootConfiguration);
    setActiveRoot(newRootConfiguration.length - 1);
  };

  const deleteRootPath = (e, index) => {
    e.preventDefault();
    let newRootConfiguration = [...configuration];
    newRootConfiguration.splice(index, 1);

    if (activeRoot === index) {
      setTimeout(() => setActiveRoot(index > 0 ? index - 1 : 0), 0);
    }

    handleChangeConfiguration(newRootConfiguration);
  };

  const deleteItem = (e, pathIndex, index) => {
    e.preventDefault();
    let newRootConfiguration = [...configuration];
    newRootConfiguration[pathIndex].items.splice(index, 1);

    if (activeItem === index) {
      setTimeout(() => setActiveItem(index > 0 ? index - 1 : 0), 0);
    }

    handleChangeConfiguration(newRootConfiguration);
  };

  const addItem = (e, pathIndex) => {
    e.preventDefault();
    let newRootConfiguration = [...configuration];
    newRootConfiguration[pathIndex].items = [
      ...(newRootConfiguration[pathIndex]?.items || []),
      defaultSectionItem(
        `New ${newRootConfiguration[pathIndex].items?.length || ''}`,
      ),
    ];

    setActiveItem(newRootConfiguration[pathIndex].items.length - 1);
    handleChangeConfiguration(newRootConfiguration);
  };

  const onChangeRootPath = (index, root) => {
    let newRootConfiguration = [...configuration];
    newRootConfiguration[index] = root;

    handleChangeConfiguration(newRootConfiguration);
  };

  const onChangeItem = (pathIndex, itemIndex, item) => {
    let newRootConfiguration = [...configuration];
    newRootConfiguration[pathIndex].items[itemIndex] = item;

    handleChangeConfiguration(newRootConfiguration);
  };

  const moveItem = (e, pathIndex, itemIndex, direction) => {
    e.preventDefault();
    const up = direction === 'up';
    let newRootConfiguration = [...configuration];

    let item = newRootConfiguration[pathIndex].items[itemIndex];
    newRootConfiguration[pathIndex].items.splice(itemIndex, 1);
    newRootConfiguration[pathIndex].items.splice(
      itemIndex + (up ? -1 : 1),
      0,
      item,
    );

    handleChangeConfiguration(newRootConfiguration);
  };

  return (
    <div className="search-sections-configuration-widget">
      <Form.Field inline id={id}>
        <Grid>
          <Grid.Row>
            <Grid.Column width="4">
              <div className="wrapper">
                <label htmlFor="search-sections-configuration">{title}</label>
              </div>
            </Grid.Column>
            <Grid.Column
              width="8"
              className="search-sections-configuration-widget"
            >
              <div id="search-sections-configuration">
                <Menu pointing secondary className="rootpath-menu">
                  {configuration.map((root, idx) => (
                    <Menu.Item
                      key={`root-path-${idx}`}
                      name={root.rootPath}
                      active={activeRoot === idx}
                      onClick={() => {
                        setActiveRoot(idx);
                        setActiveItem(0);
                      }}
                    >
                      <span>
                        {root?.rootPath ? flattenToAppURL(root?.rootPath) : '/'}
                      </span>
                    </Menu.Item>
                  ))}
                  <Menu.Item
                    active={false}
                    name={intl.formatMessage(messages.addRootPath)}
                    onClick={addRootPath}
                  >
                    <Icon name="plus" />
                  </Menu.Item>
                </Menu>
                <Segment>
                  {activeRoot > -1 && activeRoot < configuration.length ? (
                    <>
                      <Grid className="root-path-configuration">
                        <Grid.Column
                          width={12}
                          className="search-sections-rootpath-segment"
                        >
                          <TextWidget
                            id="rootPath"
                            title={intl.formatMessage(messages.root_path)}
                            description=""
                            required={true}
                            value={
                              configuration?.[activeRoot]?.rootPath
                                ? flattenToAppURL(
                                    configuration[activeRoot].rootPath,
                                  )
                                : '/'
                            }
                            onChange={(id, value) => {
                              onChangeRootPath(activeRoot, {
                                ...configuration[activeRoot],
                                rootPath: value?.length ? value : '/',
                              });
                            }}
                          />
                        </Grid.Column>
                        <Grid.Column
                          width={12}
                          textAlign="right"
                          className="delete-root-path-container"
                        >
                          <Button
                            icon="trash"
                            size="mini"
                            negative
                            onClick={(e) => deleteRootPath(e, activeRoot)}
                            id="delete-rootpath"
                            content={intl.formatMessage(
                              messages.deleteRootPath,
                            )}
                          />
                        </Grid.Column>
                      </Grid>

                      <Grid>
                        <Grid.Column width={4}>
                          <Header
                            as="h5"
                            className="search-sections-items-header"
                          >
                            {intl.formatMessage(messages.rootItemsHeader)}
                          </Header>
                          <Menu
                            fluid
                            vertical
                            tabular
                            className="root-items-menu"
                          >
                            {configuration[activeRoot].items?.map(
                              (item, idx) => (
                                <Menu.Item
                                  key={`item-${idx}`}
                                  name={item.title}
                                  active={activeItem === idx}
                                  onClick={() => setActiveItem(idx)}
                                >
                                  <Button.Group
                                    vertical
                                    className="move-buttons"
                                  >
                                    <Button
                                      disabled={idx === 0}
                                      size="tiny"
                                      icon={<Icon name="arrow left" />}
                                      title={intl.formatMessage(
                                        messages.moveItemUp,
                                      )}
                                      onClick={(e) =>
                                        moveItem(e, activeRoot, idx, 'up')
                                      }
                                    />
                                    <Button
                                      disabled={
                                        idx ===
                                        configuration[activeRoot].items.length -
                                          1
                                      }
                                      size="tiny"
                                      icon={<Icon name="arrow right" />}
                                      title={intl.formatMessage(
                                        messages.moveItemDown,
                                      )}
                                      onClick={(e) =>
                                        moveItem(e, activeRoot, idx, 'down')
                                      }
                                    />
                                  </Button.Group>
                                  <span>{item.title}</span>
                                </Menu.Item>
                              ),
                            )}
                            <Menu.Item
                              name={intl.formatMessage(messages.addItem)}
                              onClick={(e) => addItem(e, activeRoot)}
                            >
                              <Icon name="plus" />
                            </Menu.Item>
                          </Menu>
                        </Grid.Column>
                        <Grid.Column stretched width={8}>
                          {activeItem > -1 &&
                          activeItem <
                            configuration[activeRoot].items?.length ? (
                            <SearchSectionsConfigurationForm
                              id={`${activeRoot}-${activeItem}`}
                              item={configuration[activeRoot].items[activeItem]}
                              onChange={(root) =>
                                onChangeItem(activeRoot, activeItem, root)
                              }
                              deleteItem={(e) =>
                                deleteItem(e, activeRoot, activeItem)
                              }
                            />
                          ) : (
                            <span className="empty-active-item">
                              {intl.formatMessage(messages.emptyActiveItem)}
                            </span>
                          )}
                        </Grid.Column>
                      </Grid>
                    </>
                  ) : (
                    <span className="empty-active-root-path">
                      {intl.formatMessage(messages.emptyActiveRootPath)}
                    </span>
                  )}
                </Segment>
              </div>
            </Grid.Column>
          </Grid.Row>
          {description && (
            <Grid.Row stretched>
              <Grid.Column stretched width="12">
                <p className="help">{description}</p>
              </Grid.Column>
            </Grid.Row>
          )}
        </Grid>
      </Form.Field>
    </div>
  );
};

export default SearchSectionsConfigurationWidget;
