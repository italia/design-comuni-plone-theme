import React from 'react';
import { useSlate } from 'slate-react';
import { Dropdown } from 'semantic-ui-react';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';
import { omit } from 'lodash';
import config from '@plone/volto/registry';
import { isBlockActive } from '@plone/volto-slate/utils';

import { ToolbarButton, BlockButton } from '@plone/volto-slate/editor/ui';

import headingIcon from '@plone/volto/icons/heading.svg';

import 'design-comuni-plone-theme/config/Slate/dropdownStyle.scss';
import 'design-comuni-plone-theme/config/Slate/Headings/headingsMenu.scss';

const OPTIONS = [
  {
    title: 'h2',
    format: 'h2',
    content: 'h2',
    className: 'headings-h2',
  },
  {
    title: 'h3',
    format: 'h3',
    content: 'h3',
    className: 'headings-h3',
  },
  {
    title: 'h4',
    format: 'h4',
    content: 'h4',
    className: 'headings-h4',
  },
  {
    title: 'h5',
    format: 'h5',
    content: 'h5',
    className: 'headings-h5',
  },
  {
    title: 'h6',
    format: 'h6',
    content: 'h6',
    className: 'headings-h6',
  },
];

const messages = defineMessages({
  title: {
    id: 'Titolo',
    defaultMessage: 'Titolo',
  },
});

const HeadingsMenuButton = ({ icon, active, ...props }) => (
  <ToolbarButton {...props} icon={icon} active={active} />
);

const MenuOpts = ({ editor, toSelect, option, type }) => {
  const isActive = toSelect.includes(option);
  return (
    <Dropdown.Item
      as="span"
      active={isActive}
      className={cx(`${type}-${option.format}`, {
        active: isActive,
      })}
    >
      <BlockButton
        {...omit(option, ['isBlock'])}
        data-isblock={option.isBlock}
        allowedChildren={config.settings.slate.allowedHeadlineElements}
      />
    </Dropdown.Item>
  );
};

const HeadingsButton = (props) => {
  const editor = useSlate();
  const intl = useIntl();

  // Calculating the initial selection.
  const toSelect = [];

  // block styles
  for (const opt of OPTIONS) {
    const ia = isBlockActive(editor, opt.format);

    if (ia) {
      toSelect.push(opt);
    }
  }

  const menuItemProps = {
    toSelect,
    editor,
  };

  const showMenu = OPTIONS.length;

  return showMenu ? (
    <Dropdown
      id="headings-menu"
      pointing="top left"
      multiple
      value={toSelect}
      additionLabel={intl.formatMessage(messages.title)}
      trigger={
        <HeadingsMenuButton
          title={intl.formatMessage(messages.title)}
          icon={headingIcon}
          active={toSelect.length > 0}
        />
      }
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Dropdown.Menu>
        {OPTIONS.length > 0 &&
          OPTIONS.map((option, index) => (
            <MenuOpts
              {...menuItemProps}
              type="headings"
              option={option}
              key={index}
            />
          ))}
      </Dropdown.Menu>
    </Dropdown>
  ) : (
    ''
  );
};

export default HeadingsButton;
