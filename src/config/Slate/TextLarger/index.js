import React from 'react';
import { useSlate } from 'slate-react';

import { ToolbarButton } from '@plone/volto-slate/editor/ui';

import textLargerSVG from 'design-comuni-plone-theme/icons/text-larger.svg';

import {
  toggleStyle,
  isInlineStyleActive,
} from 'design-comuni-plone-theme/config/Slate/dropdownUtils';
import { insertToolbarButtons } from 'design-comuni-plone-theme/config/Slate/utils';

export const TextLargerElement = ({ attributes, children, element }) => {
  return <span {...attributes}>{children}</span>;
};

const TextLargerButton = ({ icon, active, ...props }) => {
  const CLASSNAME = 'text-larger';
  const editor = useSlate();
  const isActive = isInlineStyleActive(editor, CLASSNAME);

  return (
    <ToolbarButton
      {...props}
      icon={icon}
      active={isActive}
      onMouseDown={(event) => {
        return toggleStyle(editor, { cssClass: CLASSNAME, isBlock: false });
      }}
    />
  );
};

export default function install(config) {
  const { slate } = config.settings;

  slate.buttons.textLarger = (props) => (
    <TextLargerButton
      title="Testo più grande"
      icon={textLargerSVG}
      {...props}
    />
  );
  slate.elements.textLarger = TextLargerElement;

  //aggiungo il bottone di headings alla toolbar, dopo strikethrough
  insertToolbarButtons(['textLarger'], 'strikethrough', slate);

  return config;
}
