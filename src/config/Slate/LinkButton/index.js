import React from 'react';
import { useSlate } from 'slate-react';

import { ToolbarButton } from '@plone/volto-slate/editor/ui';

import circleMenuSVG from '@plone/volto/icons/circle-menu.svg';

import {
  toggleStyle,
  isLinkStyleActive,
} from 'design-comuni-plone-theme/config/Slate/dropdownUtils';
import { insertToolbarButtons } from 'design-comuni-plone-theme/config/Slate/utils';
import { LinkElement as ItaliaLinkElement } from 'design-comuni-plone-theme/config/Slate/Link/renderer';

const LinkButtonButton = ({ icon, active, ...props }) => {
  const CLASSNAME = 'btn btn-primary inline-link';
  const editor = useSlate();
  const isActive = isLinkStyleActive(editor, CLASSNAME);

  return (
    <ToolbarButton
      {...props}
      icon={icon}
      active={isActive}
      onMouseDown={(e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleStyle(editor, { cssClass: CLASSNAME, isBlock: false });
      }}
    />
  );
};

export default function install(config) {
  const { slate } = config.settings;

  slate.buttons.linkButton = (props) => (
    <LinkButtonButton title="Stile bottone" icon={circleMenuSVG} {...props} />
  );
  slate.elements.link = ItaliaLinkElement;

  //aggiungo il bottone di headings alla toolbar, dopo strikethrough
  insertToolbarButtons(['linkButton'], 'link', slate);

  //htmlTagToSlate deserializer is defined in ./Link/deserializer.js
  return config;
}
