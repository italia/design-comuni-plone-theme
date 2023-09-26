import React from 'react';
import BlockquoteMenu from './BlockquoteMenu';

export default function install(config) {
  const { slate } = config.settings;

  slate.buttons.blockquote = (props) => (
    <BlockquoteMenu {...props} title="Blockquote" />
  );

  return config;
}
