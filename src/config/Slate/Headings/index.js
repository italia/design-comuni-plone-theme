import React from 'react';
import HeadingsMenu from './HeadingsMenu';
import { insertToolbarButtons } from 'design-comuni-plone-theme/config/Slate/utils';
import { renderLinkElement } from '@plone/volto-slate/editor/render';

export default function install(config) {
  const { slate } = config.settings;

  slate.buttons.headings = (props) => (
    <HeadingsMenu {...props} title="Titolo" />
  );

  //sovrascivo gli elements h2,h3,h4 per fare in modo che usino anche le classi di blocco (es allineamento)
  slate.elements['h2'] = ({ attributes, children }) =>
    renderLinkElement('h2')({
      attributes,
      children,
      className: attributes.className,
    });
  slate.elements['h3'] = ({ attributes, children }) =>
    renderLinkElement('h3')({
      attributes,
      children,
      className: attributes.className,
    });
  slate.elements['h4'] = ({ attributes, children }) =>
    renderLinkElement('h4')({
      attributes,
      children,
      className: attributes.className,
    });
  //aggiungo gli elements h5, h6 perchè non previsti da volto
  slate.elements['h5'] = ({ attributes, children }) =>
    renderLinkElement('h5')({
      attributes,
      children,
      className: attributes.className,
    });
  slate.elements['h6'] = ({ attributes, children }) =>
    renderLinkElement('h6')({
      attributes,
      children,
      className: attributes.className,
    });

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
