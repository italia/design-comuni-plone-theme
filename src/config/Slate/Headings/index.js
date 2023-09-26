import React from 'react';
import HeadingsMenu from './HeadingsMenu';
import { insertToolbarButtons } from 'design-comuni-plone-theme/config/Slate/utils';

export default function install(config) {
  const { slate } = config.settings;

  slate.buttons.headings = (props) => (
    <HeadingsMenu {...props} title="Titolo" />
  );

  //aggiungo gli elements h5, h6 perchè non previsti da volto
  slate.elements['h5'] = ({ attributes, children }) => (
    <h5 {...attributes}>{children}</h5>
  );
  slate.elements['h6'] = ({ attributes, children }) => (
    <h6 {...attributes}>{children}</h6>
  );

  // rimuovo i bottoni di heading di volto
  slate.toolbarButtons = slate.toolbarButtons.filter(
    (b) => b !== 'heading-two' && b !== 'heading-three',
  );
  slate.expandedToolbarButtons = slate.expandedToolbarButtons.filter(
    (b) => b !== 'heading-two' && b !== 'heading-three',
  );

  //aggiungo il bottone di headings alla toolbar, dopo strikethrough
  insertToolbarButtons(
    ['separator', 'headings', 'separator'],
    'strikethrough',
    slate,
  );

  return config;
}
