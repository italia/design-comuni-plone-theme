/**
 * MenuConfigurationForm
 * @module components/src/widget/MenuConfigurationForm.jsx
 * Customized via component registry:
 * - added new select field with lighthouse options
 */

import React, { useEffect } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { v4 as uuid } from 'uuid';
import { isEmpty } from 'lodash';
import { Form as UIForm, Grid, Button } from 'semantic-ui-react';
import {
  Form,
  TextWidget,
  CheckboxWidget,
  ObjectBrowserWidget,
  Sidebar,
  SelectWidget,
} from '@plone/volto/components';
// import RadioWidget from 'volto-dropdownmenu/widget/RadioWidget';
/* import SelectWidget from './SelectWidget'; */
import { Portal } from 'react-portal';
import config from '@plone/volto/registry';

const messages = defineMessages({
  title: {
    id: 'dropdownmenu-title',
    defaultMessage: 'Title',
  },
  visible: {
    id: 'dropdownmenu-visible',
    defaultMessage: 'Visible',
  },
  mode: {
    id: 'dropdownmenu-mode',
    defaultMessage: 'Mode',
  },
  modeSimpleLink: {
    id: 'dropdownmenu-mode-simpleLink',
    defaultMessage: 'Simple link',
  },
  modeDropdown: {
    id: 'dropdownmenu-mode-dropdown',
    defaultMessage: 'Dropdown',
  },
  linkUrl: {
    id: 'dropdownmenu-linkUrl',
    defaultMessage: 'Link',
  },
  navigationRoot: {
    id: 'dropdownmenu-navigationRoot',
    defaultMessage: 'Navigation root',
  },
  showMoreLink: {
    id: 'dropdownmenu-showMoreLink',
    defaultMessage: '"Show more" link',
  },
  showMoreText: {
    id: 'dropdownmenu-showMoreText',
    defaultMessage: '"Show more" link text',
  },
  additionalClasses: {
    id: 'dropdownmenu-additionalClasses',
    defaultMessage: 'Additional classes',
  },
  additionalClassesDescription: {
    id: 'dropdownmenu-additionalClassesDescription',
    defaultMessage:
      'Additional classes for the item to apply specific styles, accordingly to site layout.',
  },
  blocks: {
    id: 'dropdownmenu-blocks',
    defaultMessage: 'Blocks',
  },
  blocks_description: {
    id: 'dropdownmenu-blocks-description',
    defaultMessage: 'Add some blocks to show in dropdown menu.',
  },
  deleteMenuItem: {
    id: 'dropdownmenu-deletemenuitem',
    defaultMessage: 'Delete menu item',
  },
  deleteButton: {
    id: 'dropdownmenu-deletemenuitem-button',
    defaultMessage: 'Delete menu item',
  },
  id_lighthouse_description: {
    id: 'ID Lighthouse Help Description',
    defaultMessage:
      'Identificativo di servizio a solo uso interno, utilizzato per le verifiche AgID inerenti al PNRR.',
  },
});

const MenuConfigurationForm = ({ id, menuItem, onChange, deleteMenuItem }) => {
  const intl = useIntl();
  const defaultBlockId = uuid();

  if (!menuItem.blocks_layout || isEmpty(menuItem.blocks_layout.items)) {
    menuItem.blocks_layout = {
      items: [defaultBlockId],
    };
  }
  if (!menuItem.blocks || isEmpty(menuItem.blocks)) {
    menuItem.blocks = {
      [defaultBlockId]: {
        '@type': config.settings.defaultBlockType,
      },
    };
  }

  const preventClick = (e) => {
    e.preventDefault();
  };

  const preventEnter = (e) => {
    if (e.code === 'Enter') {
      preventClick(e);
    }
  };

  useEffect(() => {
    document
      .querySelector('form.ui.form')
      .addEventListener('click', preventClick);

    document.querySelectorAll('form.ui.form input').forEach((item) => {
      item.addEventListener('keypress', preventEnter);
    });

    return () => {
      // eslint-disable-next-line no-lone-blocks
      {
        document.querySelector('form.ui.form') &&
          document
            .querySelector('form.ui.form')
            .removeEventListener('click', preventClick);
      }
      document.querySelectorAll('form.ui.form input').forEach((item) => {
        item.removeEventListener('keypress', preventEnter);
      });
    };
  }, []);

  const onChangeFormData = (id, value) => {
    onChange({ ...menuItem, [id]: value });
  };

  const onChangeFormBlocks = (data) => {
    onChange({
      ...menuItem,
      blocks: data.blocks,
      blocks_layout: data.blocks_layout,
    });
  };

  return (
    <>
      <TextWidget
        id={`${id}-title`}
        title={intl.formatMessage(messages.title)}
        description=""
        required={true}
        value={menuItem.title}
        onChange={(id, value) => onChangeFormData('title', value)}
        className="menu-item-field-title"
      />
      <SelectWidget
        id={`${id}-lighthouse`}
        title="ID lighthouse"
        description={intl.formatMessage(messages.id_lighthouse_description)}
        choices={[
          ['all-services', 'all-services'],
          ['management', 'management'],
          ['live', 'live'],
          ['news', 'news'],
          ['all-topics', 'all-topics'],
          ['custom-submenu', 'custom-submenu'],
        ]}
        value={menuItem.id_lighthouse}
        onChange={(id, value) => onChangeFormData('id_lighthouse', value)}
        aria-label="aria-label"
        className="id_lighthouse"
      />
      <CheckboxWidget
        id={`${id}-visible`}
        title={intl.formatMessage(messages.visible)}
        description=""
        defaultValue={true}
        value={!!menuItem.visible}
        onChange={(id, value) => onChangeFormData('visible', value)}
        className="menu-item-field-visible"
      />
      <RadioWidget
        id={`${id}-mode`}
        title={intl.formatMessage(messages.mode)}
        description=""
        required={true}
        value={menuItem.mode}
        onChange={(id, value) => onChangeFormData('mode', value)}
        valueList={[
          {
            value: 'simpleLink',
            label: intl.formatMessage(messages.modeSimpleLink),
          },
          {
            value: 'dropdown',
            label: intl.formatMessage(messages.modeDropdown),
          },
        ]}
        className="menu-item-field-mode"
      />
      {menuItem.mode === 'simpleLink' && (
        <ObjectBrowserWidget
          id={`${id}-linkUrl`}
          title={intl.formatMessage(messages.linkUrl)}
          description=""
          required={true}
          mode="link"
          value={menuItem.linkUrl ?? []}
          onChange={(id, value) => onChangeFormData('linkUrl', value)}
          className="menu-item-field-linkUrl"
        />
      )}
      {menuItem.mode === 'dropdown' && (
        <React.Fragment>
          <div className="menu-item-field-navigationRoot">
            <ObjectBrowserWidget
              id={`${id}-navigationRoot`}
              title={intl.formatMessage(messages.navigationRoot)}
              description=""
              required={true}
              value={menuItem.navigationRoot ?? []}
              onChange={(id, value) =>
                onChangeFormData('navigationRoot', value)
              }
            />
          </div>
          <div className="menu-item-field-showMoreLink">
            <ObjectBrowserWidget
              id={`${id}-showMoreLink`}
              title={intl.formatMessage(messages.showMoreLink)}
              description=""
              mode="link"
              value={menuItem.showMoreLink ?? []}
              onChange={(id, value) => onChangeFormData('showMoreLink', value)}
            />
          </div>
          <div className="menu-item-field-showMoreText">
            <TextWidget
              id={`${id}-showMoreText`}
              title={intl.formatMessage(messages.showMoreText)}
              description=""
              value={menuItem.showMoreText}
              onChange={(id, value) => onChangeFormData('showMoreText', value)}
            />
          </div>
          <div className="menu-item-field-additionalClasses">
            <TextWidget
              id={`${id}-additionalClasses`}
              title={intl.formatMessage(messages.additionalClasses)}
              description={intl.formatMessage(
                messages.additionalClassesDescription,
              )}
              value={menuItem.additionalClasses}
              onChange={(id, value) =>
                onChangeFormData('additionalClasses', value)
              }
            />
          </div>

          <UIForm.Field inline className="help wide" id="menu-blocks">
            <Grid>
              <Grid.Row stretched>
                <Grid.Column width={12}>
                  <div className="wrapper">
                    <p className="help">
                      {intl.formatMessage(messages.blocks_description)}
                    </p>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row stretched>
                <Grid.Column width={12}>
                  <div className="menu-blocks-container">
                    <Form
                      key={id}
                      formData={menuItem}
                      visual={true}
                      hideActions
                      onChangeFormData={onChangeFormBlocks}
                    />
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </UIForm.Field>
        </React.Fragment>
      )}
      <UIForm.Field inline className="delete wide" id="menu-delete">
        <Grid>
          <Grid.Row stretched>
            <Grid.Column width={4}>
              <div className="wrapper"></div>
            </Grid.Column>
            <Grid.Column width={8}>
              <Button
                icon="trash"
                onClick={deleteMenuItem}
                id="delete-menuitem"
                negative
                content={intl.formatMessage(messages.deleteButton)}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </UIForm.Field>
      <Portal node={document.getElementById('sidebar')}>
        <Sidebar />
      </Portal>
    </>
  );
};

export default React.memo(MenuConfigurationForm);
