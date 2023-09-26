import React from 'react';
import { useSlate } from 'slate-react';
import { Dropdown } from 'semantic-ui-react';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';
import { omit } from 'lodash';
import {
  isBlockStyleActive,
  toggleStyle,
} from 'design-comuni-plone-theme/config/Slate/dropdownUtils';

import { Icon } from '@plone/volto/components';
import { ToolbarButton } from '@plone/volto-slate/editor/ui';

import quoteIcon from '@plone/volto/icons/quote.svg';

import 'design-comuni-plone-theme/config/Slate/dropdownStyle.scss';

const OPTIONS = [
  {
    title: 'Blockquote semplice',
    format: 'blockquote',
    icon: quoteIcon,
  },
  {
    title: 'Blockquote card',
    format: 'blockquote',
    icon: quoteIcon,
    className: 'blockquote-card',
  },
  {
    title: 'Blockquote card scuro',
    format: 'blockquote',
    icon: quoteIcon,
    className: 'blockquote-card dark',
  },
];

const messages = defineMessages({
  blockquote: {
    id: 'Blockquote',
    defaultMessage: 'Blockquote',
  },
});

const BlockquoteMenuButton = ({ icon, active, ...props }) => (
  <ToolbarButton {...props} icon={icon} active={active} />
);

const MenuOpts = ({ editor, toSelect, option, type }) => {
  const isActive = toSelect.includes(option);

  return (
    <Dropdown.Item
      as="span"
      active={isActive}
      className={cx(`${type}-${option.value}`, { active: isActive })}
      {...omit(option, ['isBlock'])}
      data-isblock={option.isBlock}
      onClick={(event, selItem) => {
        toggleStyle(editor, {
          cssClass: selItem.value,
          isBlock: true,
          oneOf: OPTIONS.reduce((acc, o) => [...acc, o.cssClass], []),
        });
      }}
    />
  );
};

const BlockquoteButton = (props) => {
  const editor = useSlate();
  const intl = useIntl();

  const blockOpts = OPTIONS.map((def) => {
    return {
      value: def.cssClass,
      text: def.label,
      icon: (props) => <Icon name={def.icon} size="24px" />,
      isBlock: true,
      originalIcon: def.icon,
    };
  });

  // Calculating the initial selection.
  const toSelect = [];
  let selectedIcon = OPTIONS[0].icon;

  // block styles
  for (const val of blockOpts) {
    const ia = isBlockStyleActive(editor, val.value);

    if (ia) {
      toSelect.push(val);
      selectedIcon = val.originalIcon;
    }
  }

  const menuItemProps = {
    toSelect,
    editor,
  };

  const showMenu = blockOpts.length;

  return showMenu ? (
    <Dropdown
      id="align-menu"
      pointing="top left"
      multiple
      value={toSelect}
      additionLabel={intl.formatMessage(messages.blockquote)}
      trigger={
        <BlockquoteMenuButton
          title={intl.formatMessage(messages.blockquote)}
          icon={selectedIcon}
          active={toSelect.length > 0}
        />
      }
    >
      <Dropdown.Menu>
        {blockOpts.length &&
          blockOpts.map((option, index) => (
            <MenuOpts
              {...menuItemProps}
              type="block-align"
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

export default BlockquoteButton;
