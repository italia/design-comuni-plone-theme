import React from 'react';
import BlockquoteMenu from './BlockquoteMenu';

export default function install(config) {
  const { slate } = config.settings;

  slate.elements.blockquote = ({ children, attributes, ...otherProps }) => {
    return (
      <blockquote {...attributes}>
        <p>{children}</p>
      </blockquote>
    );
  };
  slate.buttons.blockquote = (props) => (
    <BlockquoteMenu {...props} title="Blockquote" />
  );

  return config;
}
