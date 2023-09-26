import React from 'react';
import { useSlate } from 'slate-react';
import { Dropdown } from 'semantic-ui-react';
import { useIntl, defineMessages } from 'react-intl';
import cx from 'classnames';
import { omit } from 'lodash';
import { isBlockStyleActive, toggleStyle } from './utils';

import { Icon } from '@plone/volto/components';
import { ToolbarButton } from '@plone/volto-slate/editor/ui';

import alignCenterSVG from '@plone/volto/icons/align-center.svg';
import alignLeftSVG from '@plone/volto/icons/align-left.svg';
import alignRightSVG from '@plone/volto/icons/align-right.svg';
import alignJustifySVG from '@plone/volto/icons/align-justify.svg';

import '../dropdownStyle.scss';

const ALIGN_OPTIONS = [
  {
    cssClass: 'text-left',
    text: 'Allinea a sinistra',
    icon: alignLeftSVG,
  },
  {
    cssClass: 'text-center',
    text: 'Allinea al centro',
    icon: alignCenterSVG,
  },
  {
    cssClass: 'text-right',
    text: 'Allinea a destra',
    icon: alignRightSVG,
  },
  {
    cssClass: 'text-justify',
    text: 'Allinea il testo giustificato',
    icon: alignJustifySVG,
  },
];

const messages = defineMessages({
  align: {
    id: 'Allineamento',
    defaultMessage: 'Allineamento',
  },
});

const AlignMenuButton = ({ icon, active, ...props }) => (
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
          isBlock: selItem.isBlock,
          oneOfType: 'align',
        });
      }}
    />
  );
};

const AlignButton = (props) => {
  const editor = useSlate();
  const intl = useIntl();

  const blockOpts = ALIGN_OPTIONS.map((def) => {
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
  let selectedIcon = ALIGN_OPTIONS[0].icon;

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
      additionLabel={intl.formatMessage(messages.align)}
      trigger={
        <AlignMenuButton
          title={intl.formatMessage(messages.align)}
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

export default AlignButton;
