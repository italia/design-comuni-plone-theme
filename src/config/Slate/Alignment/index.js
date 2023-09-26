import React from 'react';
import AlignMenu from './AlignMenu';

export const AlignElement = ({ attributes, children, element }) => {
  return <p {...attributes}>{children}</p>;
};

export default function install(config) {
  const { slate } = config.settings;

  slate.buttons.align = (props) => (
    <AlignMenu {...props} title="Allineamento" />
  );

  slate.elements['align'] = AlignElement;

  //lo metto come primo elemento della toolbar
  slate.toolbarButtons = ['align', 'separator', ...slate.toolbarButtons];
  slate.expandedToolbarButtons = [
    'align',
    'separator',
    ...slate.expandedToolbarButtons,
  ];

  return config;
}
