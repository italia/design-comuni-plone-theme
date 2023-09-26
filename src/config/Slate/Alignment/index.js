import React from 'react';
import AlignMenu from './AlignMenu';
//import '@plone/volto-slate/editor/plugins/StyleMenu/style.less';

export const AlignElement = ({ attributes, children, element }) => {
  console.log(attributes, element);
  return <p {...attributes} /*className="callout"*/>aaaa{children}</p>;
};

export default function install(config) {
  const { slate } = config.settings;

  slate.buttons.align = (props) => (
    <AlignMenu {...props} title="Allineamento" />
  );

  slate.elements['align'] = AlignElement;
  slate.toolbarButtons.push('align');
  slate.expandedToolbarButtons.push('align');
  console.log(slate);

  return config;
}
