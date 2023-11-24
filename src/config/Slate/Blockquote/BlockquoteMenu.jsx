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

import blockquoteSimpleIcon from 'design-comuni-plone-theme/icons/blockquote-simple.svg';
import blockquoteCardIcon from 'design-comuni-plone-theme/icons/blockquote-card.svg';
import blockquoteCardDarkIcon from 'design-comuni-plone-theme/icons/blockquote-card-dark.svg';

import 'design-comuni-plone-theme/config/Slate/dropdownStyle.scss';

const OPTIONS = [
  {
    title: 'Blockquote semplice',
    format: 'blockquote',
    icon: blockquoteSimpleIcon,
    cssClass: 'blockquote',
  },
  {
    title: 'Blockquote card',
    format: 'blockquote',
    icon: blockquoteCardIcon,
    cssClass: 'blockquote-card',
  },
  {
    title: 'Blockquote card scuro',
    format: 'blockquote',
    icon: blockquoteCardDarkIcon,
    cssClass: 'blockquote-card dark',
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

const MenuOpts = ({ editor, toSelect, option, type, ...props }) => {
  const isActive = toSelect.includes(option);

  return (
    <Dropdown.Item
      as="span"
      active={isActive}
      className={cx(`${type}-${option.value}`, { active: isActive })}
      {...omit(option, ['isBlock', 'originalIcon'])}
      data-isblock={option.isBlock}
      onClick={(event, selItem) => {
        toggleStyle(editor, {
          cssClass: selItem.value,
          isBlock: true,
          format: selItem.format,
          allowedChildren: props.allowedChildren,
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
      text: def.text,
      title: def.title,
      format: def.format,
      icon: (props) => <Icon name={def.icon} size="24px" />,
      isBlock: true,
      originalIcon: def.icon,
    };
  });

  // Calculating the initial selection.
  const toSelect = [];
  let selectedIcon = blockquoteCardIcon;

  const oneOf = OPTIONS.reduce((acc, o) => [...acc, o.cssClass], []);
  // block styles
  for (const val of blockOpts) {
    const ia = isBlockStyleActive(editor, val.value, oneOf);

    if (ia) {
      toSelect.push(val);
      selectedIcon = val.originalIcon;
    }
  }

  const menuItemProps = {
    toSelect,
    editor,
    ...props,
  };

  const showMenu = blockOpts.length;

  return showMenu ? (
    <Dropdown
      id="blockquote-menu"
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
      onMouseDown={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <Dropdown.Menu>
        {blockOpts.length &&
          blockOpts.map((option, index) => (
            <MenuOpts
              {...menuItemProps}
              type="block-blockquote"
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
